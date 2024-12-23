"use client";
import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react";

const PackageCmdCopy = ({ cmd }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center gap-2 border border-muted-foreground rounded-md px-4 py-2 cursor-pointer hover:text-muted-foreground transition-colors"
    >
      <p className="text-sm font-mono ">{cmd}</p>
      {copied ? (
        <Check size={16} />
      ) : (
        <Clipboard className="cursor-pointer" size={16} />
      )}
    </div>
  );
};

export default PackageCmdCopy;
