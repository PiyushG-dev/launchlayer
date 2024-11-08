import HeroHeading from "@/components/ui/hero-heading";
import { Button } from "@/components/ui/button";
import { designLinks } from "@/constants";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <HeroHeading title="SaaS design" label="Design inspirations" emoji="🚀" />
      <div className="max-w-screen-xl mx-auto flex justify-center gap-6">
        {designLinks.map((link) => {
          return (
            <Button variant="outline" asChild key={link.id}>
              <Link href={link.href}>{link.name}</Link>
            </Button>
          );
        })}
      </div>
    </>
  );
}
