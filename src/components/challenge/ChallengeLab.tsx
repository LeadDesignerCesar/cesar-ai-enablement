import { useMemo, useState, type ReactNode } from 'react'
import {
  adoptionRecommendations,
  challenge,
  solutionRecommendations,
  type Adoption,
  type Audience,
  type Friction,
  type Measure,
  type Solution,
} from '../../data/portfolioData'
import { buildRecommendation } from './recommendation'

type Step = 1 | 2 | 3 | 4 | 5

const stageNames = ['Find the friction', 'Build the fix', 'Enable the people', 'Prove the impact']

export default function ChallengeLab() {
  const [step, setStep] = useState<Step>(1)
  const [friction, setFriction] = useState<Friction | null>(null)
  const [audience, setAudience] = useState<Audience | null>(null)
  const [solution, setSolution] = useState<Solution | null>(null)
  const [adoption, setAdoption] = useState<Adoption | null>(null)
  const [measure, setMeasure] = useState<Measure | null>(null)

  const complete = Boolean(friction && audience && solution && adoption && measure)
  const recommendation = useMemo(() => {
    if (!friction || !audience || !solution || !adoption || !measure) return ''
    return buildRecommendation({ friction, audience, solution, adoption, measure })
  }, [friction, audience, solution, adoption, measure])

  const reset = () => {
    setStep(1)
    setFriction(null)
    setAudience(null)
    setSolution(null)
    setAdoption(null)
    setMeasure(null)
  }

  return (
    <section className="challenge-shell" id="challenge" aria-labelledby="challenge-heading">
      <div className="section-kicker">THE 3-MINUTE CHALLENGE</div>
      <div className="challenge-header">
        <div>
          <h2 id="challenge-heading">Experience the method.</h2>
          <p>Make four decisions. I’ll turn them into an enablement plan.</p>
        </div>
        <div className="progress-wrap" aria-label={`Challenge progress: ${Math.min(step, 4)} of 4`}>
          <span>{step > 4 ? 'COMPLETE' : `${step}/4`}</span>
          <div className="progress-track"><div style={{ width: `${Math.min(step, 4) * 25}%` }} /></div>
        </div>
      </div>

      <div className="stage-tabs" aria-hidden="true">
        {stageNames.map((name, index) => (
          <div className={step === index + 1 ? 'active' : step > index + 1 ? 'done' : ''} key={name}>
            <span>{String(index + 1).padStart(2, '0')}</span>{name}
          </div>
        ))}
      </div>

      <div className="challenge-panel" aria-live="polite">
        {step === 1 && (
          <>
            <StageHeading number="1" title="FIND THE FRICTION" prompt={challenge.friction.prompt} />
            <ChoiceGrid
              options={Object.keys(challenge.friction.options)}
              selected={friction}
              onSelect={(value) => setFriction(value as Friction)}
            />
            {friction && <Feedback>{challenge.friction.options[friction]}</Feedback>}
            <div className="secondary-question">
              <h4>{challenge.friction.audiencePrompt}</h4>
              <ChoiceGrid
                compact
                options={[...challenge.friction.audiences]}
                selected={audience}
                onSelect={(value) => setAudience(value as Audience)}
              />
            </div>
            <Continue disabled={!friction || !audience} onClick={() => setStep(2)} />
          </>
        )}

        {step === 2 && (
          <>
            <StageHeading number="2" title="BUILD THE FIX" prompt={challenge.solution.prompt} />
            <blockquote className="principle">{challenge.solution.principle}</blockquote>
            <ChoiceGrid options={[...challenge.solution.options]} selected={solution} onSelect={(v) => setSolution(v as Solution)} />
            {friction && solution && <Feedback><strong>You selected {friction.toLowerCase()} + {solution.toLowerCase()}.</strong> {solutionRecommendations[friction][solution]}</Feedback>}
            <Continue disabled={!solution} onClick={() => setStep(3)} />
          </>
        )}

        {step === 3 && (
          <>
            <StageHeading number="3" title="ENABLE THE PEOPLE" prompt={challenge.enablement.prompt} />
            <div className="enablement-pattern">{challenge.enablement.pattern}</div>
            <p className="stage-principle">{challenge.enablement.principle}</p>
            <ChoiceGrid options={[...challenge.enablement.options]} selected={adoption} onSelect={(v) => setAdoption(v as Adoption)} />
            {adoption && <Feedback>{adoptionRecommendations[adoption]}</Feedback>}
            <Continue disabled={!adoption} onClick={() => setStep(4)} />
          </>
        )}

        {step === 4 && (
          <>
            <StageHeading number="4" title="PROVE THE IMPACT" prompt={challenge.impact.prompt} />
            <blockquote className="principle impact-principle">{challenge.impact.principle}</blockquote>
            <ChoiceGrid options={[...challenge.impact.options]} selected={measure} onSelect={(v) => setMeasure(v as Measure)} />
            {measure && (
              <div className="mini-dashboard" aria-label={`Example ${measure.toLowerCase()} dashboard`}>
                {challenge.impact.simulatedMetrics[measure].map((metric) => {
                  const [value, ...rest] = metric.split(' ')
                  return <div key={metric}><strong>{value}</strong><span>{rest.join(' ')}</span></div>
                })}
              </div>
            )}
            <Continue label="BUILD MY PLAN" disabled={!measure} onClick={() => setStep(5)} />
          </>
        )}

        {step === 5 && complete && (
          <div className="completion">
            <div className="completion-badge">METHOD COMPLETE</div>
            <h3>YOU JUST USED MY METHOD.</h3>
            <p className="completion-lede">Now see what happened when I applied it.</p>
            <p>You didn’t read about AI enablement. You experienced it.</p>
            <div className="plan-card">
              <span className="plan-label">YOUR ENABLEMENT PLAN</span>
              <dl>
                <div><dt>Friction</dt><dd>{friction}</dd></div>
                <div><dt>Audience</dt><dd>{audience}</dd></div>
                <div><dt>Solution</dt><dd>{solution}</dd></div>
                <div><dt>Adoption method</dt><dd>{adoption}</dd></div>
                <div><dt>Success measure</dt><dd>{measure}</dd></div>
              </dl>
              <h4>Recommended approach</h4>
              <p>{recommendation}</p>
            </div>
            <div className="completion-actions">
              <a className="button primary" href="#work">SEE CESAR’S WORK</a>
              <button className="button ghost" type="button" onClick={reset}>TRY ANOTHER PATH</button>
              <a className="button ghost" href={`${import.meta.env.BASE_URL}Cesar_Ramos_AI_Enablement_Resume.docx`} download>DOWNLOAD RÉSUMÉ</a>
              <a className="button ghost" href="mailto:caramos0918@gmail.com">CONNECT WITH CESAR</a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function StageHeading({ number, title, prompt }: { number: string; title: string; prompt: string }) {
  return <div className="stage-heading"><span>{number}</span><div><h3>{title}</h3><p>{prompt}</p></div></div>
}

function ChoiceGrid({ options, selected, onSelect, compact = false }: { options: string[]; selected: string | null; onSelect: (value: string) => void; compact?: boolean }) {
  return <div className={`choice-grid ${compact ? 'compact' : ''}`}>{options.map((option) => <button key={option} type="button" aria-pressed={selected === option} className={selected === option ? 'selected' : ''} onClick={() => onSelect(option)}><span className="choice-dot" />{option}</button>)}</div>
}

function Feedback({ children }: { children: ReactNode }) {
  return <div className="feedback"><span aria-hidden="true">↳</span><p>{children}</p></div>
}

function Continue({ disabled, onClick, label = 'CONTINUE' }: { disabled: boolean; onClick: () => void; label?: string }) {
  return <button className="button primary continue" type="button" disabled={disabled} onClick={onClick}>{label}<span aria-hidden="true">→</span></button>
}
