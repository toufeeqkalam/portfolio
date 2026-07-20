import { useState, useEffect, useMemo } from 'react'
import avatarImg from './assets/avatar.png'

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      color: ['#646cff', '#7b2ff7', '#00d2ff', '#a78bfa', '#818cf8'][Math.floor(Math.random() * 5)],
    })), [])

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  )
}

function TerminalBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 dark:bg-black rounded-lg border border-gray-700 dark:border-gray-800 shadow-2xl max-w-md mx-auto text-left overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-gray-500 text-[0.6rem] font-mono ml-2">~/portfolio</span>
      </div>
      <div className="p-4 font-mono text-sm text-gray-300 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors">

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-500 hover:text-indigo-500 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
        <span className="font-heading font-bold text-sm bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"><span className="text-indigo-500 opacity-60">&lt;</span>TK<span className="text-indigo-500 opacity-60">/&gt;</span></span>
        <button
          onClick={() => setDark(!dark)}
          className="text-gray-400 hover:text-indigo-500 transition-colors"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile slide-out menu */}
      <div className={`fixed top-14 left-0 w-56 h-[calc(100vh-3.5rem)] bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 flex flex-col justify-between py-6 px-4 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col gap-4">
          <a href="#hero" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-gray-500 hover:text-indigo-500 transition-colors py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="text-sm font-mono">Home</span>
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-gray-500 hover:text-indigo-500 transition-colors py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-sm font-mono">About</span>
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-gray-500 hover:text-indigo-500 transition-colors py-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span className="text-sm font-mono">Contact</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/toufeeqkalam" target="_blank" rel="noopener noreferrer" className="text-[#181717] dark:text-[#f0f0f0] hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/toufeeqkalam" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://x.com/toufeeqkalam" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 w-[72px] h-screen bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 flex-col items-center justify-between py-8 z-50">
        <div className="flex flex-col items-center gap-6">
          <a href="#hero" className="font-heading font-bold text-sm bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
            <span className="text-indigo-500 opacity-60">&lt;</span>TK<span className="text-indigo-500 opacity-60">/&gt;</span>
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="text-gray-400 hover:text-indigo-500 transition-colors mb-2"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <a href="#hero" className="flex flex-col items-center gap-1 text-gray-400 hover:text-indigo-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="text-[0.55rem] uppercase tracking-widest font-mono">Home</span>
          </a>
          <a href="#about" className="flex flex-col items-center gap-1 text-gray-400 hover:text-indigo-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-[0.55rem] uppercase tracking-widest font-mono">About</span>
          </a>
          <a href="#contact" className="flex flex-col items-center gap-1 text-gray-400 hover:text-indigo-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span className="text-[0.55rem] uppercase tracking-widest font-mono">Contact</span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#181717] dark:text-[#f0f0f0] hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full md:ml-[72px] md:w-[calc(100%-72px)] mt-14 md:mt-0">

        {/* Hero */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pb-8 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

          {/* Floating particles */}
          <Particles />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
            backgroundImage: 'linear-gradient(rgba(100,108,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,108,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          <div className="max-w-2xl text-center relative z-10">
            {/* Avatar */}
            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[170px] mx-auto mb-10 opacity-0 animate-fade-in-up">
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-indigo-500 animate-spin-slow" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-cyan-400 to-purple-600 bg-[length:300%_300%] animate-gradient-shift p-[3px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-950" />
              </div>
              <div className="relative z-10 w-[130px] h-[130px] md:w-[170px] md:h-[170px] rounded-full overflow-hidden shadow-[0_8px_32px_rgba(100,108,255,0.25)] group">
                <img
                  src={avatarImg}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 group-hover:contrast-[1.1] group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <span className="absolute bottom-2 right-2 z-20 bg-indigo-500 text-white text-[0.6rem] font-mono px-2 py-0.5 rounded shadow-lg shadow-indigo-500/30">
                &lt;/&gt;
              </span>
            </div>

            <p className="text-indigo-500 font-mono text-sm tracking-wide mb-2 opacity-0 animate-fade-in-up-delay-1">
              <span className="opacity-50">&gt; </span>
              <span className="typing-effect border-indigo-500">hello_world</span>
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent tracking-tight opacity-0 animate-fade-in-up-delay-2">
              TOUFEEQ KALAM
            </h1>
            <h2 className="text-base md:text-lg text-gray-400 font-mono mt-2 mb-6 tracking-wide opacity-0 animate-fade-in-up-delay-3">
              <span className="text-gray-300 dark:text-gray-600">// </span>Senior Software Engineer
            </h2>

            {/* Terminal card */}
            <div className="mb-8 opacity-0 animate-fade-in-up-delay-4">
              <TerminalBlock>
                <p><span className="text-green-400">$</span> cat about.txt</p>
                <p className="text-gray-400 mt-2">I build robust, scalable, and</p>
                <p className="text-gray-400">high-performance backend platforms.</p>
                <p className="mt-2"><span className="text-green-400">$</span> <span className="text-gray-500">_</span></p>
              </TerminalBlock>
            </div>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-mono text-sm px-6 py-3 rounded-md hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(100,108,255,0.35)] transition-all duration-300 opacity-0 animate-fade-in-up-delay-4"
            >
              get_in_touch()
            </a>

            {/* Scroll indicator */}
            <div className="mt-12">
              <a href="#about" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-indigo-500 transition-colors animate-bounce">
                <span className="text-[0.6rem] font-mono uppercase tracking-widest">scroll</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        {/* About */}
        <section id="about" className="max-w-3xl mx-auto py-16 md:py-24 px-6 min-h-screen flex flex-col justify-center">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="text-indigo-400 opacity-40">{'{ '}</span>
              aboutMe
              <span className="text-indigo-400 opacity-40">{' }'}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              I engineer robust backend systems designed for scale, performance, and reliability.
              With experience in Java, Kubernetes, Docker, cloud-native infrastructure, and DevOps,
              I focus on building resilient platforms that solve real-world problems.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12">
            <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">10+</div>
              <div className="text-[0.65rem] md:text-xs text-gray-400 font-mono mt-1">years_exp</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">10+</div>
              <div className="text-[0.65rem] md:text-xs text-gray-400 font-mono mt-1">projects</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">10+</div>
              <div className="text-[0.65rem] md:text-xs text-gray-400 font-mono mt-1">technologies</div>
            </div>
          </div>

          {/* Skills with icons */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Java', color: 'from-red-500 to-red-600', icon: 'devicon-java-plain' },
              { name: 'Spring Boot', color: 'from-green-500 to-green-600', icon: 'devicon-spring-plain' },
              { name: 'Spring Cloud', color: 'from-green-400 to-emerald-500', icon: 'devicon-spring-plain' },
              { name: 'AWS', color: 'from-orange-400 to-orange-500', icon: 'devicon-amazonwebservices-plain-wordmark' },
              { name: 'MariaDB', color: 'from-blue-800 to-blue-900', icon: 'devicon-mariadb-plain' },
              { name: 'Elasticsearch', color: 'from-yellow-400 to-yellow-500', icon: 'devicon-elasticsearch-plain' },
              { name: 'Docker', color: 'from-sky-400 to-sky-500', icon: 'devicon-docker-plain' },
              { name: 'Kubernetes', color: 'from-blue-500 to-indigo-600', icon: 'devicon-kubernetes-plain' },
              { name: 'Prometheus', color: 'from-orange-500 to-red-500', icon: 'devicon-prometheus-original' },
              { name: 'Node.js', color: 'from-green-500 to-green-600', icon: 'devicon-nodejs-plain' },
              { name: 'React', color: 'from-cyan-400 to-cyan-500', icon: 'devicon-react-original' },
              { name: 'Angular', color: 'from-red-600 to-red-700', icon: 'devicon-angular-plain' },
              { name: 'Cassandra', color: 'from-blue-400 to-blue-600', icon: 'devicon-cassandra-plain' },
              { name: 'GitHub Actions', color: 'from-gray-600 to-gray-800', icon: 'devicon-githubactions-plain' },
              { name: 'Splunk', color: 'from-green-400 to-green-600', icon: 'devicon-splunk-original-wordmark' },
              { name: 'Resilience4j', color: 'from-teal-500 to-teal-600', icon: 'devicon-java-plain' },
              { name: 'Helm', color: 'from-blue-500 to-blue-700', icon: 'devicon-helm-original' },
              { name: 'Terraform', color: 'from-purple-500 to-purple-700', icon: 'devicon-terraform-plain' },
            ].map((skill) => (
              <span
                key={skill.name}
                className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-xs md:text-sm font-mono text-gray-600 dark:text-gray-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <i className={`${skill.icon} text-base md:text-lg`} />
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        {/* Contact */}
        <section id="contact" className="max-w-2xl mx-auto py-16 md:py-24 px-6 min-h-screen flex flex-col justify-center">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 dark:text-gray-100 mb-4">
              <span className="text-indigo-400 opacity-40">{'{ '}</span>
              contact
              <span className="text-indigo-400 opacity-40">{' }'}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-mono">
              <span className="text-gray-300 dark:text-gray-600">// </span>let's connect
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Contact form */}
            <form
              action="https://formspree.io/f/xwvgbeqj"
              method="POST"
              className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-1.5">
                  <span className="text-indigo-400">const</span> name <span className="text-gray-300 dark:text-gray-600">=</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-mono text-gray-800 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-1.5">
                  <span className="text-indigo-400">const</span> email <span className="text-gray-300 dark:text-gray-600">=</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="user@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-mono text-gray-800 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-gray-400 mb-1.5">
                  <span className="text-indigo-400">const</span> subject <span className="text-gray-300 dark:text-gray-600">=</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project collaboration"
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-mono text-gray-800 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-1.5">
                  <span className="text-indigo-400">const</span> message <span className="text-gray-300 dark:text-gray-600">=</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hey, I'd love to chat about..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-mono text-gray-800 dark:text-gray-200 placeholder-gray-300 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-mono text-sm px-6 py-3 rounded-md hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(100,108,255,0.35)] transition-all duration-300"
              >
                send_message()
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-300 dark:text-gray-600 text-xs font-mono border-t border-gray-100 dark:border-gray-800">
          <p className="mb-2">built_with(<span className="text-indigo-400">React</span>, <span className="text-cyan-400">Tailwind</span>, <span className="text-purple-400">TypeScript</span>)</p>
          <p>&copy; {new Date().getFullYear()} Toufeeq Kalam // all_rights_reserved</p>
        </footer>
      </main>
    </div>
  )
}

export default App
