import { cn } from "@/lib/utils";

export const BrandTitle = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  return (
    <span className={cn("brand-title inline-block", size === "lg" ? "text-3xl" : "text-xl")}>
      <span className="brand-title__text font-devanagari">देवयानपंथ</span>
    </span>
  );
};
