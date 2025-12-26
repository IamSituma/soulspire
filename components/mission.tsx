import { Target, Users, Lightbulb, Shield } from "lucide-react"

export function Mission() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize the energy sector by providing innovative, sustainable, and reliable solutions that meet the evolving needs of our global clientele while minimizing environmental impact.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "We prioritize our clients' success by delivering tailored energy products and services that exceed expectations, backed by industry-leading support and expertise.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuous research and development drive our commitment to staying at the forefront of energy technology, ensuring our solutions remain cutting-edge and future-proof.",
    },
    {
      icon: Shield,
      title: "Sustainability",
      description:
        "Environmental stewardship is at our core. We're committed to 100% sustainable practices, reducing carbon footprints and promoting renewable energy adoption globally.",
    },
  ]

  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section header */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-3 text-balance text-2xl font-bold text-foreground sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Our Values & Mission
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
            Built on a foundation of excellence, integrity, and forward-thinking innovation
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="group rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/50 hover:shadow-lg sm:p-6"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 sm:mb-4 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground sm:text-xl">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>

        {/* Company stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-12 sm:mt-16 sm:gap-8 sm:pt-16 md:grid-cols-4">
          
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-black sm:text-4xl md:text-5xl">5+</div>
            <div className="text-xs text-muted-foreground sm:text-sm md:text-base">
              Years of Excellence
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-black sm:text-4xl md:text-5xl">50+</div>
            <div className="text-xs text-muted-foreground sm:text-sm md:text-base">
              Global Partners
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-black sm:text-4xl md:text-5xl">10+</div>
            <div className="text-xs text-muted-foreground sm:text-sm md:text-base">
              Countries Served
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-black sm:text-4xl md:text-5xl">100%</div>
            <div className="text-xs text-muted-foreground sm:text-sm md:text-base">
              Sustainable Focus
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
