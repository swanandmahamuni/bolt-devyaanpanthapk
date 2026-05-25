import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { useSearchParams } from "react-router-dom";
import { stotras } from "@/content/stotras";
import { Link } from "react-router-dom";

const Library = () => {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get("cat") || "stotra";
  const filtered = stotras.filter((s) => s.cat === cat);

  return (
    <>
      <DivineBackground />
      <AppShell>
        <h1 className="mb-4 font-display text-3xl font-semibold">Library</h1>
        <div className="space-y-3">
          {filtered.map((s) => (
            <Link
              key={s.id}
              to={`/read/${s.id}`}
              className="block rounded-2xl border border-border/40 bg-card/70 p-4 shadow-card backdrop-blur-sm transition hover:scale-[0.98] active:scale-95"
            >
              <div className="font-display text-lg font-semibold">{s.title}</div>
              <div className="font-devanagari text-sm text-muted-foreground">{s.dev}</div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No items in this category</p>
          )}
        </div>
      </AppShell>
    </>
  );
};

export default Library;
