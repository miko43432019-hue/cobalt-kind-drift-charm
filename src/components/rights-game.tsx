import { useMemo, useState, type ReactNode } from "react";
import { Check, RotateCcw, Shield, Sun } from "lucide-react";
import { GAME, type GameKind } from "@/data/lesson";
import { PressButton } from "@/components/press-button";
import { cn } from "@/lib/cn";
import { playTone } from "@/lib/tone";

export function RightsGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<GameKind | null>(null);
  const done = index >= GAME.length;
  const item = GAME[Math.min(index, GAME.length - 1)];
  const correct = picked !== null && picked === item.kind;

  const stars = useMemo(() => {
    if (!done) return 0;
    if (score >= 9) return 3;
    if (score >= 6) return 2;
    return 1;
  }, [done, score]);

  function choose(kind: GameKind) {
    if (picked) return;
    setPicked(kind);
    const ok = kind === item.kind;
    if (ok) setScore((s) => s + 1);
    playTone(ok);
  }

  function next() {
    setPicked(null);
    setIndex((i) => i + 1);
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setPicked(null);
  }

  if (done) {
    return (
      <div className="mx-auto grid max-w-3xl gap-5 slide-enter">
        <img
          src="/art/celebrate.jpg"
          alt="Класс празднует"
          className="h-40 w-full rounded-3xl object-cover sm:h-52"
        />
        <div className="rounded-3xl bg-paper p-6 text-center shadow-[var(--shadow-card)]">
          <p className="font-display text-sm font-extrabold uppercase tracking-wide text-sky-deep">
            Игра окончена
          </p>
          <h3 className="mt-1 font-display text-3xl font-extrabold text-navy">
            {score} из {GAME.length}
          </h3>
          <p className="mt-2 text-muted">
            {stars === 3
              ? "Беркут в восторге! Ты отлично знаешь права и обязанности."
              : stars === 2
                ? "Крепко! Ещё разок — и будет идеально."
                : "Хороший старт. Давай пройдём ещё раз вместе."}
          </p>
          <div className="mt-4 flex justify-center gap-1 text-2xl text-gold" aria-hidden>
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className={i < stars ? "opacity-100" : "opacity-25"}>
                ★
              </span>
            ))}
          </div>
          <PressButton tone="gold" className="mt-5" onClick={restart}>
            <RotateCcw className="size-4" />
            Сыграть ещё
          </PressButton>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-4xl gap-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-sm font-extrabold text-navy">
          Вопрос {index + 1} / {GAME.length}
        </p>
        <p className="rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy">
          Очки {score}
        </p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-sky-soft">
        <div
          className="h-full rounded-full bg-sky transition-[width] duration-300"
          style={{ width: `${(index / GAME.length) * 100}%` }}
        />
      </div>

      <img
        src="/art/game-poses.jpg"
        alt="Руки вверх — право, руки на груди — обязанность"
        className="h-36 w-full rounded-3xl object-cover sm:h-44"
      />

      <div className="rounded-3xl bg-paper px-5 py-6 text-center shadow-[var(--shadow-card)]">
        <p className="text-sm font-bold uppercase tracking-wide text-sky-deep">Фраза</p>
        <p className="mt-2 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
          {item.phrase}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Choice
          label="Это ПРАВО"
          hint="Руки вверх, как солнце"
          icon={<Sun className="size-7" />}
          tone="gold"
          selected={picked === "right"}
          locked={picked !== null}
          good={item.kind === "right"}
          onClick={() => choose("right")}
        />
        <Choice
          label="Это ОБЯЗАННОСТЬ"
          hint="Руки на груди"
          icon={<Shield className="size-7" />}
          tone="sky"
          selected={picked === "duty"}
          locked={picked !== null}
          good={item.kind === "duty"}
          onClick={() => choose("duty")}
        />
      </div>

      {picked ? (
        <div
          className={cn(
            "flex flex-col items-center gap-3 rounded-3xl px-5 py-4 text-center sm:flex-row sm:justify-between",
            correct ? "bg-leaf text-paper" : "bg-coral text-paper",
          )}
        >
          <p className="font-display text-lg font-extrabold">
            {correct ? "Да! Так и есть." : `Это ${item.kind === "right" ? "право" : "обязанность"}.`}
          </p>
          <PressButton tone="paper" onClick={next}>
            {index + 1 === GAME.length ? "Результат" : "Дальше"}
          </PressButton>
        </div>
      ) : (
        <p className="text-center text-sm font-semibold text-muted">
          В классе можно вставать: солнце — право, руки на груди — обязанность.
        </p>
      )}
    </div>
  );
}

function Choice({
  label,
  hint,
  icon,
  tone,
  selected,
  locked,
  good,
  onClick,
}: {
  label: string;
  hint: string;
  icon: ReactNode;
  tone: "gold" | "sky";
  selected: boolean;
  locked: boolean;
  good: boolean;
  onClick: () => void;
}) {
  const show = locked && (selected || good);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={locked}
      className={cn(
        "flex min-h-28 flex-col items-center justify-center gap-1 rounded-3xl p-4 text-center shadow-[var(--shadow-card)]",
        "transition-[transform,background-color] duration-150 ease-out active:scale-[0.96]",
        tone === "gold" ? "bg-gold text-navy" : "bg-sky text-paper",
        locked && !show && "opacity-50",
        locked && selected && good && "ring-4 ring-leaf",
        locked && selected && !good && "ring-4 ring-coral",
        locked && !selected && good && "ring-4 ring-leaf",
      )}
    >
      {locked && selected ? <Check className="size-6" /> : icon}
      <span className="font-display text-xl font-extrabold">{label}</span>
      <span className="text-sm font-semibold opacity-80">{hint}</span>
    </button>
  );
}
