
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOption : NextAuthOptions = ({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        name: { label: "Name", type: "text" }, 
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.name || !credentials.password) {
          return null;
        }

        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (user) {
            if(user.password)
            {
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (isValid) {
            return { id: user.id, email: user.email, name: user.name };
          }
        }
        else
        {
            return null;
        }
        } else {
          const hashedPassword = await bcrypt.hash(credentials.password, 12);
          const newUser = await prisma.users.create({
            data: {
              email: credentials.email,
              name: credentials.name,
              password: hashedPassword,
            },
          });
          return { id: newUser.id, email: newUser.email, name: newUser.name };
        }

        return null; 
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          email: token.email as string,
          name: token.name as string,
        };
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
});

const handler = NextAuth(authOption)
export {handler as GET, handler as POST}