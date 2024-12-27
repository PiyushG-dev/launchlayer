import React from "react";
import ComponentHeading from "@/components/ui/component-heading";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col">
        <div className="flex flex-col gap-6">
          <ComponentHeading title="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
