"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

const PageLinks = ({ pageLinks }) => {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-6 lg:flex lg:items-center">
      {pageLinks.map((link) => {
        return (
          <Button
            variant="outline"
            asChild
            key={link.id}
            className={pathname === link.href ? "bg-slate-100" : ""}
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        );
      })}
    </div>
  );
};

export default PageLinks;
