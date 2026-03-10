export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">«Слово в рекламе»</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Филологический справочник для специалистов по рекламе и копирайтеров.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              © 2025 Слово в рекламе. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тропы и фигуры речи
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Фразеологизмы
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Задания
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Подписывайтесь</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Новые материалы и задания — в нашем канале.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors border border-primary/20"
            >
              Написать нам
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
