import Image from "next/image";
import { ReactNode } from "react";
import logo from "public/assets/elevate-logo.svg";
import Sidebar from "@/components/custom/sidebar";
export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap">
      {/* Sidebar */}
      <aside className="w-[193px] flex flex-col flex-wrap relative top-0 left-0 p-3">
        {/* Logo */}
        <Image src={logo} alt="Elevate logo" className="w-[151px] h-[29px]" />

        {/* Navigation */}
        <div className="my-2">
          <Sidebar />
        </div>
      </aside>

      {/* Content */}
      {children}
    </div>
  );
}
