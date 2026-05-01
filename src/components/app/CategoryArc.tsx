import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookMarked, Flame, Bell, Sparkles, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { vibrate } from "@/lib/chime";

const AuraRing = () => (
  <span className="absolute inset-[-6px] rounded-full pointer-events-none" aria-hidden>
    <span className="absolute inset-0 rounded-full animate-[aura-ring_2.4s_ease-in-out_infinite] border-2 border-amber-400/40" />
    <span className="absolute inset-[-3px] rounded-full animate-[aura-ring_2.4s_ease-in-out_infinite_0.6s] border border-amber-300/20" />
  </span>
);

type Cat = {
  id: string;
  label: string;
  dev: string;
  icon: LucideIcon;
  catKey: string;
};

const CATEGORIES: Cat[] = [
  { id: "stotra", label: "Stotra", dev: "स्तोत्र", icon: BookMarked, catKey: "stotra" },
  { id: "aarti", label: "Aarti", dev: "आरती", icon: Flame, catKey: "aarti" },
  { id: "pujan-vidhi", label: "Pujan Vidhi", dev: "पूजन विधि", icon: Bell, catKey: "pujan-vidhi" },
  { id: "prarthana", label: "Prarthana", dev: "प्रार्थना", icon: Heart, catKey: "prarthana" },
  { id: "mantra", label: "Mantra", dev: "मंत्र", icon: Sparkles, catKey: "mantra" },
];

/**
 * Half-circle 3D category carousel. Swipe left/right (or drag) to rotate.
 * The middle icon zooms in; neighbours shrink and fade.
 * Tapping the active icon opens that category.
 */
export const CategoryArc = () => {
  const nav = useNavigate();
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const moved = useRef(false);

  const rotate = (dir: 1 | -1) => {
    setActive((a) => (a + dir + CATEGORIES.length) % CATEGORIES.length);
    vibrate(8);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    moved.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) {
      rotate(dx < 0 ? 1 : -1);
      startX.current = e.clientX;
      moved.current = true;
    }
  };
  const onPointerUp = () => {
    startX.current = null;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") rotate(1);
      if (e.key === "ArrowLeft") rotate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Visual layout: arc with the active item at the bottom-center.
  // Each item is offset by step degrees; we tilt them along a half-circle.
  const radius = 130; // px — wider arc spanning full nav width
  const step = 22;    // degrees between items

  return (
    <div className="relative" style={{ perspective: "800px" }}>
      {/* Arc of icons */}
      <div
        className="relative mx-auto h-[92px] w-full touch-pan-y select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="listbox"
        aria-label="Categories"
      >
        {CATEGORIES.map((c, i) => {
          // signed distance (-2,-1,0,1,2) using shortest path
          let d = i - active;
          const n = CATEGORIES.length;
          if (d > n / 2) d -= n;
          if (d < -n / 2) d += n;

          const angle = d * step; // degrees from bottom-center
          const rad = (angle * Math.PI) / 180;
          const x = Math.sin(rad) * radius;
          const y = -Math.cos(rad) * radius + radius; // arc going up from bottom

          const abs = Math.abs(d);
          const scale = abs === 0 ? 1.15 : abs === 1 ? 0.78 : 0.55;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25;
          const z = 10 - abs;

          const Icon = c.icon;
          const isActive = abs === 0;
          const rotateY = d * 12;
          const rotateX = abs === 0 ? 0 : -8;

          return (
            <button
              key={c.id}
              onClick={() => {
                if (moved.current) return;
                if (isActive) nav(`/library?cat=${c.catKey}`);
                else setActive(i);
              }}
              aria-label={c.label}
              aria-selected={isActive}
              className={cn(
                "icon-3d absolute left-1/2 top-0 flex w-14 -translate-x-1/2 flex-col items-center gap-0.5",
                "transition-all duration-300 ease-out"
              )}
              style={{
                transform: `translate(calc(-50% + ${x}px), ${y}px) scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transformStyle: "preserve-3d",
                opacity,
                zIndex: z,
              }}
            >
              <span className={cn(
                "icon-3d__face relative grid h-9 w-9 place-items-center rounded-2xl transition-all duration-300",
                isActive && "shadow-[0_0_24px_hsl(45_100%_60%/0.6),0_0_48px_hsl(45_100%_60%/0.25)] scale-110"
              )}>
                <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                {isActive && <AuraRing />}
              </span>
              <span
                className={cn(
                  "font-display text-[10px] font-bold uppercase tracking-wider text-white",
                  "drop-shadow-[0_2px_3px_rgba(0,0,0,0.85)]",
                  isActive && "text-amber-200"
                )}
              >
                {c.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};