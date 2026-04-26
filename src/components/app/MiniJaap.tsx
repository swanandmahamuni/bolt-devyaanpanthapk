import { useRef, useState } from "react";
import { useLocalStorage, todayKey } from "@/lib/storage";
import { playChime, vibrate } from "@/lib/chime";
import { cn } from "@/lib/utils";
import rudrakshaImg from "@/assets/rudraksha.png";

/**
 * Floating mini Jaap counter for reading screens.
 * - Single tap → +1
 * - Long press (550ms) → reset to 0
 * - No labels, no buttons. Just a glowing 3D bead.
 */
export const MiniJaap = ({ className }: { className?: string }) => {
  const [count, setCount] = useLocalStorage<number>("jaap.count", 0);
  const [today, setToday] = useLocalStorage<{ date: string; count: number }>(
    "jaap.today",
    { date: todayKey(), count: 0 }
  );
  const [pulse, setPulse] = useState(false);
  const [resetting, setResetting] = useState(false);
  const longTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longFired = useRef(false);

  const inMala = count % 108;
  const progress = (inMala / 108) * 100;

  const inc = () => {
    const next = count + 1;
    setCount(next);
    const d = todayKey();
    setToday(today.date === d ? { date: d, count: today.count + 1 } : { date: d, count: 1 });
    vibrate(12);
    setPulse(true);
    setTimeout(() => setPulse(false), 220);
    if (next % 108 === 0) {
      playChime();
      vibrate([40, 60, 40]);
    }
  };

  const start = () => {
    longFired.current = false;
    longTimer.current = setTimeout(() => {
      longFired.current = true;
      setCount(0);
      setResetting(true);
      vibrate([20, 30, 60]);
      setTimeout(() => setResetting(false), 600);
    }, 550);
  };
  const cancel = () => {
    if (longTimer.current) clearTimeout(longTimer.current);
    longTimer.current = null;
  };
  const end = () => {
    cancel();
    if (!longFired.current) inc();
  };

  return (
    <button
      onPointerDown={start}
      onPointerUp={end}
      onPointerLeave={cancel}
      onPointerCancel={cancel}
      onContextMenu={(e) => e.preventDefault()}
      aria-label={`Jaap counter ${count}`}
      className={cn(
        "group relative h-14 w-14 select-none touch-none rounded-full outline-none",
        "transition-transform active:scale-95",
        pulse && "animate-tap",
        resetting && "animate-pulse-glow",
        className
      )}
      style={{
        // gold progress ring around the bead
        background: `conic-gradient(hsl(var(--accent)) ${progress}%, hsl(45 60% 50% / 0.18) ${progress}% 100%)`,
        boxShadow:
          "0 6px 18px -4px hsl(20 60% 10% / 0.45), 0 0 22px hsl(35 90% 50% / 0.35)",
      }}
    >
      {/* Real Rudraksha image — slow rotation in place */}
      <span className="rudraksha-img absolute inset-[3px] grid place-items-center rounded-full overflow-hidden">
        <img
          src={rudrakshaImg}
          alt=""
          aria-hidden
          className="rudraksha-img__face h-full w-full object-cover"
          draggable={false}
        />
        <span className="rudraksha-img__count absolute font-display text-[13px] font-bold leading-none text-amber-50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
          {count > 9999 ? "∞" : count}
        </span>
      </span>
    </button>
  );
};