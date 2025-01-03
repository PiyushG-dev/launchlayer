import PackageCmdCopy from "@/components/ui/package-cmd-copy";
import React from "react";
import { componentPages } from "@/constants";
import ComponentPageCard from "@/components/ui/component-page-card";

const Components = () => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center flex-col gap-2">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm uppercase text-slate-400 text-center block tracking-widest">
                components
              </span>
              <h4 className="text-4xl tracking-tighter font-medium text-center">
                Build modern interfaces superfast
              </h4>
            </div>
            <p className="tracking-tight sm:text-lg text-muted-foreground sm:tracking-tighter sm:w-3/4 lg:w-3/5 text-center">
              A fully customizable component library powered by shadcn/ui, with
              new blocks added weekly to help you build and launch faster.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-start sm:items-center sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-muted border border-slate-300 rounded-full flex items-center justify-center text-lg font-medium">
                1
              </div>
              <PackageCmdCopy cmd="npx create-next-app@latest" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-muted border border-slate-300 rounded-full flex items-center justify-center text-lg font-medium">
                2
              </div>
              <PackageCmdCopy cmd="npx shadcn@latest init" />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {componentPages.map((card) => {
            return (
              <ComponentPageCard
                key={card.id}
                icon={card.icon}
                name={card.name}
                description={card.desc}
                status={card.status}
                href={card.href}
              />
            );
          })}
        </div>
        <p className="tracking-tight sm:text-lg text-muted-foreground sm:tracking-tighter">
          Customers, social proof, contact and many more sections{" "}
          <span className="text-primary">coming soon</span>
        </p>
      </div>
    </section>
  );
};

export default Components;
