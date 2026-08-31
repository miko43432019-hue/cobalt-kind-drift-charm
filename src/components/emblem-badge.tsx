import { cn } from "@/lib/cn";

export function EmblemBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-sand shadow-[var(--shadow-pop)]",
        "ring-4 ring-gold",
        className,
      )}
    >
      <img
        src="/art/emblem.jpg"
        alt="Герб Республики Казахстан"
        className="size-full scale-[1.35] object-cover object-[center_32%]"
      />
    </div>
  );
}
