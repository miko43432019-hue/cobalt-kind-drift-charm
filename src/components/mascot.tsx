import { cn } from "@/lib/cn";

export function Mascot({
  line,
  size = "md",
  className,
}: {
  line?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box = size === "lg" ? "size-28" : size === "sm" ? "size-14" : "size-20";

  return (
    <div className={cn("flex items-end gap-3", className)}>
      <img
        src="/art/berkut.jpg"
        alt="Беркут — орёл-помощник"
        className={cn(box, "floaty rounded-full object-cover shadow-[var(--shadow-card)]")}
      />
      {line ? (
        <p className="max-w-xs rounded-[22px] rounded-bl-sm bg-paper px-4 py-3 text-sm font-semibold leading-snug text-navy shadow-[var(--shadow-card)]">
          {line}
        </p>
      ) : null}
    </div>
  );
}
