import { Zap } from "lucide-react"

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-primary
        px-4 sm:px-6 lg:px-8
        py-20 sm:py-24 lg:py-32
        min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh]
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

      {/* Container */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10">
        {/* Main heading */}
        <h1 className="text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Leading the Future of <span className="text-white">Energy Innovation</span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:text-xl">
          Soulspire Group is a pioneering conglomerate dedicated to transforming the local and global energy landscape through
          innovation, sustainability, and cutting-edge technology. With over 5 years of expertise, we deliver
          comprehensive energy solutions that power businesses and communities worldwide.
        </p>
      </div>
    </section>
  )
}
