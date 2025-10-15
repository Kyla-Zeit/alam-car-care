import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Basic Wash",
    price: "$29",
    description: "Perfect for regular maintenance",
    features: ["Exterior hand wash", "Wheel cleaning", "Tire shine", "Window cleaning", "Quick interior vacuum"],
  },
  {
    name: "Premium Detail",
    price: "$99",
    description: "Our most popular package",
    features: [
      "Everything in Basic Wash",
      "Interior deep cleaning",
      "Leather conditioning",
      "Engine bay cleaning",
      "Paint sealant application",
      "Headlight restoration",
    ],
    popular: true,
  },
  {
    name: "Ultimate Care",
    price: "$199",
    description: "The complete treatment",
    features: [
      "Everything in Premium Detail",
      "Ceramic coating application",
      "Paint correction",
      "Odor elimination",
      "Fabric protection",
      "Clay bar treatment",
      "6-month warranty",
    ],
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            Pick The Plan That Best Suits Your Needs
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose from our carefully crafted packages designed to meet every car care need and budget.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                pkg.popular ? "border-accent shadow-lg scale-105" : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="mb-2 text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-foreground">
                  {pkg.price}
                  <span className="text-lg font-normal text-muted-foreground">/service</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className={`w-full ${
                    pkg.popular ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  Choose {pkg.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
