import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
