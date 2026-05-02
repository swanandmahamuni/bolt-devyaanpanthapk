import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Languages } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { stotras } from "@/content/stotras";
import { useLocalStorage } from "@/lib/storage";
import { cn } from "@/lib/utils";

const Reader = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const stotra = stotras.find((s) => s.id === id);
  const [script, setScript] = useLocalStorage<"dev" | "en" | "both">("reader.script", "both");
  const [favs, setFavs] = useLocalStorage<string[]>("favorites", []);
  const [recent, setRecent] = useLocalStorage<string[]>("recent.read", []);

  useEffect(() => {
    if (!stotra) return;
    setRecent([stotra.id, ...recent.filter((x) => x !== stotra.id)].slice(0, 8));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stotra?.id]);

  if (!stotra) {
    return (
      <>
        <DivineBackground />
        <AppShell>
          <p className="py-20 text-center text-muted-foreground">Not found.</p>
          <Link to="/library" className="block text-center text-primary">Back to library</Link>
        </AppShell>
      </>
    );
  }

  const isFav = favs.includes(stotra.id);
  const baseSize = 22;
  const fontSize = baseSize;

  const cycleScript = () =>
    setScript(script === "both" ? "dev" : script === "dev" ? "en" : "both");

  return (
    <>
      <DivineBackground stable />
      <AppShell>
        <div className="-mx-1 mb-3 flex items-center justify-between">
          <button onClick={() => nav(-1)} className="rounded-full bg-card/70 p-2 backdrop-blur">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5 pr-16">
            <button
              onClick={cycleScript}
              className="flex items-center gap-1 rounded-full bg-card/70 px-3 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur"
              aria-label="Toggle script"
            >
              <Languages className="h-3.5 w-3.5" />
              {script === "dev" ? "देव" : script === "en" ? "EN" : "Both"}
            </button>
            <button
              onClick={() =>
                setFavs(isFav ? favs.filter((x) => x !== stotra.id) : [stotra.id, ...favs])
              }
              className="rounded-full bg-card/70 p-2 backdrop-blur"
              aria-label="Favorite"
            >
              <Heart className={cn("h-4 w-4", isFav && "fill-primary text-primary")} />
            </button>
          </div>
        </div>

        <div
          className="parchment p-5 sm:p-6"
        >
          <div className="text-xs uppercase tracking-wider text-primary">
            {stotra.deity} · {stotra.category}
          </div>
          <h1 className="mt-1 font-devanagari text-2xl font-bold leading-snug">
            {stotra.title_dev}
          </h1>

          <div className="mt-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="mt-5 space-y-7">
            {stotra.verses.map((v, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-2 -top-1 font-display text-xs text-primary/60">
                  {i + 1}
                </div>
                {(script === "dev" || script === "both") && (
                  <pre
                    className="font-devanagari whitespace-pre-wrap font-semibold leading-[1.9] text-foreground"
                    style={{ fontSize: `${fontSize}px` }}
                  >
{v.dev}
                  </pre>
                )}
                {(script === "en" || script === "both") && (
                  <pre
                    className={cn(
                      "font-display whitespace-pre-wrap font-semibold leading-relaxed text-foreground/75",
                      script === "both" && "mt-2"
                    )}
                    style={{ fontSize: `${Math.max(13, fontSize - 4)}px` }}
                  >
{v.en}
                  </pre>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center font-devanagari text-sm text-primary">॥ इति ॥</div>
        </div>
      </AppShell>
    </>
  );
};

export default Reader;
