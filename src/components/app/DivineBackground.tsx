import { useMemo } from "react";

export const DivineBackground = () => {
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
    <div className="divine-bg" aria-hidden>
      <div className="divine-mandala" />
      <div className="divine-rays" />
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
