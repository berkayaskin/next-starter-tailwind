/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'

const repoName = 'berkayaskin/next-starter-tailwind'

const CTASection = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        asChild
        className="bg-gradient-to-br from-gray-100 to-green-200 font-semibold text-green-700 hover:from-gray-200 hover:to-green-200 hover:text-green-800"
      >
        <a
          href={`https://github.com/${repoName}/generate`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </a>
      </Button>
      <Button asChild variant="link">
        <a
          className=" rounded-3xl p-2 text-xs font-semibold"
          href={`https://github.com/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </Button>
    </div>
  )
}

export default CTASection
