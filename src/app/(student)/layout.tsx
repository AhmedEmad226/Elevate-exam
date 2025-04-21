import Image from "next/image";
import { ReactNode } from "react";
import logo from "@/assets/elevate-logo.svg";
import Sidebar from "@/components/customs/sidebar";
export default function Page({ children }: { children: ReactNode }) {
  return (
    <>
    <div className="flex flex-wrap">
      <div className="w-[193px] flex flex-col flex-wrap relative top-0 left-0 p-3">
        <Image src={logo} alt="Elevate logo" className="w-[151px] h-[29px]" />
        <div className="my-2">
          <Sidebar />
        </div>
      </div>
      {children}
    </div>
    </>
  );
}
