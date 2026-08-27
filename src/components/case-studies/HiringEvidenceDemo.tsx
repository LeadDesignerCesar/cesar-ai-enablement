import { useMemo, useState } from 'react'

type HiringStep = 'resume' | 'evidence' | 'questions' | 'decision'

const evidence = [
  { label: 'TEAM LEADERSHIP', detail: 'Led a 9-person field team across two locations', strength: 'STRONG' },
  { label: 'COACHING', detail: 'Mentored three new hires through ramp-up', strength: 'STRONG' },
  { label: 'PERFORMANCE', detail: 'Improved route completion by 11% over six months', strength: 'STRONG' },
  { label: 'CONFLICT', detail: 'No specific example shown on résumé', strength: 'PROBE' },
]

export default function HiringEvidenceDemo({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<HiringStep>('resume')
  const [scores, setScores] = useState({ evidence: 4, specificity: 3, roleFit: 4, biasCheck: 5 })
  const total = useMemo(() => scores.evidence + scores.specificity + scores.roleFit + scores.biasCheck, [scores])

  if (compact) {
    return <div className="hiring-compact"><span>EVIDENCE-BASED HIRING</span><strong>Résumé → Evidence → Questions → Decision</strong><small>Train managers to hire for demonstrated fit, not familiarity or gut instinct.</small></div>
  }

  const setScore = (key: keyof typeof scores, value: number) => setScores((current) => ({ ...current, [key]: value }))

  return (
    <div className="hiring-demo">
      <div className="hiring-demo-copy">
        <span>MANAGER TRAINING / TRAIN-THE-TRAINER</span>
        <strong>Teach managers to hire from evidence—not resemblance.</strong>
        <p>The practice flow starts with what the résumé actually proves, turns those claims into behavioral questions, and ends with a structured fit decision.</p>
        <div className="hiring-principle">FIT ≠ “FEELS LIKE US”</div>
      </div>

      <div className="hiring-workbench" aria-label="Interactive evidence-based hiring practice">
        <div className="hiring-tabs" role="tablist" aria-label="Hiring practice stages">
          <button type="button" className={step === 'resume' ? 'active' : ''} onClick={() => setStep('resume')}>1 · RÉSUMÉ</button>
          <button type="button" className={step === 'evidence' ? 'active' : ''} onClick={() => setStep('evidence')}>2 · EVIDENCE</button>
          <button type="button" className={step === 'questions' ? 'active' : ''} onClick={() => setStep('questions')}>3 · QUESTIONS</button>
          <button type="button" className={step === 'decision' ? 'active' : ''} onClick={() => setStep('decision')}>4 · DECISION</button>
        </div>

        {step === 'resume' && <section className="hiring-screen resume-screen">
          <div className="candidate-card">
            <div className="candidate-head"><div><span>CANDIDATE A</span><strong>Operations Supervisor</strong></div><b>6 YRS</b></div>
            <div className="resume-block"><span>EXPERIENCE</span><p><b>Field Team Lead</b> — led a 9-person team across two locations; supported onboarding and daily coaching.</p><p><b>Senior Technician</b> — recognized for route efficiency and customer retention.</p></div>
            <div className="resume-block"><span>RESULTS</span><p>Improved route completion by <b>11%</b> over six months.</p><p>Mentored <b>3 new hires</b> through ramp-up.</p></div>
          </div>
          <aside className="trainer-note"><span>TRAINER PROMPT</span><strong>What can you prove from this résumé?</strong><p>Do not score personality. Highlight claims that can be tested with follow-up questions.</p><button type="button" onClick={() => setStep('evidence')}>PULL THE EVIDENCE →</button></aside>
        </section>}

        {step === 'evidence' && <section className="hiring-screen evidence-screen">
          <div className="evidence-list">{evidence.map((item) => <article key={item.label} className={item.strength === 'PROBE' ? 'needs-probe' : ''}><span>{item.label}</span><strong>{item.detail}</strong><b>{item.strength}</b></article>)}</div>
          <aside className="evidence-rule"><span>THE RULE</span><strong>Résumé claims are clues—not conclusions.</strong><p>Strong evidence earns a deeper question. Missing evidence becomes a probe. Neither becomes a gut-feel shortcut.</p><button type="button" onClick={() => setStep('questions')}>BUILD THE QUESTIONS →</button></aside>
        </section>}

        {step === 'questions' && <section className="hiring-screen question-builder">
          <div className="question-card"><span>EVIDENCE</span><p>“Led a 9-person field team across two locations.”</p><b>ASK</b><strong>Tell me about a time two team members needed different coaching approaches. What did you notice, what did you do, and what changed?</strong><small>Tests coaching judgment—not whether you personally like their style.</small></div>
          <div className="question-card"><span>EVIDENCE GAP</span><p>No specific conflict example appears on the résumé.</p><b>ASK</b><strong>Walk me through a disagreement you had to resolve on your team. What evidence did you use before deciding what to do?</strong><small>Creates a fair probe instead of filling the gap with assumptions.</small></div>
          <div className="question-card accent"><span>FOLLOW-UP</span><p>Candidate says: “I’m good with people.”</p><b>ASK</b><strong>What happened that tells you your approach worked?</strong><small>Pushes from self-description to observable evidence.</small></div>
          <button className="hiring-next" type="button" onClick={() => setStep('decision')}>EVALUATE THE FIT →</button>
        </section>}

        {step === 'decision' && <section className="hiring-screen decision-screen">
          <div className="score-panel"><span>STRUCTURED EVALUATION</span><h4>Score the evidence. Not the vibe.</h4>{([
            ['evidence','Evidence quality'],['specificity','Specificity of examples'],['roleFit','Role-relevant fit'],['biasCheck','Bias check / consistency'],
          ] as const).map(([key,label]) => <label key={key}><span>{label}</span><div>{[1,2,3,4,5].map((value) => <button type="button" key={value} className={scores[key] === value ? 'selected' : ''} onClick={() => setScore(key,value)}>{value}</button>)}</div></label>)}</div>
          <aside className="decision-result"><span>FIT SCORE</span><strong>{total} / 20</strong><div className="fit-meter"><i style={{ width: `${(total/20)*100}%` }} /></div><h4>{total >= 16 ? 'STRONG EVIDENCE OF FIT' : total >= 12 ? 'MORE EVIDENCE NEEDED' : 'WEAK EVIDENCE OF FIT'}</h4><p>The decision is based on demonstrated behaviors against the role—not whether the candidate resembles the manager, shares their personality, or “feels right.”</p><button type="button" onClick={() => setStep('resume')}>RESET PRACTICE</button></aside>
        </section>}
      </div>

      <div className="hiring-outcome-strip"><div><strong>MANAGERS</strong><span>Ask better, evidence-based questions</span></div><div><strong>CANDIDATES</strong><span>Get a more consistent evaluation</span></div><div><strong>TRAINERS</strong><span>Have a repeatable coaching method</span></div><div><strong>BUSINESS</strong><span>Improves quality of hiring decisions</span></div></div>
    </div>
  )
}
