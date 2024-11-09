import HeroHeading from "@/components/ui/hero-heading";
import PageLinks from "@/components/ui/page-links";
import { designLinks } from "@/constants";
import { Switch } from "@/components/ui/switch";
import DesignBlockWrapper from "@/components/ui/design-block-wrapper";
export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        <HeroHeading
          title="SaaS design"
          label="Design inspirations"
          emoji="🚀"
        />
        <div className="flex flex-col items-center gap-6">
          <PageLinks pageLinks={designLinks} />
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-950 font-medium tracking-tight">
              Light themes
            </p>
            <Switch />
            <p className="text-sm text-slate-950 font-medium tracking-tight">
              Dark themes
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-14">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <DesignBlockWrapper key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
