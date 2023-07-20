import type { Metadata } from 'next'

import Layout from '@/components/layouts'
import { cn } from '@/lib/utils'
import { fontSans } from '@/styles/fonts'

import '@/styles/globals.css'

const APP_NAME = 'next-starter-tailwind'

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js + TailwindCSS v3 + TypeScript template',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://berkayaskin.dev',
    title: 'next-starter-tailwind',
    description: 'Next.js + TailwindCSS v3 + TypeScript template',
    images: {
      url: '',
      alt: 'berkayaskin.dev og-image',
    },
  },
  twitter: {
    creator: '@berkayaskin',
    card: 'summary_large_image',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Layout>
          <div className="flex-1">{children}</div>
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout