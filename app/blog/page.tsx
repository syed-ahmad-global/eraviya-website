"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  featured: boolean
}

const posts: BlogPost[] = [
  {
    slug: "future-of-generative-ai",
    title: "The Future of Generative AI in Business Applications",
    excerpt:
      "Explore how generative AI is reshaping industries from content creation to drug discovery, and what it means for your business strategy in 2025 and beyond.",
    category: "AI Development",
    date: "June 15, 2025",
    readTime: "8 min read",
    author: "Muhammad Usman",
    featured: true,
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance in 2025",
    excerpt:
      "A deep dive into React Server Components, Suspense, and the latest optimization techniques to build blazing-fast web applications.",
    category: "Web Development",
    date: "May 28, 2025",
    readTime: "6 min read",
    author: "Fatima Noor",
    featured: true,
  },
  {
    slug: "implementing-ethical-ai",
    title: "Implementing Ethical AI: A Practical Guide",
    excerpt:
      "Learn the principles and practices for building AI systems that are fair, transparent, and accountable, with real-world implementation examples.",
    category: "AI Development",
    date: "April 10, 2025",
    readTime: "10 min read",
    author: "Ali Raza",
    featured: true,
  },
  {
    slug: "n8n-vs-make-automation",
    title: "n8n vs Make.com: Choosing the Right Automation Tool",
    excerpt:
      "A comprehensive comparison of the two most popular workflow automation platforms, with benchmarks and use case recommendations.",
    category: "Automation",
    date: "March 22, 2025",
    readTime: "7 min read",
    author: "Hassan Malik",
    featured: false,
  },
  {
    slug: "react-native-vs-flutter",
    title: "React Native vs Flutter: The 2025 Comparison",
    excerpt:
      "An updated comparison for mobile development in 2025, covering performance, developer experience, ecosystem, and when to choose each framework.",
    category: "Mobile Development",
    date: "March 5, 2025",
    readTime: "9 min read",
    author: "Hassan Malik",
    featured: false,
  },
  {
    slug: "building-ai-chatbots-langchain",
    title: "Building Production AI Chatbots with LangChain",
    excerpt:
      "Step-by-step guide to building context-aware AI chatbots using LangChain, including memory management, tool use, and deployment best practices.",
    category: "AI Development",
    date: "February 18, 2025",
    readTime: "12 min read",
    author: "Muhammad Usman",
    featured: false,
  },
]

const categories = ["All", "AI Development", "Web Development", "Mobile Development", "Automation", "Insights"]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  const featuredPost = posts.find((p) => p.featured)
  const otherPosts = filtered.filter((p) => p !== featuredPost || activeCategory !== "All")

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 border-electric/30 bg-electric/10 text-electric text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-1.5">
              Blog & Insights
            </Badge>
            <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
              Ideas, Insights & Innovation
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Practical articles on AI development, modern web engineering, mobile apps, and
              workflow automation from the Eraviya team.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Content */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategory === cat
                  ? "bg-electric text-electric-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post (only on "All") */}
          {activeCategory === "All" && featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group mb-12 flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg md:flex-row"
            >
              <div className="flex h-64 items-center justify-center bg-secondary md:h-auto md:w-1/2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                <Badge className="mb-3 w-fit bg-electric/10 text-electric">
                  {featuredPost.category}
                </Badge>
                <h2 className="mb-3 font-serif text-2xl font-bold text-card-foreground group-hover:text-electric transition-colors md:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </span>
                  <span>{featuredPost.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(activeCategory === "All" ? otherPosts.slice(1) : otherPosts).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-44 items-center justify-center bg-secondary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/10 text-electric transition-transform group-hover:scale-110">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Badge
                    variant="outline"
                    className="mb-3 w-fit border-electric/30 text-electric"
                  >
                    {post.category}
                  </Badge>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground group-hover:text-electric transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Get the latest insights on AI development, modern engineering, and automation delivered
            straight to your inbox.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 sm:w-80"
              required
            />
            <Button
              type="submit"
              className="bg-electric text-electric-foreground hover:bg-electric/90"
            >
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  )
}
