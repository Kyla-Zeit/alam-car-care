import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl text-balance">
              About Car Wash and Detailing
            </h2>
            <div className="mb-8 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Car detailing is like a spa day for your car. It involves meticulously cleaning, restoring, and
                protecting every nook and cranny of your vehicle, both inside and out.
              </p>
              <p>
                From shampooing carpets and seats to polishing the exterior paint and treating leather, professional
                detailing gives your car a pristine appearance but it also helps maintain its value with a professional
                detailing service.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Premium quality products and equipment",
                "Experienced and certified technicians",
                "Attention to detail in every service",
                "Eco-friendly cleaning solutions",
                "Satisfaction guaranteed",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-accent mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <Card className="overflow-hidden border-border">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                <img
                  src="/professional-car-detailing-service-in-action.jpg"
                  alt="Professional car detailing"
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
