import ChallengeLab from './components/challenge/ChallengeLab'
import CaseStudyCard from './components/case-studies/CaseStudyCard'
import { about, caseStudies, method, proofCards, site } from './data/portfolioData'
import headshot from './assets/cesar-headshot.webp'

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cesar Ramos AI Enablement Lab home">
          <span className="brand-mark">CR</span>
          <span>AI ENABLEMENT LAB</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#challenge">Challenge</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:caramos0918@gmail.com">Connect</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">CESAR RAMOS — AI ENABLEMENT LAB</div>
            <h1>{site.heroHeading}</h1>
            <p className="hero-subhead">{site.heroSubheading}</p>
            <p className="hero-statement">{site.statement}</p>
            <div className="hero-actions">
              <a className="button primary" href="#challenge">START THE 3-MINUTE CHALLENGE <span aria-hidden="true">→</span></a>
              <a className="button text-button" href="#work">EXPLORE THE WORK</a>
            </div>
            <div className="role-lockup">
              <strong>{site.name}</strong>
              <span>{site.title}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={headshot} alt="Professional headshot of Cesar Ramos" />
              <div className="portrait-tag">PEOPLE × TECHNOLOGY × PERFORMANCE</div>
            </div>
            <div className="floating-note note-one">FIND THE FRICTION</div>
            <div className="floating-note note-two">MAKE ADOPTION STICK</div>
          </div>
        </section>

        <section className="method-strip" aria-label="Enablement method">
          {method.map((item, index) => <span key={item}>{item}{index < method.length - 1 && <b aria-hidden="true">→</b>}</span>)}
        </section>

        <section className="proof-section" aria-labelledby="proof-heading">
          <div className="section-kicker">SELECTED PROOF</div>
          <div className="section-heading-row"><h2 id="proof-heading">Work that moved beyond the slide deck.</h2><p>Learning, workflow, participation, practice, and measurable change.</p></div>
          <div className="proof-grid">
            {proofCards.map((card) => (
              <article className="proof-card" key={`${card.value}-${card.label}`}>
                <div className="proof-value"><strong>{card.value}</strong><span>{card.label}</span></div>
                <h3>{card.headline}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <ChallengeLab />

        <section className="work-section" id="work" aria-labelledby="work-heading">
          <div className="section-kicker">APPLIED WORK</div>
          <div className="section-heading-row">
            <h2 id="work-heading">From friction to impact.</h2>
            <p>Each project follows the same discipline: discover the real barrier, design the smallest useful intervention, enable people to use it, and measure what changes.</p>
          </div>
          <div className="case-stack">
            {caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} />)}
          </div>
        </section>

        <section className="verified-callout" aria-label="Verified outcome">
          <span>VERIFIED OUTCOME</span>
          <strong>{site.verifiedTurnoverClaim}</strong>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-heading">
          <div className="about-intro">
            <div className="section-kicker">ABOUT CESAR</div>
            <h2 id="about-heading">{about.heading}</h2>
            <p>{about.body}</p>
          </div>
          <div className="about-stats">
            {about.stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
          <div className="about-grid">
            <div>
              <h3>What I do</h3>
              <ul className="capability-list">{about.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h3>Experience</h3>
              <div className="timeline">{about.experience.map(([role, org, dates]) => <div className="timeline-item" key={`${role}-${org}`}><span className="timeline-dot" /><div><strong>{role}</strong><span>{org}</span><small>{dates}</small></div></div>)}</div>
            </div>
          </div>
          <div className="about-actions">
            <a className="button primary" href={`${import.meta.env.BASE_URL}Cesar_Ramos_AI_Enablement_Resume.docx`} download>DOWNLOAD RÉSUMÉ</a>
            <a className="button ghost" href="mailto:caramos0918@gmail.com">CONNECT WITH CESAR</a>
          </div>
        </section>
      </main>

      <footer>
        <div><strong>Cesar Ramos</strong><span>AI Enablement & Learning Experience Strategist</span></div>
        <span>Designed as an experience, not a résumé.</span>
      </footer>
    </>
  )
}
