import ShadcnCmdCopy from "@/components/ui/shadcn-cmd-copy";
import React from "react";
// import ComponentViewer from "@/components/layout/ComponentViewer";
// import SampleComponent from "@/components/user-library/SampleComponent";

// const sampleCode = `
// import React from "react";

// const SampleComponent = () => {
//   return (
//     <div className="text-center p-6 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold">Data to Enrich Your Online Business</h1>
//       <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-bold rounded-md">
//         Get Started
//       </button>
//     </div>
//   );
// };

// export default SampleComponent;
// `;

// const Components = () => {
//   return <ComponentViewer component={SampleComponent} code={sampleCode} />;
// };

const Components = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm uppercase text-purple-500 text-center block tracking-widest">
                components
              </span>
              <h4 className="text-4xl tracking-tighter font-medium">
                Build modern interfaces superfast
              </h4>
            </div>
            <p className="tracking-tight sm:text-lg text-muted-foreground sm:tracking-tighter sm:w-3/4 lg:w-3/5 text-center">
              A fully customizable component library powered by shadcn/ui, with
              new blocks added weekly to help you build and launch faster.
            </p>
          </div>
          <ShadcnCmdCopy />
        </div>
      </div>
    </div>
  );
};

export default Components;
