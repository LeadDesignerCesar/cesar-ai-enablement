import { useState } from 'react'

const steps = [
  { n: '01', title: 'SME INPUT', detail: 'Capture source material and subject-matter expertise.', icon: '◫' },
  { n: '02', title: 'AI-ASSISTED DRAFT', detail: 'Use AI to accelerate the first build instead of starting from a blank page.', icon: '✦' },
  { n: '03', title: 'CESAR REVIEW', detail: 'Review the learning design, structure, clarity, and quality.', icon: '⌕' },
  { n: '04', title: 'SME FEEDBACK', detail: 'Validate operational accuracy and capture corrections.', icon: '◌' },
  { n: '05', title: 'REVISE + PUBLISH', detail: 'Apply feedback and release a human-approved course.', icon: '✓' },
]

export default function ProductionWorkflowDemo() {
  const [active, setActive] = useState(0)
  const [showRhythm, setShowRhythm] = useState(false)
  const step = steps[active]

  return (
    <section className="production-infographic production-interactive" aria-label="Interactive AI-enabled course production workflow">
      <div className="prod-intro"><span>THE WORKFLOW</span><strong>AI sped up the work. Human review stayed in the loop.</strong></div>
      <p className="prod-tap-hint">Select a step to see how the workflow moved.</p>
      <div className="prod-step-tabs" role="tablist" aria-label="Production workflow steps">
        {steps.map((item, index) => <button key={item.n} type="button" role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)}><span>{item.n}</span><strong>{item.title}</strong></button>)}
      </div>
      <div className="prod-focus" role="tabpanel">
        <div className="prod-focus-icon" aria-hidden="true">{step.icon}</div>
        <div><span>STEP {step.n}</span><h4>{step.title}</h4><p>{step.detail}</p></div>
        <button type="button" className="prod-next" onClick={() => setActive((active + 1) % steps.length)}>{active === steps.length - 1 ? 'START AGAIN' : 'NEXT STEP'} →</button>
      </div>
      <button type="button" className="prod-rhythm-toggle" aria-expanded={showRhythm} onClick={() => setShowRhythm((value) => !value)}>{showRhythm ? 'HIDE THE DAILY RHYTHM ↑' : 'SEE HOW 29 COURSES MOVED IN PARALLEL ↓'}</button>
      {showRhythm && <div className="prod-rhythm-reveal">
        <div className="prod-operating"><span>THE OPERATING MODEL</span><h4>Build one course while reviewing another. Every day.</h4><div className="prod-timeline"><article><b>DAY 01</b><strong>Build Course 01</strong><small>Review queue begins</small></article><article><b>DAY 02</b><strong>Build Course 02</strong><small>Review Course 01</small></article><article><b>DAY 03</b><strong>Build Course 03</strong><small>Review Course 02</small></article><div className="timeline-gap" aria-hidden="true">•••</div><article className="day-final"><b>DAY 29</b><strong>Build Course 29</strong><small>Core curriculum complete</small></article></div></div>
        <aside className="prod-outcomes" aria-label="Production outcomes"><span>THE OUTCOME</span><div className="outcome-grid"><div><strong>29</strong><small>courses completed</small></div><div><strong>1</strong><small>month</small></div><div><strong>SME + CESAR</strong><small>owned accuracy + final decisions</small></div><div><strong>AI</strong><small>accelerated production</small></div></div></aside>
      </div>}
      <div className="prod-governance"><b>Human judgment stayed in control.</b><span>Speed came from a better workflow—not from skipping review, correction, or approval.</span></div>
    </section>
  )
}
