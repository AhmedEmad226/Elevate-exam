"use client";

import { History, LayoutDashboard, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  function logOut() {
    signOut({ callbackUrl: "/login" });
  }

  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-row md:flex-col justify-evenly md:justify-start items-center md:items-start w-full md:w-auto h-fit gap-x-4 md:gap-y-6 mt-5 p-2">
        {/* Dashboard Link */}
        <Link
          href="/dashboard"
          className={`text-center font-bold flex items-center justify-start p-2 rounded-[10px] transition-colors duration-200 ${
            pathname === "/dashboard"
              ? "text-black bg-[#4461F2]"
              : "text-[#696F79] bg-transparent"
          }`}
        >
          <LayoutDashboard
            className={`mr-2 transition-colors duration-200 ${
              pathname === "/dashboard" ? "text-black" : "text-[#4461F2]"
            }`}
          />
          Dashboard
        </Link>

        {/* Quiz History Link */}
        <Link
          href="/quiz-history"
          className={`text-center font-bold flex items-center justify-start p-2 rounded-[10px] transition-colors duration-200 ${
            pathname === "/quiz-history"
              ? "text-black bg-[#4461F2]"
              : "text-[#696F79] bg-transparent"
          }`}
        >
          <History
            className={`mr-2 transition-colors duration-200 ${
              pathname === "/quiz-history" ? "text-black" : "text-[#4461F2]"
            }`}
          />
          Quiz History
        </Link>

        {/* Logout Button */}
        <button
          onClick={logOut}
          className="text-center font-bold w-full flex items-center justify-start p-2 rounded-[10px] text-[#696F79] bg-transparent group hover:bg-red-500 hover:text-white transition-colors duration-200 focus:bg-red-600"
        >
          <LogOut className="mr-2 text-[#4461F2] group-hover:text-white transition-colors duration-200" />
          Logout
        </button>
      </div>
    </>
  );
}
