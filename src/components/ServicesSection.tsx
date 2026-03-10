import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Flame",
    title: "Тропы",
    description: "Метафора, метонимия, эпитет, гипербола, литота, ирония, олицетворение — все образные средства языка с примерами из рекламных текстов.",
    tags: ["Метафора", "Эпитет", "Гипербола"],
  },
  {
    icon: "Layers",
    title: "Фигуры речи",
    description: "Анафора, эпифора, антитеза, градация, риторический вопрос, инверсия — синтаксические приёмы для усиления выразительности.",
    tags: ["Анафора", "Антитеза", "Градация"],
  },
  {
    icon: "BookMarked",
    title: "Фразеологизмы",
    description: "Устойчивые выражения, идиомы и крылатые фразы, активно используемые в рекламе для создания узнаваемых и запоминающихся слоганов.",
    tags: ["Идиомы", "Слоганы", "Крылатые фразы"],
  },
  {
    icon: "BarChart2",
    title: "Стилистика",
    description: "Разговорный, книжный, официальный и художественный стили. Как выбрать тон и регистр для конкретной целевой аудитории.",
    tags: ["Тон голоса", "Регистр", "Аудитория"],
  },
  {
    icon: "Lightbulb",
    title: "Слоганистика",
    description: "Принципы создания слоганов: ритм, звукопись, каламбур, игра слов. Разбор успешных примеров из мировой и российской рекламы.",
    tags: ["Рифма", "Каламбур", "Ритм"],
  },
  {
    icon: "Target",
    title: "Язык убеждения",
    description: "Аргументация, апелляция к эмоциям и логике, риторические стратегии. Психолингвистика в рекламной коммуникации.",
    tags: ["Риторика", "Аргументы", "Эмоции"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Разделы справочника
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Все инструменты{" "}
            <span className="text-primary relative">
              рекламного текста
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            От базовых тропов до сложных риторических стратегий — структурированная база знаний для профессионала.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} size={24} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
