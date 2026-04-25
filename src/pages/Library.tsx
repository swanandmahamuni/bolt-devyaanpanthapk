import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { stotras } from "@/content/stotras";
import { cn } from "@/lib/utils";

const cats = [
  { id: "all", label: "All" },
  { id: "stotra", label: "Stotra" },
  { id: "aarti", label: "Aarti" },
  { id: "prarthana", label: "Prarthana" },
  { id: "mantra", label: "Mantra" },
  { id: "pujan-vidhi", label: "Pujan Vidhi" },
];

const Library = () => {
  const [params, setParams] = useSearchParams();
  const cat = params.get("cat") || "all";
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return stotras.filter((s) => {
      if (cat !== "all" && s.category !== cat) return false;
      if (q.trim()) {
        const t = q.toLowerCase();
        return (
          s.title_en.toLowerCase().includes(t) ||
          s.title_dev.includes(q) ||
          s.deity.toLowerCase().includes(t)
        );
      }
      return true;
    });
  }, [cat, q]);

  return (
    <>
      <DivineBackground />
      <AppShell>
        <h1 className="mb-4 font-display text-3xl font-semibold">Library</h1>

        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search stotras, deity..."
            className="w-full rounded-2xl border border-border bg-card/70 py-3 pl-10 pr-4 text-sm shadow-card outline-none ring-primary/30 backdrop-blur transition focus:ring-2"
          />
        </div>

        <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                if (c.id === "all") setParams({});
                else setParams({ cat: c.id });
              }}
              className={cn(
                "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition",
                cat === c.id
                  ? "border-transparent bg-gradient-banner text-primary-foreground shadow-soft"
                  : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-2.5">
          {list.length === 0 && (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No matches. Try another search.
            </p>
          )}
          {list.map((s) => (
            <Link
              key={s.id}
              to={`/read/${s.id}`}
              className="parchment flex items-start gap-3 p-4 transition active:scale-[0.98]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold font-devanagari text-xl text-accent-foreground shadow-soft">
                {s.title_dev.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-wider text-primary">
                  {s.deity} · {s.category}
                </div>
                <div className="truncate font-devanagari text-base">{s.title_dev}</div>
                <div className="truncate text-xs text-muted-foreground">{s.title_en}</div>
              </div>
              <ArrowRight className="mt-3 h-4 w-4 shrink-0 text-primary" />
            </Link>
          ))}
        </div>
      </AppShell>
    </>
  );
};

export default Library;
