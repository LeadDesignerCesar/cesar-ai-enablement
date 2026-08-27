import { useState } from 'react'

type Stage = 'diagnostic' | 'profile' | 'remediation'

export default function AdaptiveCertificationDemo() {
  const [stage, setStage] = useState<Stage>('diagnostic')
  return (
    <div className="rep-certification cert-interactive">
      <div className="cert-top"><span>CERTIFICATION READINESS</span><strong>DIAGNOSE → REMEDIATE → RETEST</strong></div>
      <p className="cert-hint">Choose a step to see how one failed answer changes the learning path.</p>
      <div className="cert-tabs" role="tablist" aria-label="Adaptive certification steps">
        <button type="button" className={stage === 'diagnostic' ? 'active' : ''} onClick={() => setStage('diagnostic')}>1 · DIAGNOSTIC</button>
        <button type="button" className={stage === 'profile' ? 'active' : ''} onClick={() => setStage('profile')}>2 · GAP PROFILE</button>
        <button type="button" className={stage === 'remediation' ? 'active' : ''} onClick={() => setStage('remediation')}>3 · REMEDIATION</button>
      </div>
      {stage === 'diagnostic' && <div className="cert-stage-panel"><span className="cert-kicker">ASSESSMENT</span><h4>Questions are pulled from certification-aligned buckets.</h4><div className="cert-question"><small>BUCKET: APPLICATION</small><strong>A treatment did not resolve the issue. What should happen next?</strong><button type="button" className="cert-option">A. Repeat the exact same action</button><button type="button" className="cert-option wrong" onClick={() => setStage('profile')}>B. Move on without diagnosing the cause <b>✕</b></button></div><button className="cert-next" type="button" onClick={() => setStage('profile')}>SEE WHAT THE SYSTEM DOES →</button></div>}
      {stage === 'profile' && <div className="cert-stage-panel"><span className="cert-kicker">YOUR GAP PROFILE</span><h4>The wrong answer updates the learner’s profile.</h4><div className="gap-meter"><div><span>IDENTIFICATION</span><b>STRONG</b></div><i className="strong"/><div><span>APPLICATION</span><b>NEEDS WORK</b></div><i className="weak"/><div><span>SAFETY</span><b>STRONG</b></div><i className="strong"/><div><span>PROCEDURE</span><b>REVIEW</b></div><i className="medium"/></div><button className="cert-next" type="button" onClick={() => setStage('remediation')}>SEE THE REMEDIATION →</button></div>}
      {stage === 'remediation' && <div className="cert-stage-panel"><span className="cert-kicker">RECOMMENDED NEXT</span><h4>Only the weak knowledge bucket gets targeted support.</h4><div className="remediation-card"><span>APPLICATION</span><strong>Review Course Section 3.2</strong><p>Then complete targeted practice before retesting this bucket.</p></div><div className="cert-flow"><div><b>1</b><span>DIAGNOSE</span></div><i>→</i><div><b>2</b><span>ROUTE</span></div><i>→</i><div><b>3</b><span>PRACTICE</span></div><i>→</i><div><b>4</b><span>RETEST</span></div></div><button className="cert-next" type="button" onClick={() => setStage('diagnostic')}>START AGAIN ↻</button></div>}
    </div>
  )
}
