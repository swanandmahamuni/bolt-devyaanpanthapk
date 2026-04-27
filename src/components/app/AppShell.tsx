import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Settings as SettingsIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { MiniJaap } from "@/components/app/MiniJaap";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/library", label: "Library", icon: BookOpen },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

export const AppShell = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <div className="relative mx-auto min-h-[100dvh] max-w-md overflow-hidden pb-24">
      <div className="px-4 pt-6">{children}</div>

      {/* Floating Rudraksha jaap bead — always visible */}
      <MiniJaap className="fixed right-3 top-3 z-50" />

      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-3 pb-3">
        <div className="glass flex items-center justify-around rounded-2xl px-2 py-2 shadow-soft">
          {tabs.map((t) => {
            const active =
              t.to === "/" ? pathname === "/" : pathname.startsWith(t.to);
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                className={cn(
                  "flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[11px] font-medium transition",
                  active
                    ? "bg-gradient-gold text-accent-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                {t.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
