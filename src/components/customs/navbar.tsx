"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Register",
    href: "/register",
  },
];

export function Navbar() {

  const pathname = usePathname()
  return (
    <header className="relative w-full">
      <NavigationMenu className="absolute top-[-10px] left-0 w-full flex justify-end p-5">
        <NavigationMenuList className="flex">
          {navlinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.href} legacyBehavior passHref>
                <div className={`text-[#4461F2] mx-5 rounded-md font-bold p-2 my-3 cursor-pointer ${pathname == link.href && 'border border-[#E0E0E9]'}`}>
                  {link.title}
                </div>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
  
}
