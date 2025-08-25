export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90" />
            <span className="text-sm font-semibold tracking-tight">FluxFlow</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#docs">Docs</a>
          </nav>
          <div className="flex items-center gap-2">
            <a className="hidden text-sm text-white/80 hover:text-white md:inline" href="#login">Log in</a>
            <a
              className="rounded-md bg-white px-3 py-2 text-xs font-medium text-black shadow/40 shadow-black/20 hover:opacity-90"
              href="#signup"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
