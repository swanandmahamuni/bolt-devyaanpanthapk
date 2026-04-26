import { cn } from "@/lib/utils";

/**
 * App brand wordmark — "देवयानपंथ" rendered with 3D calligraphy,
 * stacked shadows, gold glow and a sweeping lens-flare highlight.
 */
export const BrandTitle = ({ className, size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeCls =
    size === "sm" ? "text-2xl" : size === "md" ? "text-3xl" : "text-4xl";
  return (
    <span className={cn("brand-3d font-devanagari relative inline-block leading-none", sizeCls, className)}>
      <span className="brand-3d__text">देवयानपंथ</span>
      <span className="brand-3d__flare" aria-hidden />
    </span>
  );
};