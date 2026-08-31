import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "primary" | "gold" | "paper" | "navy" | "leaf" | "coral";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  primary: "bg-sky text-paper hover:bg-sky-deep",
  gold: "bg-gold text-navy hover:bg-gold-deep hover:text-paper",
  paper: "bg-paper text-navy hover:bg-sky-soft",
  navy: "bg-navy text-paper hover:bg-ink",
  leaf: "bg-leaf text-paper hover:brightness-95",
  coral: "bg-coral text-paper hover:brightness-95",
};

export function PressButton({ className, tone = "primary", children, ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5",
        "font-display text-base font-extrabold shadow-[var(--shadow-card)]",
        "transition-[transform,box-shadow,background-color] duration-150 ease-out",
        "active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
