'../globals.css'

import Image from "next/image"
import student from '@/assets/writing-student.png'
import { Form } from "@/components/ui/form"

export default function Page() {
  return <>
  <div className="sm:w-full lg:w-2/5 flex flex-col h-screen rounded-tr-[60px] rounded-br-[60px] shadow-xl bg-[rgb(240, 244, 252)] shadow-slate-400">
    <div className="text-4xl font-bold p-5 h-1/3 my-7">
    <h1>Wlecome to</h1>
    <h1 className="text-main">Elevate</h1>
    </div>
    <div className="flex justify-center">
      <Image src={student} alt="student doing exam" className="p-5"/>
    </div>
  </div>
  <div className="sm:w-full lg:w-2/5 flex flex-col h-screen">
  
  </div>
  </>
}
