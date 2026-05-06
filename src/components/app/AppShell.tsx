import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Settings as SettingsIcon, Flame, Heart, LeafyGreen } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { MiniJaap } from "@/components/app/MiniJaap";

const leftTabs = [
  { to: "/library?cat=stotra", label: "स्तोत्र", icon: BookOpen },
  { to: "/library?cat=aarti", label: "आरती", icon: Flame },
];
const rightTabs = [
  { to: "/library?cat=pujan-vidhi", label: "पूजन", icon: LeafyGreen },
  { to: "/library?cat=prarthana", label: "प्रार्थना", icon: Heart },
];

export const AppShell = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <div className="relative mx-auto min-h-[100dvh] max-w-md overflow-hidden pb-24">
      {/* Settings gear — top right */}
      <Link
        to="/settings"
        aria-label="Settings"
        className={cn(
          "fixed top-3 right-3 z-50 grid h-9 w-9 place-items-center rounded-full bg-card/70 backdrop-blur-md border border-border/40 shadow-soft transition-transform active:scale-90",
          pathname === "/settings" ? "text-primary" : "text-muted-foreground"
        )}
      >
        <SettingsIcon className="h-[18px] w-[18px]" strokeWidth={1.6} />
      </Link>

      <div className="px-4 pt-6">{children}</div>

      {/* Floating Rudraksha jaap bead — always visible, draggable */}
      <MiniJaap />

      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-2 pb-1">
        <div className="dock-bar relative flex items-end justify-around rounded-[22px] border border-border/20 bg-card/60 px-2 pt-1.5 pb-2 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
          {/* Left tabs */}
          {leftTabs.map((t) => {
            const active = pathname + window.location.search === t.to || (pathname === "/library" && window.location.search.includes(t.to.split("?")[1]));
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={t.label}
                className={cn(
                  "dock-icon flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 transition-all duration-200",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-6 w-6 transition-transform duration-200", active && "scale-110")} strokeWidth={1.5} />
                <span className="font-devanagari text-[9px] leading-none">{t.label}</span>
              </Link>
            );
          })}

          {/* Center Home button — elevated */}
          <Link
            to="/"
            aria-label="Home"
            className={cn(
              "relative -mt-5 flex flex-col items-center",
            )}
          >
            <span className={cn(
              "grid h-14 w-14 place-items-center rounded-full border-4 border-card/60 shadow-glow transition-transform duration-200 active:scale-90",
              pathname === "/"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground"
            )}>
              <Home className="h-6 w-6" strokeWidth={1.8} />
            </span>
          </Link>

          {/* Right tabs */}
          {rightTabs.map((t) => {
            const active = pathname + window.location.search === t.to || (pathname === "/library" && window.location.search.includes(t.to.split("?")[1]));
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={t.label}
                className={cn(
                  "dock-icon flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 transition-all duration-200",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-6 w-6 transition-transform duration-200", active && "scale-110")} strokeWidth={1.5} />
                <span className="font-devanagari text-[9px] leading-none">{t.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
