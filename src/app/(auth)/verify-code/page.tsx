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
import { useForm } from "react-hook-form";
import { CONTENT_TYPE } from "@/lib/constants/api.constants";

export default function Page() {
  const form = useForm({
    defaultValues: {
      resetCode: "",
    },
  });

  async function onSubmit(data:{resetCode:string}){
    const res = await fetch('https://exam.elevateegy.com/api/v1/auth/verifyResetCode',{
      method:'POST',
      headers:{
        ...CONTENT_TYPE
      },
      body: JSON.stringify({
        resetCode: data.resetCode
      })
    })

    const apiRes = await res.json()
    console.log(apiRes)
  }

  return (
    <>
      <div className="sm:w-full lg:w-[410px] flex h-[206px]  flex-col justify-evenly m-auto">
        <h2 className="font-bold text-3xl">Verify code</h2>
        <form {...form} onSubmit={form.handleSubmit(onSubmit)} className="inputs">
          <Input
          {...form.register('resetCode',{required:'Code is required'})}
            type="text"
            placeholder="Enter Code"
            className="py-[15.86px] my-5 rounded-md shadow-sm border-2 ring-0 border-gray-300 hover:border-gray-400 focus:border-sky-600"
          />
          <Button className="w-full h-[56px] my-8 rounded-[20px]">
            Verify
          </Button>
        </form>

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
