import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroHeading = () => {
  return (
    <section className="w-full">
      <div className="pt-36 pb-8">
        <div className="flex flex-col items-center gap-4">
          <div>
            <AnimatedGradientText>
              <span
                className={cn(
                  `mr-1 inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                New blocks every week
              </span>
              <span>🚀</span>
            </AnimatedGradientText>
            <h1 className="text-center text-5xl tracking-tighter md:text-8xl sm:text-7xl md:tracking-[-4.8px] md:max-w-[62rem] mt-2">
              Making design easy for engineers
            </h1>
          </div>
          <p className="tracking-tight sm:text-lg text-muted-foreground sm:tracking-tighter sm:w-3/4 lg:w-2/4 text-center">
            An extensive library of beautifully crafted, open-source component
            blocks built with the versatile and reusable components of
            shadcn/ui.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button asChild>
              <Link href="/components">
                View all components <ArrowRight strokeWidth={2} />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/request">Request a block</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeading;
