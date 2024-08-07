'use client'
import InputField from "@/app/components/inputfield";
import { useState } from "react"
import Button from "../components/button";
import { signIn } from "next-auth/react";

export default function signin()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email);
        console.log(name);
        console.log(password);
        const response = await signIn("credentials", {
          email,
          name,
          password,
          redirect: false,
        });
        console.log(response);
      };
      const handlegooglesign = () =>
      {
        signIn("google");
      }
    return (
        <>
        <div className="flex flex-col items-center justify-center px-10 py-10 mx-auto md:h-screen lg:py-10 ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <InputField placeholder="Name" onchange={(e)=> setName(e.target.value)}></InputField>  
                <InputField placeholder="Email" onchange={(e)=> setEmail(e.target.value)}></InputField>
                <InputField placeholder="Password" onchange={(e)=> setPassword(e.target.value)}></InputField>  
                <div className="items-center justify-between flex flex-col">
                  <Button text="Sign-in" onclick={handleSignIn}></Button>   
                    </div>   
                </div>
                <div className="flex w-full items-center  py-6 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div>
                <div className="flex flex-col items-center justify-between">
                        <button
                            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline" onClick={handlegooglesign}>
                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">
                                Sign In with Google
                            </span> 
                        </button>

                    </div>
            </div>
        </div>
    </>
    )
}