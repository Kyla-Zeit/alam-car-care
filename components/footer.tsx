import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6 text-primary-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10l-3.5-4.5c-.3-.4-.8-.5-1.2-.5H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 10v4c0 .6.4 1 1 1h2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none text-foreground">Alam Car Care</span>
                <span className="text-xs text-muted-foreground">Centre</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional car detailing services in Beaverville. Quality care for your vehicle since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-muted-foreground hover:text-accent transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-accent transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Interior Detailing</li>
              <li>Exterior Wash & Wax</li>
              <li>Ceramic Coating</li>
              <li>Express Detailing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Main Street</li>
              <li>Beaverville, ON</li>
              <li>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@alamcarcare.com" className="hover:text-accent transition-colors">
                  info@alamcarcare.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alam Car Care Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
