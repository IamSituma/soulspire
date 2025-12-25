"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Energy Group
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Solutions
              <ChevronDown className="h-4 w-4" />
            </button>
            {isHovering && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md border border-border bg-background shadow-lg">
                <a
                  href="https://volitspire.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Volitspire
                </a>
                {/* Additional companies can be added here */}
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

        <Button className="bg-[#25D366] text-white hover:bg-[#128C7E]" asChild>
          <a
            href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20your%20energy%20solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </nav>
    </header>
  )
}
