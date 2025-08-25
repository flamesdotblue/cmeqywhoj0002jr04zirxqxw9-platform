import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="fixed inset-0 -z-20 h-full w-full object-cover"
        src="https://static.vecteezy.com/system/resources/previews/049/694/775/mp4/glossy-liquid-flowing-gradient-shapes-looped-background-free-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Holographic description as aria note for accessibility */}
      <span className="sr-only">
        Vibrant, abstract holographic gradient with liquid metallic folds in blues, purples, magentas blending with pops of orange, yellow, and red, softly lit and in fluid motion.
      </span>

      {/* Overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      <Navbar />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36">
        {/* Glow backdrop accent */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-[420px] max-w-4xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22),transparent_60%)] blur-2xl hero-glow" />

        <div className="flex flex-col items-center text-center">
          <span className="badge mb-4 text-glow">
            <SparklesIcon className="h-4 w-4" />
            New: AI-assisted onboarding • 60s setup
          </span>

          <h1 className="text-glow mx-auto max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Ship your SaaS in days, not months
            <br />
            <span className="bg-gradient-to-r from-fuchsia-300 via-rose-200 to-amber-200 bg-clip-text text-transparent">with a fluid, modern workflow</span>
          </h1>

          <p className="text-glow mx-auto mt-5 max-w-2xl text-balance text-base text-white/85 sm:text-lg">
            FluxFlow unblocks product teams with instant auth, billing, and deploys. Focus on what matters—your customers.
          </p>

          {/* CTA Row */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#get-started" className="primary-btn">
              Start free — no card needed
            </a>
            <a href="#demo" className="secondary-btn flex items-center gap-2">
              <PlayIcon className="h-4 w-4" />
              Watch 60s demo
            </a>
            <span className="ml-0 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/70 backdrop-blur-xs sm:ml-2">
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/90">/</kbd>
              to search
            </span>
          </div>

          {/* Social proof */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-7 sm:flex-row">
            <div className="flex -space-x-2">
              {['AL','BK','CM','DW','EZ'].map((i) => (
                <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/20 text-[10px] font-semibold text-white/90 backdrop-blur">
                  {i}
                </div>
              ))}
            </div>
            <div className="text-sm text-white/80">
              Loved by 2,300+ builders •
              <span className="ml-2 inline-flex items-center align-middle">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-amber-300" />
                ))}
              </span>
              <span className="ml-2">4.9/5 average</span>
            </div>
          </div>

          {/* Mockup card */}
          <div className="hero-float shimmer relative mt-10 w-full max-w-4xl rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-md">
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="text-xs text-white/60">app.tsx</span>
            </div>
            <div className="grid gap-2">
              <div className="code-line w-2/5" />
              <div className="code-line thin w-4/5" />
              <div className="code-line w-3/5" />
              <div className="code-line dim w-1/2" />
              <div className="code-line thin w-3/4" />
              <div className="code-line w-2/3" />
              <div className="code-line dim w-1/3" />
            </div>
            <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-[radial-gradient(1200px_300px_at_50%_-20%,rgba(255,255,255,0.25),transparent)]" />
          </div>

          {/* Logo strip */}
          <div className="mt-8 grid w-full max-w-5xl grid-cols-2 items-center gap-4 opacity-80 sm:grid-cols-3 md:grid-cols-6">
            {['Acme','Nova','Pulse','Glacier','Orbit','Beacon'].map((brand) => (
              <div key={brand} className="text-center text-xs uppercase tracking-wide text-white/60">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature chips */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-24 text-center">
        <div className="mt-2 grid grid-cols-2 gap-6 opacity-95 sm:grid-cols-4">
          <Feature text="Auth" />
          <Feature text="Billing" />
          <Feature text="Deploy" />
          <Feature text="Analytics" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-6xl px-6 pb-10 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} FluxFlow. All rights reserved.</p>
      </footer>
    </main>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm backdrop-blur-xs">
      {text}
    </div>
  )
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5 3l1.4 3.6L10 8l-3.6 1.4L5 13l-1.4-3.6L0 8l3.6-1.4L5 3zm14 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zM9 15l1 2.6L13 19l-3 1.4L9 23l-1-2.6L5 19l3-1.4L9 15z" />
    </svg>
  )
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.176 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
