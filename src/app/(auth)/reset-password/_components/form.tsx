"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/twitter.svg";
import apple from "@/assets/apple.svg";
import { signIn } from "next-auth/react";

export default function ResetPasswordForm() {
  return (
    <>
      <div>
        <form>
          <Input
            type="password"
            placeholder="Create Password"
            className="py-[15.86px] my-5 rounded-md shadow-sm border-2 ring-0 border-gray-300 hover:border-gray-400 focus:border-sky-600"
          />
          <Input
            type="password"
            placeholder="Re-enter Password"
            className="py-[15.86px] my-5 rounded-md shadow-sm border-2 ring-0 border-gray-300 hover:border-gray-400 focus:border-sky-600"
          />
        </form>
        <Button className="w-full h-[56px] my-8 rounded-[20px]">
          Set password
        </Button>
        <p className="text-[#6C737F] self-center">Or Continue with</p>
        {/* Providers */}
        <div className="flex flex-wrap gap-1 justify-evenly p-5 my-3">
          {/* Google */}
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            type="button"
            className="bg-transparent w-[65px] h-[64px] border-1 hover:bg-slate-200 duration-300 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[15px]"
          >
            <Image src={google} alt="google" />
          </Button>

          {/* Facebook */}
          <Image
            className="w-[65px] h-[64px] border-1 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[15px]"
            src={facebook}
            alt="facebook"
          />

          {/* Twitter */}
          <Image
            className="w-[65px] h-[64px] border-1 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[15px]"
            src={twitter}
            alt="twitter"
          />

          {/* Apple */}
          <Image
            className="w-[65px] h-[64px] border-1 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[15px]"
            src={apple}
            alt="apple"
          />
        </div>
      </div>
    </>
  );
}
