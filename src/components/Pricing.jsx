import React from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for individuals and small experiments.',
    features: [
      '5 active workflows',
      '1,000 tasks/month',
      '3 integrations',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited workflows',
      '500,000 tasks/month',
      '50+ integrations',
      'Priority support',
      'Advanced analytics',
      'Custom webhooks',
      'Team collaboration',
    ],
    cta: 'Start Pro trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For large orgs with compliance requirements.',
    features: [
      'Everything in Pro',
      'Unlimited tasks',
      'SSO & SAML',
      'Dedicated SLA',
      'Custom integrations',
      'Audit logs',
      'Onboarding support',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="py-24 bg-bg" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-[40px] font-bold text-textprimary leading-tight tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-textsecondary text-lg max-w-xl mx-auto">
            Start free, scale when ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative rounded-xl p-8 border transition-all duration-300 cursor-default
                hover:-translate-y-2 hover:shadow-glow-lg
                ${plan.highlight
                  ? 'bg-surface border-accent shadow-glow'
                  : 'bg-surface border-border hover:border-accent/50'
                }
              `}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-glow whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <p className="text-textsecondary text-sm font-semibold uppercase tracking-wider mb-2">{plan.name}</p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold text-textprimary leading-none">{plan.price}</span>
                <span className="text-textsecondary text-sm mb-1">{plan.period}</span>
              </div>

              <p className="text-textsecondary text-sm mb-8">{plan.description}</p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-10">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-textsecondary text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`
                  block w-full text-center font-semibold text-sm py-3 rounded-xl transition-all duration-300
                  ${plan.highlight
                    ? 'bg-accent hover:bg-accent/90 text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5'
                    : 'bg-bg hover:bg-border/40 text-textprimary border border-border hover:border-accent/50'
                  }
                `}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-textsecondary text-sm mt-10">
          All plans include 14-day free trial. No credit card required.{' '}
          <a href="#" className="text-accent hover:underline">Compare plans →</a>
        </p>
      </div>
    </section>
  )
}
