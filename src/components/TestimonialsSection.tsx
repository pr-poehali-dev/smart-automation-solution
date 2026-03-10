import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Наконец-то нашла структурированный ресурс, где тропы объяснены с примерами из реальной рекламы. Раньше приходилось собирать информацию по десяткам источников.",
    name: "Анна К.",
    role: "Копирайтер, 5 лет опыта",
  },
  {
    quote:
      "Задания — настоящая находка. Думала, что хорошо знаю фразеологизмы, но практика показала пробелы. После справочника стала писать слоганы намного увереннее.",
    name: "Мария Д.",
    role: "Маркетолог, FMCG",
  },
  {
    quote:
      "Отличная база для подготовки к работе с клиентами. Теперь могу грамотно объяснить, почему использовала именно метафору, а не гиперболу — клиенты ценят такой профессионализм.",
    name: "Екатерина В.",
    role: "Специалист по рекламе",
  },
  {
    quote:
      "Раздел по стилистике помог мне адаптировать тон под разные аудитории. Раньше писала одинаково для всех — теперь чётко вижу разницу между регистрами.",
    name: "Дмитрий С.",
    role: "Контент-директор",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят специалисты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Справочник уже помогает копирайтерам, маркетологам и рекламистам писать более точные и убедительные тексты.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}