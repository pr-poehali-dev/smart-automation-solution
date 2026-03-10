import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

interface Question {
  id: number
  category: string
  sentence: string
  blank: string
  options: string[]
  correct: number
  explanation: string
}

const allQuestions: Question[] = [
  {
    id: 1,
    category: "Метафора",
    sentence: "«Ваш автомобиль _____ дороги» — реклама внедорожника, где машина уподобляется живому существу.",
    blank: "пожирает километры",
    options: ["пожирает километры", "проезжает расстояние", "движется по трассе", "преодолевает путь"],
    correct: 0,
    explanation: "«Пожирает километры» — метафора. Неодушевлённому объекту (авто) приписывается действие живого существа, что создаёт образ мощи и скорости.",
  },
  {
    id: 2,
    category: "Фразеологизм",
    sentence: "Слоган кофе: «Нет времени _____ — выпей и действуй!» Устойчивое выражение подчёркивает ценность минуты.",
    blank: "бить баклуши",
    options: ["работать медленно", "бить баклуши", "сидеть дома", "откладывать дела"],
    correct: 1,
    explanation: "«Бить баклуши» — фразеологизм со значением «бездельничать». Делает слоган живым и разговорным.",
  },
  {
    id: 3,
    category: "Гипербола",
    sentence: "Реклама энергетика: «Даёт _____». Намеренное преувеличение усиливает образ продукта.",
    blank: "крылья",
    options: ["много энергии", "крылья", "заряд бодрости", "силу духа"],
    correct: 1,
    explanation: "«Крылья» — гипербола и метафора (Red Bull gives you wings). Невозможное преувеличение делает образ незабываемым.",
  },
  {
    id: 4,
    category: "Антитеза",
    sentence: "Реклама страховки: «Маленький взнос — _____ спокойствие». Противопоставление усиливает выгоду.",
    blank: "большое",
    options: ["хорошее", "большое", "крепкое", "настоящее"],
    correct: 1,
    explanation: "Антитеза «маленький — большой» создаёт контраст между ценой и ценностью, усиливая аргументацию.",
  },
  {
    id: 5,
    category: "Эпитет",
    sentence: "«_____ аромат утреннего кофе» — определение, создающее чувственный образ и апеллирующее к эмоциям.",
    blank: "бархатный",
    options: ["сильный", "хороший", "бархатный", "приятный"],
    correct: 2,
    explanation: "«Бархатный» — образный эпитет. Создаёт тактильный образ нежности и роскоши в отличие от обычных прилагательных.",
  },
  {
    id: 6,
    category: "Анафора",
    sentence: "«_____ вкус победы. _____ запах успеха. _____ ощущение свободы» — повтор в начале усиливает ритм.",
    blank: "Почувствуй",
    options: ["Ощути", "Почувствуй", "Испытай", "Найди"],
    correct: 1,
    explanation: "Анафора — повторение слова в начале каждой части. «Почувствуй... Почувствуй... Почувствуй» создаёт гипнотический ритм.",
  },
  {
    id: 7,
    category: "Олицетворение",
    sentence: "«Твой телефон _____ твоё настроение» — рекламный слоган, где техника наделяется человеческой способностью.",
    blank: "понимает",
    options: ["улучшает", "понимает", "меняет", "определяет"],
    correct: 1,
    explanation: "«Понимает» — олицетворение. Гаджету приписывается человеческая психическая способность, что создаёт образ умного помощника.",
  },
  {
    id: 8,
    category: "Метонимия",
    sentence: "«Весь город говорит о новом вкусе» — в рекламе снека под «городом» подразумеваются его _____.",
    blank: "жители",
    options: ["улицы", "жители", "здания", "районы"],
    correct: 1,
    explanation: "Метонимия — замена понятия смежным. «Город» вместо «жители города» — перенос по смежности: место → люди, живущие там.",
  },
  {
    id: 9,
    category: "Литота",
    sentence: "«Один маленький глоток — и утро уже не страшно» — рекламный приём, противоположный гиперболе, называется _____.",
    blank: "литота",
    options: ["метафора", "литота", "эпифора", "градация"],
    correct: 1,
    explanation: "Литота — намеренное преуменьшение. «Маленький глоток» подчёркивает простоту и доступность продукта, снижая барьер.",
  },
  {
    id: 10,
    category: "Фразеологизм",
    sentence: "Слоган банка: «Мы работаем, чтобы деньги не лежали _____». Фразеологизм означает «без дела».",
    blank: "мёртвым грузом",
    options: ["в сейфе", "мёртвым грузом", "на счету", "без движения"],
    correct: 1,
    explanation: "«Мёртвым грузом» — устойчивый оборот со значением «без пользы, впустую». Делает текст образным и запоминающимся.",
  },
  {
    id: 11,
    category: "Градация",
    sentence: "«Быстрее. Умнее. _____» — слоган гаджета строится на нарастании признаков от меньшего к большему.",
    blank: "Сильнее",
    options: ["Лучше", "Сильнее", "Новее", "Дороже"],
    correct: 1,
    explanation: "Градация — последовательное усиление признака. «Быстрее → Умнее → Сильнее» создаёт ощущение мощи и превосходства продукта.",
  },
  {
    id: 12,
    category: "Риторический вопрос",
    sentence: "«Зачем переплачивать, если можно сэкономить?» — этот вопрос в рекламе не требует ответа, он называется _____.",
    blank: "риторическим",
    options: ["прямым", "риторическим", "косвенным", "закрытым"],
    correct: 1,
    explanation: "Риторический вопрос — вопрос, ответ на который очевиден. Вовлекает читателя в диалог и заставляет согласиться с аргументом.",
  },
  {
    id: 13,
    category: "Эпитет",
    sentence: "«_____ белизна» в рекламе стирального порошка — это не просто белый цвет, а усиленный образный признак.",
    blank: "кристальная",
    options: ["яркая", "кристальная", "чистая", "белоснежная"],
    correct: 1,
    explanation: "«Кристальная» — образный эпитет, рождающий ассоциации с прозрачностью, чистотой и совершенством. Обычное «белая» не даёт такого эффекта.",
  },
  {
    id: 14,
    category: "Каламбур",
    sentence: "«Оттяни — не тяни» (реклама Pepsi) — игра слов основана на разных значениях глагола _____ и устойчивого выражения.",
    blank: "тянуть",
    options: ["пить", "тянуть", "купить", "открыть"],
    correct: 1,
    explanation: "Каламбур — игра на многозначности слова. «Оттяни» (выпей, потяни вверх) и «не тяни» (не медли) — два значения одного корня.",
  },
  {
    id: 15,
    category: "Метафора",
    sentence: "«Наш крем — _____ для вашей кожи» — косметическая реклама использует образ питания для передачи идеи восстановления.",
    blank: "живая вода",
    options: ["хорошее средство", "живая вода", "полезный продукт", "натуральный состав"],
    correct: 1,
    explanation: "«Живая вода» — метафора из сказочного фольклора. Создаёт образ магического восстановления и молодости.",
  },
  {
    id: 16,
    category: "Анафора",
    sentence: "«_____ больше платить за воздух. _____ переплачивать за бренд. _____ мириться с низким качеством» — повтор «Хватит» в начале.",
    blank: "Хватит",
    options: ["Стоп", "Хватит", "Нельзя", "Забудь"],
    correct: 1,
    explanation: "Анафора «Хватит... Хватит... Хватит» создаёт накопительный эффект протеста, усиливая эмоциональный посыл рекламы.",
  },
  {
    id: 17,
    category: "Фразеологизм",
    sentence: "Слоган спортивного бренда: «Берём _____ за рога» — устойчивое выражение означает «действовать решительно».",
    blank: "быка",
    options: ["дело", "быка", "жизнь", "цель"],
    correct: 1,
    explanation: "«Взять быка за рога» — фразеологизм со значением «решительно взяться за трудное дело». Идеален для спортивного бренда.",
  },
  {
    id: 18,
    category: "Антитеза",
    sentence: "«_____ снаружи, мягкий внутри» — реклама шоколада строится на контрасте двух противоположных качеств.",
    blank: "Хрустящий",
    options: ["Сладкий", "Хрустящий", "Тёмный", "Горький"],
    correct: 1,
    explanation: "Антитеза «хрустящий — мягкий» передаёт сложную текстуру продукта через контраст. Читатель мгновенно «чувствует» вкус.",
  },
  {
    id: 19,
    category: "Звукопись",
    sentence: "«Шуршит, хрустит, _____, манит» — в рекламе чипсов звуки слов имитируют реальные звуки поедания — это _____.",
    blank: "аллитерация",
    options: ["метафора", "аллитерация", "градация", "инверсия"],
    correct: 1,
    explanation: "Аллитерация — повтор согласных звуков для создания звукового образа. «Шуршит, хрустит» буквально воспроизводит звук чипсов.",
  },
  {
    id: 20,
    category: "Инверсия",
    sentence: "«Качество немецкое, цена — _____» — необычный порядок слов ставит акцент на контрасте и делает фразу запоминающейся.",
    blank: "наша",
    options: ["низкая", "наша", "выгодная", "доступная"],
    correct: 1,
    explanation: "Инверсия — намеренное изменение привычного порядка слов. «Цена — наша» переносит акцент на принадлежность и гордость за цену.",
  },
  {
    id: 21,
    category: "Перифраз",
    sentence: "Вместо слова «автомобиль» реклама использует «_____ вашей свободы» — это замена прямого названия описательным оборотом.",
    blank: "железный конь",
    options: ["надёжный друг", "железный конь", "средство передвижения", "транспорт мечты"],
    correct: 1,
    explanation: "«Железный конь» — перифраз (описательный оборот вместо прямого слова). Добавляет поэтичность и образность к обычному существительному.",
  },
  {
    id: 22,
    category: "Эпифора",
    sentence: "«Думай иначе. Живи _____. Работай _____» — повторение слова в конце каждой части называется эпифорой.",
    blank: "иначе",
    options: ["смело", "иначе", "ярче", "лучше"],
    correct: 1,
    explanation: "Эпифора — повторение слова в конце смысловых отрезков. Противоположность анафоры. Создаёт замкнутый ритм и усиливает идею.",
  },
  {
    id: 23,
    category: "Фразеологизм",
    sentence: "Реклама турагентства: «Отдыхайте на _____!» — фразеологизм означает «в полную меру, не ограничивая себя».",
    blank: "всю катушку",
    options: ["полную мощь", "всю катушку", "весь экран", "всю широту"],
    correct: 1,
    explanation: "«На всю катушку» — разговорный фразеологизм со значением «в полной мере». Создаёт ощущение лёгкости и вседозволенности отдыха.",
  },
  {
    id: 24,
    category: "Метафора",
    sentence: "«Интернет — это _____ без границ» — рекламный слоган провайдера строит образ безграничного пространства.",
    blank: "океан возможностей",
    options: ["много сайтов", "океан возможностей", "широкая сеть", "большой выбор"],
    correct: 1,
    explanation: "«Океан возможностей» — метафора. Абстрактное понятие (интернет) получает чувственный образ огромного, безграничного пространства.",
  },
  {
    id: 25,
    category: "Гипербола",
    sentence: "«Мы готовим пиццу за _____ минут или возвращаем деньги» — в рекламе число нарочито мало для создания образа скорости.",
    blank: "30",
    options: ["60", "30", "45", "20"],
    correct: 1,
    explanation: "30 минут — реальное обещание, но в контексте рекламы воспринимается как гипербола скорости. Конкретная цифра усиливает доверие.",
  },
  {
    id: 26,
    category: "Оксюморон",
    sentence: "«_____ шоколад» (реклама диетического продукта) — соединение двух противоречивых понятий в одном образе.",
    blank: "Сладкий без сахара",
    options: ["Лёгкий и вкусный", "Сладкий без сахара", "Нежный и хрустящий", "Тёплый и освежающий"],
    correct: 1,
    explanation: "Оксюморон — соединение несовместимых понятий. «Сладкий без сахара» — логически противоречивое, но коммерчески притягательное утверждение.",
  },
  {
    id: 27,
    category: "Риторическое восклицание",
    sentence: "«Только сегодня! Только сейчас! _____!» — восклицание создаёт срочность и эмоциональный накал в рекламе акции.",
    blank: "Не упусти шанс",
    options: ["Покупай", "Не упусти шанс", "Звони", "Заходи"],
    correct: 1,
    explanation: "Риторическое восклицание усиливает эмоцию без логической аргументации. Создаёт ощущение уникальности момента и срочности.",
  },
  {
    id: 28,
    category: "Сравнение",
    sentence: "«Кожа, _____ шёлк» — реклама крема использует союзное сравнение для передачи тактильного ощущения.",
    blank: "мягкая как",
    options: ["нежная словно", "мягкая как", "гладкая будто", "чистая точно"],
    correct: 1,
    explanation: "«Мягкая как шёлк» — сравнение с союзом «как». Тактильный образ шёлка переносится на кожу, создавая ощущение роскоши.",
  },
  {
    id: 29,
    category: "Фразеологизм",
    sentence: "Слоган страховой компании: «Мы всегда _____ » — устойчивое выражение означает «готовы помочь в трудный момент».",
    blank: "придём на помощь",
    options: ["рядом с вами", "придём на помощь", "будем здесь", "не подведём"],
    correct: 1,
    explanation: "«Придти на помощь» — фразеологизированное сочетание с ярким образом. Вызывает доверие и ощущение надёжности.",
  },
  {
    id: 30,
    category: "Градация",
    sentence: "«Попробуй. Полюби. _____» — трёхчастная структура рекламного слогана строится на нарастании вовлечённости.",
    blank: "Останься навсегда",
    options: ["Купи ещё", "Останься навсегда", "Поделись с другом", "Расскажи всем"],
    correct: 1,
    explanation: "Градация «Попробуй → Полюби → Останься навсегда» показывает путь от первого контакта до полной лояльности — классическая воронка в трёх словах.",
  },
]

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function QuizSection() {
  const [questions] = useState(() => shuffle(allQuestions).slice(0, 10))
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [key, setKey] = useState(0)

  const q = questions[current]

  function handleSelect(idx: number) {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === q.correct) setScore((s) => s + 1)
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setFinished(true)
    }
  }

  function handleRestart() {
    setKey((k) => k + 1)
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setAnswered(false)
  }

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Интерактивные задания
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Проверьте свои{" "}
            <span className="text-primary relative">
              знания
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Вставьте подходящий троп или фразеологизм в рекламное предложение. Каждый раз — новый набор из 10 вопросов.
          </p>
        </div>

        {!finished ? (
          <Card key={key} className="border border-border/50 shadow-xl bg-background">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1">
                  {q.category}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium">
                  {current + 1} / {questions.length}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>
              <CardTitle className="text-xl leading-relaxed text-foreground font-normal">
                {q.sentence.replace(q.blank, "______")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {q.options.map((option, idx) => {
                let extraClass = "hover:border-primary/50 hover:bg-primary/5 cursor-pointer"
                if (answered) {
                  if (idx === q.correct) {
                    extraClass = "border-green-500 bg-green-500/10 text-green-400 cursor-default"
                  } else if (idx === selected && idx !== q.correct) {
                    extraClass = "border-red-500 bg-red-500/10 text-red-400 cursor-default"
                  } else {
                    extraClass = "opacity-50 cursor-default"
                  }
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left px-5 py-4 rounded-xl border border-border transition-all duration-200 flex items-center gap-3 ${extraClass}`}
                  >
                    <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="font-medium">{option}</span>
                    {answered && idx === q.correct && (
                      <Icon name="CheckCircle2" size={18} className="ml-auto text-green-400" />
                    )}
                    {answered && idx === selected && idx !== q.correct && (
                      <Icon name="XCircle" size={18} className="ml-auto text-red-400" />
                    )}
                  </button>
                )
              })}

              {answered && (
                <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Объяснение: </span>
                    {q.explanation}
                  </p>
                </div>
              )}

              {answered && (
                <Button
                  onClick={handleNext}
                  className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                >
                  {current + 1 < questions.length ? "Следующий вопрос →" : "Посмотреть результат →"}
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="border border-border/50 shadow-xl bg-background text-center p-10">
            <div className="text-6xl mb-6">
              {score === questions.length ? "🏆" : score >= questions.length / 2 ? "📚" : "💪"}
            </div>
            <h3 className="text-3xl font-bold mb-3">
              {score} из {questions.length}
            </h3>
            <p className="text-muted-foreground text-lg mb-2">
              {score === questions.length
                ? "Великолепно! Вы отлично знаете язык рекламы."
                : score >= questions.length / 2
                ? "Хороший результат! Есть куда расти."
                : "Изучите справочник и попробуйте снова."}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Правильных ответов: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </p>
            <Button
              onClick={handleRestart}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6"
            >
              Пройти ещё раз (новые вопросы)
            </Button>
          </Card>
        )}
      </div>
    </section>
  )
}
