import type { NextPage } from 'next'

import CTASection from '@/components/samples/cta-section'
import StarterText from '@/components/samples/starter-text'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <StarterText />
      <CTASection />
    </div>
  )
}

export default Home
