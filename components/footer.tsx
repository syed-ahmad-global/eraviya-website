"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#ai", label: "AI Solutions" },
    { href: "/services#fullstack", label: "Full Stack Development" },
    { href: "/services#mobile", label: "Mobile & Cross-Platform" },
    { href: "/services#automation", label: "No-Code Automation" },
  ],
  resources: [
    { href: "/technologies", label: "Technologies" },
    { href: "/blog", label: "Insights" },
    { href: "/contact", label: "Schedule a Call" },
  ],
}

const socials = [
  { href: "https://linkedin.com/company/eraviya", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/eraviya", icon: Github, label: "GitHub" },
  { href: "https://twitter.com/eraviya", icon: Twitter, label: "Twitter" },
]

export function Footer() {
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
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              {mounted && (
                <Image
                  src={logoSrc}
                  alt="Eraviya Solutions"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              )}
            </Link>
            <p className="text-sm leading-relaxed opacity-70">
              Building intelligent solutions that drive business growth through cutting-edge AI and
              modern development practices.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/10 transition-colors hover:bg-electric hover:text-electric-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider opacity-50">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider opacity-50">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider opacity-50">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Sahiwal, Pakistan</span>
              </li>
              <li>
                <a
                  href="mailto:info@eraviyasolutions.com"
                  className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>info@eraviyasolutions.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+923700164091"
                  className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+92-370-0164091</span>
                </a>
              </li>
              <li className="text-sm opacity-70">Mon - Sat, 9am - 6pm PST</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 md:flex-row">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} Eraviya Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs opacity-50 transition-opacity hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs opacity-50 transition-opacity hover:opacity-100">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
