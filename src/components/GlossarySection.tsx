import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

interface Term {
  term: string
  category: string
  definition: string
  example: string
  adExample: string
}

const terms: Term[] = [
  {
    term: "Метафора",
    category: "Тропы",
    definition: "Перенос наименования с одного предмета на другой на основе их сходства. Называет один предмет словом, обозначающим другой.",
    example: "«Золото волос», «море слёз», «стальные нервы»",
    adExample: "«Ваш банк — надёжный якорь в море финансов» (реклама банка)",
  },
  {
    term: "Эпитет",
    category: "Тропы",
    definition: "Образное определение, подчёркивающее характерное свойство предмета и придающее ему эмоциональную окраску.",
    example: "«Бархатный голос», «хрустальный звон», «золотые руки»",
    adExample: "«Бархатный аромат утреннего кофе» (реклама кофе Nescafé)",
  },
  {
    term: "Гипербола",
    category: "Тропы",
    definition: "Намеренное преувеличение свойств, качеств или размеров предмета для усиления выразительности.",
    example: "«Море работы», «сто лет не виделись», «горы золота»",
    adExample: "«Red Bull даёт крылья» (реклама энергетика Red Bull)",
  },
  {
    term: "Литота",
    category: "Тропы",
    definition: "Намеренное преуменьшение свойств предмета. Противоположность гиперболы.",
    example: "«Мальчик с пальчик», «кот наплакал», «в двух шагах»",
    adExample: "«Один маленький глоток — и утро уже не страшно» (реклама кофе)",
  },
  {
    term: "Олицетворение",
    category: "Тропы",
    definition: "Перенос свойств живых существ на неодушевлённые предметы или абстрактные понятия.",
    example: "«Лес шепчет», «солнце улыбается», «время бежит»",
    adExample: "«Наш пылесос знает, что вы хотите» (реклама Dyson)",
  },
  {
    term: "Метонимия",
    category: "Тропы",
    definition: "Замена одного слова другим на основе смежности обозначаемых понятий (часть вместо целого, место вместо людей).",
    example: "«Читать Пушкина», «весь зал аплодировал», «выпил стакан»",
    adExample: "«Весь мир выбирает Samsung» (реклама Samsung)",
  },
  {
    term: "Синекдоха",
    category: "Тропы",
    definition: "Разновидность метонимии: замена целого частью или части целым.",
    example: "«Считать головы» (людей), «крыша над головой» (жильё)",
    adExample: "«Каждый карман оценит нашу цену» (реклама магазина)",
  },
  {
    term: "Ирония",
    category: "Тропы",
    definition: "Употребление слова или выражения в смысле, противоположном буквальному. Скрытая насмешка.",
    example: "«Ну и погодка!» (в ливень), «великий стратег» (о неудачнике)",
    adExample: "«Потому что вы этого не заслуживаете» (антиреклама-пародия)",
  },
  {
    term: "Перифраз",
    category: "Тропы",
    definition: "Замена прямого названия предмета описательным оборотом, указывающим на его существенный признак.",
    example: "«Царь зверей» (лев), «белые халаты» (врачи), «чёрное золото» (нефть)",
    adExample: "«Железный конь вашей свободы» (реклама авто)",
  },
  {
    term: "Оксюморон",
    category: "Тропы",
    definition: "Соединение логически несовместимых, противоречивых понятий в одном образе.",
    example: "«Живой труп», «горячий лёд», «громкая тишина»",
    adExample: "«Сладкий без сахара» (реклама диетического шоколада)",
  },
  {
    term: "Анафора",
    category: "Фигуры речи",
    definition: "Повторение одного слова или группы слов в начале нескольких смежных речевых единиц (строк, фраз).",
    example: "«Клянусь я первым днём творенья, клянусь его последним днём...» (Лермонтов)",
    adExample: "«Почувствуй вкус победы. Почувствуй запах успеха. Почувствуй свободу» (реклама авто)",
  },
  {
    term: "Эпифора",
    category: "Фигуры речи",
    definition: "Повторение слова или фразы в конце нескольких смежных речевых единиц. Противоположность анафоры.",
    example: "«Мне бы хотелось знать, отчего я титулярный советник? Почему именно титулярный советник?»",
    adExample: "«Думай иначе. Живи иначе. Работай иначе» (Apple Think Different)",
  },
  {
    term: "Антитеза",
    category: "Фигуры речи",
    definition: "Противопоставление понятий, мыслей, образов для усиления выразительности.",
    example: "«Ты богат, я очень беден; ты прозаик, я поэт» (Пушкин)",
    adExample: "«Маленький взнос — большое спокойствие» (реклама страховки)",
  },
  {
    term: "Градация",
    category: "Фигуры речи",
    definition: "Последовательное усиление (восходящая) или ослабление (нисходящая) смысловой и эмоциональной значимости слов.",
    example: "«Пришёл, увидел, победил» (Цезарь) — классическая восходящая градация",
    adExample: "«Быстрее. Умнее. Сильнее» (реклама смартфона)",
  },
  {
    term: "Риторический вопрос",
    category: "Фигуры речи",
    definition: "Вопрос, не требующий ответа, — ответ подразумевается сам собой. Используется для усиления утверждения.",
    example: "«Кто не знает этого имени?», «Быть или не быть?»",
    adExample: "«Зачем переплачивать, если можно сэкономить?» (реклама магазина)",
  },
  {
    term: "Инверсия",
    category: "Фигуры речи",
    definition: "Намеренное нарушение обычного порядка слов в предложении для выделения важного слова.",
    example: "«Белеет парус одинокий» вместо «одинокий белый парус»",
    adExample: "«Качество немецкое, цена — наша» (реклама техники)",
  },
  {
    term: "Эллипсис",
    category: "Фигуры речи",
    definition: "Намеренный пропуск слова или слов, которые легко восстанавливаются из контекста. Создаёт динамику.",
    example: "«Мы сёла — в пепел, грады — в прах, в мечи — серпы и плуги»",
    adExample: "«Nike. Just do it» — «Найк. Просто сделай [это]»",
  },
  {
    term: "Аллитерация",
    category: "Звукопись",
    definition: "Повторение одинаковых или похожих согласных звуков в смежных словах для создания звукового образа.",
    example: "«Шёпот, робкое дыханье, трели соловья» (Фет)",
    adExample: "«Шуршит. Хрустит. Хватает» (реклама чипсов Lay's)",
  },
  {
    term: "Ассонанс",
    category: "Звукопись",
    definition: "Повторение гласных звуков в смежных словах. Создаёт музыкальность и ритм.",
    example: "«В небесах торжественно и чудно» (Лермонтов)",
    adExample: "«О, это О'кей!» (игра на звуке «о»)",
  },
  {
    term: "Каламбур",
    category: "Стилистика",
    definition: "Игра слов, основанная на их многозначности, омонимии или звуковом сходстве.",
    example: "«Любил студентов засыпать он, видно, оттого, что те любили засыпать на лекциях»",
    adExample: "«Оттяни — не тяни» (реклама Pepsi) — «оттяни» (выпей) и «не тяни» (не медли)",
  },
  {
    term: "Фразеологизм",
    category: "Фразеология",
    definition: "Устойчивое сочетание слов с цельным переносным значением, не выводимым из суммы значений отдельных слов.",
    example: "«Бить баклуши», «держать нос по ветру», «кот наплакал»",
    adExample: "«Берём быка за рога» (реклама спортивного бренда)",
  },
  {
    term: "Идиома",
    category: "Фразеология",
    definition: "Разновидность фразеологизма, значение которого абсолютно невыводимо из значений составляющих слов.",
    example: "«Попасть впросак», «у чёрта на куличках», «с гулькин нос»",
    adExample: "«Не вешайте нос — у нас лучшие цены» (реклама магазина)",
  },
  {
    term: "Крылатые слова",
    category: "Фразеология",
    definition: "Устойчивые выражения, пришедшие из литературы, истории или мифологии и ставшие общеупотребительными.",
    example: "«Вот где собака зарыта», «рубикон перейдён», «ахиллесова пята»",
    adExample: "«Ахиллесова пята конкурентов — наше преимущество» (реклама компании)",
  },
  {
    term: "Аллюзия",
    category: "Стилистика",
    definition: "Ссылка на известный факт, текст или событие без его прямого называния. Рассчитана на узнавание читателем.",
    example: "«Быть или не быть — вот в чём вопрос» → любое использование этой структуры",
    adExample: "«Это не просто телефон. Это 2001 год» (отсылка к фильму Кубрика в рекламе гаджета)",
  },
  {
    term: "Тавтология",
    category: "Стилистика",
    definition: "Повторение одного и того же слова или однокоренных слов. В рекламе используется намеренно для усиления.",
    example: "«Масло масляное» — непреднамеренная тавтология как речевая ошибка",
    adExample: "«Закрой глаза. Открой вкус» — контрастная пара как стилистический приём (не тавтология, но схожая структура)",
  },
  {
    term: "Апосиопеза",
    category: "Фигуры речи",
    definition: "Намеренный обрыв фразы — недосказанность, вовлекающая читателя в домысливание продолжения.",
    example: "«Я хотел бы сказать вам кое-что… но не буду»",
    adExample: "«Попробуй раз — и ты уже не сможешь…» (реклама снека)",
  },
]

