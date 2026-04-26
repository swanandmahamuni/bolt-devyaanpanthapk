import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookMarked, Flame, Bell, Sparkles, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { vibrate } from "@/lib/chime";
import { stotras } from "@/content/stotras";

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

  const counts = useMemo(
    () =>
      CATEGORIES.reduce<Record<string, number>>((acc, c) => {
        acc[c.id] = stotras.filter((s) => s.category === c.catKey).length;
        return acc;
      }, {}),
    []
  );

  const activeCat = CATEGORIES[active];

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
  const radius = 110; // px
  const step = 38;    // degrees between items

  return (
    <div className="relative">
      {/* Active text on ancient page */}
      <div className="relative mx-auto mb-6 max-w-[20rem]">
        <div className="ancient-page relative px-6 py-7 text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary/70">
            {counts[activeCat.id] ?? 0} texts
          </div>
          <div className="font-devanagari mt-1 text-3xl text-foreground/90 drop-shadow-[0_1px_0_hsl(45_80%_90%)]">
            {activeCat.dev}
          </div>
          <div className="font-display mt-0.5 text-base text-muted-foreground">
            {activeCat.label}
          </div>
          <button
            onClick={() => nav(`/library?cat=${activeCat.catKey}`)}
            className="mt-3 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground shadow-soft active:scale-95"
          >
            Open
          </button>
        </div>
      </div>

      {/* Arc of icons */}
      <div
        className="relative mx-auto h-44 w-full touch-pan-y select-none"
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
          const scale = abs === 0 ? 1.25 : abs === 1 ? 0.85 : 0.6;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.55 : 0.25;
          const z = 10 - abs;

          const Icon = c.icon;
          const isActive = abs === 0;

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
                "icon-3d absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-2xl",
                "transition-all duration-300 ease-out"
              )}
              style={{
                transform: `translate(calc(-50% + ${x}px), ${y}px) scale(${scale})`,
                opacity,
                zIndex: z,
              }}
            >
              <span className="icon-3d__face grid h-full w-full place-items-center rounded-2xl">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};