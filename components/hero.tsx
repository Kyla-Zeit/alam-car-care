import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur">
            <Star className="h-4 w-4 fill-current" />
            <span>Niagara's #1 Rated Car Care Centre</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Your search for the best Car Detailing Services ends here
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl leading-relaxed text-pretty">
            Alam Car Centre specializes in interior and exterior cleaning. We offer a range of services to help vehicles
            look their best. With a focus on quality and precision, we provide the best services that stand out.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              Book Your Service
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            >
              View Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <div className="text-sm font-medium">500+ Happy Customers</div>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <div className="text-sm font-medium">10+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
