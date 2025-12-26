"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isHovering, setIsHovering] = useState(false) // desktop hover
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // mobile menu
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false) // mobile Solutions dropdown

  return (
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-2 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Energy Group
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Solutions
              <ChevronDown className="h-4 w-4" />
            </button>
            {isHovering && (
              <div className="absolute left-0 top-full w-48 rounded-md border border-border bg-background shadow-lg">
                <a
                  href="https://voltspire.soulspiregroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  Voltspire
                </a>
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </div>

        {/* WhatsApp Button */}
        <div className="hidden md:block">
          <Button className="bg-[#008000] text-white" asChild>
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20your%20energy%20solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="flex flex-col px-6 py-3 gap-3">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Solutions dropdown */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown items (closed by default) */}
              {mobileDropdownOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-2">
                  <a
                    href="https://voltspire.soulspiregroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Voltspire
                  </a>
                  {/* Add more items here */}
                </div>
              )}
            </div>

            {/* WhatsApp button */}
            <Button className="bg-[#008000] text-white w-full mt-2" asChild>
              <a
                href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20your%20energy%20solutions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
