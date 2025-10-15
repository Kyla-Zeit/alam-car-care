import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content:
      "I recently had an amazing experience at Alam Car Care getting my car detailed! The quality of their work was top-notch—my car looked brand new inside and out. The service was quick and the prices were very reasonable.",
    rating: 5,
    image: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "I would like to express my great admiration for the car detailing service I received. They really took the time to notice their high commitment to cleanliness and precision in their work. The workers, Mohammed excels in his accuracy and focus on the small details.",
    rating: 5,
    image: "/professional-man-smiling.png",
  },
  {
    name: "Emily Rodriguez",
    role: "First-time Customer",
    content:
      "I love my car in which was a total mess. They guys shampooed wash car in a great price. Fantastic job guys keep up the good work!",
    rating: 5,
    image: "/happy-woman-customer.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 text-primary-foreground/90 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary-foreground/70">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
