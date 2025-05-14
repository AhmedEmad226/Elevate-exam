"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import google from "public/assets/google.svg";
import facebook from "public/assets/facebook.svg";
import twitter from "public/assets/twitter.svg";
import apple from "public/assets/apple.svg";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import useResetPassword from "../_hooks/use-reset-password";
import AlertError from "@/components/custom/alert-error";
import { LoaderCircle } from "lucide-react";
import { ResetPasswordFields, resetPasswordSchema } from "@/lib/schemes/reset-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ResetPasswordForm() {
  // Mutation
  const { error, isPending, resetPassword } = useResetPassword();

  // react-hook-form
  const form = useForm<ResetPasswordFields>({
    defaultValues: {
      email: "", // User must not enter their email, you have to store in a context for example in the forgot password step
      newPassword: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  // Submit function
  async function onSubmit(fieldData: { email: string; newPassword: string }) {
    resetPassword(fieldData);
  }

  return (
    <>
      {error && <AlertError errorMessage={error.message} />}

      <Form {...form}>
        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Email */}
          <Input
            {...form.register("email", { required: "Email is required" })}
            type="email"
            placeholder="Your Email"
            className="py-[15.86px] my-5 rounded-md shadow-sm border-2 ring-0 border-gray-300 hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.email && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">{form.formState.errors.email.message!}</p>
          )}
          {/* New Password */}
          <Input
            {...form.register("newPassword", {
              required: "New Password is required",
            })}
            type="password"
            placeholder="New Password"
            className="py-[15.86px] my-5 rounded-md shadow-sm border-2 ring-0 border-gray-300 hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.newPassword && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.newPassword.message!}
            </p>
          )}

          {/* Submit Form */}
          {isPending ? (
            <Button type="button" className="w-full h-[56px] my-8 rounded-[20px]">
              <LoaderCircle className="animate-spin size-full" />
            </Button>
          ) : (
            <Button type="submit" className="w-full h-[56px] my-8 rounded-[20px]">
              Reset Code
            </Button>
          )}

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
        </form>
      </Form>
    </>
  );
}
