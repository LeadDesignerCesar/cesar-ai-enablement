import { useEffect, useMemo, useState } from 'react'
import ChallengeLab from './components/challenge/ChallengeLab'
import CaseStudyCard from './components/case-studies/CaseStudyCard'
import InteractiveRepresentativePreview from './components/case-studies/InteractiveRepresentativePreview'
import { about, caseStudies, method, site } from './data/portfolioData'
import headshot from './assets/cesar-headshot.webp'

type View = 'home' | 'challenge' | 'work' | 'about' | `case:${string}`
type LeaderboardEntry = { label: string; score: number }

const SCORE_KEY = 'cesar-ai-enablement-score'
const LEADERBOARD_KEY = 'cesar-ai-enablement-leaderboard'
const POINTS_PER_CLICK = 10
const SCORE_MILESTONES = [
  { score: 100, message: 'Nice. You’re exploring.' },
  { score: 250, message: 'See? He’s pretty good.' },
  { score: 500, message: 'Glad you’re enjoying the lab.' },
  { score: 750, message: 'You found the good stuff.' },
  { score: 1000, message: 'Okay, now you’re committed.' },
  { score: 1500, message: 'Still clicking? I like you.' },
  { score: 2000, message: 'Recruiter high score energy.' },
]

export default function App() {
  const [view, setView] = useState<View>('home')
  const [score, setScore] = useState(() => {
    if (typeof window === 'undefined') return 0
    const saved = Number(window.localStorage.getItem(SCORE_KEY))
    return Number.isFinite(saved) && saved >= 0 ? saved : 0
  })
  const [scoreBump, setScoreBump] = useState(false)
  const [milestoneMessage, setMilestoneMessage] = useState<string | null>(null)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const saved = window.localStorage.getItem(LEADERBOARD_KEY)
      return saved ? JSON.parse(saved) as LeaderboardEntry[] : []
    } catch {
      return []
    }
  })
  const selectedCase = view.startsWith('case:') ? caseStudies.find((study) => study.slug === view.slice(5)) : undefined
  const go = (next: View) => { setView(next); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  useEffect(() => {
    const awardPoints = () => {
      setScore((current) => {
        const next = current + POINTS_PER_CLICK
        const crossed = SCORE_MILESTONES.find((milestone) => current < milestone.score && next >= milestone.score)
        if (crossed) setMilestoneMessage(crossed.message)
        window.localStorage.setItem(SCORE_KEY, String(next))
        return next
      })
      setScoreBump(false)
      window.requestAnimationFrame(() => setScoreBump(true))
    }
    document.addEventListener('click', awardPoints, true)
    return () => document.removeEventListener('click', awardPoints, true)
  }, [])

  useEffect(() => {
    if (!scoreBump) return
    const timer = window.setTimeout(() => setScoreBump(false), 240)
    return () => window.clearTimeout(timer)
  }, [scoreBump])

  useEffect(() => {
    if (!milestoneMessage) return
    const timer = window.setTimeout(() => setMilestoneMessage(null), 3200)
    return () => window.clearTimeout(timer)
  }, [milestoneMessage])

  useEffect(() => {
    if (view !== 'about' || leaderboard.length) return
    const seeded = [
      { label: 'Recruiter', score: score + 30 },
      { label: 'Private Company', score: Math.max(0, score - 20) },
      { label: 'L&D Lead', score: Math.max(0, score - 50) },
    ]
    setLeaderboard(seeded)
    window.localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(seeded))
  }, [view, score, leaderboard.length])

  const rankedLeaderboard = useMemo(() => {
    if (!leaderboard.length) return []
    return [...leaderboard, { label: 'You', score }].sort((a, b) => b.score - a.score)
  }, [leaderboard, score])

  return (
    <div className={`app-shell view-${view.startsWith('case:') ? 'case' : view}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className={`score-chip ${scoreBump ? 'score-bump' : ''} ${milestoneMessage ? 'score-milestone' : ''}`} aria-live="polite" aria-label={milestoneMessage ?? `Your score is ${score} points`}>
        {milestoneMessage ? <span className="score-message">{milestoneMessage}</span> : <><span>YOUR SCORE</span><strong>{score.toLocaleString()}</strong></>}
      </div>

      {view !== 'work' && (
        <header className="site-header">
          <button className="brand" type="button" onClick={() => go('home')} aria-label="Cesar Ramos AI Enablement Lab home"><span className="brand-mark">CR</span><span>AI ENABLEMENT LAB</span></button>
          <nav aria-label="Primary navigation"><button type="button" onClick={() => go('challenge')}>The Method</button><button type="button" onClick={() => go('work')}>Proof</button><button type="button" onClick={() => go('about')}>About</button><a className="nav-cta" href="mailto:caramos0918@gmail.com">Connect</a></nav>
        </header>
      )}

      <main id="main" className="view-stage">
        {view === 'home' && (
          <section className="home-view screen-enter" aria-labelledby="home-heading">
            <div className="hero-copy">
              <div className="eyebrow">AI ADOPTION & ENABLEMENT</div>
              <h1 id="home-heading">I turn <span className="hero-accent">AI</span> into a way people actually work.</h1>
              <p className="hero-subhead">Find the friction. Redesign the workflow. Make adoption stick.</p>
              <p className="hero-statement">I find high-friction work, redesign the workflow with AI, and build the learning, practice, and support that gets people to use it.</p>
              <div className="hero-actions"><button className="button primary hero-primary" type="button" onClick={() => go('work')}>SEE THE WORK <span aria-hidden="true">→</span></button><button className="button text-button" type="button" onClick={() => go('challenge')}>TRY THE METHOD</button></div>
              <div className="proof-rail" aria-label="Selected proof"><div><strong>29 courses / month</strong><span>AI-ENABLED PRODUCTION WORKFLOW</span></div><div><strong>10% lower turnover</strong><span>LEARNING TIED TO BUSINESS OUTCOME</span></div><div><strong>Live adoption tools</strong><span>BUILT AROUND REAL MOMENTS OF WORK</span></div></div>
            </div>
            <div className="hero-visual"><div className="portrait-frame"><img src={headshot} alt="Professional headshot of Cesar Ramos" /></div><div className="role-chip"><strong>{site.name}</strong><span>{site.title}</span></div></div>
            <div className="method-ticker" aria-label="Cesar's enablement method">{method.slice(0, 4).map((item, index) => <span key={item}>{String(index + 1).padStart(2, '0')} &nbsp; {item}{index < 3 && <b>→</b>}</span>)}</div>
          </section>
        )}

        {view === 'challenge' && <ChallengeLab onSeeWork={() => go('work')} onExit={() => go('home')} />}

        {view === 'work' && <section className="work-view screen-enter" aria-labelledby="work-heading"><div className="page-nav page-nav-top"><button className="page-back page-lab-cta" type="button" onClick={() => go('challenge')}>TRY AI ENABLEMENT LAB →</button><button className="page-next" type="button" onClick={() => go('about')}>ABOUT →</button></div><div className="view-eyebrow">PROOF OF IMPACT</div><div className="work-hero"><div><h1 id="work-heading">Four ways I have driven AI adoption.</h1><p>Different problems. Same approach: find the friction, design the intervention, enable people, measure the impact.</p></div></div><div className="project-grid">{caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} onOpen={() => go(`case:${study.slug}`)} />)}</div><div className="work-proof-note">Built from real problems. Designed for real adoption. Measured by real outcomes.</div></section>}

        {selectedCase && <CaseDetail study={selectedCase} onBack={() => go('work')} />}

        {view === 'about' && <section className="about-view screen-enter" aria-labelledby="about-heading">
          <div className="page-nav page-nav-top about-page-nav"><button className="page-back" type="button" onClick={() => go('work')}>← BACK TO PROOF</button><button className="page-next" type="button" onClick={() => go('home')}>HOME →</button></div>
          <div className="about-mobile-intro" aria-hidden="true"><div className="about-mobile-photo"><img src={headshot} alt="" /></div><div className="about-mobile-copy"><span>ABOUT CESAR</span><strong>I work where people, technology, and performance meet.</strong></div></div>
          <div className="about-mobile-board"><AboutLeaderboard entries={rankedLeaderboard} score={score} /></div>
          <div className="about-left-column"><div className="about-photo"><img src={headshot} alt="Professional headshot of Cesar Ramos" /></div><div className="about-desktop-board"><AboutLeaderboard entries={rankedLeaderboard} score={score} /></div></div>
          <div className="about-copy"><div className="view-eyebrow">ABOUT CESAR</div><h1 id="about-heading">{about.heading}</h1><p className="about-lede">{about.body}</p><div className="about-stats">{about.stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div><div className="capability-cloud">{about.capabilities.map((item) => <span key={item}>{item}</span>)}</div><div className="about-actions"><a className="button primary" href={`${import.meta.env.BASE_URL}Cesar_Ramos_AI_Enablement_Resume.docx`} download>DOWNLOAD RÉSUMÉ</a><a className="button ghost" href="mailto:caramos0918@gmail.com">CONNECT WITH CESAR</a></div></div>
        </section>}
      </main>
    </div>
  )
}

function AboutLeaderboard({ entries, score }: { entries: LeaderboardEntry[]; score: number }) {
  if (!entries.length) return null
  const leader = entries[0]
  const youIndex = entries.findIndex((entry) => entry.label === 'You')
  const gap = Math.max(0, leader.score - score)
  const clicksToLead = gap > 0 ? Math.floor(gap / POINTS_PER_CLICK) + 1 : 0
  return <aside className="about-leaderboard" aria-label="AI Enablement Lab leaderboard"><div className="leaderboard-head"><div><span>LAB LEADERBOARD</span><strong>{youIndex === 0 ? 'You took the lead.' : `${clicksToLead} more ${clicksToLead === 1 ? 'click' : 'clicks'} to take the lead.`}</strong></div><b>YOUR SCORE {score.toLocaleString()}</b></div><div className="leaderboard-list">{entries.map((entry, index) => <div key={entry.label} className={entry.label === 'You' ? 'leaderboard-you' : ''}><span>{index + 1}</span><strong>{entry.label}</strong><b>{entry.score.toLocaleString()}</b></div>)}</div></aside>
}

function CaseDetail({ study, onBack }: { study: (typeof caseStudies)[number]; onBack: () => void }) {
  const [showStory, setShowStory] = useState(false)
  const sections = [['FRICTION', study.friction],['DISCOVERY', study.discovery],['SOLUTION', study.solution],['ENABLEMENT', study.enablement],['GOVERNANCE', study.governance]] as const
  return <section className="case-view screen-enter" aria-labelledby="case-heading"><div className="page-nav page-nav-top"><button className="page-back" type="button" onClick={onBack}>← BACK TO PROJECTS</button></div><div className="case-hero"><div><div className="view-eyebrow">{study.eyebrow}</div><h1 id="case-heading">{study.title}</h1><span className="status-pill">{study.status}</span></div><div className="case-hero-metric"><strong>{study.metrics[0].value}</strong><span>{study.metrics[0].label}</span></div></div><div className="case-demo-stage"><div className="case-demo-hint"><span>INTERACTIVE EXAMPLE</span><strong>Click the controls below to explore it.</strong><b aria-hidden="true">↓</b></div><InteractiveRepresentativePreview kind={study.slug} /></div><div className="case-story-toggle"><div><span>HOW IT WORKED</span><strong>Want the thinking behind the example?</strong></div><button className="button ghost" type="button" onClick={() => setShowStory((value) => !value)} aria-expanded={showStory}>{showStory ? 'HIDE DETAILS ↑' : 'SHOW THE APPROACH ↓'}</button></div>{showStory && <><div className="story-line" aria-label="Case study stages">{sections.map(([label], index) => <span key={label}><b>{String(index + 1).padStart(2, '0')}</b>{label}</span>)}</div><div className="story-grid">{sections.map(([label, copy], index) => <article key={label} className="story-card"><span>{String(index + 1).padStart(2, '0')} / {label}</span><p>{copy}</p></article>)}</div></>}<section className="impact-panel" aria-labelledby="impact-heading"><div><span>IMPACT</span><h2 id="impact-heading">What changed.</h2>{study.note && <p>{study.note}</p>}</div><div className="impact-metrics">{study.metrics.map((metric) => <div key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section><div className="page-nav case-footer-actions"><button className="page-back" type="button" onClick={onBack}>← BACK TO PROJECTS</button><a className="page-next" href="mailto:caramos0918@gmail.com">TALK WITH CESAR →</a></div></section>
}
