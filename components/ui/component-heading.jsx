import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ComponentHeading = ({ title }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/components"
                className="font-semibold text-sm uppercase text-slate-400 text-center block tracking-widest"
              >
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-sm uppercase text-center block tracking-widest">
                {title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h4 className="text-4xl tracking-tighter font-medium text-left">
          {title} sections
        </h4>
      </div>
      <p className="tracking-tight sm:text-lg text-muted-foreground sm:tracking-tighter sm:w-3/4 lg:w-2/4">
        A fully customizable component library powered by shadcn/ui, with new
        blocks added weekly to help you build and launch faster.
      </p>
    </div>
  );
};

export default ComponentHeading;
