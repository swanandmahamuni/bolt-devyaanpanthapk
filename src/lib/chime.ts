let ctx: AudioContext | null = null;
export function playChime() {
  try {
    if (typeof window === "undefined") return;
    ctx ||= new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, now);
    o.frequency.exponentialRampToValueAtTime(523.25, now + 0.9);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);
    o.connect(g).connect(ctx.destination);
    o.start(now);
    o.stop(now + 1.5);
  } catch {}
}

export function vibrate(ms: number | number[] = 30) {
  try { (navigator as any)?.vibrate?.(ms); } catch {}
}
