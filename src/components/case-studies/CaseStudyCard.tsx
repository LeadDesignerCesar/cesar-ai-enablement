import type { caseStudies } from '../../data/portfolioData'

type CaseStudy = (typeof caseStudies)[number]

const cardCopy = [
  { label:'AI WORKFLOW DESIGN', headline:'29 courses in one month', body:'AI-assisted production increased speed while human review stayed in control.', cta:'SEE HOW IT WORKED', icon:'↻', facts:[['VELOCITY','~1 course/day'],['QUALITY','Human reviewed'],['OUTCOME','29 delivered']] },
  { label:'ADOPTION THROUGH EXPERIENCE', headline:'Training Summit participation', body:'Turned a training event into an interactive experience people wanted to use.', cta:'EXPLORE THE APP', icon:'◎', facts:[['PARTICIPATION','82% draft'],['ENGAGEMENT','QR + Q&A + play'],['RESULT','Active participation']] },
  { label:'PERSONALIZED LEARNING', headline:'Targeted remediation', body:'Assessment data became personalized learning paths aimed at the learner’s actual gaps.', cta:'SEE THE ADAPTIVE SYSTEM', icon:'⌾', facts:[['DIAGNOSIS','Knowledge gaps'],['PERSONALIZATION','Right content'],['ACTION','Targeted practice']] },
  { label:'MANAGER AI ENABLEMENT', headline:'Better hiring decisions', body:'Managers learned an AI-supported, evidence-based interviewing workflow instead of relying on gut feel.', cta:'TRY THE HIRING WORKFLOW', icon:'✓', facts:[['METHOD','4-step workflow'],['PRACTICE','AI feedback'],['OUTCOME','Evidence-based']] },
]

export default function CaseStudyCard({ study, index, onOpen }: { study: CaseStudy; index: number; onOpen: () => void }) {
  const copy = cardCopy[index]
  return (
    <button className={`project-card project-${index + 1}`} type="button" onClick={onOpen} aria-label={`Open ${study.title} case study`}>
      <div className="project-top"><span className="project-number">0{index + 1}</span><span>{copy.label}</span></div>
      <div className="project-card-content"><div className="project-intro"><div><h2>{copy.headline}</h2><p className="project-summary">{copy.body}</p></div><span className="project-icon" aria-hidden="true">{copy.icon}</span></div><div className="project-facts">{copy.facts.map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div>
      <span className="project-open">{copy.cta} <b>→</b></span>
    </button>
  )
}
