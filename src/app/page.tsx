import type { NextPage } from 'next'

import CTASection from '@/features/cta-section'
import StarterText from '@/features/starter-text'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <StarterText />
      <CTASection />
    </div>
  )
}

export default Home
