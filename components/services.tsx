import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Droplets, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description:
      "Deep cleaning of seats, carpets, dashboard, and all interior surfaces to restore that new car feeling.",
  },
  {
    icon: Droplets,
    title: "Exterior Wash & Wax",
    description: "Premium hand wash with high-quality wax protection to keep your car shining and protected.",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description:
      "Long-lasting protection with our professional ceramic coating service for ultimate shine and durability.",
  },
  {
    icon: Zap,
    title: "Express Detailing",
    description: "Quick yet thorough detailing service perfect for maintaining your vehicle between full details.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Professional Car Care Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From basic washes to premium detailing, we offer comprehensive services to keep your vehicle in pristine
            condition.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
