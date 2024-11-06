"use client";
import React from "react";
import Image from "next/image";
import { logo } from "@/utils";
import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-8 px-6 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={140} height={140} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {navlinks.map((link) => {
            return (
              <Link key={link.id} href={link.href}>
                <span
                  className={`cursor-pointer text-lg tracking-tighter transition-all duration-300 px-2 py-1 rounded-sm hover:bg-slate-100 ${
                    pathname === link.href ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
