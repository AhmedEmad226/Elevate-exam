import { ReactNode } from "react";
import student from "@/assets/writing-student.png";
import Image from "next/image";
import { Navbar } from "@/components/customs/navbar";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <>

    {/* Navbar */}
    <Navbar/>

      {/* Sidebar Image */}
      <div className="flex">
        <div className="sm:w-full lg:w-[482px] flex flex-col rounded-tr-[60px] rounded-br-[60px] shadow-lg bg-[#F0F4FC] shadow-slate-400">
          
          {/* Logo and Description */}
          <div className="text-4xl font-bold px-5 pt-5 pl-10 h-1/3 my-7">
            <h1>Wlecome to</h1>
            <h1 className="text-main">Elevate</h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex justify-center px-5">
            <Image src={student} alt="student doing exam" priority={true}/>
          </div>
        </div>

        {children}
      </div>
    </>
  );
}
