import { useState } from 'react'
import ChallengeLab from './components/challenge/ChallengeLab'
import CaseStudyCard from './components/case-studies/CaseStudyCard'
import RepresentativePreview from './components/case-studies/RepresentativePreview'
import { about, caseStudies, method, site } from './data/portfolioData'
import headshot from './assets/cesar-headshot.webp'

type View = 'home' | 'challenge' | 'work' | 'about' | `case:${string}`

export default function App() {
  const [view, setView] = useState<View>('home')
  const selectedCase = view.startsWith('case:') ? caseStudies.find((study) => study.slug === view.slice(5)) : undefined
  const go = (next: View) => { setView(next); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <button className="brand" type="button" onClick={() => go('home')} aria-label="Cesar Ramos AI Enablement Lab home"><span className="brand-mark">CR</span><span>AI ENABLEMENT LAB</span></button>
        <nav aria-label="Primary navigation">
          <button type="button" onClick={() => go('challenge')}>The Method</button>
          <button type="button" onClick={() => go('work')}>Proof</button>
          <button type="button" onClick={() => go('about')}>About</button>
          <a className="nav-cta" href="mailto:caramos0918@gmail.com">Connect</a>
        </nav>
      </header>

      <main id="main" className="view-stage">
        {view === 'home' && (
          <section className="home-view screen-enter" aria-labelledby="home-heading">
            <div className="hero-copy">
              <div className="eyebrow">AI ADOPTION & ENABLEMENT</div>
              <h1 id="home-heading">I turn AI into a way people actually work.</h1>
              <p className="hero-subhead">Find the friction. Redesign the workflow. Make adoption stick.</p>
              <p className="hero-statement">I find high-friction work, redesign the workflow with AI, and build the learning, practice, and support that gets people to use it.</p>
              <div className="hero-actions"><button className="button primary hero-primary" type="button" onClick={() => go('work')}>SEE THE WORK <span aria-hidden="true">→</span></button><button className="button text-button" type="button" onClick={() => go('challenge')}>TRY THE METHOD</button></div>
              <div className="proof-rail" aria-label="Selected proof"><div><strong>29 courses / month</strong><span>AI-ENABLED PRODUCTION WORKFLOW</span></div><div><strong>10% lower turnover</strong><span>LEARNING TIED TO BUSINESS OUTCOME</span></div><div><strong>Live adoption tools</strong><span>BUILT AROUND REAL MOMENTS OF WORK</span></div></div>
            </div>
            <div className="hero-visual" aria-label="A mission path representing Cesar's AI enablement method"><div className="mission-map" aria-hidden="true"><span className="map-pin">●</span><span className="map-line line-one"/><span className="map-line line-two"/><span className="map-line line-three"/><span className="map-flag">⚑</span></div><div className="portrait-frame"><img src={headshot} alt="Professional headshot of Cesar Ramos" /></div><div className="role-chip"><strong>{site.name}</strong><span>{site.title}</span></div></div>
            <div className="method-ticker" aria-label="Cesar's enablement method">{method.slice(0, 4).map((item, index) => <span key={item}>{String(index + 1).padStart(2, '0')} &nbsp; {item}{index < 3 && <b>→</b>}</span>)}</div>
          </section>
        )}

        {view === 'challenge' && <ChallengeLab onSeeWork={() => go('work')} onExit={() => go('home')} />}

        {view === 'work' && (
          <section className="work-view screen-enter" aria-labelledby="work-heading">
            <div className="view-eyebrow">AI ADOPTION IN PRACTICE / 04</div>
            <div className="work-hero"><div><h1 id="work-heading">Four problems. Four interventions. One adoption method.</h1><p>Start with the outcome. Open a case study when you want the evidence, workflow, and interactive example behind it.</p></div><div className="verified-punch"><strong>10%</strong><span>LOWER POOL-SIDE TURNOVER<br />IN THREE MONTHS</span></div></div>
            <div className="project-grid">{caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} onOpen={() => go(`case:${study.slug}`)} />)}</div>
          </section>
        )}

        {selectedCase && <CaseDetail study={selectedCase} onBack={() => go('work')} />}

        {view === 'about' && (
          <section className="about-view screen-enter" aria-labelledby="about-heading"><div className="about-photo"><img src={headshot} alt="Professional headshot of Cesar Ramos" /></div><div className="about-copy"><div className="view-eyebrow">ABOUT CESAR</div><h1 id="about-heading">{about.heading}</h1><p className="about-lede">{about.body}</p><div className="about-stats">{about.stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div><div className="capability-cloud">{about.capabilities.map((item) => <span key={item}>{item}</span>)}</div><div className="about-actions"><a className="button primary" href={`${import.meta.env.BASE_URL}Cesar_Ramos_AI_Enablement_Resume.docx`} download>DOWNLOAD RÉSUMÉ</a><a className="button ghost" href="mailto:caramos0918@gmail.com">CONNECT WITH CESAR</a></div></div></section>
        )}
      </main>
    </div>
  )
}

function CaseDetail({ study, onBack }: { study: (typeof caseStudies)[number]; onBack: () => void }) {
  const [showStory, setShowStory] = useState(false)
  const sections = [['FRICTION', study.friction],['DISCOVERY', study.discovery],['SOLUTION', study.solution],['ENABLEMENT', study.enablement],['GOVERNANCE', study.governance]] as const

  return (
    <section className="case-view screen-enter" aria-labelledby="case-heading">
      <button className="back-link case-back" type="button" onClick={onBack}><span aria-hidden="true">←</span> BACK TO PROJECTS</button>
      <div className="case-hero"><div><div className="view-eyebrow">{study.eyebrow}</div><h1 id="case-heading">{study.title}</h1><span className="status-pill">{study.status}</span></div><div className="case-hero-metric"><strong>{study.metrics[0].value}</strong><span>{study.metrics[0].label}</span></div></div>
      <div className="case-demo-stage"><div className="case-demo-copy"><span>INTERACTIVE PROOF</span><h2>Try it.</h2><p>Click through the example to see the intervention in action.</p></div><RepresentativePreview kind={study.slug} /></div>

      <div className="case-story-toggle">
        <div><span>HOW IT WORKED</span><strong>Want the thinking behind the example?</strong></div>
        <button className="button ghost" type="button" onClick={() => setShowStory((value) => !value)} aria-expanded={showStory}>{showStory ? 'HIDE DETAILS ↑' : 'SHOW THE APPROACH ↓'}</button>
      </div>

      {showStory && <>
        <div className="story-line" aria-label="Case study stages">{sections.map(([label], index) => <span key={label}><b>{String(index + 1).padStart(2, '0')}</b>{label}</span>)}</div>
        <div className="story-grid">{sections.map(([label, copy], index) => <article key={label} className="story-card"><span>{String(index + 1).padStart(2, '0')} / {label}</span><p>{copy}</p></article>)}</div>
      </>}

      <section className="impact-panel" aria-labelledby="impact-heading"><div><span>IMPACT</span><h2 id="impact-heading">What changed.</h2>{study.note && <p>{study.note}</p>}</div><div className="impact-metrics">{study.metrics.map((metric) => <div key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>
      <div className="case-footer-actions"><button className="button ghost" type="button" onClick={onBack}>← BACK TO PROJECTS</button><a className="button primary" href="mailto:caramos0918@gmail.com">TALK WITH CESAR</a></div>
    </section>
  )
}
