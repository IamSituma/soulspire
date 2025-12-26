import { Zap } from "lucide-react"

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-primary px-4 sm:px-6 lg:px-8
      min-h-[50vh] sm:min-h-[60vh] lg:min-h-[65vh]
      flex flex-col justify-center items-center"
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

      <div className="container relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-10">
        <h1 className="text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Leading the Future of <span className="text-white">Energy Innovation</span>
        </h1>

        <p className="max-w-3xl text-pretty text-sm leading-relaxed text-primary-foreground/80 sm:text-base md:text-lg lg:text-xl">
          Soulspire Group is a pioneering conglomerate dedicated to transforming the local and global energy landscape through
          innovation, sustainability, and cutting-edge technology. With over 5 years of expertise, we deliver
          comprehensive energy solutions that power businesses and communities worldwide.
        </p>
      </div>
    </section>
  )
}
