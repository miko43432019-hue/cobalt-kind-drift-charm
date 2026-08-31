import { useState } from "react";
import {
  BookOpen,
  Heart,
  Landmark,
  Music,
  Sparkles,
  Trees,
  Users,
} from "lucide-react";
import {
  DUTIES,
  HISTORY,
  HOOK_OPTIONS,
  NEWS,
  RIGHTS,
  VALUES,
} from "@/data/lesson";
import { EmblemBadge } from "@/components/emblem-badge";
import { KazakhFlag } from "@/components/kazakh-flag";
import { Mascot } from "@/components/mascot";
import { PressButton } from "@/components/press-button";
import { QuizShow } from "@/components/quiz-show";
import { RightsGame } from "@/components/rights-game";
import { cn } from "@/lib/cn";

export function TitleSlide({
  onStart,
  onJump,
}: {
  onStart: () => void;
  onJump: (id: "game" | "quiz") => void;
}) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="stagger-in">
        <p className="inline-flex rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy">
          Классный час · 5 класс
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl">
          Наш главный закон
        </h1>
        <p className="mt-2 font-display text-2xl font-extrabold text-sky-deep">Басты заң</p>
        <p className="mt-4 max-w-md text-lg font-semibold leading-snug text-muted">
          Конституция Казахстана — как правила школы, только для всей страны. Коротко, ярко и с
          игрой.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <PressButton tone="primary" className="min-h-12 px-6 text-lg" onClick={onStart}>
            Поехали
          </PressButton>
          <PressButton tone="gold" onClick={() => onJump("game")}>
            Сразу в игру
          </PressButton>
          <PressButton tone="paper" onClick={() => onJump("quiz")}>
            Сразу в квиз
          </PressButton>
        </div>
        <Mascot className="mt-6" line="Я Беркут. Полетели узнавать правила страны!" />
      </div>
      <div className="relative">
        <img
          src="/art/classroom.jpg"
          alt="Учитель и ученики в классе"
          className="h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-pop)] sm:h-80 lg:h-[420px]"
        />
        <div className="absolute top-3 left-3 w-24 sm:w-32">
          <KazakhFlag waving className="rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function HookSlide() {
  const [picked, setPicked] = useState<number | null>(null);
  const revealed = picked !== null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Что вчера было необычным?
        </h2>
        <p className="mt-3 text-lg font-semibold text-muted">
          30 августа много лет был праздник. А вчера — вдруг обычный день. Почему?
        </p>
        <div className="mt-5 grid gap-3">
          {HOOK_OPTIONS.map((option, i) => {
            const isCorrect = i === 2;
            return (
              <button
                key={option.text}
                type="button"
                onClick={() => setPicked(i)}
                className={cn(
                  "rounded-2xl bg-paper px-4 py-4 text-left shadow-[var(--shadow-card)] transition-transform duration-150 active:scale-[0.96]",
                  revealed && isCorrect && "bg-leaf text-paper",
                  revealed && picked === i && !isCorrect && "bg-coral text-paper",
                )}
              >
                <span className="font-display text-lg font-extrabold">{option.text}</span>
                {revealed ? (
                  <span className="mt-1 block text-sm font-semibold opacity-90">{option.funny}</span>
                ) : null}
              </button>
            );
          })}
        </div>
        {revealed ? (
          <p className="mt-5 rounded-3xl bg-sky px-5 py-4 font-semibold leading-snug text-paper">
            Теперь День Конституции — <b>15 марта</b>. Вчера, 30 августа, впервые за 31 год был
            простой учебный день.
          </p>
        ) : null}
      </div>
      <img
        src="/art/yurt.jpg"
        alt="Юрта, тулпары и беркут в степи"
        className="h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:h-full"
      />
    </div>
  );
}

export function WhatSlide() {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-2">
      <img
        src="/art/kids-book.jpg"
        alt="Дети с большой золотой книгой правил"
        className="h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] sm:h-80"
      />
      <div className="stagger-in">
        <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Как устав школы, только больше
        </h2>
        <p className="mt-4 text-lg font-semibold leading-relaxed text-ink">
          У школы есть правила: не опаздывать, уважать учителя, не обижать друзей.
        </p>
        <p className="mt-3 text-lg font-semibold leading-relaxed text-ink">
          У Казахстана тоже есть самые главные правила. Это <b>Конституция</b>.
        </p>
        <p className="mt-3 rounded-3xl bg-gold px-5 py-4 font-display text-xl font-extrabold text-navy">
          По ней живут все: Президент, министры, мама, папа — и ты.
        </p>
      </div>
    </div>
  );
}

