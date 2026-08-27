type PreviewKind = 'pool-side-learning' | 'event-app' | 'adaptive-quiz' | 'ai-coaching'

export default function RepresentativePreview({ kind, compact = false }: { kind: PreviewKind; compact?: boolean }) {
  return (
    <div className={`rep-preview rep-${kind} ${compact ? 'compact' : ''}`} aria-label="Representative portfolio demo, not production UI">
      <div className="rep-caption">REPRESENTATIVE DEMO — NOT PRODUCTION UI</div>
      {kind === 'pool-side-learning' && (
        <div className="rep-game">
          <div className="game-top"><span>FIELD QUEST</span><strong>LEVEL 03</strong></div>
          <div className="game-path"><i className="node done">✓</i><b /><i className="node active">3</i><b /><i className="node">4</i><b /><i className="node">5</i></div>
          <div className="game-card"><span>SCENARIO</span><strong>What would you do next?</strong><div><i>A</i><i>B</i><i>C</i></div></div>
        </div>
      )}
      {kind === 'event-app' && (
        <div className="rep-phone-wrap">
          <div className="rep-phone">
            <div className="phone-status"><span>9:41</span><b>● ● ●</b></div>
            <div className="event-hero"><span>EVENT APP</span><strong>YOU'RE IN.</strong><small>Choose how you want to participate.</small></div>
            <div className="event-actions"><div>🏆<span>Leaderboard</span></div><div>📷<span>Share a photo</span></div><div>💬<span>Ask a question</span></div><div>✨<span>Join activity</span></div></div>
          </div>
        </div>
      )}
      {kind === 'adaptive-quiz' && (
        <div className="rep-assessment">
          <div className="assessment-top"><span>ADAPTIVE CHECK</span><b>2 / 5</b></div>
          <h4>A customer reports recurring activity. What matters first?</h4>
          <div className="assessment-choice muted">A. Repeat the same treatment</div>
          <div className="assessment-choice selected">B. Identify the reason it returned <b>✓</b></div>
          <div className="assessment-feedback"><span>WHY THIS WORKS</span><p>Your answer targets the cause, so the next practice question moves to diagnosis instead of repeating the basics.</p></div>
        </div>
      )}
      {kind === 'ai-coaching' && (
        <div className="rep-coach">
          <div className="coach-top"><span>COACHING PRACTICE</span><b>PRIVATE REHEARSAL</b></div>
          <div className="chat bubble-left">Your technician missed the standard again. How would you open the conversation?</div>
          <div className="chat bubble-right">I want to understand what’s getting in the way before we decide what needs to change.</div>
          <div className="coach-score"><span>CLARITY</span><strong>8.4</strong><span>SPECIFICITY</span><strong>7.9</strong><span className="try-again">TRY AGAIN →</span></div>
        </div>
      )}
    </div>
  )
}
