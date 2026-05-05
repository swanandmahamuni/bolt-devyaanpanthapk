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
  { to: "/settings", label: "सेटिंग", icon: SettingsIcon },
];

export const AppShell = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <div className="relative mx-auto min-h-[100dvh] max-w-md overflow-hidden pb-24">
      <div className="px-4 pt-6">{children}</div>

      {/* Floating Rudraksha jaap bead — always visible, draggable */}
      <MiniJaap />

      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-2 pb-1">
        <div className="relative flex items-end justify-around rounded-[28px] border border-border/30 bg-card/80 px-1 pt-1 pb-1.5 backdrop-blur-xl shadow-card">
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
                  "flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-1 transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
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
              "grid h-14 w-14 place-items-center rounded-full border-4 border-card/80 shadow-glow transition-transform active:scale-95",
              pathname === "/"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground"
            )}>
              <Home className="h-6 w-6" strokeWidth={1.8} />
            </span>
          </Link>

          {/* Right tabs */}
          {rightTabs.map((t) => {
            const active = pathname + window.location.search === t.to || (t.to === "/settings" && pathname === "/settings") || (pathname === "/library" && window.location.search.includes(t.to.split("?")[1]));
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={t.label}
                className={cn(
                  "flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-1 transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                <span className="font-devanagari text-[9px] leading-none">{t.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
