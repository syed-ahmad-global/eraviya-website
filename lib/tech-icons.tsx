"use client"

import type { IconType } from "react-icons"
import {
    SiOpenai,
    SiAnthropic,
    SiLangchain,
    SiHuggingface,
    SiTensorflow,
    SiPytorch,
    SiOpencv,
    SiScikitlearn,
    SiPandas,
    SiSpacy,
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiAngular,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiFramer,
    SiThreedotjs,
    SiD3Dotjs,
    SiShadcnui,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiFastapi,
    SiDjango,
    SiPostgresql,
    SiMongodb,
    SiSupabase,
    SiFirebase,
    SiRedis,
    SiGraphql,
    SiDocker,
    SiAmazonwebservices,
    SiVercel,
    SiFlutter,
    SiExpo,
    SiN8N,
    SiZapier,
    SiStripe,
    SiSocketdotio,
    SiWebrtc,
} from "react-icons/si"

import {
    Brain,
    Workflow,
    Plug,
    MessageSquare,
    Globe,
    Bell,
    Database,
    Pyramid,
} from "lucide-react"

// Wrapper to unify react-icons (IconType) with Lucide (LucideIcon) under a
// single React component signature: { className?: string }
type TechIcon = React.ComponentType<{ className?: string }>

// react-icons use `size` + `style.color`, while Lucide uses `className`.
// This wrapper lets us treat them identically in consumer components.
function wrapSiIcon(Icon: IconType): TechIcon {
    const Wrapped: TechIcon = ({ className }) => (
        <Icon className={className} />
    )
    Wrapped.displayName = Icon.displayName ?? "SiIcon"
    return Wrapped
}

const techIconMap: Record<string, TechIcon> = {
    // ── AI & ML ──────────────────────────────────────────────
    "OpenAI GPT-4": wrapSiIcon(SiOpenai),
    "OpenAI": wrapSiIcon(SiOpenai),
    "GPT-4": wrapSiIcon(SiOpenai),
    "Anthropic Claude": wrapSiIcon(SiAnthropic),
    "Claude": wrapSiIcon(SiAnthropic),
    "Llama / Mistral": Brain,          // no official SI icon
    "LangChain": wrapSiIcon(SiLangchain),
    "Hugging Face": wrapSiIcon(SiHuggingface),
    "TensorFlow": wrapSiIcon(SiTensorflow),
    "PyTorch": wrapSiIcon(SiPytorch),
    "OpenCV": wrapSiIcon(SiOpencv),
    "scikit-learn": wrapSiIcon(SiScikitlearn),
    "Pandas / NumPy": wrapSiIcon(SiPandas),
    "NLTK / spaCy": wrapSiIcon(SiSpacy),
    "Pinecone": Pyramid,          // vector DB icon (Pinecone logo not available in SI)
    "NLP": MessageSquare,      // generic concept

    // ── Frontend ─────────────────────────────────────────────
    "React": wrapSiIcon(SiReact),
    "Next.js": wrapSiIcon(SiNextdotjs),
    "Vue.js": wrapSiIcon(SiVuedotjs),
    "Angular": wrapSiIcon(SiAngular),
    "TypeScript": wrapSiIcon(SiTypescript),
    "JavaScript": wrapSiIcon(SiJavascript),
    "Tailwind CSS": wrapSiIcon(SiTailwindcss),
    "Tailwind": wrapSiIcon(SiTailwindcss),
    "Framer Motion": wrapSiIcon(SiFramer),
    "Three.js / R3F": wrapSiIcon(SiThreedotjs),
    "Recharts / D3.js": wrapSiIcon(SiD3Dotjs),
    "D3.js": wrapSiIcon(SiD3Dotjs),
    "shadcn/ui": wrapSiIcon(SiShadcnui),

    // ── Backend & Databases ──────────────────────────────────
    "Node.js": wrapSiIcon(SiNodedotjs),
    "Express": wrapSiIcon(SiExpress),
    "Python": wrapSiIcon(SiPython),
    "FastAPI": wrapSiIcon(SiFastapi),
    "Django": wrapSiIcon(SiDjango),
    "PostgreSQL": wrapSiIcon(SiPostgresql),
    "MongoDB": wrapSiIcon(SiMongodb),
    "Supabase": wrapSiIcon(SiSupabase),
    "Firebase": wrapSiIcon(SiFirebase),
    "Redis": wrapSiIcon(SiRedis),
    "GraphQL": wrapSiIcon(SiGraphql),
    "Docker": wrapSiIcon(SiDocker),
    "AWS": wrapSiIcon(SiAmazonwebservices),
    "Vercel": wrapSiIcon(SiVercel),

    // ── Mobile ───────────────────────────────────────────────
    "React Native": wrapSiIcon(SiReact),
    "Flutter": wrapSiIcon(SiFlutter),
    "Expo": wrapSiIcon(SiExpo),
    "PWA": Globe,               // generic concept
    "WebRTC": wrapSiIcon(SiWebrtc),
    "Push Notifications": Bell,          // generic concept

    // ── Automation ───────────────────────────────────────────
    "n8n": wrapSiIcon(SiN8N),
    "Make.com": Workflow,            // no official SI icon
    "Zapier": wrapSiIcon(SiZapier),
    "GoHighLevel": Workflow,            // no official SI icon
    "Webhooks": Plug,                // generic concept
    "REST APIs": Plug,                // generic concept
    "REST API": Plug,                // generic concept

    // ── Portfolio extras ─────────────────────────────────────
    "Stripe": wrapSiIcon(SiStripe),
    "Socket.io": wrapSiIcon(SiSocketdotio),
}

export function getTechIcon(name: string): TechIcon | null {
    return techIconMap[name] ?? null
}
