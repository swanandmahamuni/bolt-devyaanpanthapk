import { useMemo } from "react";

export const DivineBackground = ({ stable = false }: { stable?: boolean }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: `${(i * 7 + 5) % 100}%`,
        delay: `${(i * 1.7) % 18}s`,
        duration: `${18 + ((i * 3) % 14)}s`,
        size: `${4 + (i % 4)}px`,
      })),
    [],
  );
  const dust = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        left: `${(i * 11 + 3) % 100}%`,
        top: `${(i * 17 + 7) % 100}%`,
        delay: `${(i * 1.3) % 22}s`,
        duration: `${28 + ((i * 5) % 24)}s`,
        size: `${2 + (i % 3)}px`,
      })),
    [],
  );

  return (
    <div className={`divine-bg ${stable ? "divine-bg--stable" : ""}`} aria-hidden>
      <div className="divine-nebula" />
      <div className="divine-nebula divine-nebula--alt" />
      <div className="divine-mandala" />
      <div className="divine-flare divine-flare--a" />
      <div className="divine-flare divine-flare--b" />
      <div className="divine-orb" />
      <div className="divine-dust">
        {dust.map((p, i) => (
          <span
            key={i}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>
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
