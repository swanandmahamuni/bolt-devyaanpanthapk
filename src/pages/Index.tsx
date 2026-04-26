import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { BrandTitle } from "@/components/app/BrandTitle";
import { CategoryArc } from "@/components/app/CategoryArc";
import { stotras } from "@/content/stotras";
import { useLocalStorage } from "@/lib/storage";

const Index = () => {
  const [recent] = useLocalStorage<string[]>("recent.read", []);
  const recentItems = recent
    .map((id) => stotras.find((s) => s.id === id))
    .filter(Boolean)
    .slice(0, 3) as typeof stotras;

  const todays = stotras[new Date().getDate() % stotras.length];

  const hour = new Date().getHours();
  const greet =
    hour < 5 ? "शुभ रात्रि" : hour < 12 ? "सुप्रभात" : hour < 17 ? "नमस्कार" : "शुभ संध्या";

  return (
    <>
      <DivineBackground />
      <AppShell>
        <header className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-devanagari text-sm text-muted-foreground">{greet} 🙏</p>
            <h1 className="leading-tight">
              <BrandTitle size="lg" />
            </h1>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-xl shadow-soft">
            ॐ
          </div>
        </header>

        <section className="mt-4">
          <CategoryArc />
        </section>

        <section className="mt-6">
          <h2 className="mb-3 px-1 font-display text-lg font-semibold">Today's path</h2>
          <Link
            to={`/read/${todays.id}`}
            className="parchment block overflow-hidden p-5 transition active:scale-[0.98]"
          >
            <div className="text-xs uppercase tracking-wider text-primary">
              {todays.deity} · {todays.category}
            </div>
            <div className="mt-1 font-devanagari text-xl leading-snug">{todays.title_dev}</div>
            <div className="mt-0.5 text-sm text-muted-foreground">{todays.title_en}</div>
            <div className="mt-3 line-clamp-2 font-devanagari text-sm text-foreground/80">
              {todays.verses[0].dev}
            </div>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
              Begin reading <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </section>

        {recentItems.length > 0 && (
          <section className="mt-6">
            <h2 className="mb-3 px-1 font-display text-lg font-semibold">Continue reading</h2>
            <div className="space-y-2">
              {recentItems.map((s) => (
                <Link
                  key={s.id}
                  to={`/read/${s.id}`}
                  className="parchment flex items-center justify-between p-3"
                >
                  <div>
                    <div className="font-devanagari text-base">{s.title_dev}</div>
                    <div className="text-xs text-muted-foreground">{s.title_en}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </AppShell>
    </>
  );
};

export default Index;
