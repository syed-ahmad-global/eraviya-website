"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technologies", label: "Technologies" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = theme === 'dark'
    ? '/eraviya-logo-darkMode.webp'
    : '/eraviya-logo-lightMode.webp'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {mounted && (
            <Image
              src={logoSrc}
              alt="Eraviya Solutions"
              width={120}
              height={50}
              className="rounded-lg"
            />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive
                  ? "bg-electric/10 text-electric"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild className="bg-electric text-electric-foreground hover:bg-electric/90">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-foreground hover:bg-secondary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-background px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                    ? "bg-electric/10 text-electric"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-2 border-t border-border pt-3">
              <Button
                asChild
                className="w-full bg-electric text-electric-foreground hover:bg-electric/90"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
