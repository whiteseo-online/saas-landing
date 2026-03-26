import React, { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shadow-glow">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-textprimary font-bold text-lg tracking-tight">NexusAI</span>
          </div>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-textsecondary hover:text-textprimary text-sm font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-textsecondary hover:text-textprimary text-sm font-medium transition-colors duration-200">
              Sign in
            </a>
            <a
              href="#pricing"
              className="bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-glow transition-all duration-300 hover:shadow-glow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Burger — mobile */}
          <button
            className="md:hidden text-textsecondary hover:text-textprimary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/40 py-4 flex flex-col gap-3">
            {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-textsecondary hover:text-textprimary text-sm font-medium px-2 py-1 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#pricing"
              className="mt-2 bg-accent text-white text-sm font-semibold px-5 py-2 rounded-full text-center shadow-glow"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
