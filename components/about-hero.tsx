import { Zap } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32 
      min-h-[45vh] sm:min-h-[60vh] lg:min-h-[65vh] 
      flex justify-start lg:justify-center items-center">

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

      <div className="container relative z-10 mx-auto max-w-4xl pt-6 sm:pt-10 lg:pt-0">
        <div className="flex flex-col items-center text-center">

          <h1 className="mb-4 text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:mb-5 sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
            Leading the Future of <span className="text-white">Energy Innovation</span>
          </h1>

          <p className="max-w-3xl text-pretty text-sm leading-relaxed text-primary-foreground/80 sm:text-base md:text-lg lg:text-xl">
            Energy Group is a pioneering conglomerate dedicated to transforming the global energy landscape through
            innovation, sustainability, and cutting-edge technology. With over 25 years of expertise, we deliver
            comprehensive energy solutions that power businesses and communities worldwide.
          </p>

        </div>
      </div>
    </section>
  )
}
