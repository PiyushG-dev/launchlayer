import React from "react";
import Image from "next/image";
import { logo } from "@/utils";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-8 px-6">
        <Image src={logo} alt="logo" width={120} height={120} />
      </div>
    </div>
  );
};

export default Navbar;
