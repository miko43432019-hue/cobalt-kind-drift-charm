import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BookOpen, a as Sun, c as RotateCcw, d as List, f as Landmark, g as Check, h as ChevronLeft, i as Trees, l as Music, m as ChevronRight, n as Users, o as Sparkles, p as Heart, s as Shield, t as X, u as Maximize } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFJLzKf8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDE_IDS = [
	"title",
	"hook",
	"what",
	"history",
	"news",
	"rights",
	"duties",
	"symbols",
	"values",
	"game",
	"quiz",
	"finish"
];
var SLIDES = [
	{
		id: "title",
		title: "Наш главный закон",
		kicker: "Басты заң"
	},
	{
		id: "hook",
		title: "Секрет вчерашнего дня",
		kicker: "Не обычный обычный день"
	},
	{
		id: "what",
		title: "Что это такое?",
		kicker: "Конституция"
	},
	{
		id: "history",
		title: "Машина времени",
		kicker: "1991 → 2026"
	},
	{
		id: "news",
		title: "Что изменилось?",
		kicker: "Жаңа Конституция"
	},
	{
		id: "rights",
		title: "Твои права",
		kicker: "Құқық"
	},
	{
		id: "duties",
		title: "Твои дела",
		kicker: "Міндет"
	},
	{
		id: "symbols",
		title: "Символы страны",
		kicker: "Ту · Елтаңба · Әнұран"
	},
	{
		id: "values",
		title: "Три слова",
		kicker: "Адал · Зерделі · Жауапты"
	},
	{
		id: "game",
		title: "Право или обязанность?",
		kicker: "Игра"
	},
	{
		id: "quiz",
		title: "Супер-квиз",
		kicker: "Проверка"
	},
	{
		id: "finish",
		title: "Ты — гражданин",
		kicker: "Адал азамат"
	}
];
var HISTORY = [
	{
		year: "1991",
		stamp: "16 декабря",
		title: "Мы независимые!",
		text: "Казахстан стал своей страной. С этого дня мы сами пишем свои правила."
	},
	{
		year: "1993",
		stamp: "Первая книга",
		title: "Первые правила",
		text: "Появилась первая Конституция независимого Казахстана."
	},
	{
		year: "1995",
		stamp: "30 августа",
		title: "Большой праздник",
		text: "Народ принял Конституцию, которая жила больше 30 лет. Этот день стал праздником."
	},
	{
		year: "2026",
		stamp: "15 марта",
		title: "Новая глава",
		text: "Почти 9 из 10 проголосовавших сказали «да». 1 июля новые правила заработали."
	}
];
var NEWS = [
	{
		kz: "Құрылтай",
		ru: "Один парламент",
		text: "Раньше было две палаты. Теперь один Құрылтай — 145 депутатов, которых выбирает народ."
	},
	{
		kz: "Халық Кеңесі",
		ru: "Народный совет",
		text: "Обычные люди могут советовать, предлагать законы и даже просить голосование всей страны."
	},
	{
		kz: "Вице-президент",
		ru: "Помощник",
		text: "У Президента снова есть вице-президент. Он помогает руководить страной."
	}
];
var RIGHTS = [
	{
		title: "Жить и иметь имя",
		text: "Ты гражданин Казахстана. У тебя есть имя, семья и страна."
	},
	{
		title: "Учиться",
		text: "Школа — твоё право. Знания открывают дорогу."
	},
	{
		title: "Играть и отдыхать",
		text: "После уроков можно бегать, рисовать и просто быть ребёнком."
	},
	{
		title: "Быть здоровым",
		text: "Если заболел — тебе помогут врачи."
	},
	{
		title: "Жить в семье",
		text: "Тебя должны любить, кормить и защищать."
	},
	{
		title: "Говорить своё мнение",
		text: "Можно думать по-своему и спокойно это сказать."
	}
];
var DUTIES = [
	{
		title: "Соблюдать законы",
		text: "Правила работают, только если их все выполняют."
	},
	{
		title: "Уважать символы",
		text: "Флаг, герб и гимн — это лицо нашей страны."
	},
	{
		title: "Уважать людей",
		text: "Одноклассник, учитель, сосед — у каждого тоже есть права."
	},
	{
		title: "Беречь природу",
		text: "Степь, реки, горы и звери — наш общий дом."
	},
	{
		title: "Хорошо учиться",
		text: "Твой труд сегодня — сила страны завтра."
	},
	{
		title: "Защищать Родину",
		text: "Когда вырастешь, страна будет рассчитывать на тебя."
	}
];
var VALUES = [
	{
		kz: "Адал азамат",
		ru: "Честный гражданин",
		text: "Не обманывает, держит слово, поступает по совести."
	},
	{
		kz: "Зерделі ұлт",
		ru: "Мудрая нация",
		text: "Любит учиться, ценит язык, историю и культуру."
	},
	{
		kz: "Жауапты қоғам",
		ru: "Ответственное общество",
		text: "Заботится о людях, природе и будущем страны."
	}
];
var GAME = [
	{
		phrase: "Отдыхать и играть после школы",
		kind: "right"
	},
	{
		phrase: "Уважать флаг, герб и гимн",
		kind: "duty"
	},
	{
		phrase: "Получать помощь врача, если заболел",
		kind: "right"
	},
	{
		phrase: "Не мусорить и беречь природу",
		kind: "duty"
	},
	{
		phrase: "Иметь имя и гражданство",
		kind: "right"
	},
	{
		phrase: "Соблюдать правила дороги",
		kind: "duty"
	},
	{
		phrase: "Жить в семье и получать заботу",
		kind: "right"
	},
	{
		phrase: "Уважать старших и одноклассников",
		kind: "duty"
	},
	{
		phrase: "Высказывать своё мнение",
		kind: "right"
	},
	{
		phrase: "Говорить правду и быть адал",
		kind: "duty"
	}
];
var QUIZ = [
	{
		question: "Конституция — это…",
		options: [
			"Главный закон страны",
			"Школьный дневник",
			"Название города"
		],
		answer: 0
	},
	{
		question: "Кто живёт по Конституции?",
		options: [
			"Только Президент",
			"Все: взрослые и дети",
			"Только учителя"
		],
		answer: 1
	},
	{
		question: "Когда народ принял новую Конституцию?",
		options: [
			"1 января 2000",
			"15 марта 2026",
			"9 мая 1945"
		],
		answer: 1
	},
	{
		question: "Как теперь называется парламент?",
		options: [
			"Базар",
			"Школа",
			"Құрылтай"
		],
		answer: 2
	},
	{
		question: "Какого цвета флаг Казахстана?",
		options: [
			"Небесно-голубой",
			"Красный",
			"Зелёный"
		],
		answer: 0
	},
	{
		question: "Что в центре герба?",
		options: [
			"Мяч",
			"Шанырак — купол юрты",
			"Книга"
		],
		answer: 1
	},
	{
		question: "Как называется гимн?",
		options: [
			"Колыбельная",
			"День рождения",
			"Менің Қазақстаным"
		],
		answer: 2
	},
	{
		question: "Когда теперь День Конституции?",
		options: [
			"15 марта",
			"31 декабря",
			"1 апреля"
		],
		answer: 0
	},
	{
		question: "«Адал азамат» значит…",
		options: [
			"Быстрый бегун",
			"Честный гражданин",
			"Громкий певец"
		],
		answer: 1
	},
	{
		question: "Беречь природу — это…",
		options: [
			"Обязанность",
			"Только для взрослых",
			"Неважно"
		],
		answer: 0
	}
];
var HOOK_OPTIONS = [
	{
		text: "Все часы в стране остановились",
		funny: "Тик-так? Нет, часы работали как всегда."
	},
	{
		text: "Солнце встало зелёным",
		funny: "Было бы круто, но небо было обычное."
	},
	{
		text: "Это был просто обычный день",
		funny: "Да! И в этом как раз секрет."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function KazakhFlag({ className, waving = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/symbols/flag.svg",
		alt: "Флаг Республики Казахстан",
		className: cn("block h-auto w-full rounded-lg object-cover shadow-[var(--shadow-card)]", waving && "wiggle", className)
	});
}
var tones = {
	primary: "bg-sky text-paper hover:bg-sky-deep",
	gold: "bg-gold text-navy hover:bg-gold-deep hover:text-paper",
	paper: "bg-paper text-navy hover:bg-sky-soft",
	navy: "bg-navy text-paper hover:bg-ink",
	leaf: "bg-leaf text-paper hover:brightness-95",
	coral: "bg-coral text-paper hover:brightness-95"
};
function PressButton({ className, tone = "primary", children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5", "font-display text-base font-extrabold shadow-[var(--shadow-card)]", "transition-[transform,box-shadow,background-color] duration-150 ease-out", "active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50", tones[tone], className),
		...props,
		children
	});
}
function EmblemBadge({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden rounded-full bg-sand shadow-[var(--shadow-pop)]", "ring-4 ring-gold", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/emblem.jpg",
			alt: "Герб Республики Казахстан",
			className: "size-full scale-[1.35] object-cover object-[center_32%]"
		})
	});
}
function Mascot({ line, size = "md", className }) {
	const box = size === "lg" ? "size-28" : size === "sm" ? "size-14" : "size-20";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-end gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/berkut.jpg",
			alt: "Беркут — орёл-помощник",
			className: cn(box, "floaty rounded-full object-cover shadow-[var(--shadow-card)]")
		}), line ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-xs rounded-[22px] rounded-bl-sm bg-paper px-4 py-3 text-sm font-semibold leading-snug text-navy shadow-[var(--shadow-card)]",
			children: line
		}) : null]
	});
}
var ctx = null;
function context() {
	if (typeof window === "undefined") return null;
	ctx ??= new AudioContext();
	return ctx;
}
function playTone(ok) {
	const audio = context();
	if (!audio) return;
	audio.resume();
	const now = audio.currentTime;
	const osc = audio.createOscillator();
	const gain = audio.createGain();
	osc.type = "triangle";
	osc.frequency.setValueAtTime(ok ? 660 : 196, now);
	if (ok) osc.frequency.exponentialRampToValueAtTime(880, now + .12);
	gain.gain.setValueAtTime(.07, now);
	gain.gain.exponentialRampToValueAtTime(.001, now + .22);
	osc.connect(gain);
	gain.connect(audio.destination);
	osc.start(now);
	osc.stop(now + .24);
}
function QuizShow() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const done = index >= QUIZ.length;
	const item = QUIZ[Math.min(index, QUIZ.length - 1)];
	const title = (0, import_react.useMemo)(() => {
		if (score >= 9) return "Ты знаток Конституции!";
		if (score >= 6) return "Сильный результат";
		return "Хорошая разминка";
	}, [score]);
	function choose(i) {
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
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-5 slide-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/celebrate.jpg",
			alt: "Праздник в классе",
			className: "h-40 w-full rounded-3xl object-cover sm:h-52"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-paper p-6 text-center shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-extrabold uppercase tracking-wide text-sky-deep",
					children: "Квиз пройден"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-3xl font-extrabold text-navy",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-display text-2xl font-extrabold text-sky-deep",
					children: [
						score,
						" / ",
						QUIZ.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Беркут гордится тобой. Можешь пройти ещё раз или листать дальше."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PressButton, {
					tone: "gold",
					className: "mt-5",
					onClick: restart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Ещё раз"]
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-sm font-extrabold text-navy",
					children: [
						index + 1,
						" / ",
						QUIZ.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-full bg-sky px-3 py-1 text-sm font-extrabold text-paper",
					children: [score, " верно"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 overflow-hidden rounded-full bg-sky-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-gold transition-[width] duration-300",
					style: { width: `${(index + (picked !== null ? 1 : 0)) / QUIZ.length * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl bg-paper px-5 py-6 shadow-[var(--shadow-card)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl",
					children: item.question
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: item.options.map((option, i) => {
					const isAnswer = i === item.answer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => choose(i),
						disabled: picked !== null,
						className: cn("flex min-h-14 items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-left shadow-[var(--shadow-card)]", "font-display text-lg font-extrabold text-navy transition-[transform,background-color] duration-150", "active:scale-[0.96]", picked === null && "hover:bg-sky-soft", picked !== null && isAnswer && "bg-leaf text-paper", picked !== null && picked === i && !isAnswer && "bg-coral text-paper"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 shrink-0 place-items-center rounded-full bg-gold text-navy",
							children: String.fromCharCode(65 + i)
						}), option]
					}, option);
				})
			}),
			picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressButton, {
					tone: "navy",
					onClick: next,
					children: index + 1 === QUIZ.length ? "Результат" : "Следующий вопрос"
				})
			}) : null
		]
	});
}
function RightsGame() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const done = index >= GAME.length;
	const item = GAME[Math.min(index, GAME.length - 1)];
	const correct = picked !== null && picked === item.kind;
	const stars = (0, import_react.useMemo)(() => {
		if (!done) return 0;
		if (score >= 9) return 3;
		if (score >= 6) return 2;
		return 1;
	}, [done, score]);
	function choose(kind) {
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
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-5 slide-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/celebrate.jpg",
			alt: "Класс празднует",
			className: "h-40 w-full rounded-3xl object-cover sm:h-52"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-paper p-6 text-center shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm font-extrabold uppercase tracking-wide text-sky-deep",
					children: "Игра окончена"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-1 font-display text-3xl font-extrabold text-navy",
					children: [
						score,
						" из ",
						GAME.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: stars === 3 ? "Беркут в восторге! Ты отлично знаешь права и обязанности." : stars === 2 ? "Крепко! Ещё разок — и будет идеально." : "Хороший старт. Давай пройдём ещё раз вместе."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex justify-center gap-1 text-2xl text-gold",
					"aria-hidden": true,
					children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: i < stars ? "opacity-100" : "opacity-25",
						children: "★"
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PressButton, {
					tone: "gold",
					className: "mt-5",
					onClick: restart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Сыграть ещё"]
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-4xl gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-sm font-extrabold text-navy",
					children: [
						"Вопрос ",
						index + 1,
						" / ",
						GAME.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy",
					children: ["Очки ", score]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 overflow-hidden rounded-full bg-sky-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-sky transition-[width] duration-300",
					style: { width: `${index / GAME.length * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/game-poses.jpg",
				alt: "Руки вверх — право, руки на груди — обязанность",
				className: "h-36 w-full rounded-3xl object-cover sm:h-44"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-paper px-5 py-6 text-center shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold uppercase tracking-wide text-sky-deep",
					children: "Фраза"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl",
					children: item.phrase
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					label: "Это ПРАВО",
					hint: "Руки вверх, как солнце",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-7" }),
					tone: "gold",
					selected: picked === "right",
					locked: picked !== null,
					good: item.kind === "right",
					onClick: () => choose("right")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
					label: "Это ОБЯЗАННОСТЬ",
					hint: "Руки на груди",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-7" }),
					tone: "sky",
					selected: picked === "duty",
					locked: picked !== null,
					good: item.kind === "duty",
					onClick: () => choose("duty")
				})]
			}),
			picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex flex-col items-center gap-3 rounded-3xl px-5 py-4 text-center sm:flex-row sm:justify-between", correct ? "bg-leaf text-paper" : "bg-coral text-paper"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-extrabold",
					children: correct ? "Да! Так и есть." : `Это ${item.kind === "right" ? "право" : "обязанность"}.`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressButton, {
					tone: "paper",
					onClick: next,
					children: index + 1 === GAME.length ? "Результат" : "Дальше"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm font-semibold text-muted",
				children: "В классе можно вставать: солнце — право, руки на груди — обязанность."
			})
		]
	});
}
function Choice({ label, hint, icon, tone, selected, locked, good, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled: locked,
		className: cn("flex min-h-28 flex-col items-center justify-center gap-1 rounded-3xl p-4 text-center shadow-[var(--shadow-card)]", "transition-[transform,background-color] duration-150 ease-out active:scale-[0.96]", tone === "gold" ? "bg-gold text-navy" : "bg-sky text-paper", locked && !(locked && (selected || good)) && "opacity-50", locked && selected && good && "ring-4 ring-leaf", locked && selected && !good && "ring-4 ring-coral", locked && !selected && good && "ring-4 ring-leaf"),
		children: [
			locked && selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6" }) : icon,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl font-extrabold",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-semibold opacity-80",
				children: hint
			})
		]
	});
}
function TitleSlide({ onStart, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stagger-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "inline-flex rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy",
					children: "Классный час · 5 класс"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl",
					children: "Наш главный закон"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-extrabold text-sky-deep",
					children: "Басты заң"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-lg font-semibold leading-snug text-muted",
					children: "Конституция Казахстана — как правила школы, только для всей страны. Коротко, ярко и с игрой."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressButton, {
							tone: "primary",
							className: "min-h-12 px-6 text-lg",
							onClick: onStart,
							children: "Поехали"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressButton, {
							tone: "gold",
							onClick: () => onJump("game"),
							children: "Сразу в игру"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressButton, {
							tone: "paper",
							onClick: () => onJump("quiz"),
							children: "Сразу в квиз"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mascot, {
					className: "mt-6",
					line: "Я Беркут. Полетели узнавать правила страны!"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/classroom.jpg",
				alt: "Учитель и ученики в классе",
				className: "h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-pop)] sm:h-80 lg:h-[420px]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 left-3 w-24 sm:w-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KazakhFlag, {
					waving: true,
					className: "rounded-md"
				})
			})]
		})]
	});
}
function HookSlide() {
	const [picked, setPicked] = (0, import_react.useState)(null);
	const revealed = picked !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
				children: "Что вчера было необычным?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg font-semibold text-muted",
				children: "30 августа много лет был праздник. А вчера — вдруг обычный день. Почему?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3",
				children: HOOK_OPTIONS.map((option, i) => {
					const isCorrect = i === 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPicked(i),
						className: cn("rounded-2xl bg-paper px-4 py-4 text-left shadow-[var(--shadow-card)] transition-transform duration-150 active:scale-[0.96]", revealed && isCorrect && "bg-leaf text-paper", revealed && picked === i && !isCorrect && "bg-coral text-paper"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-extrabold",
							children: option.text
						}), revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm font-semibold opacity-90",
							children: option.funny
						}) : null]
					}, option.text);
				})
			}),
			revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 rounded-3xl bg-sky px-5 py-4 font-semibold leading-snug text-paper",
				children: [
					"Теперь День Конституции — ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "15 марта" }),
					". Вчера, 30 августа, впервые за 31 год был простой учебный день."
				]
			}) : null
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/yurt.jpg",
			alt: "Юрта, тулпары и беркут в степи",
			className: "h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:h-full"
		})]
	});
}
function WhatSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/kids-book.jpg",
			alt: "Дети с большой золотой книгой правил",
			className: "h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] sm:h-80"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stagger-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
					children: "Как устав школы, только больше"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg font-semibold leading-relaxed text-ink",
					children: "У школы есть правила: не опаздывать, уважать учителя, не обижать друзей."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-lg font-semibold leading-relaxed text-ink",
					children: [
						"У Казахстана тоже есть самые главные правила. Это ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Конституция" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 rounded-3xl bg-gold px-5 py-4 font-display text-xl font-extrabold text-navy",
					children: "По ней живут все: Президент, министры, мама, папа — и ты."
				})
			]
		})]
	});
}
function HistorySlide() {
	const [open, setOpen] = (0, import_react.useState)(3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
			children: "Прыгаем по годам"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-semibold text-muted",
			children: "Нажми на год — откроется история."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: HISTORY.map((item, i) => {
				const active = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(i),
					className: cn("rounded-3xl p-4 text-left shadow-[var(--shadow-card)] transition-transform duration-150 active:scale-[0.96]", active ? "bg-navy text-paper" : "bg-paper text-navy"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl font-extrabold text-gold",
							children: item.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-extrabold uppercase tracking-wide opacity-80",
							children: item.stamp
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-lg font-extrabold",
							children: item.title
						}),
						active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-semibold leading-snug",
							children: item.text
						}) : null
					]
				}, item.year);
			})
		})
	] });
}
function NewsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
			children: "Страна обновила правила"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl font-semibold text-muted",
			children: "15 марта 2026 года пришли голосовать больше 9 миллионов человек. Почти 9 из 10 сказали «да». 1 июля новая Конституция заработала."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid gap-4 lg:grid-cols-3",
			children: NEWS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl bg-paper p-5 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-extrabold text-sky-deep",
						children: item.kz
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-lg font-extrabold text-navy",
						children: item.ru
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-semibold leading-snug text-muted",
						children: item.text
					})
				]
			}, item.kz))
		})
	] });
}
function RightsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-[0.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/rights.jpg",
			alt: "Дети читают, играют, у врача и с семьёй",
			className: "h-56 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:h-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
			children: "Это твоё. Навсегда."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: RIGHTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-gold/80 p-4 text-navy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-extrabold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-semibold leading-snug",
					children: item.text
				})]
			}, item.title))
		})] })]
	});
}
function DutiesSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
			children: "А это уже твои дела"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: DUTIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-sky p-4 text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-extrabold",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-semibold leading-snug opacity-95",
					children: item.text
				})]
			}, item.title))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/duties.jpg",
			alt: "Дети берегут природу, помогают бабушке и держат флаг",
			className: "h-56 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:h-full"
		})]
	});
}
function SymbolsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
		children: "Три лица страны"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 grid gap-4 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl bg-paper p-5 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KazakhFlag, { waving: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl font-extrabold text-navy",
						children: "Флаг"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-semibold leading-snug text-muted",
						children: "Небесно-голубой — мир и чистое небо. Солнце как зёрна — достаток. Под ним золотой беркут. Слева — орнамент қошқар мүйіз."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex flex-col items-center rounded-3xl bg-paper p-5 text-center shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmblemBadge, { className: "size-40 sm:size-48" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl font-extrabold text-navy",
						children: "Герб"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-semibold leading-snug text-muted",
						children: "В центре шанырак — купол юрты, родной дом. По бокам тулпары, сверху звезда. Цвета — золото и голубой."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl bg-navy p-5 text-paper shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "size-10 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-2xl font-extrabold",
						children: "Гимн"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl font-extrabold text-gold",
						children: "Менің Қазақстаным"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-semibold leading-snug text-sky-soft",
						children: "«Мой Казахстан». Музыка Шамши Калдаякова. Слова Жумекена Нажимеденова и Нурсултана Назарбаева. Гимн страны с 2006 года."
					})
				]
			})
		]
	})] });
}
function ValuesSlide() {
	const icons = [
		Heart,
		BookOpen,
		Trees
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
		children: "Три слова, которые стоит помнить"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 grid gap-4 lg:grid-cols-3",
		children: VALUES.map((item, i) => {
			const Icon = icons[i] ?? Users;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-3xl bg-paper p-6 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-12 place-items-center rounded-2xl bg-gold text-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-2xl font-extrabold text-sky-deep",
						children: item.kz
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-extrabold text-navy",
						children: item.ru
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-semibold leading-snug text-muted",
						children: item.text
					})
				]
			}, item.kz);
		})
	})] });
}
function GameSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
			children: "Право или обязанность?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-semibold text-muted",
			children: "Нажми на ответ. В классе можно играть стоя."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-8 text-sky" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightsGame, {})] });
}
function QuizSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-wrap items-end justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
			children: "Супер-квиз"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-semibold text-muted",
			children: "10 коротких вопросов. Три варианта."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-8 text-gold-deep" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizShow, {})] });
}
function FinishSlide({ onAgain }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/art/celebrate.jpg",
			alt: "Ученики и учитель празднуют",
			className: "h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] sm:h-80"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "inline-flex rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-navy",
				children: "Диплом юного гражданина"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-extrabold text-navy",
				children: "Ты уже часть страны"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg font-semibold leading-relaxed text-muted",
				children: "Конституция — не скучная книга на полке. Это обещание: тебя защищают, а ты заботишься о других. Адал азамат начинается с малого — с правды, учёбы и доброты в своём классе."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mascot, {
				className: "mt-5",
				line: "Керемет! До встречи на следующем уроке."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressButton, {
				tone: "primary",
				className: "mt-6 min-h-12 px-6 text-lg",
				onClick: onAgain,
				children: "Смотреть сначала"
			})
		] })]
	});
}
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const slide = SLIDES[index];
	const last = SLIDES.length - 1;
	const go = (0, import_react.useCallback)((next) => {
		setMenu(false);
		setIndex(Math.max(0, Math.min(last, next)));
	}, [last]);
	const jump = (0, import_react.useCallback)((id) => {
		const i = SLIDE_IDS.indexOf(id);
		if (i >= 0) go(i);
	}, [go]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (event.target instanceof HTMLElement && event.target.closest("button, a, input")) return;
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
	(0, import_react.useEffect)(() => {
		let startX = 0;
		let ignore = false;
		function down(event) {
			const target = event.target;
			if (target instanceof HTMLElement && target.closest("button, a, input")) {
				ignore = true;
				return;
			}
			ignore = false;
			startX = event.changedTouches[0]?.clientX ?? 0;
		}
		function up(event) {
			if (ignore) return;
			const delta = (event.changedTouches[0]?.clientX ?? 0) - startX;
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
		if (!document.fullscreenElement) node.requestFullscreen();
		else document.exitFullscreen();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-dvh flex-col overflow-hidden bg-cream text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#d8f4f8,_transparent_42%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KazakhFlag, { className: "h-3 rounded-none object-cover sm:h-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 px-4 py-3 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs font-extrabold uppercase tracking-wide text-sky-deep",
									children: slide.kicker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-display text-sm font-extrabold text-navy sm:text-base",
									children: [
										index + 1,
										" / ",
										SLIDES.length,
										" · ",
										slide.title
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMenu((v) => !v),
								className: "grid size-11 place-items-center rounded-full bg-paper text-navy shadow-[var(--shadow-card)]",
								"aria-label": "Содержание",
								children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: fullscreen,
								className: "grid size-11 place-items-center rounded-full bg-paper text-navy shadow-[var(--shadow-card)]",
								"aria-label": "На весь экран",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-5" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 bg-sky-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-sky transition-[width] duration-300",
							style: { width: `${(index + 1) / SLIDES.length * 100}%` }
						})
					})
				]
			}),
			menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "absolute inset-x-3 top-24 z-20 max-h-[70dvh] overflow-auto rounded-3xl bg-paper p-3 shadow-[var(--shadow-pop)] sm:right-6 sm:left-auto sm:w-80",
				children: SLIDES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go(i),
					className: cn("flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left", i === index ? "bg-sky text-paper" : "text-navy hover:bg-sky-soft"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-full bg-gold font-display text-sm font-extrabold text-navy",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-extrabold",
						children: item.title
					})]
				}, item.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-6xl slide-enter",
					children: [
						slide.id === "title" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleSlide, {
							onStart: () => go(1),
							onJump: jump
						}) : null,
						slide.id === "hook" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookSlide, {}) : null,
						slide.id === "what" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatSlide, {}) : null,
						slide.id === "history" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistorySlide, {}) : null,
						slide.id === "news" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsSlide, {}) : null,
						slide.id === "rights" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightsSlide, {}) : null,
						slide.id === "duties" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DutiesSlide, {}) : null,
						slide.id === "symbols" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymbolsSlide, {}) : null,
						slide.id === "values" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValuesSlide, {}) : null,
						slide.id === "game" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameSlide, {}) : null,
						slide.id === "quiz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizSlide, {}) : null,
						slide.id === "finish" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinishSlide, { onAgain: () => go(0) }) : null
					]
				}, slide.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 flex items-center gap-3 px-4 pb-4 pt-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PressButton, {
						tone: "paper",
						className: "min-w-11 px-3",
						onClick: () => go(index - 1),
						disabled: index === 0,
						"aria-label": "Назад",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 flex-1 justify-center gap-1.5 overflow-hidden",
						children: SLIDES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": item.title,
							onClick: () => go(i),
							className: cn("h-2.5 rounded-full transition-[width,background-color] duration-200", i === index ? "w-7 bg-sky" : "w-2.5 bg-navy/20 hover:bg-navy/40")
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PressButton, {
						tone: "primary",
						className: "min-w-11 px-3 sm:px-4",
						onClick: () => go(index + 1),
						disabled: index === last,
						"aria-label": "Дальше",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:inline",
							children: index === last ? "Конец" : "Дальше"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
