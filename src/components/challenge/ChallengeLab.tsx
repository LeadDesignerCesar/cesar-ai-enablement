import { useMemo, useState, type ReactNode } from 'react'
import { adoptionRecommendations, challenge, solutionRecommendations, type Adoption, type Audience, type Friction, type Measure, type Solution } from '../../data/portfolioData'
import { buildRecommendation } from './recommendation'

type Step = 1 | 2 | 3 | 4 | 5

export default function ChallengeLab({ onSeeWork, onExit }: { onSeeWork: () => void; onExit: () => void }) {
  const [step, setStep] = useState<Step>(1)
  const [friction, setFriction] = useState<Friction | null>(null)
  const [audience, setAudience] = useState<Audience | null>(null)
  const [solution, setSolution] = useState<Solution | null>(null)
  const [adoption, setAdoption] = useState<Adoption | null>(null)
  const [measure, setMeasure] = useState<Measure | null>(null)
  const complete = Boolean(friction && audience && solution && adoption && measure)
  const recommendation = useMemo(() => complete ? buildRecommendation({ friction: friction!, audience: audience!, solution: solution!, adoption: adoption!, measure: measure! }) : '', [complete, friction, audience, solution, adoption, measure])
  const reset = () => { setStep(1); setFriction(null); setAudience(null); setSolution(null); setAdoption(null); setMeasure(null) }

  return (
    <section className="challenge-view screen-enter" aria-labelledby="challenge-heading">
      <div className="challenge-topbar">
        <button className="back-link" type="button" onClick={onExit}>← EXIT</button>
        <div className="challenge-progress" aria-label={`Challenge progress ${Math.min(step, 4)} of 4`}>
          {[1,2,3,4].map((n) => <i key={n} className={step >= n ? 'active' : ''} />)}
          <span>{step === 5 ? 'COMPLETE' : `0${step} / 04`}</span>
        </div>
      </div>

      <div className={`challenge-layout ${step === 5 ? 'results-layout' : ''}`}>
        <div className="challenge-main">
          {step === 1 && <Stage number="01" eyebrow="FIND THE FRICTION" title="What is getting in the way of performance?">
            <ChoiceGrid options={Object.keys(challenge.friction.options)} selected={friction} onSelect={(v) => setFriction(v as Friction)} />
            {friction && <Feedback>{challenge.friction.options[friction]}</Feedback>}
            <div className="micro-question"><span>WHO FEELS IT MOST?</span><ChoiceGrid compact options={[...challenge.friction.audiences]} selected={audience} onSelect={(v) => setAudience(v as Audience)} /></div>
            <Continue disabled={!friction || !audience} onClick={() => setStep(2)} />
          </Stage>}

          {step === 2 && <Stage number="02" eyebrow="BUILD THE FIX" title="What kind of support removes the friction?">
            <div className="big-principle">AI SHOULD REMOVE FRICTION.<br/><em>NOT ADD ANOTHER STEP.</em></div>
            <ChoiceGrid forceTwoByTwo options={[...challenge.solution.options]} selected={solution} onSelect={(v) => setSolution(v as Solution)} />
            {friction && solution && <Feedback><strong>{friction} + {solution}</strong> — {solutionRecommendations[friction][solution]}</Feedback>}
            <Continue disabled={!solution} onClick={() => setStep(3)} />
          </Stage>}

          {step === 3 && <Stage number="03" eyebrow="ENABLE THE PEOPLE" title="How will people get confident enough to use it?">
            <div className="pattern-display"><span>SEE IT</span><b>→</b><span>TRY IT</span><b>→</b><span>USE IT AT WORK</span></div>
            <ChoiceGrid forceTwoByTwo options={[...challenge.enablement.options]} selected={adoption} onSelect={(v) => setAdoption(v as Adoption)} />
            {adoption && <Feedback>{adoptionRecommendations[adoption]}</Feedback>}
            <Continue disabled={!adoption} onClick={() => setStep(4)} />
          </Stage>}

          {step === 4 && <Stage number="04" eyebrow="PROVE THE IMPACT" title="What evidence would prove it worked?">
            <div className="impact-statement">COMPLETION <span>≠</span> IMPACT</div>
            <ChoiceGrid forceTwoByTwo options={[...challenge.impact.options]} selected={measure} onSelect={(v) => setMeasure(v as Measure)} />
            {measure && <div className="metric-preview">{challenge.impact.simulatedMetrics[measure].map((metric) => { const [value, ...rest] = metric.split(' '); return <div key={metric}><strong>{value}</strong><span>{rest.join(' ')}</span></div> })}</div>}
            <Continue label="BUILD MY BLUEPRINT" disabled={!measure} onClick={() => setStep(5)} />
          </Stage>}

          {step === 5 && complete && <div className="result-view result-card">
            <span className="result-kicker">YOUR ENABLEMENT BLUEPRINT</span>
            <h1 id="challenge-heading">Here’s the plan you built.</h1>
            <p className="result-lede">Four choices. One practical enablement approach.</p>
            <div className="blueprint-final">
              <div><span>01 / FRICTION</span><strong>{friction}</strong></div>
              <div><span>02 / SOLUTION</span><strong>{solution}</strong></div>
              <div><span>03 / ADOPTION</span><strong>{adoption}</strong></div>
              <div><span>04 / PROOF</span><strong>{measure}</strong></div>
            </div>
            <div className="result-recommendation"><span>RECOMMENDED APPROACH</span><p>{recommendation}</p></div>
            <div className="result-reveal"><strong>Now see what this looks like when I build it for real.</strong><span>Representative demos are used to protect employer-specific branding and production interfaces.</span></div>
            <div className="result-actions"><button className="button primary" type="button" onClick={onSeeWork}>SHOW ME THE WORK →</button><button className="button ghost" type="button" onClick={reset}>TRY ANOTHER PATH</button></div>
          </div>}
        </div>

        {step < 5 && <aside className="blueprint-live" aria-label="Live enablement blueprint">
          <div className="blueprint-check">✓</div>
          <span>LIVE BLUEPRINT</span>
          <h2>Building your plan.</h2>
          <BlueprintRow label="Friction" value={friction} active={step === 1} />
          <BlueprintRow label="Solution" value={solution} active={step === 2} />
          <BlueprintRow label="Adoption" value={adoption} active={step === 3} />
          <BlueprintRow label="Proof" value={measure} active={step === 4} />
          <p>Your choices shape the recommendation in real time.</p>
        </aside>}
      </div>
    </section>
  )
}

