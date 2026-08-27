import { useState } from 'react'
import HiringEvidenceDemo from './HiringEvidenceDemo'

type EventScreen = 'home' | 'agenda' | 'camera' | 'scoreboard' | 'passport' | 'question'
type CameraMode = 'qr' | 'photo'

export default function RepresentativePreview({ kind, compact = false }: { kind: string; compact?: boolean }) {
  return (
    <div className={`rep-preview rep-${kind} ${compact ? 'compact' : ''}`} aria-label="Representative portfolio demo, not production UI">
      <div className="rep-caption">REPRESENTATIVE DEMO — NOT PRODUCTION UI</div>
      {kind === 'pool-side-learning' && <ProductionInfographic />}
      {kind === 'event-app' && <EventAppDemo compact={compact} />}
      {kind === 'adaptive-quiz' && (
        <div className="rep-certification"><div className="cert-top"><span>CERTIFICATION READINESS</span><strong>DIAGNOSE → REMEDIATE → RETEST</strong></div><div className="cert-layout"><div className="cert-test-panel"><span className="cert-kicker">ASSESSMENT</span><h4>Questions are pulled from certification-aligned buckets.</h4><div className="bucket-row"><span>IDENTIFICATION</span><span>APPLICATION</span><span>SAFETY</span><span>PROCEDURE</span></div><div className="cert-question"><small>BUCKET: APPLICATION</small><strong>A treatment did not resolve the issue. What should happen next?</strong><div className="cert-option">A. Repeat the exact same action</div><div className="cert-option wrong">B. Move on without diagnosing the cause <b>✕</b></div></div></div><div className="cert-analysis-panel"><span className="cert-kicker">YOUR GAP PROFILE</span><h4>The system turns wrong answers into a learning plan.</h4><div className="gap-meter"><div><span>IDENTIFICATION</span><b>STRONG</b></div><i className="strong"/><div><span>APPLICATION</span><b>NEEDS WORK</b></div><i className="weak"/><div><span>SAFETY</span><b>STRONG</b></div><i className="strong"/><div><span>PROCEDURE</span><b>REVIEW</b></div><i className="medium"/></div><div className="remediation-card"><span>RECOMMENDED NEXT</span><strong>Review: Application → Section 3.2</strong><p>Then complete targeted practice before retesting this bucket.</p></div></div></div><div className="cert-flow"><div><b>1</b><span>TAKE DIAGNOSTIC</span></div><i>→</i><div><b>2</b><span>IDENTIFY WEAK BUCKETS</span></div><i>→</i><div><b>3</b><span>ASSIGN COURSE SECTIONS</span></div><i>→</i><div><b>4</b><span>PRACTICE + RETEST</span></div></div></div>
      )}
      {kind === 'evidence-based-hiring' && <HiringEvidenceDemo compact={compact} />}
    </div>
  )
}

function ProductionInfographic() {
  const steps = [
    { n: '01', title: 'SME INPUT', detail: 'Source material + expertise', icon: '◫' },
    { n: '02', title: 'AI-ASSISTED DRAFT', detail: 'Accelerate the first build', icon: '✦' },
    { n: '03', title: 'CESAR REVIEW', detail: 'Design + quality control', icon: '⌕' },
    { n: '04', title: 'SME FEEDBACK', detail: 'Accuracy + corrections', icon: '◌' },
    { n: '05', title: 'REVISE + PUBLISH', detail: 'Human-approved release', icon: '✓' },
  ]
  return (
    <section className="production-infographic" aria-label="AI-enabled course production workflow">
      <div className="prod-intro"><span>THE WORKFLOW</span><strong>AI sped up the work. Human review stayed in the loop.</strong></div>
      <div className="prod-flow">{steps.map((step, index) => <div className="prod-step-wrap" key={step.n}><article className={`prod-step step-${index + 1}`}><div className="prod-icon" aria-hidden="true">{step.icon}</div><span>{step.n}</span><strong>{step.title}</strong><small>{step.detail}</small></article>{index < steps.length - 1 && <i className="prod-arrow" aria-hidden="true">→</i>}</div>)}</div>
      <div className="prod-lower"><div className="prod-operating"><span>THE OPERATING MODEL</span><h4>Build one course while reviewing another. Every day.</h4><div className="prod-timeline"><article><b>DAY 01</b><strong>Build Course 01</strong><small>Review queue begins</small></article><article><b>DAY 02</b><strong>Build Course 02</strong><small>Review Course 01</small></article><article><b>DAY 03</b><strong>Build Course 03</strong><small>Review Course 02</small></article><div className="timeline-gap" aria-hidden="true">•••</div><article className="day-final"><b>DAY 29</b><strong>Build Course 29</strong><small>Core curriculum complete</small></article></div><div className="prod-continuous">✓ Continuous iteration with SME validation all month long.</div></div><aside className="prod-outcomes" aria-label="Production outcomes"><span>THE OUTCOME</span><div className="outcome-grid"><div><strong>29</strong><small>courses completed</small></div><div><strong>1</strong><small>month</small></div><div><strong>SME + CESAR</strong><small>owned accuracy + final decisions</small></div><div><strong>AI</strong><small>accelerated production</small></div></div></aside></div>
      <div className="prod-governance"><b>Human judgment stayed in control.</b><span>Speed came from a better workflow—not from skipping review, correction, or approval.</span></div>
    </section>
  )
}

