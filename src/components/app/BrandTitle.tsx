import { cn } from "@/lib/utils";

/**
 * App brand wordmark — "देवयानपंथ" rendered with 3D golden calligraphy style.
 */
export const BrandTitle = ({ className, size = "lg" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizeCls =
    size === "sm" ? "text-2xl" : size === "md" ? "text-3xl" : "text-4xl";
  return (
    <span className={cn("brand-title font-devanagari relative inline-block leading-none", sizeCls, className)}>
      <span className="brand-title__text">देवयानपंथ</span>
    </span>
  );
};