function Stage({ number, eyebrow, title, children }: { number: string; eyebrow: string; title: string; children: ReactNode }) { return <div className="challenge-stage screen-enter"><div className="stage-number">{number}</div><div className="view-eyebrow">{eyebrow}</div><h1>{title}</h1>{children}</div> }
function ChoiceGrid({ options, selected, onSelect, compact = false, forceTwoByTwo = false }: { options: string[]; selected: string | null; onSelect: (value: string) => void; compact?: boolean; forceTwoByTwo?: boolean }) { return <div className={`choice-grid ${compact ? 'compact' : ''} ${forceTwoByTwo ? 'two-by-two' : ''}`}>{options.map((option, index) => <button key={option} type="button" aria-pressed={selected === option} className={selected === option ? 'selected' : ''} onClick={() => onSelect(option)}><span>0{index + 1}</span><strong>{option}</strong><b>↗</b></button>)}</div> }
function Feedback({ children }: { children: ReactNode }) { return <div className="feedback"><span>↳</span><p>{children}</p></div> }
function Continue({ disabled, onClick, label = 'CONTINUE' }: { disabled: boolean; onClick: () => void; label?: string }) { return <button className="button primary continue" type="button" disabled={disabled} onClick={onClick}>{label} <span>→</span></button> }
function BlueprintRow({ label, value, active }: { label: string; value: string | null; active: boolean }) { return <div className={`blueprint-row ${active ? 'active' : ''} ${value ? 'filled' : ''}`}><span>{label}</span><strong>{value ?? '—'}</strong></div> }
