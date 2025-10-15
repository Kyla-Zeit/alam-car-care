"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#packages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Packages
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+4379852153"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(437) 985-2153</span>
            </a>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="#services"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#packages"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Packages
              </Link>
              <Link href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </a>
              <Button size="sm" className="bg-accent hover:bg-accent/90 w-full">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
