import { useState } from 'react'
import ChallengeLab from './components/challenge/ChallengeLab'
import CaseStudyCard from './components/case-studies/CaseStudyCard'
import RepresentativePreview from './components/case-studies/RepresentativePreview'
import { about, caseStudies, method, proofCards, site } from './data/portfolioData'
import headshot from './assets/cesar-headshot.webp'

type View = 'home' | 'challenge' | 'work' | 'about' | `case:${string}`

export default function App() {
  const [view, setView] = useState<View>('home')
  const selectedCase = view.startsWith('case:') ? caseStudies.find((study) => study.slug === view.slice(5)) : undefined

  const go = (next: View) => {
    setView(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <button className="brand" type="button" onClick={() => go('home')} aria-label="Cesar Ramos AI Enablement Lab home">
          <span className="brand-mark">CR</span>
          <span>AI ENABLEMENT LAB</span>
        </button>
        <nav aria-label="Primary navigation">
          <button type="button" onClick={() => go('challenge')}>The Challenge</button>
          <button type="button" onClick={() => go('work')}>Proof</button>
          <button type="button" onClick={() => go('about')}>About</button>
          <a className="nav-cta" href="mailto:caramos0918@gmail.com">Connect</a>
        </nav>
      </header>

      <main id="main" className="view-stage">
        {view === 'home' && (
          <section className="home-view screen-enter" aria-labelledby="home-heading">
            <div className="hero-copy">
              <div className="eyebrow">CESAR RAMOS — AI ENABLEMENT LAB</div>
              <p className="hero-kicker">AI enablement is a behavior-change problem.</p>
              <h1 id="home-heading">Don’t read my portfolio.</h1>
              <p className="hero-try">Try it.</p>
              <p className="hero-subhead">Find the friction. Build the solution. Make adoption stick.</p>
              <p className="hero-statement">{site.statement}</p>
              <div className="hero-actions">
                <button className="button primary hero-primary" type="button" onClick={() => go('challenge')}>START THE 3-MINUTE CHALLENGE <span aria-hidden="true">→</span></button>
                <button className="button text-button" type="button" onClick={() => go('work')}>EXPLORE THE WORK</button>
              </div>
              <div className="proof-rail" aria-label="Selected proof">
                {proofCards.slice(0, 3).map((card) => (
                  <div key={card.label}><strong>{card.value}</strong><span>{card.label}</span></div>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-label="A mission path representing Cesar's AI enablement method">
              <div className="mission-map" aria-hidden="true">
                <span className="map-pin">●</span><span className="map-line line-one"/><span className="map-line line-two"/><span className="map-line line-three"/><span className="map-flag">⚑</span>
              </div>
              <div className="portrait-frame">
                <img src={headshot} alt="Professional headshot of Cesar Ramos" />
              </div>
              <div className="role-chip"><strong>{site.name}</strong><span>{site.title}</span></div>
            </div>

            <div className="method-ticker" aria-label="Cesar's enablement method">
              {method.slice(0, 4).map((item, index) => <span key={item}>{String(index + 1).padStart(2, '0')} &nbsp; {item}{index < 3 && <b>→</b>}</span>)}
            </div>
          </section>
        )}

        {view === 'challenge' && <ChallengeLab onSeeWork={() => go('work')} onExit={() => go('home')} />}

        {view === 'work' && (
          <section className="work-view screen-enter" aria-labelledby="work-heading">
            <div className="view-eyebrow">SELECTED WORK / 04</div>
            <div className="work-hero">
              <div>
                <h1 id="work-heading">Don’t take my word for it.</h1>
                <p>Open a project and inspect the experience. The screens below are representative recreations—not employer production UI—so you can see how I think without exposing internal branding or systems.</p>
              </div>
              <div className="verified-punch"><strong>10%</strong><span>LOWER POOL-SIDE TURNOVER<br />IN THREE MONTHS</span></div>
            </div>
            <div className="project-grid">
              {caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} onOpen={() => go(`case:${study.slug}`)} />)}
            </div>
          </section>
        )}

        {selectedCase && <CaseDetail study={selectedCase} onBack={() => go('work')} />}

        {view === 'about' && (
          <section className="about-view screen-enter" aria-labelledby="about-heading">
            <div className="about-photo"><img src={headshot} alt="Professional headshot of Cesar Ramos" /></div>
            <div className="about-copy">
              <div className="view-eyebrow">ABOUT CESAR</div>
              <h1 id="about-heading">{about.heading}</h1>
              <p className="about-lede">{about.body}</p>
              <div className="about-stats">{about.stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
              <div className="capability-cloud">{about.capabilities.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="about-actions">
                <a className="button primary" href={`${import.meta.env.BASE_URL}Cesar_Ramos_AI_Enablement_Resume.docx`} download>DOWNLOAD RÉSUMÉ</a>
                <a className="button ghost" href="mailto:caramos0918@gmail.com">CONNECT WITH CESAR</a>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

function CaseDetail({ study, onBack }: { study: (typeof caseStudies)[number]; onBack: () => void }) {
  const sections = [
    ['FRICTION', study.friction],
    ['DISCOVERY', study.discovery],
    ['SOLUTION', study.solution],
    ['ENABLEMENT', study.enablement],
    ['GOVERNANCE', study.governance],
  ] as const

  return (
    <section className="case-view screen-enter" aria-labelledby="case-heading">
      <button className="back-link" type="button" onClick={onBack}>← BACK TO WORK</button>
      <div className="case-hero">
        <div>
          <div className="view-eyebrow">{study.eyebrow}</div>
          <h1 id="case-heading">{study.title}</h1>
          <span className="status-pill">{study.status}</span>
        </div>
        <div className="case-hero-metric"><strong>{study.metrics[0].value}</strong><span>{study.metrics[0].label}</span></div>
      </div>

      <div className="case-demo-stage">
        <div className="case-demo-copy"><span>SHOW, DON’T TELL</span><h2>A representative recreation of the experience.</h2><p>This is intentionally not a screenshot of an employer production system. It recreates the interaction and design thinking without carrying over company branding, private data, or exact UI.</p></div>
        <RepresentativePreview kind={study.slug} />
      </div>

      <div className="story-line" aria-label="Case study stages">
        {sections.map(([label], index) => <span key={label}><b>{String(index + 1).padStart(2, '0')}</b>{label}</span>)}
      </div>
      <div className="story-grid">
        {sections.map(([label, copy], index) => (
          <article key={label} className="story-card">
            <span>{String(index + 1).padStart(2, '0')} / {label}</span>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <section className="impact-panel" aria-labelledby="impact-heading">
        <div><span>06 / IMPACT</span><h2 id="impact-heading">What moved.</h2>{study.note && <p>{study.note}</p>}</div>
        <div className="impact-metrics">{study.metrics.map((metric) => <div key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      </section>
      <div className="case-footer-actions"><button className="button ghost" type="button" onClick={onBack}>SEE ANOTHER PROJECT</button><a className="button primary" href="mailto:caramos0918@gmail.com">TALK WITH CESAR</a></div>
    </section>
  )
}
