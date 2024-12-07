"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

const ComponentViewer = ({ component: Component, code }) => {
  const [viewMode, setViewMode] = useState("preview"); // "preview" or "code"
  const [viewport, setViewport] = useState("lg"); // Options: sm, md, lg

  // Dynamically apply Tailwind classes for responsiveness
  const viewportClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-full",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <button
            className={`px-4 py-2 mr-2 ${
              viewMode === "preview" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setViewMode("preview")}
          >
            Preview
          </button>
          <button
            className={`px-4 py-2 ${
              viewMode === "code" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setViewMode("code")}
          >
            Code
          </button>
        </div>

        {/* Responsive Controls */}
        <div>
          {["sm", "md", "lg"].map((size) => (
            <button
              key={size}
              className={`px-3 py-2 mx-1 ${
                viewport === size ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setViewport(size)}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`border rounded-lg bg-white p-4 shadow-lg ${
          viewMode === "preview" ? viewportClasses[viewport] : "max-w-full"
        }`}
      >
        {viewMode === "preview" ? (
          <Component />
        ) : (
          <SyntaxHighlighter language="jsx" style={dracula}>
            {code}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default ComponentViewer;
