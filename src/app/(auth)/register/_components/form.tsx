"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterFields, registerSchema } from "@/lib/schemes/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/twitter.svg";
import apple from "@/assets/apple.svg";
import { signIn } from "next-auth/react";
import useRegister from "../_hooks/use-register";
import { LoaderCircle } from "lucide-react";
import AlertError from "@/components/customs/alert-error";

export default function RegisterForm() {
  // mutation

  const { error, isPending, register } = useRegister();
  const form = useForm<RegisterFields>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterData) {
    register(data);
  }

  return (
    <>
      {error && <AlertError errorMessage={error.message} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="inputs">
          {/* Username */}
          <Input
            {...form.register("username")}
            type="text"
            placeholder="Username"
            className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.username?.message && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.username?.message}
            </p>
          )}

          {/* First Name */}
          <Input
            {...form.register("firstName")}
            type="text"
            placeholder="First Name"
            className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.firstName?.message && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.firstName?.message}
            </p>
          )}

          {/* Last Name */}
          <Input
            {...form.register("lastName")}
            type="text"
            placeholder="Last Name"
            className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.lastName?.message && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.lastName?.message}
            </p>
          )}

          {/* Email */}
          <Input
            {...form.register("email")}
            type="email"
            placeholder="Enter Email"
            className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.email?.message && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.email?.message}
            </p>
          )}

          {/* Password */}
          <Input
            {...form.register("password")}
            type="password"
            placeholder="Password"
            className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.password?.message && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.password?.message}
            </p>
          )}

          {/* Re-Password */}
          <Input
            {...form.register("rePassword")}
            type="password"
            placeholder="Confirm Password"
            className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.rePassword?.message && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.rePassword?.message}
            </p>
          )}

          {/* Phone */}
          <Input
            {...form.register("phone")}
            type="text"
            placeholder="Phone"
            className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-400 focus:border-sky-600"
          />
          {form.formState.errors.phone?.message && (
            <p className="bg-red-50 text-red-500 text-sm text-center rounded-md p-2 mx-auto">
              {form.formState.errors.phone?.message}
            </p>
          )}

          {/* Login Link */}
          <p className="self-center">
            Already have an account?
            <Link href="/login" className="text-main ml-2">
              Login
            </Link>
          </p>

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
              Sign Up
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
      </Form>
    </>
  );
}
