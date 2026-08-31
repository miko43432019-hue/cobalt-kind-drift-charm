import { cn } from "@/lib/cn";

export function KazakhFlag({
  className,
  waving = false,
}: {
  className?: string;
  waving?: boolean;
}) {
  return (
    <img
      src="/symbols/flag.svg"
      alt="Флаг Республики Казахстан"
      className={cn(
        "block h-auto w-full rounded-lg object-cover shadow-[var(--shadow-card)]",
        waving && "wiggle",
        className,
      )}
    />
  );
}

export function FlagStrip() {
  return (
    <div className="overflow-hidden rounded-b-2xl">
      <KazakhFlag className="h-10 rounded-none object-cover sm:h-12" />
    </div>
  );
}
