import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { BrandTitle } from "@/components/app/BrandTitle";
import bapuImg from "@/assets/bapu.webp";

const Index = () => {
  return (
    <>
      <DivineBackground />
      <AppShell>
        <div className="relative flex min-h-[calc(100dvh-8.5rem)] flex-col items-center">
          {/* Om symbol */}
          <p className="mt-1 font-devanagari text-xs text-muted-foreground tracking-widest">
            ✻ <span className="text-base">ॐ</span> ✻
          </p>

          {/* Brand title */}
          <header className="mt-1 text-center">
            <h1 className="leading-tight">
              <BrandTitle size="lg" />
            </h1>
          </header>

          {/* Decorative divider */}
          <div className="mt-2 flex items-center gap-2">
            <span className="h-px w-12 bg-border/60" />
            <span className="h-1 w-16 rounded-full bg-primary/50" />
            <span className="h-px w-12 bg-border/60" />
          </div>

          {/* Sparkle diamonds + sacred mantra */}
          <p className="mt-2 flex items-center gap-1 font-devanagari text-xs text-muted-foreground">
            <span className="text-primary">✦</span>
            <span className="text-primary/70">✦</span>
            <span className="text-primary">✦</span>
          </p>
          <p className="font-devanagari text-sm tracking-wide text-foreground/80">
            ॥ हरि ॐ ॥ श्रीराम ॥ अंबज्ञ ॥
          </p>

          {/* Bapu photo */}
          <div className="mt-4 w-[72%] max-w-[280px]">
            <div className="bapu-frame overflow-hidden rounded-3xl border-2 border-primary/30 shadow-card">
              <img
                src={bapuImg}
                alt="परमपूज्य सद्गुरु श्री अनिरुद्ध बापू"
                className="aspect-[3/4] w-full object-cover object-top"
                width={280}
                height={373}
              />
            </div>
          </div>

          {/* Caption */}
          <p className="mt-3 font-devanagari text-sm font-semibold text-foreground">
            परमपूज्य सद्गुरु श्री अनिरुद्ध बापू
          </p>

          {/* Shloka card */}
          <div className="mt-4 mb-4 w-full rounded-2xl border border-border/40 bg-card/70 px-5 py-5 shadow-card backdrop-blur-sm text-center">
            <p className="mb-3 flex justify-center gap-1 text-primary">
              <span>✦</span><span className="text-sm">✦</span><span>✦</span>
            </p>
            <p className="shloka-text font-devanagari text-[15px] leading-loose text-foreground">
              गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।
            </p>
            <p className="shloka-text font-devanagari text-[15px] leading-loose text-foreground">
              गुरुःसाक्षात् परब्रह्म तस्मै श्रीगुरवे नम: ॥
            </p>
          </div>
        </div>
      </AppShell>
    </>
  );
};

export default Index;
