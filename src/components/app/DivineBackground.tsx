import { useMemo } from "react";

const VARIANTS = ["", "divine-bg--lotus", "divine-bg--temple", "divine-bg--cosmos"];

export const DivineBackground = () => {
  // Pick a variant once per session so it stays stable while the user navigates
  const variant = useMemo(() => {
    if (typeof window === "undefined") return "";
    const KEY = "divine.bg.variant";
    const stored = sessionStorage.getItem(KEY);
    if (stored !== null) return stored;
    const pick = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
    sessionStorage.setItem(KEY, pick);
    return pick;
  }, []);
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: `${(i * 7 + 5) % 100}%`,
        delay: `${(i * 1.7) % 18}s`,
        duration: `${18 + ((i * 3) % 14)}s`,
        size: `${4 + (i % 4)}px`,
      })),
    []
  );
  return (
    <div className={`divine-bg ${variant}`} aria-hidden>
      <div className="divine-nebula" />
      <div className="divine-nebula divine-nebula--alt" />
      <div className="divine-noise" />
      <div className="divine-mandala" />
      <div className="divine-rays" />
      <div className="divine-flare divine-flare--a" />
      <div className="divine-flare divine-flare--b" />
      <div className="divine-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>
    </div>
  );
};
