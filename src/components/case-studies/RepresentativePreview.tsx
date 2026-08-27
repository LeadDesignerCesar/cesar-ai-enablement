export default function RepresentativePreview({ kind, compact = false }: { kind: string; compact?: boolean }) {
  return (
    <div className={`rep-preview rep-${kind} ${compact ? 'compact' : ''}`} aria-label="Representative portfolio demo, not production UI">
      <div className="rep-caption">REPRESENTATIVE DEMO — NOT PRODUCTION UI</div>
      {kind === 'pool-side-learning' && (
        <div className="rep-production">
          <div className="production-top"><span>AI-ENABLED COURSE PRODUCTION</span><strong>29 COURSES / 1 MONTH</strong></div>
          <div className="production-flow" aria-label="Course production workflow">
            <div><b>01</b><strong>SME INPUT</strong><span>Source material + expertise</span></div><i>→</i>
            <div><b>02</b><strong>AI-ASSISTED DRAFT</strong><span>Accelerate first build</span></div><i>→</i>
            <div><b>03</b><strong>CESAR REVIEW</strong><span>Design + quality control</span></div><i>→</i>
            <div><b>04</b><strong>SME FEEDBACK</strong><span>Accuracy + corrections</span></div><i>→</i>
            <div><b>05</b><strong>REVISE + PUBLISH</strong><span>Human-approved release</span></div>
          </div>
          <div className="production-parallel">
            <div className="parallel-copy"><span>THE OPERATING MODEL</span><strong>Build one. Review another. Every day.</strong><p>Drafting and review moved in parallel so speed did not require skipping SME validation.</p></div>
            <div className="month-strip">
              <div><b>DAY 01</b><span>COURSE 01</span><small>BUILD</small></div>
              <div><b>DAY 02</b><span>COURSE 02</span><small>BUILD + REVIEW 01</small></div>
              <div><b>DAY 03</b><span>COURSE 03</span><small>BUILD + REVIEW 02</small></div>
              <div className="month-more"><b>•••</b><span>DAILY CADENCE</span><small>CONTINUOUS REVIEW</small></div>
              <div className="month-final"><b>DAY 29</b><span>COURSE 29</span><small>CORE CURRICULUM COMPLETE</small></div>
            </div>
          </div>
          <div className="production-rule"><strong>AI ACCELERATED PRODUCTION.</strong><span>THE SME + CESAR OWNED ACCURACY, REVISION, AND FINAL DECISIONS.</span></div>
        </div>
      )}
      {kind === 'event-app' && (
        <div className="rep-event-suite">
          <div className="event-suite-copy">
            <span>TRAINING SUMMIT EXPERIENCE</span>
            <strong>One app that changed with the event.</strong>
            <p>The interface surfaced the right information at the right time, then layered in participation, discovery, and social proof.</p>
            <div className="event-feature-list">
              <div><b>NOW</b><span>Time-aware landing page</span></div>
              <div><b>ROOM</b><span>Personal breakout destination</span></div>
              <div><b>Q&A</b><span>Questions routed to speakers</span></div>
              <div><b>QR</b><span>Gamified vendor scavenger hunt</span></div>
              <div><b>LIVE</b><span>Cross-company leaderboard</span></div>
              <div><b>PHOTO</b><span>Attendee uploads for Comms + Marketing</span></div>
            </div>
          </div>
          <div className="event-device-cluster">
            <div className="event-phone main-phone">
              <div className="phone-status"><span>10:42</span><b>● ● ●</b></div>
              <div className="summit-header"><span>TRAINING SUMMIT</span><small>Tuesday · Live</small></div>
              <div className="now-card"><span>RIGHT NOW</span><strong>Breakout Session</strong><p>You’re in <b>ROOM C</b></p><small>Based on your agenda and the current time</small></div>
              <div className="summit-grid"><div>AGENDA</div><div>ASK A QUESTION</div><div>SCAN QR</div><div>LEADERBOARD</div><div>UPLOAD PHOTO</div><div>MY ROOM</div></div>
            </div>
            <div className="event-phone side-phone">
              <div className="phone-status"><span>2:18</span><b>● ● ●</b></div>
              <div className="leaderboard-title"><span>LIVE SCOREBOARD</span><strong>SCAVENGER HUNT</strong></div>
              <div className="leaderboard-list"><div><b>01</b><span>North + West</span><strong>1,240</strong></div><div><b>02</b><span>Central + East</span><strong>1,180</strong></div><div><b>03</b><span>Vendor Quest</span><strong>1,060</strong></div></div>
              <div className="qr-progress"><span>QR CLUES FOUND</span><strong>7 / 10</strong><small>Keep talking. Keep scanning.</small></div>
            </div>
          </div>
          <div className="event-outcome-strip"><div><strong>VENDORS</strong><span>More attendee interaction</span></div><div><strong>ATTENDEES</strong><span>More cross-company conversation</span></div><div><strong>SPEAKERS</strong><span>Questions captured for response</span></div><div><strong>MARKETING</strong><span>Fresh attendee-generated photo library</span></div></div>
        </div>
      )}
      {kind === 'adaptive-quiz' && (
        <div className="rep-assessment"><div className="assessment-top"><span>ADAPTIVE CHECK</span><b>2 / 5</b></div><h4>A customer reports recurring activity. What matters first?</h4><div className="assessment-choice muted">A. Repeat the same treatment</div><div className="assessment-choice selected">B. Identify the reason it returned <b>✓</b></div><div className="assessment-feedback"><span>WHY THIS WORKS</span><p>Your answer targets the cause, so the next practice question moves to diagnosis instead of repeating the basics.</p></div></div>
      )}
      {kind === 'ai-coaching' && (
        <div className="rep-coach"><div className="coach-top"><span>COACHING PRACTICE</span><b>PRIVATE REHEARSAL</b></div><div className="chat bubble-left">Your technician missed the standard again. How would you open the conversation?</div><div className="chat bubble-right">I want to understand what’s getting in the way before we decide what needs to change.</div><div className="coach-score"><span>CLARITY</span><strong>8.4</strong><span>SPECIFICITY</span><strong>7.9</strong><span className="try-again">TRY AGAIN →</span></div></div>
      )}
    </div>
  )
}
