"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Github, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@eraviyasolutions.com",
    href: "mailto:info@eraviyasolutions.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-370-0164091",
    href: "tel:+923700164091",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sahiwal, Pakistan",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat, 9am - 6pm PST",
    href: null,
  },
]

const socials = [
  { href: "https://linkedin.com/company/eraviya", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/eraviya", icon: Github, label: "GitHub" },
  { href: "https://twitter.com/eraviya", icon: Twitter, label: "Twitter" },
]

const serviceOptions = [
  "AI Solutions & Development",
  "Full Stack Web Development",
  "Mobile & Cross-Platform Apps",
  "No-Code Automation",
  "Consulting & Strategy",
  "Other",
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-electric/30 bg-electric/10 text-electric text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5">
              Get in Touch
            </Badge>
            <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
              {"Let's Build Something Extraordinary"}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Whether you have a project in mind or just want to explore possibilities, we are here
              to help. Reach out and let us start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-electric/10 text-electric">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-card-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will review your message and get back to
                    you within 24 hours.
                  </p>
                  <Button
                    className="mt-6 bg-electric text-electric-foreground hover:bg-electric/90"
                    onClick={() => {
                      setSubmitted(false)
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        service: "",
                        budget: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                        placeholder="Your company name"
                        className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium text-foreground"
                      >
                        Service Interested In <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({ ...formState, service: e.target.value })
                        }
                        className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="budget"
                      className="text-sm font-medium text-foreground"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      value={formState.budget}
                      onChange={(e) =>
                        setFormState({ ...formState, budget: e.target.value })
                      }
                      className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                    >
                      <option value="">Select a range</option>
                      <option value="<5k">Less than $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Details <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-electric text-electric-foreground hover:bg-electric/90 sm:w-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-6 font-serif text-xl font-bold text-card-foreground">
                  Contact Information
                </h3>
                <ul className="flex flex-col gap-6">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-electric"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Socials */}
                <div className="mt-8 border-t border-border pt-6">
                  <p className="mb-3 text-sm font-medium text-card-foreground">Follow Us</p>
                  <div className="flex gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-electric hover:text-electric-foreground"
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick CTA Card */}
              <div className="mt-6 rounded-xl border border-electric/20 bg-electric/5 p-8">
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                  Prefer a Quick Call?
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Schedule a free 30-minute consultation to discuss your project requirements.
                </p>
                <Button
                  asChild
                  className="w-full bg-electric text-electric-foreground hover:bg-electric/90"
                >
                  <a href="tel:+923700164091">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Placeholder */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 font-serif text-3xl font-bold text-foreground">
              Our Reach
            </h2>
            <p className="text-muted-foreground">
              Based in Sahiwal, Pakistan, we serve clients globally with remote-first collaboration.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                region: "Pakistan",
                description: "Headquarters in Sahiwal with local team operations.",
              },
              {
                region: "Middle East",
                description: "Active clients across UAE, Saudi Arabia, and Qatar.",
              },
              {
                region: "Global",
                description: "Remote collaboration with clients worldwide.",
              },
            ].map((item) => (
              <div
                key={item.region}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <h3 className="mb-2 font-serif text-lg font-bold text-card-foreground">
                  {item.region}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
