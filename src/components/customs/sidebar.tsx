'use client'

import { History, LayoutDashboard, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  function logOut(){
    signOut({callbackUrl:'/login'})
  }

  const pathname = usePathname()

  return <>
    <div className="flex flex-col gap-y-6 mt-5 p-1">
    <Link href='/dashboard' className={`text-center font-bold flex justify-start p-[8px] rounded-[10px] ${pathname === '/dashboard' ? 'text-black bg-[#4461F2]' : 'text-[#696F79] bg-transparent'}`}> <LayoutDashboard className={`mr-2 ${pathname === '/dashboard' ? 'text-black' : 'text-[#4461F2]'}`}/> Dashboard</Link>
    <Link href='/quiz-history' className={`text-center font-bold flex justify-start p-[8px] rounded-[10px] ${pathname === '/quiz-history' ? 'text-black bg-[#4461F2]' : 'text-[#696F79] bg-transparent'}`}> <History className={`mr-2 ${pathname === '/quiz-history' ? 'text-black' : 'text-[#4461F2]'}`}/> Quiz History</Link>
    <button onClick={logOut}  className={`text-center font-bold flex justify-start p-[8px] rounded-[10px] text-[#696F79] bg-transparent`}> <LogOut className="mr-2 text-[#4461F2]"/> Logout</button>
    </div>
  </>
}
