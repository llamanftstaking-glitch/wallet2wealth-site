import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <Image
        src="/brand/logo-no-bg.png"
        alt="Wallet to Wealth"
        width={96}
        height={96}
        className="drop-shadow-[0_0_24px_rgba(91,200,255,0.6)]"
      />
      <h1 className="mt-8 text-balance text-4xl font-bold sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-pretty text-white/65">
        The page you tried to load does not exist — maybe an old link or a typo. The PDF and
        checkout are both one click away.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-bold hover:border-white/30"
        >
          Back to home
        </Link>
        <Link
          href="/buy"
          className="w2w-cta inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-bold"
        >
          Get the PDF — $2.99
        </Link>
      </div>
    </main>
  )
}
