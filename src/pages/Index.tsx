import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { ProcessSection } from "@/components/ProcessSection"
import { GlossarySection } from "@/components/GlossarySection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { QuizSection } from "@/components/QuizSection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <GlossarySection />
      <TestimonialsSection />
      <QuizSection />
      <Footer />
    </main>
  )
}