function EventAppDemo({ compact }: { compact: boolean }) {
  const [screen, setScreen] = useState<EventScreen>('home')
  const [cameraMode, setCameraMode] = useState<CameraMode>('qr')
  const [stamps, setStamps] = useState(4)
  const [questionSent, setQuestionSent] = useState(false)
  const [photoAdded, setPhotoAdded] = useState(false)

  if (compact) {
    return <div className="summit-compact"><div className="summit-card-mini"><span>TRAINING SUMMIT</span><b>TABLE 1</b><strong>FIELD TEAM</strong><small>Room C · 215 pts</small></div></div>
  }

  return (
    <div className="summit-demo-shell">
      <div className="summit-demo-copy"><span>TRAINING SUMMIT EXPERIENCE</span><strong>Click through the app I built.</strong><p>This recreation keeps the interaction model while removing company branding, vendor names, private data, and other people’s names.</p><div className="summit-demo-tags"><span>AGENDA</span><span>Q&A</span><span>QR HUNT</span><span>PHOTOS</span><span>LIVE SCORES</span></div></div>
      <div className="summit-phone" aria-label="Clickable representative Training Summit app">
        <div className="summit-phone-top"><span>TRAINING SUMMIT</span><small>REPRESENTATIVE DEMO</small></div>
        {screen === 'home' && <div className="summit-screen summit-home"><div className="secret-hint"><span>⌁</span><b>Some clues move, and some don’t.</b><small>Secret Stamp Hint</small></div><div className="identity-card"><div className="identity-label">YOUR ASSIGNMENT</div><div className="table-number"><span>TABLE</span><strong>1</strong></div><div className="table-name"><span>TABLE NAME</span><b>FIELD TEAM</b></div><div className="room-name"><span>ROOM</span><b>ROOM C</b></div><div className="rank-row"><span>RANK #27</span><span>215 PTS</span></div><div className="user-name">CESAR<br/>RAMOS</div></div></div>}
        {screen === 'agenda' && <div className="summit-screen summit-agenda"><h4>Agenda</h4><div className="day-tabs"><button className="active" type="button">TUE</button><button type="button">WED</button><button type="button">THU</button></div><div className="day-complete"><span>DAY 1 · AUG 4</span><strong>Full-day timeline</strong><small>16 sessions</small></div><div className="agenda-item"><b>8:00</b><span><strong>Breakfast and mingling</strong><small>Main Hall</small></span></div><div className="agenda-item featured"><b>9:00</b><span><strong>Event kickoff briefing</strong><small>Presented by Cesar Ramos</small><button type="button" onClick={() => setScreen('question')}>ASK CESAR A QUESTION</button></span></div><div className="agenda-item"><b>10:45</b><span><strong>Your breakout session</strong><small>Room C · Your assigned room</small></span></div><div className="agenda-item"><b>2:00</b><span><strong>Vendor scavenger hunt</strong><small>Expo Hall</small></span></div></div>}
        {screen === 'camera' && <div className="summit-screen summit-camera"><h4>Camera</h4><div className="camera-tabs"><button type="button" className={cameraMode === 'qr' ? 'active' : ''} onClick={() => setCameraMode('qr')}>SCAN QR CODE</button><button type="button" className={cameraMode === 'photo' ? 'active' : ''} onClick={() => setCameraMode('photo')}>TAKE EVENT PHOTO</button></div>{cameraMode === 'qr' ? <><div className="camera-card"><h5>Scan a Vendor QR Code</h5><p>Find a code, scan it, and add a stamp to your passport.</p><div className="scan-window"><span>⌜</span><span>⌝</span><span>⌞</span><span>⌟</span><small>Align the QR code inside the frame</small></div></div><button className="summit-primary" type="button" onClick={() => setStamps((value) => Math.min(24, value + 1))}>SIMULATE SCAN +1</button></> : <><div className="photo-card"><div className="photo-preview">▧</div><strong>{photoAdded ? 'Photo added to the summit gallery.' : 'Capture an event moment.'}</strong><p>{photoAdded ? 'This recreates the upload flow that fed the event photo library.' : 'Attendee photos became a reusable content source for Communications and Marketing.'}</p></div><button className="summit-primary" type="button" onClick={() => setPhotoAdded(!photoAdded)}>{photoAdded ? 'ADD ANOTHER PHOTO' : 'SIMULATE PHOTO UPLOAD'}</button></>}</div>}
        {screen === 'scoreboard' && <div className="summit-screen summit-scoreboard"><h4>Scoreboard</h4><div className="score-summary"><span>LIVE TEAM RANKING</span><strong>#27</strong><b>215 POINTS</b></div><div className="score-list"><div><b>01</b><span>Team 07</span><strong>940</strong></div><div><b>02</b><span>Team 12</span><strong>890</strong></div><div><b>03</b><span>Team 03</span><strong>865</strong></div><div className="you"><b>27</b><span>FIELD TEAM · YOU</span><strong>215</strong></div></div><div className="score-note">The live board made progress visible and gave attendees a reason to compare notes, talk across teams, and keep hunting.</div></div>}
        {screen === 'passport' && <div className="summit-screen summit-passport"><h4>Passport</h4><div className="passport-progress"><span>PASSPORT PROGRESS</span><strong>{stamps} of 24</strong><b>stamps collected</b><div className="progress-track"><i style={{ width: `${Math.round((stamps / 24) * 100)}%` }} /></div></div><div className="vendor-heading"><strong>Vendor Stamps · 20</strong><small>{Math.max(0, stamps - 4)} of 20 vendor stamps collected.</small></div><div className="vendor-grid">{['VENDOR 01','VENDOR 02','VENDOR 03','VENDOR 04'].map((vendor, index) => <div key={vendor} className={index < Math.max(0, stamps - 4) ? 'collected' : ''}><div className="vendor-logo">{String(index + 1).padStart(2,'0')}</div><strong>{vendor}</strong><small>Vendor Hall</small><span>{index % 2 === 0 ? '20 pts' : '10 pts'}</span></div>)}</div><button className="summit-primary" type="button" onClick={() => setScreen('camera')}>OPEN CAMERA</button></div>}
        {screen === 'question' && <div className="summit-screen summit-question"><button className="question-back" type="button" onClick={() => setScreen('agenda')}>← BACK TO AGENDA</button><h4>Ask Cesar a Question</h4>{questionSent ? <div className="question-success"><b>✓</b><strong>Question submitted.</strong><span>It can now be reviewed for the speaker Q&A.</span><button type="button" onClick={() => setQuestionSent(false)}>ASK ANOTHER</button></div> : <><label>SESSION<select defaultValue="Event kickoff briefing"><option>Event kickoff briefing</option><option>Closing Q&A</option></select></label><label>YOUR QUESTION<textarea defaultValue="What is one thing attendees should do differently after this summit?" /></label><button className="summit-primary" type="button" onClick={() => setQuestionSent(true)}>SUBMIT QUESTION</button></>}</div>}
        <nav className="summit-bottom-nav" aria-label="Training Summit demo navigation"><button type="button" className={screen === 'home' ? 'active' : ''} onClick={() => setScreen('home')}><span>⌂</span><b>Home</b></button><button type="button" className={screen === 'agenda' || screen === 'question' ? 'active' : ''} onClick={() => setScreen('agenda')}><span>▦</span><b>Agenda</b></button><button type="button" className={screen === 'camera' ? 'active camera' : 'camera'} onClick={() => setScreen('camera')}><span>◉</span><b>Camera</b></button><button type="button" className={screen === 'scoreboard' ? 'active' : ''} onClick={() => setScreen('scoreboard')}><span>♜</span><b>Scoreboard</b></button><button type="button" className={screen === 'passport' ? 'active' : ''} onClick={() => setScreen('passport')}><span>♟</span><b>Passport</b></button></nav>
      </div>
      <div className="summit-demo-outcomes"><div><strong>VENDORS</strong><span>More booth traffic and conversations</span></div><div><strong>ATTENDEES</strong><span>Clear logistics + more cross-team interaction</span></div><div><strong>SPEAKERS</strong><span>Questions captured for response</span></div><div><strong>MARKETING</strong><span>Attendee-generated photo library</span></div></div>
    </div>
  )
}
