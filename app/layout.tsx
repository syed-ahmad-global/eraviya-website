import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChatWidget } from '@/components/chat-widget'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Eraviya Solutions | An era of AI',
    template: '%s | Eraviya Solutions',
  },
  description:
    'Building intelligent solutions that drive business growth through cutting-edge AI and modern development practices. Custom AI, Full Stack, Mobile & Automation.',
  keywords: [
    'AI solutions development',
    'custom AI development',
    'full stack development services',
    'mobile app development cross-platform',
    'no-code automation solutions',
    'LLM integration services',
    'Generative AI development',
  ],
  icons: {
    icon: '/fav.webp',
    apple: '/fav.webp',
  },
  openGraph: {
    title: 'Eraviya Solutions | Where Intelligence Meets Innovation',
    description:
      'Building intelligent solutions that drive business growth through cutting-edge AI and modern development practices.',
    url: 'https://eraviyasolutions.com',
    siteName: 'Eraviya Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eraviya Solutions | Where Intelligence Meets Innovation',
    description:
      'Building intelligent solutions that drive business growth through cutting-edge AI and modern development practices.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
