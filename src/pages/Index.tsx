import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { BrandTitle } from "@/components/app/BrandTitle";
import { CategoryArc } from "@/components/app/CategoryArc";

const Index = () => {
  const hour = new Date().getHours();
  const greet =
    hour < 5 ? "शुभ रात्रि" : hour < 12 ? "सुप्रभात" : hour < 17 ? "नमस्कार" : "शुभ संध्या";

  return (
    <>
      <DivineBackground />
      <AppShell>
        {/* flex column so the category arc sits at the bottom of the screen */}
        <div className="relative flex min-h-[calc(100dvh-8.5rem)] flex-col overflow-hidden">
          <header className="pt-2">
            <p className="font-devanagari text-sm text-muted-foreground">{greet} 🙏</p>
            <h1 className="leading-tight">
              <BrandTitle size="lg" />
            </h1>
          </header>

          {/* Category arc anchored bottom-right, tucked just above the nav */}
          <section className="pointer-events-none fixed -bottom-2 right-0 z-30 w-[240px] max-w-[70vw] pb-0 sm:right-[max(0rem,calc((100vw-28rem)/2))]">
            <div className="arc-flare" aria-hidden />
            <div className="arc-shimmer" aria-hidden />
            <div className="pointer-events-auto">
              <CategoryArc />
            </div>
          </section>
        </div>
      </AppShell>
    </>
  );
};

export default Index;
