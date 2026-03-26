import React from 'react'

export default function CTA() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Get started today</p>
        <h2 className="text-3xl sm:text-[44px] font-extrabold text-textprimary leading-tight tracking-tight mb-5">
          Ready to automate<br />your entire workflow?
        </h2>
        <p className="text-textsecondary text-lg mb-10 max-w-xl mx-auto">
          Join 12,000+ teams using NexusAI to save hours every week. Start free — no credit card needed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-base px-10 py-4 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Start for free →
          </a>
          <a
            href="#"
            className="w-full sm:w-auto border border-border hover:border-accent/50 text-textprimary font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 hover:bg-surface hover:-translate-y-0.5"
          >
            Talk to sales
          </a>
        </div>
        <p className="mt-6 text-textsecondary text-sm">14-day free trial · No credit card · Cancel anytime</p>
      </div>
    </section>
  )
}
