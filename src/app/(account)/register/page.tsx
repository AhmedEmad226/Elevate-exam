import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import google from "@/assets/google.svg";
import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/twitter.svg";
import apple from "@/assets/apple.svg";
import React from 'react'

export default function Page() {
  return     <>
  <div className="sm:w-full lg:w-[410px] flex mt-[153px] flex-col justify-evenly m-auto">
    <h2 className="font-bold text-3xl">Sign up</h2>
    <div className="inputs">
      <Input
        type="text"
        placeholder="First Name"
        className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-300 focus:border-sky-600"
      />
      <Input
        type="text"
        placeholder="Last Name"
        className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-300 focus:border-sky-600"
      />
      <Input
        type="email"
        placeholder="Enter Email"
        className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-300 focus:border-sky-600"
      />
      <Input
        type="password"
        placeholder="Password"
        className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-300 focus:border-sky-600"
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        className="py-[15.86px] my-5 shadow-sm rounded-[10px] border-2 ring-0 border-[#E0E0E9] hover:border-gray-300 focus:border-sky-600"
      />
    </div>
    <p className='self-center'>Already have an account? <Link href="/login" className="text-[#4461F2]">Login</Link></p>
    <Button className="w-full h-[56px] my-8 rounded-[20px]">Sign up</Button>
    <p className="text-[#6C737F] self-center">Or Continue with</p>
        <div className="flex flex-wrap gap-1 justify-evenly p-5 my-3">
          <Image
            className="w-[65px] h-[64px] border-1 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[19.48px]"
            src={google}
            alt="google"
          />
          <Image
            className="w-[65px] h-[64px] border-1 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[19.48px]"
            src={facebook}
            alt="facebook"
          />
          <Image
            className="w-[65px] h-[64px] border-1 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[19.48px]"
            src={twitter}
            alt="twitter"
          />
          <Image
            className="w-[65px] h-[64px] border-1 border-[#E0E0E9] drop-shadow-[0px_18.45px_30.75px_rgba(68,97,242,0.11)] rounded-[15.38px] p-[19.48px]"
            src={apple}
            alt="apple"
          />
  </div>
  </div>
</>
}
