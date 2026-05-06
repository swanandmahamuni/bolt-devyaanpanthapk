import { useMemo } from "react";
import sonchafa1 from "@/assets/sonchafa-flower.png";
import sonchafa2 from "@/assets/sonchafa-flower2.png";
import sonchafa3 from "@/assets/sonchafa-flower3.png";
import spaceNebula from "@/assets/space-nebula.jpg";

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

  // Sonchafa flower positions — scattered around edges
  const flowers = useMemo(
    () => [
      { src: sonchafa1, top: "-3%", left: "-8%", size: 100, rotate: -25, delay: "0s", dur: "18s" },
      { src: sonchafa2, top: "5%", right: "-6%", size: 90, rotate: 15, delay: "3s", dur: "22s" },
      { src: sonchafa3, top: "50%", left: "-10%", size: 95, rotate: 40, delay: "6s", dur: "20s" },
      { src: sonchafa1, top: "75%", right: "-7%", size: 85, rotate: -30, delay: "9s", dur: "24s" },
      { src: sonchafa2, top: "28%", left: "-6%", size: 75, rotate: 60, delay: "2s", dur: "16s" },
      { src: sonchafa3, top: "90%", left: "-5%", size: 80, rotate: -10, delay: "5s", dur: "19s" },
    ],
    [],
  );

  return (
    <div className={`divine-bg ${stable ? "divine-bg--stable" : ""}`} aria-hidden>
      <div className="divine-nebula" />
      <div className="divine-nebula divine-nebula--alt" />
      <div className="divine-noise" />
      <div className="divine-mandala" />
      <div className="divine-flare divine-flare--a" />
      <div className="divine-flare divine-flare--b" />
      <div className="divine-orb" />
      {/* Space nebula for dark mode */}
      <div className="divine-space-bg">
        <img
          src={spaceNebula}
          alt=""
          className="divine-space-img"
        />
      </div>
      {/* Animated sonchafa flowers (light mode only) */}
      <div className="divine-flowers">
        {flowers.map((f, i) => (
          <img
            key={i}
            src={f.src}
            alt=""
            className="divine-flower"
            style={{
              top: f.top,
              left: f.left,
              right: (f as any).right,
              width: f.size,
              height: f.size,
              transform: `rotate(${f.rotate}deg)`,
              animationDelay: f.delay,
              animationDuration: f.dur,
            }}
          />
        ))}
      </div>
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
