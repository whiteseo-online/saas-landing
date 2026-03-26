import React from 'react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 hero-gradient overflow-hidden" id="features">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Now in Public Beta
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-textprimary leading-tight tracking-tight max-w-4xl mx-auto mb-6">
          Automate Everything.{' '}
          <span className="text-accent">Ship Faster.</span>{' '}
          Scale Smarter.
        </h1>

        {/* Subtitle */}
        <p className="text-textsecondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          NexusAI connects your tools, automates your workflows, and gives your team superpowers —
          without writing a single line of code. Join 12,000+ teams already building the future.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Start for free →
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto border border-border hover:border-accent/50 text-textprimary font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-surface hover:-translate-y-0.5"
          >
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-textsecondary text-sm">
          No credit card required · Free 14-day trial · Cancel anytime
        </p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '12K+', label: 'Active teams' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '3.2B', label: 'Tasks automated' },
            { value: '<50ms', label: 'Avg. latency' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-extrabold text-textprimary tracking-tight">{value}</span>
              <span className="text-textsecondary text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
