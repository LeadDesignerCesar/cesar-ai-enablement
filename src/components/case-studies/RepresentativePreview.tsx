import { useState } from 'react'

type EventScreen = 'home' | 'agenda' | 'questions' | 'qr' | 'leaderboard' | 'photos'
type EventMoment = 'morning' | 'breakout' | 'afternoon'

export default function RepresentativePreview({ kind, compact = false }: { kind: string; compact?: boolean }) {
  return (
    <div className={`rep-preview rep-${kind} ${compact ? 'compact' : ''}`} aria-label="Representative portfolio demo, not production UI">
      <div className="rep-caption">REPRESENTATIVE DEMO — NOT PRODUCTION UI</div>
      {kind === 'pool-side-learning' && (
        <div className="rep-production">
          <div className="production-top"><span>AI-ENABLED COURSE PRODUCTION</span><strong>29 COURSES / 1 MONTH</strong></div>
          <div className="production-flow" aria-label="Course production workflow"><div><b>01</b><strong>SME INPUT</strong><span>Source material + expertise</span></div><i>→</i><div><b>02</b><strong>AI-ASSISTED DRAFT</strong><span>Accelerate first build</span></div><i>→</i><div><b>03</b><strong>CESAR REVIEW</strong><span>Design + quality control</span></div><i>→</i><div><b>04</b><strong>SME FEEDBACK</strong><span>Accuracy + corrections</span></div><i>→</i><div><b>05</b><strong>REVISE + PUBLISH</strong><span>Human-approved release</span></div></div>
          <div className="production-parallel"><div className="parallel-copy"><span>THE OPERATING MODEL</span><strong>Build one. Review another. Every day.</strong><p>Drafting and review moved in parallel so speed did not require skipping SME validation.</p></div><div className="month-strip"><div><b>DAY 01</b><span>COURSE 01</span><small>BUILD</small></div><div><b>DAY 02</b><span>COURSE 02</span><small>BUILD + REVIEW 01</small></div><div><b>DAY 03</b><span>COURSE 03</span><small>BUILD + REVIEW 02</small></div><div className="month-more"><b>•••</b><span>DAILY CADENCE</span><small>CONTINUOUS REVIEW</small></div><div className="month-final"><b>DAY 29</b><span>COURSE 29</span><small>CORE CURRICULUM COMPLETE</small></div></div></div>
          <div className="production-rule"><strong>AI ACCELERATED PRODUCTION.</strong><span>THE SME + CESAR OWNED ACCURACY, REVISION, AND FINAL DECISIONS.</span></div>
        </div>
      )}
      {kind === 'event-app' && <EventAppDemo compact={compact} />}
      {kind === 'adaptive-quiz' && (
        <div className="rep-certification"><div className="cert-top"><span>CERTIFICATION READINESS</span><strong>DIAGNOSE → REMEDIATE → RETEST</strong></div><div className="cert-layout"><div className="cert-test-panel"><span className="cert-kicker">ASSESSMENT</span><h4>Questions are pulled from certification-aligned buckets.</h4><div className="bucket-row"><span>IDENTIFICATION</span><span>APPLICATION</span><span>SAFETY</span><span>PROCEDURE</span></div><div className="cert-question"><small>BUCKET: APPLICATION</small><strong>A treatment did not resolve the issue. What should happen next?</strong><div className="cert-option">A. Repeat the exact same action</div><div className="cert-option wrong">B. Move on without diagnosing the cause <b>✕</b></div></div></div><div className="cert-analysis-panel"><span className="cert-kicker">YOUR GAP PROFILE</span><h4>The system turns wrong answers into a learning plan.</h4><div className="gap-meter"><div><span>IDENTIFICATION</span><b>STRONG</b></div><i className="strong"/><div><span>APPLICATION</span><b>NEEDS WORK</b></div><i className="weak"/><div><span>SAFETY</span><b>STRONG</b></div><i className="strong"/><div><span>PROCEDURE</span><b>REVIEW</b></div><i className="medium"/></div><div className="remediation-card"><span>RECOMMENDED NEXT</span><strong>Review: Application → Section 3.2</strong><p>Then complete targeted practice before retesting this bucket.</p></div></div></div><div className="cert-flow"><div><b>1</b><span>TAKE DIAGNOSTIC</span></div><i>→</i><div><b>2</b><span>IDENTIFY WEAK BUCKETS</span></div><i>→</i><div><b>3</b><span>ASSIGN COURSE SECTIONS</span></div><i>→</i><div><b>4</b><span>PRACTICE + RETEST</span></div></div></div>
      )}
      {kind === 'ai-coaching' && (
        <div className="rep-coach"><div className="coach-top"><span>COACHING PRACTICE</span><b>PRIVATE REHEARSAL</b></div><div className="chat bubble-left">Your technician missed the standard again. How would you open the conversation?</div><div className="chat bubble-right">I want to understand what’s getting in the way before we decide what needs to change.</div><div className="coach-score"><span>CLARITY</span><strong>8.4</strong><span>SPECIFICITY</span><strong>7.9</strong><span className="try-again">TRY AGAIN →</span></div></div>
      )}
    </div>
  )
}

