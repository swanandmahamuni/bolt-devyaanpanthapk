import { useEffect, useRef, useState } from "react";
import { useLocalStorage, todayKey } from "@/lib/storage";
import { playChime, playDevotionalChime, setChimeAudioSrc, vibrate } from "@/lib/chime";
import { cn } from "@/lib/utils";
import rudrakshaImg from "@/assets/rudraksha-clean.png";
import rudraksha3dImg from "@/assets/rudraksha-3d.png";
import chimeMp3 from "@/assets/hariomShreeRamAmbadnya.mp3";

// Convert Western digits to Devanagari numerals
const DEV_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
const toDevanagari = (n: number | string) =>
  String(n).replace(/\d/g, (d) => DEV_DIGITS[Number(d)]);

const formatHMS = (totalSec: number) => {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
};

/**
 * Floating mini Jaap counter — visible on every screen.
 * - Single tap → +1 (also starts the chant timer)
 * - Long press (550ms) → reset count + timer
 * - Drag to reposition anywhere on screen (position persists for current session)
 */
export const MiniJaap = ({ className }: { className?: string }) => {
  const [count, setCount] = useLocalStorage<number>("jaap.count", 0);
  const [today, setToday] = useLocalStorage<{ date: string; count: number }>(
    "jaap.today",
    { date: todayKey(), count: 0 }
  );
  
  // Session persistence for position
  const [pos, setPos] = useState<{ x: number; y: number } | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = sessionStorage.getItem("jaap.sessionPos");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (pos) {
      try {
        sessionStorage.setItem("jaap.sessionPos", JSON.stringify(pos));
      } catch {}
    }
  }, [pos]);

  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const startedAt = useRef<number | null>(null);
  const [pulse, setPulse] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [dragging, setDragging] = useState(false);
  const longTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longFired = useRef(false);

  // Drag state
  const dragState = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    moved: boolean;
    pointerId: number;
  } | null>(null);

  // Preload the devotional MP3
  useEffect(() => {
    setChimeAudioSrc(chimeMp3);
  }, []);

  // Tick the timer once per second while running
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      if (startedAt.current != null) {
        setElapsed(Math.floor((Date.now() - startedAt.current) / 1000));
      }
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const inc = () => {
    if (!running) {
      startedAt.current = Date.now() - elapsed * 1000;
      setRunning(true);
    }
    const next = count + 1;
    setCount(next);
    const d = todayKey();
    setToday(today.date === d ? { date: d, count: today.count + 1 } : { date: d, count: 1 });
    vibrate(12);
    setPulse(true);
    setTimeout(() => setPulse(false), 220);
    if (next % 25 === 0) {
      playDevotionalChime();
      vibrate([40, 60, 40]);
    }
  };

  const cancelLong = () => {
    if (longTimer.current) clearTimeout(longTimer.current);
    longTimer.current = null;
  };

  // Clamped position logic to keep the bead within the viewport
  const clampPos = (p: { x: number; y: number }) => {
    const size = 76;
    const maxX = window.innerWidth - size - 12;
    const maxY = window.innerHeight - size - 12;
    return {
      x: Math.min(Math.max(12, p.x), maxX),
      y: Math.min(Math.max(12, p.y), maxY),
    };
  };

  // Default starting position: top-right corner
  const defaultPos = () => {
    if (typeof window === "undefined") return { x: 16, y: 16 };
    return { x: window.innerWidth - 76 - 12, y: 12 };
  };
  
  const currentPos = pos ? clampPos(pos) : defaultPos();

  // Keep position inside viewport on resize
  useEffect(() => {
    const handleResize = () => {
      setPos((prev) => {
        if (!prev) return null;
        const size = 76;
        const maxX = window.innerWidth - size - 12;
        const maxY = window.innerHeight - size - 12;
        const clampedX = Math.min(Math.max(12, prev.x), maxX);
        const clampedY = Math.min(Math.max(12, prev.y), maxY);
        if (clampedX !== prev.x || clampedY !== prev.y) {
          return { x: clampedX, y: clampedY };
        }
        return prev;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    longFired.current = false;
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: currentPos.x,
      origY: currentPos.y,
      moved: false,
      pointerId: e.pointerId,
    };
    longTimer.current = setTimeout(() => {
      // Long-press reset (only if not dragging)
      if (dragState.current && !dragState.current.moved) {
        longFired.current = true;
        setCount(0);
        setElapsed(0);
        setRunning(false);
        startedAt.current = null;
        setResetting(true);
        vibrate([20, 30, 60]);
        setTimeout(() => setResetting(false), 600);
      }
    }, 550);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const ds = dragState.current;
    if (!ds) return;
    const dx = e.clientX - ds.startX;
    const dy = e.clientY - ds.startY;
    if (!ds.moved && Math.hypot(dx, dy) > 6) {
      ds.moved = true;
      setDragging(true);
      cancelLong();
    }
    if (ds.moved) {
      const size = 76;
      const maxX = window.innerWidth - size - 12;
      const maxY = window.innerHeight - size - 12;
      const nx = Math.min(Math.max(12, ds.origX + dx), maxX);
      const ny = Math.min(Math.max(12, ds.origY + dy), maxY);
      setPos({ x: nx, y: ny });
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    cancelLong();
    const ds = dragState.current;
    dragState.current = null;
    setDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    if (ds && !ds.moved && !longFired.current) {
      inc();
    }
  };

  const onPointerCancel = () => {
    cancelLong();
    dragState.current = null;
    setDragging(false);
  };

  return (
    <button
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onContextMenu={(e) => e.preventDefault()}
      aria-label={`Jaap counter ${count}`}
      style={{
        position: "fixed",
        left: currentPos.x,
        top: currentPos.y,
        touchAction: "none",
        transition: dragging ? "none" : "left 0.4s cubic-bezier(0.19, 1, 0.22, 1), top 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.15s ease",
      }}
      className={cn(
        "group z-50 h-[76px] w-[76px] select-none rounded-full outline-none bg-transparent border-0 p-0",
        "transition-all duration-150 active:scale-90 cursor-grab active:cursor-grabbing",
        pulse && "animate-tap",
        resetting && "animate-pulse-glow",
        className
      )}
    >
      {/* Subtle divine wave accent */}
      <span className="divine-pulse-wave" />

      {/* Real Rudraksha image — slow rotation in place */}
      <span className="rudraksha-img absolute inset-0 grid place-items-center rounded-full overflow-hidden">
        <img
          src={rudraksha3dImg}
          alt=""
          aria-hidden
          className={cn(
            "rudraksha-img__face h-full w-full object-cover transition-transform duration-200",
            pulse && "scale-110"
          )}
          draggable={false}
        />
        {/* Realistic 3D shading Vignette */}
        <span aria-hidden className="rudraksha-shading absolute inset-0 rounded-full" />
        <span className="rudraksha-img__count absolute font-devanagari-strong text-[26px] font-black leading-none text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)] tracking-tight">
          {count > 9999 ? "∞" : toDevanagari(count)}
        </span>
      </span>
      {/* Lens flare overlay */}
      <span aria-hidden className="rudraksha-highlight absolute inset-0 rounded-full opacity-65" />

      {/* Chant timer — only visible after the user starts chanting */}
      {(running || elapsed > 0) && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/55 px-1.5 py-0.5 font-mono text-[10px] font-bold leading-none text-amber-100 shadow-[0_2px_6px_rgba(0,0,0,0.5)] backdrop-blur-sm"
        >
          {formatHMS(elapsed)}
        </span>
      )}
    </button>
  );
};