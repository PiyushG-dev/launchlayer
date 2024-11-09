"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@/utils";
import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-8 px-6 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={140} height={140} />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navlinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <span
                className={`cursor-pointer text-lg tracking-tighter transition-all duration-300 px-2 py-1 rounded-sm hover:bg-slate-100 ${
                  pathname === link.href ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-slate-700">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-10 top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <button onClick={toggleMenu} className="text-2xl mb-8 text-slate-700">
            <X />
          </button>
          <nav className="flex flex-col gap-4">
            {navlinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <span
                  onClick={toggleMenu} // Close menu on click
                  className={`cursor-pointer text-lg tracking-tighter transition-all duration-300 px-2 py-1 rounded-sm ${
                    pathname === link.href ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
