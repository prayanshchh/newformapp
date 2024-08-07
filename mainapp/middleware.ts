import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const url = new URL(req.url);

  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/api/') || url.pathname === '/signin') {
    return NextResponse.next();
  }

  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
    console.log('Token:', token); 

    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.redirect(new URL('/signin', req.url))
  }
}

export const config = {
  matcher: ['/:path*'], 
};
