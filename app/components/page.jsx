import React from "react";
import ComponentViewer from "@/components/layout/ComponentViewer";
import SampleComponent from "@/components/user-library/SampleComponent";

const sampleCode = `
import React from "react";

const SampleComponent = () => {
  return (
    <div className="text-center p-6 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Data to Enrich Your Online Business</h1>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-bold rounded-md">
        Get Started
      </button>
    </div>
  );
};

export default SampleComponent;
`;

const Components = () => {
  return <ComponentViewer component={SampleComponent} code={sampleCode} />;
};

export default Components;
