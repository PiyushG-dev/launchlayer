import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const HeroHeading = ({ label, title, desc }) => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto pt-16 pb-8">
        <div className="flex flex-col items-center gap-4">
          <div>
            <AnimatedGradientText>
              <span
                className={cn(
                  `mr-1 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                {label}
              </span>
              🚀
            </AnimatedGradientText>
            <h1 className="text-7xl tracking-[-3.4px] mt-2">
              We simplify {title}
            </h1>
          </div>
          <p className="text-lg text-slate-500 tracking-tighter w-2/4 text-center ">
            Our database makes it easy to explore, gather ideas, and elevate
            your projects with a vast collection of high-quality designs
            tailored for SaaS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroHeading;
