"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

const PageLinks = ({ pageLinks }) => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6">
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
