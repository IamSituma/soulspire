import { Building2, ArrowUpRight, Battery } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Companies() {
  const companies = [
    {
      name: "Voltspire",
      url: "https://voltspire.soulspiregroup.com",
      description:
        "Voltspire is an online electronics and energy solutions store in Uganda, offering batteries, power stations, lighting, accessories, and smart devices. It features brands like Gizzu, Xiaomi, AMD, Intel, and MSI, with products ranging from emergency bulbs and jump starters to UPS power stations and projectors.",
      services: ["Power Stations", "Computers & Accessories", "Batteries", "UPS Backups", "Networking"],
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
              className="group rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-black/50 hover:shadow-lg sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/30 sm:h-12 sm:w-12">
                      <Battery className="h-5 w-5 text-white sm:h-6 sm:w-6" />
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
                        className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white sm:text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  className="group/btn w-full bg-black text-white hover:bg-black/50 sm:w-auto"
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
      </div>
    </section>
  )
}
