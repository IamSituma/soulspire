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
          {/* Main heading */}
          <h1 className="mb-8 sm:mb-12 text-balance font-sans text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Sustainable Energy
            <br />
            <span className="text-accent">Solutions for Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 sm:mb-12 max-w-2xl text-pretty text-sm leading-relaxed text-primary-foreground/80 sm:text-base md:text-lg lg:text-xl">
            Leading the energy revolution with innovative products and sustainable solutions that power businesses
            and communities worldwide.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Button
              size="lg"
              className="group bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a
                href="https://voltspire.soulspiregroup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20"
            >
              Learn More
            </Button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col items-center">
              <div className="mb-2 text-2xl font-bold text-accent sm:text-3xl md:text-4xl lg:text-5xl">
                5+
              </div>
              <div className="text-xs text-primary-foreground/70 sm:text-sm md:text-base">
                Years Experience
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 text-2xl font-bold text-accent sm:text-3xl md:text-4xl lg:text-5xl">
                200+
              </div>
              <div className="text-xs text-primary-foreground/70 sm:text-sm md:text-base">
                Global Clients
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 text-2xl font-bold text-accent sm:text-3xl md:text-4xl lg:text-5xl">
                100%
              </div>
              <div className="text-xs text-primary-foreground/70 sm:text-sm md:text-base">
                Sustainable Focus
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
