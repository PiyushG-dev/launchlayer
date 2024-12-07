import React from "react";
import { Rocket } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 text-2xl">
      <Rocket />
      <h2 className="tracking-[-1.6px]">LaunchLayer</h2>
    </div>
  );
};

export default Logo;
