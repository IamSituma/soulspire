import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { Mission } from "@/components/mission"
import { Companies } from "@/components/companies"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <AboutHero />
      <Mission />
      <Companies />
      <Footer />
    </main>
  )
}
