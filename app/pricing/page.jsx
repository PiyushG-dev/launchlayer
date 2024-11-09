import React from "react";
import DesignBlockWrapper from "@/components/ui/design-block-wrapper";

const Pricing = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <DesignBlockWrapper key={i} />
      ))}
    </div>
  );
};

export default Pricing;
