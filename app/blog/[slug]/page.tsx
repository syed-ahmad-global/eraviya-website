import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, User, Calendar, Share2, Linkedin, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogPosts: Record<
  string,
  {
    title: string
    category: string
    date: string
    readTime: string
    author: string
    authorRole: string
    content: string[]
  }
> = {
  "future-of-generative-ai": {
    title: "The Future of Generative AI in Business Applications",
    category: "AI Development",
    date: "June 15, 2025",
    readTime: "8 min read",
    author: "Muhammad Usman",
    authorRole: "Founder & CEO",
    content: [
      "Generative AI has moved beyond the experimental phase and is now a core component of business strategy for companies of all sizes. From content generation and code assistance to complex data analysis and creative design, the applications are vast and growing.",
      "## The Current Landscape",
      "In 2025, we are seeing generative AI being deployed in production environments across every industry. Financial services use it for risk analysis and report generation. Healthcare organizations leverage it for medical imaging and patient communication. Retailers use it for personalized product descriptions and customer engagement.",
      "The key shift is from novelty to necessity. Organizations that have not integrated AI into their workflows are falling behind competitors who have embraced these tools as force multipliers for their teams.",
      "## Key Trends to Watch",
      "**1. Multimodal AI Models:** The convergence of text, image, audio, and video understanding in single models is enabling entirely new application categories. Businesses can now build systems that understand and generate across multiple modalities simultaneously.",
      "**2. Domain-Specific Fine-Tuning:** Rather than relying on general-purpose models, companies are fine-tuning models on their proprietary data. This approach delivers dramatically better results for specific use cases while maintaining data privacy.",
      "**3. AI Agents and Autonomous Workflows:** The next frontier is AI agents that can plan, execute, and iterate on complex tasks autonomously. These agents combine reasoning capabilities with tool use to accomplish goals that previously required human intervention.",
      "## Implementation Best Practices",
      "For businesses looking to integrate generative AI, we recommend starting with high-impact, lower-risk use cases such as customer support automation, content generation, and data analysis. Build internal expertise through pilot projects before scaling to more complex applications.",
      "The most successful implementations we have seen share common characteristics: clear problem definition, quality training data, robust evaluation frameworks, and human-in-the-loop oversight for critical decisions.",
      "## Looking Ahead",
      "The pace of innovation in generative AI shows no signs of slowing. Companies that invest in AI literacy, infrastructure, and strategic implementation today will be best positioned to leverage the next wave of capabilities as they emerge.",
    ],
  },
  "optimizing-react-performance": {
    title: "Optimizing React Performance in 2025",
    category: "Web Development",
    date: "May 28, 2025",
    readTime: "6 min read",
    author: "Fatima Noor",
    authorRole: "Senior Full Stack Developer",
    content: [
      "React has evolved dramatically over the past few years, and with it, the strategies for building performant applications. In 2025, leveraging React Server Components, the new compiler, and modern patterns is essential for delivering fast experiences.",
      "## React Server Components",
      "Server Components represent the biggest paradigm shift in React since hooks. By rendering components on the server, we eliminate the need to ship JavaScript for static or data-fetching components to the client. This dramatically reduces bundle sizes and improves initial load times.",
      "The key is understanding which components need interactivity (Client Components) and which can remain on the server. A good rule of thumb: if a component does not use state, effects, or browser APIs, it should be a Server Component.",
      "## The React Compiler",
      "The React Compiler automatically optimizes your components by adding memoization where beneficial. This means you can write natural React code without manually wrapping everything in useMemo and useCallback, and the compiler handles optimization for you.",
      "## Key Optimization Strategies",
      "**1. Code Splitting:** Use dynamic imports and React.lazy for route-level and component-level code splitting. This ensures users only download the code they need for the current view.",
      "**2. Image Optimization:** Use the Next.js Image component or similar tools for automatic image optimization, lazy loading, and responsive serving. Images are often the largest contributors to slow page loads.",
      "**3. Data Fetching Patterns:** Prefer server-side data fetching with streaming. Use Suspense boundaries to show loading states while data is being fetched, enabling progressive rendering.",
      "**4. Bundle Analysis:** Regularly analyze your JavaScript bundles to identify and eliminate unnecessary dependencies. Tools like next/bundle-analyzer make this straightforward.",
      "## Measuring Performance",
      "Always measure before and after optimizations using Core Web Vitals: Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP). These metrics directly correlate with user experience and SEO rankings.",
    ],
  },
  "implementing-ethical-ai": {
    title: "Implementing Ethical AI: A Practical Guide",
    category: "AI Development",
    date: "April 10, 2025",
    readTime: "10 min read",
    author: "Ali Raza",
    authorRole: "Lead AI Engineer",
    content: [
      "As AI systems become more powerful and pervasive, the responsibility to build them ethically becomes paramount. This guide provides practical steps for implementing ethical AI practices in your development workflow.",
      "## Why Ethical AI Matters",
      "Ethical AI is not just about avoiding harm - it is about building systems that are fair, transparent, and accountable. Organizations that prioritize ethical AI see better outcomes: higher user trust, fewer regulatory issues, and more robust systems that perform well across diverse populations.",
      "## Core Principles",
      "**Fairness:** AI systems should not discriminate based on protected characteristics. This requires careful attention to training data, model evaluation across subgroups, and ongoing monitoring for bias in production.",
      "**Transparency:** Users should understand how AI systems make decisions that affect them. This means providing explanations for AI outputs and being clear about the limitations and confidence levels of the system.",
      "**Accountability:** There should be clear ownership and responsibility for AI system outcomes. This includes logging decisions, maintaining audit trails, and establishing processes for addressing errors or complaints.",
      "**Privacy:** AI systems must respect user privacy, minimize data collection, and implement robust data protection measures. This is both an ethical imperative and a legal requirement under regulations like GDPR.",
      "## Practical Implementation Steps",
      "**1. Bias Auditing:** Before deploying any model, conduct thorough bias audits across demographic groups. Use tools like IBM AI Fairness 360 or Google What-If Tool to identify and mitigate biases in your training data and model outputs.",
      "**2. Explainability:** Implement explanation mechanisms appropriate to your use case. For high-stakes decisions, use interpretable models or SHAP/LIME for post-hoc explanations. For user-facing systems, provide clear, human-readable explanations.",
      "**3. Human Oversight:** Establish human-in-the-loop processes for critical decisions. AI should augment human judgment, not replace it entirely, especially in domains with significant consequences.",
      "**4. Continuous Monitoring:** Deploy monitoring systems that track model performance, fairness metrics, and output distributions over time. Concept drift and changing user populations can cause previously fair models to become biased.",
      "## Building an Ethical AI Culture",
      "Ethical AI is not a one-time checkbox - it is an ongoing commitment that requires organizational culture change. Invest in training, establish ethics review boards, and create clear guidelines for AI development. The most important step is making ethics a first-class concern in your development process, not an afterthought.",
    ],
  },
  "n8n-vs-make-automation": {
    title: "n8n vs Make.com: Choosing the Right Automation Tool",
    category: "Automation",
    date: "March 22, 2025",
    readTime: "7 min read",
    author: "Hassan Malik",
    authorRole: "Mobile & Automation Lead",
    content: [
      "Workflow automation has become essential for businesses looking to scale operations without proportionally increasing headcount. Two of the most popular platforms are n8n and Make.com (formerly Integromat). Here is a comprehensive comparison.",
      "## Overview",
      "n8n is an open-source workflow automation tool that can be self-hosted, giving you full control over your data and infrastructure. Make.com is a cloud-based platform with a visual builder and extensive integration library.",
      "## Key Differences",
      "**Hosting & Data Control:** n8n can be self-hosted, which is crucial for companies with strict data sovereignty requirements. Make.com is cloud-only but offers enterprise-grade security and compliance.",
      "**Pricing:** n8n's open-source version is free to self-host, with paid cloud plans for managed hosting. Make.com uses an operation-based pricing model that scales with usage. For high-volume workflows, n8n often provides better cost efficiency.",
      "**Developer Experience:** n8n supports custom JavaScript/TypeScript nodes, making it more flexible for developers. Make.com offers a more visual, no-code approach that is faster for simple automations.",
      "**Integration Library:** Make.com has 1,500+ pre-built integrations. n8n has 400+ built-in nodes but compensates with HTTP Request and Code nodes for custom integrations.",
      "## When to Choose n8n",
      "Choose n8n when you need self-hosting for data compliance, have developer resources for custom nodes, require complex logic with code execution, or need cost-effective high-volume automation.",
      "## When to Choose Make.com",
      "Choose Make.com when you prefer a fully managed cloud solution, need the widest pre-built integration library, have a non-technical team building automations, or need rapid prototyping of simple workflows.",
      "## Our Recommendation",
      "For most enterprise clients, we recommend n8n for its flexibility, self-hosting capability, and cost efficiency at scale. For startups and smaller teams that need to move quickly, Make.com's intuitive interface and extensive integrations make it an excellent choice.",
    ],
  },
  "react-native-vs-flutter": {
    title: "React Native vs Flutter: The 2025 Comparison",
    category: "Mobile Development",
    date: "March 5, 2025",
    readTime: "9 min read",
    author: "Hassan Malik",
    authorRole: "Mobile & Automation Lead",
    content: [
      "The cross-platform mobile development landscape continues to evolve rapidly. In 2025, React Native and Flutter remain the two dominant frameworks. Here is an updated comparison to help you make the right choice for your project.",
      "## Performance",
      "Flutter's Dart-to-native compilation and Skia rendering engine deliver consistent, smooth performance across platforms. React Native's new architecture with Fabric renderer and TurboModules has significantly closed the performance gap, achieving near-native performance for most use cases.",
      "## Developer Experience",
      "React Native benefits from the massive JavaScript/TypeScript ecosystem and is familiar to web developers. Flutter requires learning Dart but offers a more opinionated and cohesive development experience with powerful built-in tooling.",
      "## UI & Design",
      "Flutter provides pixel-perfect control with its custom rendering engine, making it ideal for highly customized UI designs. React Native uses native platform components, which gives apps a more platform-authentic feel but less control over pixel-level details.",
      "## Ecosystem & Community",
      "React Native has a larger community and more third-party packages due to its longer history and JavaScript foundation. Flutter's ecosystem is rapidly growing and has excellent official packages from Google.",
      "## Our Recommendation",
      "If your team has strong JavaScript/React experience and you want to share code with a web application, React Native is the logical choice. If you need highly customized UI, consistent design across platforms, or are starting fresh without JavaScript expertise, Flutter is excellent. Both are production-ready and can deliver outstanding mobile experiences in 2025.",
    ],
  },
  "building-ai-chatbots-langchain": {
    title: "Building Production AI Chatbots with LangChain",
    category: "AI Development",
    date: "February 18, 2025",
    readTime: "12 min read",
    author: "Muhammad Usman",
    authorRole: "Founder & CEO",
    content: [
      "AI chatbots have evolved from simple rule-based systems to sophisticated conversational agents powered by large language models. LangChain has emerged as the go-to framework for building production-quality AI chatbots. Here is a comprehensive guide.",
      "## Why LangChain",
      "LangChain provides abstractions for the most common patterns in LLM applications: chains, agents, memory, and retrieval. It supports multiple LLM providers, making your chatbot portable across different models and services.",
      "## Architecture Overview",
      "A production chatbot built with LangChain typically consists of: a retrieval system (RAG) for domain knowledge, a memory system for conversation context, tool-use capabilities for taking actions, and guardrails for safety and relevance.",
      "## Retrieval-Augmented Generation (RAG)",
      "RAG is the backbone of any domain-specific chatbot. The process involves: chunking your knowledge base documents, creating vector embeddings with models like OpenAI Ada or Cohere, storing embeddings in a vector database like Pinecone or Chroma, and retrieving relevant chunks at query time to augment the LLM prompt.",
      "## Memory Management",
      "Effective conversation memory is crucial. LangChain offers several memory types: ConversationBufferMemory for short conversations, ConversationSummaryMemory for long conversations, and ConversationTokenBufferMemory for token-aware truncation. Choose based on your expected conversation length and model context window.",
      "## Tool Use and Agents",
      "Modern chatbots need to do more than just answer questions. LangChain agents can use tools to: search databases, call APIs, perform calculations, schedule meetings, and execute custom business logic. Define your tools clearly and provide the agent with good descriptions and examples.",
      "## Deployment Best Practices",
      "For production deployment, implement: streaming responses for better UX, caching for repeated queries, rate limiting to control costs, monitoring and logging for debugging, and fallback mechanisms when the LLM is unavailable or produces low-confidence responses.",
      "## Conclusion",
      "Building a production AI chatbot requires careful attention to architecture, data quality, and user experience. LangChain provides the building blocks, but the quality of your knowledge base, prompt engineering, and evaluation framework ultimately determine the chatbot's effectiveness.",
    ],
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.content[0],
  }
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <Badge className="mb-4 border-electric/30 bg-electric/10 text-electric">
            {post.category}
          </Badge>
          <h1 className="max-w-3xl text-balance font-serif text-3xl font-bold text-foreground md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author} &middot; {post.authorRole}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <article className="prose prose-slate max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mb-4 mt-10 font-serif text-2xl font-bold text-foreground"
                  >
                    {block.replace("## ", "")}
                  </h2>
                )
              }
              if (block.startsWith("**") && block.includes(":**")) {
                const parts = block.split(":**")
                const title = parts[0].replace(/\*\*/g, "")
                const desc = parts.slice(1).join(":**").replace(/\*\*/g, "")
                return (
                  <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">{title}:</strong>
                    {desc}
                  </p>
                )
              }
              return (
                <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                  {block}
                </p>
              )
            })}
          </article>

          {/* Share & Author */}
          <div className="mt-16 border-t border-border pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.authorRole} at Eraviya Solutions</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-2 text-sm text-muted-foreground">Share:</span>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-electric hover:text-electric-foreground"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-electric hover:text-electric-foreground"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-electric hover:text-electric-foreground"
                  aria-label="Copy link"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 rounded-xl border border-border bg-muted p-8 text-center">
            <h3 className="font-serif text-xl font-bold text-foreground">
              Enjoyed this article?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Subscribe to our newsletter for more insights on AI, development, and automation.
            </p>
            <div className="mt-6">
              <Button
                asChild
                className="bg-electric text-electric-foreground hover:bg-electric/90"
              >
                <Link href="/blog">Read More Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