export function HistorySlide() {
  const [open, setOpen] = useState(3);
  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
        Прыгаем по годам
      </h2>
      <p className="mt-2 font-semibold text-muted">Нажми на год — откроется история.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {HISTORY.map((item, i) => {
          const active = open === i;
          return (
            <button
              key={item.year}
              type="button"
              onClick={() => setOpen(i)}
              className={cn(
                "rounded-3xl p-4 text-left shadow-[var(--shadow-card)] transition-transform duration-150 active:scale-[0.96]",
                active ? "bg-navy text-paper" : "bg-paper text-navy",
              )}
            >
              <p className="font-display text-3xl font-extrabold text-gold">{item.year}</p>
              <p className="mt-1 text-sm font-extrabold uppercase tracking-wide opacity-80">
                {item.stamp}
              </p>
              <p className="mt-3 font-display text-lg font-extrabold">{item.title}</p>
              {active ? <p className="mt-2 text-sm font-semibold leading-snug">{item.text}</p> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function NewsSlide() {
  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
        Страна обновила правила
      </h2>
      <p className="mt-2 max-w-2xl font-semibold text-muted">
        15 марта 2026 года пришли голосовать больше 9 миллионов человек. Почти 9 из 10 сказали
        «да». 1 июля новая Конституция заработала.
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {NEWS.map((item) => (
          <article
            key={item.kz}
            className="rounded-3xl bg-paper p-5 shadow-[var(--shadow-card)]"
          >
            <p className="font-display text-2xl font-extrabold text-sky-deep">{item.kz}</p>
            <p className="mt-1 font-display text-lg font-extrabold text-navy">{item.ru}</p>
            <p className="mt-3 font-semibold leading-snug text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function RightsSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <img
        src="/art/rights.jpg"
        alt="Дети читают, играют, у врача и с семьёй"
        className="h-56 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:h-full"
      />
      <div>
        <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
          Это твоё. Навсегда.
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {RIGHTS.map((item) => (
            <article key={item.title} className="rounded-2xl bg-gold/80 p-4 text-navy">
              <p className="font-display text-lg font-extrabold">{item.title}</p>
              <p className="mt-1 text-sm font-semibold leading-snug">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DutiesSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
          А это уже твои дела
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {DUTIES.map((item) => (
            <article key={item.title} className="rounded-2xl bg-sky p-4 text-paper">
              <p className="font-display text-lg font-extrabold">{item.title}</p>
              <p className="mt-1 text-sm font-semibold leading-snug opacity-95">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <img
        src="/art/duties.jpg"
        alt="Дети берегут природу, помогают бабушке и держат флаг"
        className="h-56 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:h-full"
      />
    </div>
  );
}

export function SymbolsSlide() {
  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
        Три лица страны
      </h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <article className="rounded-3xl bg-paper p-5 shadow-[var(--shadow-card)]">
          <KazakhFlag waving />
          <h3 className="mt-4 font-display text-2xl font-extrabold text-navy">Флаг</h3>
          <p className="mt-2 font-semibold leading-snug text-muted">
            Небесно-голубой — мир и чистое небо. Солнце как зёрна — достаток. Под ним золотой
            беркут. Слева — орнамент қошқар мүйіз.
          </p>
        </article>
        <article className="flex flex-col items-center rounded-3xl bg-paper p-5 text-center shadow-[var(--shadow-card)]">
          <EmblemBadge className="size-40 sm:size-48" />
          <h3 className="mt-4 font-display text-2xl font-extrabold text-navy">Герб</h3>
          <p className="mt-2 font-semibold leading-snug text-muted">
            В центре шанырак — купол юрты, родной дом. По бокам тулпары, сверху звезда. Цвета —
            золото и голубой.
          </p>
        </article>
        <article className="rounded-3xl bg-navy p-5 text-paper shadow-[var(--shadow-card)]">
          <Music className="size-10 text-gold" />
          <h3 className="mt-4 font-display text-2xl font-extrabold">Гимн</h3>
          <p className="mt-1 font-display text-xl font-extrabold text-gold">Менің Қазақстаным</p>
          <p className="mt-3 font-semibold leading-snug text-sky-soft">
            «Мой Казахстан». Музыка Шамши Калдаякова. Слова Жумекена Нажимеденова и Нурсултана
            Назарбаева. Гимн страны с 2006 года.
          </p>
        </article>
      </div>
    </div>
  );
}

export function ValuesSlide() {
  const icons = [Heart, BookOpen, Trees];
  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
        Три слова, которые стоит помнить
      </h2>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {VALUES.map((item, i) => {
          const Icon = icons[i] ?? Users;
          return (
            <article
              key={item.kz}
              className="rounded-3xl bg-paper p-6 shadow-[var(--shadow-card)]"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gold text-navy">
                <Icon className="size-6" />
              </span>
              <p className="mt-4 font-display text-2xl font-extrabold text-sky-deep">{item.kz}</p>
              <p className="font-display text-lg font-extrabold text-navy">{item.ru}</p>
              <p className="mt-3 font-semibold leading-snug text-muted">{item.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function GameSlide() {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Право или обязанность?
          </h2>
          <p className="mt-1 font-semibold text-muted">
            Нажми на ответ. В классе можно играть стоя.
          </p>
        </div>
        <Landmark className="size-8 text-sky" />
      </div>
      <RightsGame />
    </div>
  );
}

export function QuizSlide() {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Супер-квиз</h2>
          <p className="mt-1 font-semibold text-muted">10 коротких вопросов. Три варианта.</p>
        </div>
        <Sparkles className="size-8 text-gold-deep" />
      </div>
      <QuizShow />
    </div>
  );
}

export function FinishSlide({ onAgain }: { onAgain: () => void }) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-2">
      <img
        src="/art/celebrate.jpg"
        alt="Ученики и учитель празднуют"
        className="h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] sm:h-80"
      />
      <div>
        <p className="inline-flex rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy">
          Диплом юного гражданина
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold text-navy">Ты уже часть страны</h2>
        <p className="mt-4 text-lg font-semibold leading-relaxed text-muted">
          Конституция — не скучная книга на полке. Это обещание: тебя защищают, а ты заботишься о
          других. Адал азамат начинается с малого — с правды, учёбы и доброты в своём классе.
        </p>
        <Mascot className="mt-5" line="Керемет! До встречи на следующем уроке." />
        <PressButton tone="primary" className="mt-6 min-h-12 px-6 text-lg" onClick={onAgain}>
          Смотреть сначала
        </PressButton>
      </div>
    </div>
  );
}
