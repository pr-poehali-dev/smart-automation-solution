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

const questions: Question[] = [
  {
    id: 1,
    category: "Тропы",
    sentence: "«Ваш автомобиль _____ дороги» — реклама внедорожника, где машина уподобляется живому существу, покоряющему пространство.",
    blank: "пожирает километры",
    options: ["пожирает километры", "проезжает расстояние", "движется по трассе", "преодолевает путь"],
    correct: 0,
    explanation: "«Пожирает километры» — метафора. Неодушевлённому объекту (авто) приписывается действие живого существа, что создаёт образ мощи и скорости.",
  },
  {
    id: 2,
    category: "Фразеологизм",
    sentence: "Слоган кофе: «Нет времени _____ — выпей и действуй!» Устойчивое выражение подчёркивает ценность каждой минуты.",
    blank: "бить баклуши",
    options: ["работать медленно", "бить баклуши", "сидеть дома", "откладывать дела"],
    correct: 1,
    explanation: "«Бить баклуши» — фразеологизм со значением «бездельничать». Использование устойчивого оборота делает слоган живым и разговорным.",
  },
  {
    id: 3,
    category: "Гипербола",
    sentence: "Реклама энергетика: «Даёт _____ энергии». Намеренное преувеличение усиливает эффект от продукта.",
    blank: "крылья",
    options: ["много", "крылья", "заряд", "силы"],
    correct: 1,
    explanation: "«Крылья» — гипербола и метафора одновременно (Red Bull gives you wings). Невозможное преувеличение делает образ запоминающимся.",
  },
  {
    id: 4,
    category: "Антитеза",
    sentence: "Реклама страховки: «Маленький взнос — _____ спокойствие». Противопоставление усиливает выгоду.",
    blank: "большое",
    options: ["хорошее", "большое", "крепкое", "настоящее"],
    correct: 1,
    explanation: "Антитеза «маленький — большой» создаёт контраст между небольшой ценой и огромной ценностью, усиливая аргументацию.",
  },
  {
    id: 5,
    category: "Эпитет",
    sentence: "«_____ аромат утреннего кофе» — определение, создающее чувственный образ и апеллирующее к эмоциям покупателя.",
    blank: "бархатный",
    options: ["сильный", "хороший", "бархатный", "приятный"],
    correct: 2,
    explanation: "«Бархатный» — образный эпитет. В отличие от обычных определений («сильный», «приятный»), он создаёт тактильный образ нежности и роскоши.",
  },
  {
    id: 6,
    category: "Анафора",
    sentence: "«_____ вкус победы. _____ запах успеха. _____ ощущение свободы» — повтор в начале усиливает ритм и запоминаемость.",
    blank: "Почувствуй",
    options: ["Ощути", "Почувствуй", "Испытай", "Найди"],
    correct: 1,
    explanation: "Анафора — повторение одного слова в начале каждой части. «Почувствуй... Почувствуй... Почувствуй» создаёт ритм и гипнотический эффект.",
  },
]

export function QuizSection() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answered, setAnswered] = useState(false)

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
            Вставьте подходящий троп или фразеологизм в рекламное предложение.
          </p>
        </div>

        {!finished ? (
          <Card className="border border-border/50 shadow-xl bg-background">
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
                const variant: "outline" | "default" | "secondary" = "outline"
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
                : "Изучите материал и попробуйте снова."}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Правильных ответов: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </p>
            <Button
              onClick={handleRestart}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6"
            >
              Пройти ещё раз
            </Button>
          </Card>
        )}
      </div>
    </section>
  )
}
