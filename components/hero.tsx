import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden bg-primary px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/industrial-energy-grid-pattern.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Ambient light effect */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Icon badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-2">
            <Zap className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
            <span className="text-xs font-medium text-primary-foreground sm:text-sm">Powering Innovation</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-3 text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:mb-4 sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl xl:text-7xl">
            Sustainable Energy
            <br />
            <span className="text-accent">Solutions for Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="mb-4 max-w-2xl text-pretty text-sm leading-relaxed text-primary-foreground/80 sm:mb-6 sm:text-base md:mb-8 md:text-lg lg:text-xl">
            Leading the energy revolution with innovative products and sustainable solutions that power businesses and
            communities worldwide.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" className="group w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 sm:w-auto"
            >
              Learn More
            </Button>
          </div>

          {/* Stats section */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-12">
            <div className="flex flex-col items-center">
              <div className="mb-1 text-2xl font-bold text-accent sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl">25+</div>
              <div className="text-xs text-primary-foreground/70 sm:text-sm md:text-base">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-1 text-2xl font-bold text-accent sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl">
                500+
              </div>
              <div className="text-xs text-primary-foreground/70 sm:text-sm md:text-base">Global Clients</div>
            </div>
            <div className="col-span-2 flex flex-col items-center md:col-span-1">
              <div className="mb-1 text-2xl font-bold text-accent sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl">
                100%
              </div>
              <div className="text-xs text-primary-foreground/70 sm:text-sm md:text-base">Sustainable Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
