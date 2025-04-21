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
import AlertError from "@/components/customs/alert-error";
import useForgotPassword from "../_hooks/use-forgot-password";
import { LoaderCircle } from "lucide-react";

export default function ForgotPasswordForm() {
  // Mutation
  const {error,isPending,forgotPassword} = useForgotPassword()
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(feildData: { email: string }) {
    forgotPassword(feildData)
  }

  return (
    <>
    {error&&<AlertError errorMessage={error.message}/>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="inputs">
        {/* Email */}
        <Input
          {...form.register("email", { required: "Email is required" })}
          type="email"
          placeholder="Enter Email"
          className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
        />
        {form.formState.errors.email?.message && (
          <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
            {form.formState.errors.email?.message}
          </p>
        )}

          {/* Submit Form */}
          {isPending ? (
            <Button
              type="button"
              className="w-full h-[56px] my-8 rounded-[20px]"
            >
              <LoaderCircle className="animate-spin size-full" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full h-[56px] my-8 rounded-[20px]"
              disabled={isPending}
            >
              Get Code
            </Button>
          )}

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
      </form>
    </>
  );
}
