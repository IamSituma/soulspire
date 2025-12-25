import { Building2, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Companies() {
  const companies = [
    {
      name: "Volitspire",
      url: "https://volitspire.com",
      description:
        "Pioneering advanced energy storage solutions and smart grid technology. Volitspire specializes in next-generation battery systems, grid optimization software, and renewable energy integration platforms.",
      services: ["Energy Storage Systems", "Grid Management", "Smart Technology", "Renewable Integration"],
    },
    // Add more companies here as needed
  ]

  return (
    <section className="bg-muted px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-3 text-balance text-2xl font-bold text-foreground sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Our Portfolio Companies
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base md:text-lg">
            A diverse ecosystem of specialized energy companies working together to power the future
          </p>
        </div>

        {/* Companies list */}
        <div className="space-y-6 sm:space-y-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-lg sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 sm:h-12 sm:w-12">
                      <Building2 className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">{company.name}</h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {company.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {company.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  className="group/btn w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
                >
                  <a href={company.url} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-8 rounded-lg border border-border bg-background p-6 sm:mt-12 sm:p-8">
          <h3 className="mb-3 text-center text-lg font-semibold text-foreground sm:mb-4 sm:text-xl md:text-2xl">
            Why Choose Energy Group?
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <div className="text-center">
              <p className="text-sm font-medium text-foreground sm:text-base">Comprehensive Solutions</p>
              <p className="mt-1 text-xs text-muted-foreground">End-to-end energy products and services</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground sm:text-base">Global Expertise</p>
              <p className="mt-1 text-xs text-muted-foreground">Proven track record across 100+ countries</p>
            </div>
            <div className="col-span-2 text-center sm:col-span-1">
              <p className="text-sm font-medium text-foreground sm:text-base">24/7 Support</p>
              <p className="mt-1 text-xs text-muted-foreground">Dedicated team always ready to assist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
