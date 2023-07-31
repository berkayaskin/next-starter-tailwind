import type { ReactNode } from 'react'

import { ReduxProvider, ThemeProvider } from '@/lib/providers'

import Footer from './footer'
import Header from './header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ReduxProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="wrapper flex flex-1 items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default Layout
