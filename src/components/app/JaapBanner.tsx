import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RotateCcw, Sparkles, Maximize2 } from "lucide-react";
import { useLocalStorage, todayKey } from "@/lib/storage";
import { playDevotionalChime, playChime, setChimeAudioSrc, vibrate } from "@/lib/chime";
import { cn } from "@/lib/utils";

export const JaapBanner = () => {
  const [count, setCount] = useLocalStorage<number>("jaap.count", 0);
  const [mantraId] = useLocalStorage<string>("jaap.activeMantra", "om");
  const [today, setToday] = useLocalStorage<{ date: string; count: number }>("jaap.today", {
    date: todayKey(),
    count: 0,
  });
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setChimeAudioSrc("");
  }, []);

  const tap = () => {
    const next = count + 1;
    setCount(next);
    const d = todayKey();
    setToday(today.date === d ? { date: d, count: today.count + 1 } : { date: d, count: 1 });
    vibrate(15);
    if (next % 25 === 0) {
      playDevotionalChime();
      vibrate([40, 60, 40]);
      setPulse(true);
      setTimeout(() => setPulse(false), 1400);
    } else if (next % 108 === 0) {
      playChime();
      vibrate([40, 60, 40]);
      setPulse(true);
      setTimeout(() => setPulse(false), 1400);
    }
  };

  const reset = () => {
    if (confirm("Reset your jaap count?")) {
      setCount(0);
      vibrate(20);
    }
  };

  const mala = Math.floor(count / 108);
  const inMala = count % 108;
  const progress = (inMala / 108) * 100;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-banner p-5 text-primary-foreground shadow-soft",
        pulse && "animate-pulse-glow"
      )}
    >
      <div
        className="pointer-events-none absolute -top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 opacity-25"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(255,230,150,0.5) 6deg, transparent 12deg, transparent 60deg, rgba(255,230,150,0.4) 66deg, transparent 72deg, transparent 360deg)",
          animation: "ray-spin 60s linear infinite",
        }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] opacity-90">
            <Sparkles className="h-3.5 w-3.5" />
            Jaap Counter
          </div>
          <div className="mt-1 font-display text-lg leading-tight opacity-95">
            {mantraId === "om" ? "ॐ" : "Sacred Mantra"}
          </div>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={reset}
            className="rounded-full bg-white/15 p-2 backdrop-blur-sm transition hover:bg-white/25"
            aria-label="Reset count"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <Link
            to="/jaap"
            className="rounded-full bg-white/15 p-2 backdrop-blur-sm transition hover:bg-white/25"
            aria-label="Open full jaap"
          >
            <Maximize2 className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <button
        onClick={tap}
        className="relative mt-4 flex w-full items-center justify-between gap-4 rounded-2xl bg-white/15 px-5 py-4 text-left backdrop-blur-md transition active:scale-[0.98]"
        aria-label="Tap to count jaap"
      >
        <div>
          <div className="text-shadow-soft font-display text-5xl font-semibold leading-none">
            {count}
          </div>
          <div className="mt-1 text-xs opacity-90">
            {mala} mala · {inMala}/108 · today {today.date === todayKey() ? today.count : 0}
          </div>
        </div>
        <div className="rounded-full bg-white/25 px-4 py-3 text-sm font-semibold uppercase tracking-wider shadow-soft">
          Tap +1
        </div>
      </button>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-gradient-gold transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
