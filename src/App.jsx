import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-textprimary font-bold text-sm">NexusAI</span>
          </div>
          <p className="text-textsecondary text-sm">© 2025 NexusAI, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy', 'Terms', 'Status'].map((item) => (
              <a key={item} href="#" className="text-textsecondary hover:text-textprimary text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
