import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, List, Maximize, X } from "lucide-react";
import { SLIDE_IDS, SLIDES, type SlideId } from "@/data/lesson";
import { KazakhFlag } from "@/components/kazakh-flag";
import { PressButton } from "@/components/press-button";
import {
  DutiesSlide,
  FinishSlide,
  GameSlide,
  HistorySlide,
  HookSlide,
  NewsSlide,
  QuizSlide,
  RightsSlide,
  SymbolsSlide,
  TitleSlide,
  ValuesSlide,
  WhatSlide,
} from "@/components/slides";
import { cn } from "@/lib/cn";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState(false);
  const slide = SLIDES[index];
  const last = SLIDES.length - 1;

  const go = useCallback((next: number) => {
    setMenu(false);
    setIndex(Math.max(0, Math.min(last, next)));
  }, [last]);

  const jump = useCallback(
    (id: SlideId) => {
      const i = SLIDE_IDS.indexOf(id);
      if (i >= 0) go(i);
    },
    [go],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLElement && event.target.closest("button, a, input")) {
        return;
      }
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        go(index + 1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(index - 1);
      }
      if (event.key === "Escape") setMenu(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  useEffect(() => {
    let startX = 0;
    let ignore = false;
    function down(event: TouchEvent) {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("button, a, input")) {
        ignore = true;
        return;
      }
      ignore = false;
      startX = event.changedTouches[0]?.clientX ?? 0;
    }
    function up(event: TouchEvent) {
      if (ignore) return;
      const x = event.changedTouches[0]?.clientX ?? 0;
      const delta = x - startX;
      if (delta < -60) go(index + 1);
      if (delta > 60) go(index - 1);
    }
    window.addEventListener("touchstart", down, { passive: true });
    window.addEventListener("touchend", up, { passive: true });
    return () => {
      window.removeEventListener("touchstart", down);
      window.removeEventListener("touchend", up);
    };
  }, [go, index]);

  function fullscreen() {
    const node = document.documentElement;
    if (!document.fullscreenElement) void node.requestFullscreen();
    else void document.exitFullscreen();
  }

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-cream text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#d8f4f8,_transparent_42%)]" />
      <header className="relative z-10">
        <KazakhFlag className="h-3 rounded-none object-cover sm:h-4" />
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-extrabold uppercase tracking-wide text-sky-deep">
              {slide.kicker}
            </p>
            <p className="truncate font-display text-sm font-extrabold text-navy sm:text-base">
              {index + 1} / {SLIDES.length} · {slide.title}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setMenu((v) => !v)}
            className="grid size-11 place-items-center rounded-full bg-paper text-navy shadow-[var(--shadow-card)]"
            aria-label="Содержание"
          >
            {menu ? <X className="size-5" /> : <List className="size-5" />}
          </button>
          <button
            type="button"
            onClick={fullscreen}
            className="grid size-11 place-items-center rounded-full bg-paper text-navy shadow-[var(--shadow-card)]"
            aria-label="На весь экран"
          >
            <Maximize className="size-5" />
          </button>
        </div>
        <div className="h-1.5 bg-sky-soft">
          <div
            className="h-full bg-sky transition-[width] duration-300"
            style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
          />
        </div>
      </header>

      {menu ? (
        <nav className="absolute inset-x-3 top-24 z-20 max-h-[70dvh] overflow-auto rounded-3xl bg-paper p-3 shadow-[var(--shadow-pop)] sm:right-6 sm:left-auto sm:w-80">
          {SLIDES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left",
                i === index ? "bg-sky text-paper" : "text-navy hover:bg-sky-soft",
              )}
            >
              <span className="grid size-8 place-items-center rounded-full bg-gold font-display text-sm font-extrabold text-navy">
                {i + 1}
              </span>
              <span className="font-display text-sm font-extrabold">{item.title}</span>
            </button>
          ))}
        </nav>
      ) : null}

      <main className="relative z-10 min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-6">
        <div key={slide.id} className="mx-auto w-full max-w-6xl slide-enter">
          {slide.id === "title" ? (
            <TitleSlide onStart={() => go(1)} onJump={jump} />
          ) : null}
          {slide.id === "hook" ? <HookSlide /> : null}
          {slide.id === "what" ? <WhatSlide /> : null}
          {slide.id === "history" ? <HistorySlide /> : null}
          {slide.id === "news" ? <NewsSlide /> : null}
          {slide.id === "rights" ? <RightsSlide /> : null}
          {slide.id === "duties" ? <DutiesSlide /> : null}
          {slide.id === "symbols" ? <SymbolsSlide /> : null}
          {slide.id === "values" ? <ValuesSlide /> : null}
          {slide.id === "game" ? <GameSlide /> : null}
          {slide.id === "quiz" ? <QuizSlide /> : null}
          {slide.id === "finish" ? <FinishSlide onAgain={() => go(0)} /> : null}
        </div>
      </main>

      <footer className="relative z-10 flex items-center gap-3 px-4 pb-4 pt-3 sm:px-6">
        <PressButton
          tone="paper"
          className="min-w-11 px-3"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Назад"
        >
          <ChevronLeft className="size-5" />
        </PressButton>
        <div className="flex min-w-0 flex-1 justify-center gap-1.5 overflow-hidden">
          {SLIDES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.title}
              onClick={() => go(i)}
              className={cn(
                "h-2.5 rounded-full transition-[width,background-color] duration-200",
                i === index ? "w-7 bg-sky" : "w-2.5 bg-navy/20 hover:bg-navy/40",
              )}
            />
          ))}
        </div>
        <PressButton
          tone="primary"
          className="min-w-11 px-3 sm:px-4"
          onClick={() => go(index + 1)}
          disabled={index === last}
          aria-label="Дальше"
        >
          <span className="hidden md:inline">{index === last ? "Конец" : "Дальше"}</span>
          <ChevronRight className="size-5" />
        </PressButton>
      </footer>
    </div>
  );
}
