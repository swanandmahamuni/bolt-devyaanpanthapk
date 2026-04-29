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

      {/* Floating Rudraksha jaap bead — always visible, draggable */}
      <MiniJaap />

      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-4 pb-2">
        <div className="flex items-center justify-around rounded-full border border-white/10 bg-background/30 px-2 py-1.5 backdrop-blur-md shadow-soft">
          {tabs.map((t) => {
            const active =
              t.to === "/" ? pathname === "/" : pathname.startsWith(t.to);
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                aria-label={t.label}
                className={cn(
                  "flex flex-1 items-center justify-center rounded-full px-2 py-1.5 transition",
                  active
                    ? "text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.55)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
