import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { QUIZ } from "@/data/lesson";
import { PressButton } from "@/components/press-button";
import { cn } from "@/lib/cn";
import { playTone } from "@/lib/tone";

export function QuizShow() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const done = index >= QUIZ.length;
  const item = QUIZ[Math.min(index, QUIZ.length - 1)];

  const title = useMemo(() => {
    if (score >= 9) return "Ты знаток Конституции!";
    if (score >= 6) return "Сильный результат";
    return "Хорошая разминка";
  }, [score]);

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    const ok = i === item.answer;
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
          alt="Праздник в классе"
          className="h-40 w-full rounded-3xl object-cover sm:h-52"
        />
        <div className="rounded-3xl bg-paper p-6 text-center shadow-[var(--shadow-card)]">
          <p className="font-display text-sm font-extrabold uppercase tracking-wide text-sky-deep">
            Квиз пройден
          </p>
          <h3 className="mt-1 font-display text-3xl font-extrabold text-navy">{title}</h3>
          <p className="mt-2 font-display text-2xl font-extrabold text-sky-deep">
            {score} / {QUIZ.length}
          </p>
          <p className="mt-2 text-muted">
            Беркут гордится тобой. Можешь пройти ещё раз или листать дальше.
          </p>
          <PressButton tone="gold" className="mt-5" onClick={restart}>
            <RotateCcw className="size-4" />
            Ещё раз
          </PressButton>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm font-extrabold text-navy">
          {index + 1} / {QUIZ.length}
        </p>
        <p className="rounded-full bg-sky px-3 py-1 text-sm font-extrabold text-paper">
          {score} верно
        </p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-sky-soft">
        <div
          className="h-full rounded-full bg-gold transition-[width] duration-300"
          style={{ width: `${((index + (picked !== null ? 1 : 0)) / QUIZ.length) * 100}%` }}
        />
      </div>

      <div className="rounded-3xl bg-paper px-5 py-6 shadow-[var(--shadow-card)]">
        <p className="font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
          {item.question}
        </p>
      </div>

      <div className="grid gap-3">
        {item.options.map((option, i) => {
          const isAnswer = i === item.answer;
          const isPicked = picked === i;
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(i)}
              disabled={picked !== null}
              className={cn(
                "flex min-h-14 items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-left shadow-[var(--shadow-card)]",
                "font-display text-lg font-extrabold text-navy transition-[transform,background-color] duration-150",
                "active:scale-[0.96]",
                picked === null && "hover:bg-sky-soft",
                picked !== null && isAnswer && "bg-leaf text-paper",
                picked !== null && isPicked && !isAnswer && "bg-coral text-paper",
              )}
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold text-navy">
                {String.fromCharCode(65 + i)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {picked !== null ? (
        <div className="flex justify-end">
          <PressButton tone="navy" onClick={next}>
            {index + 1 === QUIZ.length ? "Результат" : "Следующий вопрос"}
          </PressButton>
        </div>
      ) : null}
    </div>
  );
}