function EventAppDemo({ compact }: { compact: boolean }) {
  const [screen, setScreen] = useState<EventScreen>('home')
  const [moment, setMoment] = useState<EventMoment>('breakout')
  const [questionSent, setQuestionSent] = useState(false)
  const [qrCount, setQrCount] = useState(7)
  const [photoAdded, setPhotoAdded] = useState(false)

  const moments = {
    morning: { time: '8:35 AM', label: 'Opening Session', room: 'Grand Ballroom', detail: 'Main stage begins at 9:00 AM' },
    breakout: { time: '10:42 AM', label: 'Breakout Session', room: 'Room C', detail: 'Your assigned breakout begins at 10:45 AM' },
    afternoon: { time: '2:18 PM', label: 'Vendor Quest', room: 'Expo Hall', detail: 'Scavenger hunt is live until 3:00 PM' },
  }
  const now = moments[moment]

  if (compact) {
    return <div className="rep-event-compact"><div className="compact-event-phone"><span>RIGHT NOW</span><strong>{now.label}</strong><b>{now.room}</b><small>Agenda · Q&A · QR Hunt · Leaderboard · Photos</small></div></div>
  }

  return (
    <div className="rep-event-interactive">
      <div className="event-demo-intro">
        <span>TRAINING SUMMIT EXPERIENCE</span>
        <strong>Click through the app.</strong>
        <p>This recreation demonstrates the experience architecture: personalized logistics when timing matters, then participation mechanics that make the summit more social and useful.</p>
        <div className="event-demo-points"><span>TIME-AWARE</span><span>PERSONALIZED</span><span>GAMIFIED</span><span>SOCIAL</span></div>
      </div>

      <div className="interactive-phone" aria-label="Interactive representative Event App">
        <div className="phone-status"><span>{now.time}</span><b>● ● ●</b></div>
        <div className="app-top"><button type="button" onClick={() => setScreen('home')} aria-label="Go to Event App home">SUMMIT</button><span>REPRESENTATIVE DEMO</span></div>

        {screen === 'home' && <div className="app-screen home-screen">
          <div className="moment-switcher" aria-label="Preview how the landing page changes during the day">
            <button type="button" className={moment === 'morning' ? 'active' : ''} onClick={() => setMoment('morning')}>8:35</button>
            <button type="button" className={moment === 'breakout' ? 'active' : ''} onClick={() => setMoment('breakout')}>10:42</button>
            <button type="button" className={moment === 'afternoon' ? 'active' : ''} onClick={() => setMoment('afternoon')}>2:18</button>
          </div>
          <div className="live-now"><span>RIGHT NOW</span><strong>{now.label}</strong><p>Go to <b>{now.room}</b></p><small>{now.detail}</small></div>
          <div className="app-action-grid">
            <button type="button" onClick={() => setScreen('agenda')}><b>AGENDA</b><span>See the day</span></button>
            <button type="button" onClick={() => setScreen('questions')}><b>ASK</b><span>Send a question</span></button>
            <button type="button" onClick={() => setScreen('qr')}><b>SCAN</b><span>Find QR clues</span></button>
            <button type="button" onClick={() => setScreen('leaderboard')}><b>LIVE</b><span>Leaderboard</span></button>
            <button type="button" onClick={() => setScreen('photos')}><b>PHOTO</b><span>Share a moment</span></button>
          </div>
        </div>}

        {screen === 'agenda' && <div className="app-screen agenda-screen"><ScreenHeader title="Your agenda" onBack={() => setScreen('home')} /><div className="agenda-list"><div><time>9:00</time><span><b>Opening Session</b><small>Grand Ballroom</small></span></div><div className="current"><time>10:45</time><span><b>Breakout: Your Group</b><small>Room C · YOUR ROOM</small></span></div><div><time>12:00</time><span><b>Lunch + Vendor Expo</b><small>Expo Hall</small></span></div><div><time>2:00</time><span><b>Vendor Quest</b><small>Expo Hall + QR locations</small></span></div></div></div>}

        {screen === 'questions' && <div className="app-screen question-screen"><ScreenHeader title="Ask a speaker" onBack={() => setScreen('home')} />{questionSent ? <div className="success-state"><b>✓</b><strong>Question captured.</strong><span>Speakers can review it during the summit and final Q&A.</span><button type="button" onClick={() => setQuestionSent(false)}>ASK ANOTHER</button></div> : <><label>SESSION<select defaultValue="Leadership Panel"><option>Leadership Panel</option><option>Operations Breakout</option><option>Closing Q&A</option></select></label><label>YOUR QUESTION<textarea defaultValue="What is one behavior you want leaders to change immediately after this summit?" /></label><button className="app-primary" type="button" onClick={() => setQuestionSent(true)}>SEND TO SPEAKERS →</button></>}</div>}

        {screen === 'qr' && <div className="app-screen qr-screen"><ScreenHeader title="Scavenger hunt" onBack={() => setScreen('home')} /><div className="qr-hero"><span>CLUES FOUND</span><strong>{qrCount} / 10</strong><p>Some clues are hidden with vendors. Start a conversation, find the code, move up the board.</p></div><div className="fake-qr" aria-hidden="true">▦</div><button className="app-primary" type="button" disabled={qrCount >= 10} onClick={() => setQrCount((count) => Math.min(10, count + 1))}>{qrCount >= 10 ? 'HUNT COMPLETE ✓' : 'SIMULATE QR FOUND +1'}</button></div>}

        {screen === 'leaderboard' && <div className="app-screen leaderboard-screen"><ScreenHeader title="Live scoreboard" onBack={() => setScreen('home')} /><div className="leaderboard-list interactive"><div><b>01</b><span>North + West<small>Cross-company team</small></span><strong>1,240</strong></div><div><b>02</b><span>Central + East<small>Cross-company team</small></span><strong>1,180</strong></div><div><b>03</b><span>Vendor Quest<small>7 QR clues</small></span><strong>1,060</strong></div></div><div className="social-nudge">Designed to give people a reason to compare progress, talk, and collaborate across company lines.</div></div>}

        {screen === 'photos' && <div className="app-screen photo-screen"><ScreenHeader title="Share a photo" onBack={() => setScreen('home')} />{photoAdded ? <div className="success-state"><b>✓</b><strong>Photo added to the event gallery.</strong><span>Representative flow only. In the real experience, attendee uploads created a content library for Communications and Marketing.</span><button type="button" onClick={() => setPhotoAdded(false)}>ADD ANOTHER</button></div> : <><div className="photo-placeholder"><span>▧</span><strong>Your summit moment</strong><small>Representative upload preview</small></div><button className="app-primary" type="button" onClick={() => setPhotoAdded(true)}>SIMULATE PHOTO UPLOAD →</button></>}</div>}

        <div className="app-bottom-nav"><button type="button" className={screen === 'home' ? 'active' : ''} onClick={() => setScreen('home')}>HOME</button><button type="button" className={screen === 'agenda' ? 'active' : ''} onClick={() => setScreen('agenda')}>AGENDA</button><button type="button" className={screen === 'leaderboard' ? 'active' : ''} onClick={() => setScreen('leaderboard')}>SCORES</button></div>
      </div>

      <div className="event-outcome-strip"><div><strong>VENDORS</strong><span>More attendee interaction</span></div><div><strong>ATTENDEES</strong><span>More cross-company conversation</span></div><div><strong>SPEAKERS</strong><span>Questions captured for response</span></div><div><strong>MARKETING</strong><span>Attendee-generated photo library</span></div></div>
    </div>
  )
}

function ScreenHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return <div className="app-screen-header"><button type="button" onClick={onBack} aria-label="Back to Event App home">←</button><strong>{title}</strong><span /></div>
}
