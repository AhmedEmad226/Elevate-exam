"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { twJoin } from "tailwind-merge";

const navlinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Sign up",
    href: "/sign-up",
  },
];

export function Navbar() {
  return (
    <header className="w-full bg-red-600">
      <NavigationMenu className="bg-slate-900">
        <NavigationMenuList className="p-10 flex justify-end items-center bg-slate-700">
          {navlinks.map((link) => {
            return (
              <NavigationMenuItem>
                <Link href={link.href} legacyBehavior passHref>
                  <div className="bg-teal-400 text-black mx-5 rounded-md p-3">
                    {link.title}
                  </div>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
