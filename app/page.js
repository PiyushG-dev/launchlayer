import HeroHeading from "@/components/ui/hero-heading";
export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        <HeroHeading
          title="SaaS design"
          label="Powered by shadcn/ui"
          emoji="🚀"
        />
      </div>
    </div>
  );
}
