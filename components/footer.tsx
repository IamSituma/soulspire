import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex-shrink-0 border-t border-border bg-background">
      <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4 md:py-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:gap-4">
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} Soulspire Group. All rights reserved.
          </p>
          <Link
            href="mailto:info@energygroup.com"
            className="text-xs text-muted-foreground transition-colors hover:text-accent sm:text-sm"
          >
            info@soulspiregroup.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