const categories = ["Все", "Тропы", "Фигуры речи", "Звукопись", "Фразеология", "Стилистика"]

const categoryColors: Record<string, string> = {
  "Тропы": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Фигуры речи": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Звукопись": "bg-green-500/10 text-green-400 border-green-500/20",
  "Фразеология": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Стилистика": "bg-pink-500/10 text-pink-400 border-pink-500/20",
}

export function GlossarySection() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [search, setSearch] = useState("")
  const [openTerm, setOpenTerm] = useState<string | null>(null)

  const filtered = terms.filter((t) => {
    const matchCat = activeCategory === "Все" || t.category === activeCategory
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <section id="glossary" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Глоссарий
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Все термины{" "}
            <span className="text-primary relative">
              с примерами
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нажмите на термин, чтобы увидеть определение и пример из рекламы.
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск термина..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Ничего не найдено. Попробуйте другой запрос.</p>
          )}
          {filtered.map((t) => {
            const isOpen = openTerm === t.term
            return (
              <div
                key={t.term}
                className="border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-200"
              >
                <button
                  onClick={() => setOpenTerm(isOpen ? null : t.term)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {t.term}
                    </span>
                    <Badge
                      variant="outline"
                      className={`text-xs hidden sm:inline-flex ${categoryColors[t.category] ?? ""}`}
                    >
                      {t.category}
                    </Badge>
                  </div>
                  <Icon
                    name={isOpen ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors"
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 space-y-4 border-t border-border/30 pt-4 bg-muted/20">
                    <p className="text-foreground leading-relaxed">{t.definition}</p>

                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-background border border-border/50">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Пример в языке
                        </p>
                        <p className="text-sm text-foreground italic">{t.example}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                          Пример из рекламы
                        </p>
                        <p className="text-sm text-foreground">{t.adExample}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Показано {filtered.length} из {terms.length} терминов
        </p>
      </div>
    </section>
  )
}
