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
        "group relative h-16 w-16 select-none touch-none rounded-full outline-none bg-transparent border-0 p-0",
        "transition-transform active:scale-95",
        pulse && "animate-tap",
        resetting && "animate-pulse-glow",
        className
      )}
    >
      {/* Aura + rays behind the bead (compact, won't bleed) */}
      <span aria-hidden className="rudraksha-aura absolute inset-0 rounded-full" />
      <span aria-hidden className="rudraksha-rays absolute inset-0 rounded-full" />
      {/* Real Rudraksha image — slow rotation in place */}
      <span className="rudraksha-img absolute inset-0 grid place-items-center rounded-full overflow-hidden">
        <img
          src={rudrakshaImg}
          alt=""
          aria-hidden
          className="rudraksha-img__face h-full w-full object-cover"
          draggable={false}
        />
        <span className="rudraksha-img__count absolute font-display text-[18px] font-extrabold leading-none text-amber-50 drop-shadow-[0_2px_3px_rgba(0,0,0,0.95)]">
          {count > 9999 ? "∞" : count}
        </span>
      </span>
    </button>
  );
};