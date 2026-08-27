import { useState } from 'react'
import type { caseStudies } from '../../data/portfolioData'

type CaseStudy = (typeof caseStudies)[number]
const steps = ['FRICTION', 'DISCOVERY', 'SOLUTION', 'ENABLEMENT', 'GOVERNANCE', 'IMPACT'] as const

export default function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [active, setActive] = useState<(typeof steps)[number]>('FRICTION')
  const content: Record<(typeof steps)[number], string> = {
    FRICTION: study.friction,
    DISCOVERY: study.discovery,
    SOLUTION: study.solution,
    ENABLEMENT: study.enablement,
    GOVERNANCE: study.governance,
    IMPACT: study.note ?? 'Measured or projected outcomes are summarized below.',
  }

  return (
    <article className="case-study" id={study.slug}>
      <div className="case-index">0{index + 1}</div>
      <div className="case-topline"><span>{study.eyebrow}</span><span className="status">{study.status}</span></div>
      <h3>{study.title}</h3>
      <div className="case-layout">
        <div className="case-stepper" role="tablist" aria-label={`${study.title} case study stages`}>
          {steps.map((step) => (
            <button key={step} type="button" role="tab" aria-selected={active === step} onClick={() => setActive(step)}>{step}</button>
          ))}
        </div>
        <div className="case-content" role="tabpanel" tabIndex={0}>
          <span className="content-label">{active}</span>
          <p>{content[active]}</p>
          {active === 'IMPACT' && (
            <div className="metrics-grid">
              {study.metrics.map((metric) => <div key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
          )}
        </div>
      </div>
      <div className="case-flow" aria-label="Cesar's enablement method">
        {steps.map((step) => <span key={step}>{step}</span>)}
      </div>
    </article>
  )
}
