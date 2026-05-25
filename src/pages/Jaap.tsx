import { useState, useEffect } from "react";
import { RotateCcw, Check, Flame, Trophy } from "lucide-react";
import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { useLocalStorage, todayKey } from "@/lib/storage";
import { playChime, playDevotionalChime, setChimeAudioSrc, vibrate } from "@/lib/chime";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import rudraksha3dImg from "@/assets/rudraksha-3d.png";
import chimeMp3 from "@/assets/hariomShreeRamAmbadnya.mp3";

const presets = [54, 108, 1008];

const Jaap = () => {
  const isMobile = useIsMobile();
  const [count, setCount] = useLocalStorage<number>("jaap.count", 0);
  const [target, setTarget] = useLocalStorage<number>("jaap.target", 108);
  const [history, setHistory] = useLocalStorage<Record<string, number>>("jaap.history", {});
  const [streak, setStreak] = useLocalStorage<{ last: string; days: number }>("jaap.streak", {
    last: "",
    days: 0,
  });
  const [tap, setTap] = useState(false);

  useEffect(() => {
    setChimeAudioSrc(chimeMp3);
  }, []);

  const progress = Math.min(100, (count / target) * 100);

  const onTap = () => {
    const next = count + 1;
    setCount(next);
    vibrate(15);
    setTap(true);
    setTimeout(() => setTap(false), 240);

    const d = todayKey();
    setHistory({ ...history, [d]: (history[d] ?? 0) + 1 });
    if (streak.last !== d) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      setStreak({ last: d, days: streak.last === yesterday ? streak.days + 1 : 1 });
    }
    if (next % 25 === 0) {
      playDevotionalChime();
      vibrate([60, 80, 60]);
    }
    if (next === target) {
      playDevotionalChime();
      vibrate([60, 80, 60, 80, 100]);
    }
  };

  const reset = () => { if (confirm("Reset count to zero?")) setCount(0); };

  const todayCount = history[todayKey()] ?? 0;
  const total = Object.values(history).reduce((a, b) => a + b, 0);

  return (
    <>
      <DivineBackground />
      <AppShell>
        <h1 className="mb-4 font-display text-3xl font-semibold">Jaap</h1>

        {/* Counter */}
        <div className="parchment relative overflow-hidden p-6 text-center">
          {/* Ring */}
          <div
            className={cn(
              "relative mx-auto grid place-items-center",
              isMobile ? "h-44 w-44" : "h-56 w-56",
              tap && "animate-tap"
            )}
            style={{
              background: `conic-gradient(hsl(var(--primary)) ${progress}%, hsl(var(--muted)) ${progress}% 100%)`,
              borderRadius: "50%",
            }}
          >
            <button
              onClick={onTap}
              className="relative grid h-[88%] w-[88%] place-items-center rounded-full select-none overflow-hidden active:scale-95"
              aria-label="Tap to count"
            >
              {/* 3D Rudraksha image */}
              <span className="rudraksha-img absolute inset-0 grid place-items-center rounded-full overflow-hidden">
                <img
                  src={rudraksha3dImg}
                  alt=""
                  aria-hidden
                  className={cn(
                    "rudraksha-img__face h-full w-full object-cover transition-transform duration-200",
                    tap && "scale-110"
                  )}
                  draggable={false}
                />
              </span>
              {/* Realistic 3D shading Vignette */}
              <span aria-hidden className="rudraksha-shading absolute inset-0 rounded-full" />
              {/* Lens flare / highlight overlay */}
              <span aria-hidden className="rudraksha-highlight absolute inset-0 rounded-full opacity-65" />
              
              {/* Count overlay */}
              <div className="relative z-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                <div className={cn("font-display font-bold leading-none", isMobile ? "text-4xl" : "text-5xl")}>{count}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest opacity-90">Tap +1</div>
                <div className="text-[9px] opacity-80">target {target}</div>
              </div>
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setTarget(p)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition",
                  target === p
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground"
                )}
              >
                {p === 108 && <Check className="mr-1 inline h-3 w-3" />} {p}
              </button>
            ))}
            <button
              onClick={reset}
              className="ml-1 flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="parchment p-3 text-center">
            <Flame className="mx-auto h-5 w-5 text-primary" />
            <div className="mt-1 font-display text-2xl font-semibold">{streak.days}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Streak</div>
          </div>
          <div className="parchment p-3 text-center">
            <div className="mx-auto grid h-5 w-5 place-items-center text-primary">☀</div>
            <div className="mt-1 font-display text-2xl font-semibold">{todayCount}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Today</div>
          </div>
          <div className="parchment p-3 text-center">
            <Trophy className="mx-auto h-5 w-5 text-primary" />
            <div className="mt-1 font-display text-2xl font-semibold">{total}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">All time</div>
          </div>
        </div>
      </AppShell>
    </>
  );
};

export default Jaap;
