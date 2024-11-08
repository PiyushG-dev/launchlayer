import HeroHeading from "@/components/ui/hero-heading";
import { Button } from "@/components/ui/button";
import { designLinks } from "@/constants";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
export default function Home() {
  return (
    <>
      <HeroHeading title="SaaS design" label="Design inspirations" emoji="🚀" />
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          {designLinks.map((link) => {
            return (
              <Button variant="outline" asChild key={link.id}>
                <Link href={link.href}>{link.name}</Link>
              </Button>
            );
          })}
        </div>
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
    </>
  );
}
