"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@/utils";
import { navlinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {navlinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  <span
                    className={`cursor-pointer tracking-tighter transition-all duration-300 px-2 py-1 rounded-sm hover:bg-slate-100 ${
                      pathname === link.href
                        ? "text-slate-900"
                        : "text-slate-500"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/piyushg-dev/launchlayer"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black hover:fill-slate-600 transition-all ease-in cursor-pointer"
                >
                  <g clipPath="url(#clip0_24_101)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99909 0.333313C4.66178 0.333313 0.333313 4.66122 0.333313 10.0003C0.333313 14.2706 3.10285 17.8941 6.94411 19.1729C7.42777 19.2613 7.60401 18.9629 7.60401 18.7065C7.60401 18.4768 7.5957 17.8692 7.59095 17.0626C4.90213 17.6466 4.33481 15.7666 4.33481 15.7666C3.89507 14.6498 3.2613 14.3525 3.2613 14.3525C2.38362 13.7532 3.32777 13.765 3.32777 13.765C4.29802 13.8333 4.80837 14.7614 4.80837 14.7614C5.67062 16.2384 7.07111 15.8117 7.62182 15.5642C7.70965 14.94 7.95947 14.5138 8.23542 14.2724C6.08898 14.0278 3.83218 13.1989 3.83218 9.4947C3.83218 8.43898 4.20901 7.57674 4.82735 6.90082C4.72766 6.65633 4.39594 5.67359 4.9223 4.34253C4.9223 4.34253 5.73351 4.08259 7.58027 5.33295C8.35114 5.11873 9.17838 5.01191 10.0003 5.00775C10.8216 5.01191 11.6482 5.11873 12.4203 5.33295C14.2658 4.08259 15.0758 4.34253 15.0758 4.34253C15.6034 5.67359 15.2717 6.65633 15.1726 6.90082C15.7921 7.57674 16.166 8.43898 16.166 9.4947C16.166 13.2084 13.9056 14.0256 11.7527 14.2646C12.0992 14.5632 12.4084 15.153 12.4084 16.055C12.4084 17.3469 12.3965 18.3896 12.3965 18.7065C12.3965 18.9652 12.571 19.2661 13.0612 19.1717C16.8994 17.8905 19.6666 14.27 19.6666 10.0003C19.6666 4.66122 15.3381 0.333313 9.99909 0.333313Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_24_101">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black hover:fill-slate-600 transition-all ease-in cursor-pointer"
                >
                  <path d="M15.2031 1.875H17.9609L11.9375 8.75781L19.0234 18.125H13.4766L9.12891 12.4453L4.16016 18.125H1.39844L7.83984 10.7617L1.04688 1.875H6.73437L10.6602 7.06641L15.2031 1.875ZM14.2344 16.4766H15.7617L5.90234 3.4375H4.26172L14.2344 16.4766Z" />
                </svg>
              </a>
            </div>
          </div>
          <Button asChild>
            <Link href="/components">
              Get Started <ArrowRight strokeWidth={2} />
            </Link>
          </Button>
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
            {/* Social icons */}
            <div className="flex items-center gap-4 px-2 pt-4">
              <a
                href="https://github.com/piyushg-dev/launchlayer"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black hover:fill-slate-600 transition-all ease-in cursor-pointer"
                >
                  <g clipPath="url(#clip0_24_101)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99909 0.333313C4.66178 0.333313 0.333313 4.66122 0.333313 10.0003C0.333313 14.2706 3.10285 17.8941 6.94411 19.1729C7.42777 19.2613 7.60401 18.9629 7.60401 18.7065C7.60401 18.4768 7.5957 17.8692 7.59095 17.0626C4.90213 17.6466 4.33481 15.7666 4.33481 15.7666C3.89507 14.6498 3.2613 14.3525 3.2613 14.3525C2.38362 13.7532 3.32777 13.765 3.32777 13.765C4.29802 13.8333 4.80837 14.7614 4.80837 14.7614C5.67062 16.2384 7.07111 15.8117 7.62182 15.5642C7.70965 14.94 7.95947 14.5138 8.23542 14.2724C6.08898 14.0278 3.83218 13.1989 3.83218 9.4947C3.83218 8.43898 4.20901 7.57674 4.82735 6.90082C4.72766 6.65633 4.39594 5.67359 4.9223 4.34253C4.9223 4.34253 5.73351 4.08259 7.58027 5.33295C8.35114 5.11873 9.17838 5.01191 10.0003 5.00775C10.8216 5.01191 11.6482 5.11873 12.4203 5.33295C14.2658 4.08259 15.0758 4.34253 15.0758 4.34253C15.6034 5.67359 15.2717 6.65633 15.1726 6.90082C15.7921 7.57674 16.166 8.43898 16.166 9.4947C16.166 13.2084 13.9056 14.0256 11.7527 14.2646C12.0992 14.5632 12.4084 15.153 12.4084 16.055C12.4084 17.3469 12.3965 18.3896 12.3965 18.7065C12.3965 18.9652 12.571 19.2661 13.0612 19.1717C16.8994 17.8905 19.6666 14.27 19.6666 10.0003C19.6666 4.66122 15.3381 0.333313 9.99909 0.333313Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_24_101">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black hover:fill-slate-600 transition-all ease-in cursor-pointer"
                >
                  <path d="M15.2031 1.875H17.9609L11.9375 8.75781L19.0234 18.125H13.4766L9.12891 12.4453L4.16016 18.125H1.39844L7.83984 10.7617L1.04688 1.875H6.73437L10.6602 7.06641L15.2031 1.875ZM14.2344 16.4766H15.7617L5.90234 3.4375H4.26172L14.2344 16.4766Z" />
                </svg>
              </a>
            </div>
            <Button asChild>
              <Link href="/components">
                Get Started <ArrowRight strokeWidth={2} />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
