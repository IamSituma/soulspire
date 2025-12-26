import { Zap } from "lucide-react"

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-primary
        px-6 sm:px-6 lg:px-8
        py-16 sm:py-20 lg:py-28
        min-h-[50vh] sm:min-h-[60vh] lg:min-h-[75vh]
        flex justify-center items-center"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/industrial-energy-grid-pattern.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-4xl flex flex-col justify-center items-center text-center">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/80">
          Soulspire Group is a pioneering conglomerate dedicated to transforming the local and global energy landscape through
          innovation, sustainability, and cutting-edge technology. With over 5 years of expertise, we deliver
          comprehensive energy solutions that power businesses and communities worldwide.
        </p>
      </div>
    </section>
  )
}
