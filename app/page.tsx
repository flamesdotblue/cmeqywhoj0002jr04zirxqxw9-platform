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
      <div className="fixed inset-0 -z-10 bg-black/50" />

      <Navbar />

      {/* Hero */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pt-28 pb-24 text-center md:pt-36">
        <h1 className="text-glow text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Build faster with a fluid, modern workflow
        </h1>
        <p className="text-glow max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          FluxFlow is a minimal toolkit for shipping SaaS products quickly. Focus on your product—our platform handles auth, billing, and deployments.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-black/20 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Get started — it’s free
          </a>
          <a
            href="#docs"
            className="rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xs transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Read the docs
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 opacity-90 sm:grid-cols-4">
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
