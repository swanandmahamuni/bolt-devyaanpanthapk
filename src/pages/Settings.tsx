import { Moon, Sun, Type, Vibrate } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { useLocalStorage } from "@/lib/storage";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import brandWordmark from "@/assets/brand-wordmark.png";

const Settings = () => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark" | "auto">("theme", "auto");
  const [haptics, setHaptics] = useLocalStorage<boolean>("haptics", true);
  const [defaultScript, setDefaultScript] = useLocalStorage<"dev" | "en" | "both">("reader.script", "both");

  useEffect(() => {
    const root = document.documentElement;
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = theme === "dark" || (theme === "auto" && prefers);
    root.classList.toggle("dark", dark);
  }, [theme]);

  return (
    <>
      <DivineBackground />
      <AppShell>
        <h1 className="mb-4 font-display text-3xl font-semibold">Settings</h1>

        <section className="parchment mb-4 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Sun className="h-4 w-4 text-primary" /> Appearance
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(["light", "auto", "dark"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-xl border py-3 text-xs font-medium capitalize transition",
                  theme === t
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground"
                )}
              >
                {t === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {t}
              </button>
            ))}
          </div>
        </section>

        <section className="parchment mb-4 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Type className="h-4 w-4 text-primary" /> Default script
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(["dev", "both", "en"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setDefaultScript(s)}
                className={cn(
                  "rounded-xl border py-2.5 text-sm font-medium transition",
                  defaultScript === s
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground"
                )}
              >
                {s === "dev" ? "देवनागरी" : s === "en" ? "English" : "Both"}
              </button>
            ))}
          </div>
        </section>

        <section className="parchment mb-4 flex items-center justify-between p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Vibrate className="h-4 w-4 text-primary" /> Haptics
          </div>
          <button
            onClick={() => setHaptics(!haptics)}
            className={cn(
              "relative h-7 w-12 rounded-full transition",
              haptics ? "bg-primary" : "bg-muted"
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 h-6 w-6 rounded-full bg-card shadow transition-all",
                haptics ? "left-[22px]" : "left-0.5"
              )}
            />
          </button>
        </section>

        <div className="mt-8 flex justify-center">
          <img
            src={brandWordmark}
            alt="हरि ॐ श्रीराम अंबड़ नाथसंविध"
            className="max-h-32 w-auto object-contain drop-shadow-[0_0_24px_hsl(45_100%_60%/0.45)]"
            draggable={false}
          />
        </div>
      </AppShell>
    </>
  );
};

export default Settings;
