'use client'

import { useAppSelector } from '@/lib/redux/hooks/useAppSelector'

const StarterText = () => {
  const userName = useAppSelector((state) => state.auth.user)

  return (
    <div className="grid gap-2.5">
      <h1 className="bg-gradient-to-br from-gray-200 to-teal-700 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        welcome {userName.toLowerCase()}
      </h1>
      <p className="text-xs text-gray-500 md:text-sm">
        Next.js starter template with TailwindCSS and TypeScript setup
      </p>
    </div>
  )
}

export default StarterText
