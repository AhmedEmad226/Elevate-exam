"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import google from "public/assets/google.svg";
import facebook from "public/assets/facebook.svg";
import twitter from "public/assets/twitter.svg";
import apple from "public/assets/apple.svg";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import useVerifyCode from "../_hooks/use-verify-code";
import { LoaderCircle } from "lucide-react";
import AlertError from "@/components/custom/alert-error";

export default function VerifyCodeForm() {
  // Mutation
  const { error, isPending, verifyCode } = useVerifyCode();

  const form = useForm({
    defaultValues: {
      resetCode: "",
    },
  });

  async function onSubmit(fieldData: { resetCode: string }) {
    verifyCode(fieldData);
  }

  return (
    <>
      {error && <AlertError errorMessage={error.message} />}
      <form {...form} onSubmit={form.handleSubmit(onSubmit)} className="inputs">
        <Input
          {...form.register("resetCode", { required: "Code is required" })}
          type="text"
          placeholder="Enter Code"
          className="py-[15.86px] my-5 rounded-md shadow-sm border-2 ring-0 border-gray-300 hover:border-gray-400 focus:border-sky-600"
        />
        {form.formState.errors.resetCode && <AlertError customs="my-1" errorMessage={form.formState.errors.resetCode.message!} />}
        {/* Submit Form */}
        {isPending ? (
          <Button type="button" className="w-full h-[56px] my-8 rounded-[20px]">
            <LoaderCircle className="animate-spin size-full" />
          </Button>
        ) : (
          <Button type="submit" className="w-full h-[56px] my-8 rounded-[20px]" disabled={isPending}>
            Verify Code
          </Button>
        )}
      </form>

      <p className="text-[#6C737F] self-center">Or Continue with</p>
      {/* Providers */}
      <div className="flex flex-wrap gap-1 justify-evenly p-5 my-3">
        {/* Google */}
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          type="button"
          className="bg-transparent w-[65px] h-[64px] border-1 hover:bg-slate-200 duration-300 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[15px]">
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
    </>
  );
}
