import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Page404 = () => {
  return (
    <>
      <div className="grid justify-center gap-1 p-12">
        <Image
          src="/assets/404 Error-amico.svg"
          width={320}
          height={320}
          alt="404 Illustration"
        />
        <Button variant="link" asChild>
          <a href="https://storyset.com/web" className="text-xs text-slate-400">
            Web illustrations by Storyset
          </a>
        </Button>
      </div>

      <div className="grid gap-6 text-center">
        <h3>Oppss. It seems you have lost your way!</h3>
        <div>
          <Button asChild size="lg" variant="outline" fontSize="md">
            <Link href="/">Go Back to Home Page</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Page404
