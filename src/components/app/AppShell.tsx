import { Link, useLocation } from "react-router-dom";
import { Chrome as Home, BookOpen, Settings as SettingsIcon, Flame, Heart, LeafyGreen } from "lucide-react";
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
  const location = useLocation();
  const pathname = location.pathname;
  const search = location.search;
  return (
    <>
      {/* Floating Rudraksha jaap bead — outside overflow container so it is never clipped */}
      <MiniJaap />
      <div className="relative mx-auto min-h-[100dvh] max-w-md overflow-x-hidden pb-24">
        {/* Settings gear — top right corner */}
        <Link
          to="/settings"
          aria-label="Settings"
          className={cn(
            "fixed top-4 right-4 z-50 grid h-10 w-10 place-items-center rounded-full border border-border/40 bg-card/70 backdrop-blur-md shadow-card transition-transform active:scale-90",
            pathname === "/settings" ? "text-primary" : "text-muted-foreground"
          )}
        >
          <SettingsIcon className="h-5 w-5" strokeWidth={1.5} />
        </Link>

        <div className="px-4 pt-6">{children}</div>

      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-4 pb-2">
        <div className="relative flex items-end justify-around rounded-[22px] border border-border/20 bg-card/60 px-3 pt-1.5 pb-1.5 backdrop-blur-2xl shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.25)]">
          {/* Left tabs */}
          {leftTabs.map((t) => {
            const active = pathname + search === t.to || (pathname === "/library" && search.includes(t.to.split("?")[1]));
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={t.label}
                className={cn(
                  "flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 transition-all duration-200",
                  active
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-foreground hover:scale-105"
                )}
              >
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
                <span className="font-devanagari text-[9px] leading-none mt-0.5">{t.label}</span>
              </Link>
            );
          })}

          {/* Center Home button — elevated */}
          <Link
            to="/"
            aria-label="Home"
            className={cn(
              "relative -mt-6 flex flex-col items-center",
            )}
          >
            <span className={cn(
              "grid h-[56px] w-[56px] place-items-center rounded-full border-[3px] border-card/60 shadow-[0_4px_20px_-4px_hsl(25_92%_52%/0.5)] transition-all duration-200 active:scale-90",
              pathname === "/"
                ? "bg-primary text-primary-foreground"
                : "bg-card/80 text-foreground backdrop-blur-sm"
            )}>
              <Home className="h-6 w-6" strokeWidth={2} />
            </span>
          </Link>

          {/* Right tabs */}
          {rightTabs.map((t) => {
            const active = pathname + search === t.to || (pathname === "/library" && search.includes(t.to.split("?")[1]));
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={t.label}
                className={cn(
                  "flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 transition-all duration-200",
                  active
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-foreground hover:scale-105"
                )}
              >
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
                <span className="font-devanagari text-[9px] leading-none mt-0.5">{t.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      </div>
    </>
  );
};
