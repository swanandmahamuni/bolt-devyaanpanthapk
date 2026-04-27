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
        <div className="flex min-h-[calc(100dvh-2rem)] flex-col">
          <header className="pt-2">
            <p className="font-devanagari text-sm text-muted-foreground">{greet} 🙏</p>
            <h1 className="leading-tight">
              <BrandTitle size="lg" />
            </h1>
          </header>

          {/* spacer pushes the arc to the bottom */}
          <div className="flex-1" />

          {/* Category arc anchored further at the bottom with lens-flare glow */}
          <section className="relative -mb-4 mt-10 pb-2">
            <div className="arc-flare" aria-hidden />
            <CategoryArc />
          </section>
        </div>
      </AppShell>
    </>
  );
};

export default Index;
