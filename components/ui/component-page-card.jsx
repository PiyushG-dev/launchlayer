"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ComponentPageCard = ({ icon, name, description, status, href }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="py-8 px-6 bg-muted border border-slate-300 rounded-lg flex flex-col items-start gap-3"
    >
      <div className="px-2 py-2 border border-slate-200 rounded-lg bg-background inline-block">
        {icon}
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-col items-start gap-1">
          <h6 className="font-medium text-lg tracking-tighter">{name}</h6>
          <p className="text-sm tracking-tight text-muted-foreground">
            {description}
          </p>
        </div>
        {status === "available" ? (
          <div
            className="font-medium tracking-tight text-sm flex items-center gap-1"
            href={href}
          >
            View Component{" "}
            <ArrowRight
              className={
                hovered
                  ? "translate-x-1 transition-transform duration-300"
                  : "translate-x-0 transition-transform duration-300"
              }
              size={14}
              strokeWidth={2}
            />
          </div>
        ) : (
          <p className="font-medium tracking-tight text-sm">Coming soon</p>
        )}
      </div>
    </Link>
  );
};

export default ComponentPageCard;
