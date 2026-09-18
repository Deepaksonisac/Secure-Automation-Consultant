import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function SiteLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('flex items-center', className)}
      aria-label="Secure Automation Consultants home"
    >
      <Image
        src="/images/logo.png"
        alt="SAC — Secure Automation Consultants, business is people"
        width={443}
        height={206}
        priority
        className="h-9 w-auto sm:h-10 dark:brightness-0 dark:invert"
      />
    </Link>
  )
}
