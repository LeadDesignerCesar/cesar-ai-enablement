import type { caseStudies } from '../../data/portfolioData'

type CaseStudy = (typeof caseStudies)[number]

const cardCopy = [
  {
    label: 'AI WORKFLOW DESIGN',
    headline: '29 courses in one month',
    body: 'Redesigned SME course production around an AI-assisted, human-reviewed workflow.',
    cta: 'SEE HOW IT WORKED',
  },
  {
    label: 'ADOPTION THROUGH EXPERIENCE',
    headline: 'A Training Summit people actively participated in',
    body: 'Built guidance, competition, QR interactions, Q&A, and shared content into the event itself.',
    cta: 'EXPLORE THE APP',
  },
  {
    label: 'PERSONALIZED LEARNING',
    headline: 'Failed assessments became targeted remediation',
    body: 'Used performance data to identify knowledge gaps and route learners to the exact material they needed.',
    cta: 'SEE THE ADAPTIVE SYSTEM',
  },
  {
    label: 'MANAGER AI ENABLEMENT',
    headline: 'Résumé evidence became better hiring decisions',
    body: 'Taught managers a repeatable AI-supported method for evidence-based interviewing instead of gut-feel hiring.',
    cta: 'TRY THE HIRING WORKFLOW',
  },
]

export default function CaseStudyCard({ study, index, onOpen }: { study: CaseStudy; index: number; onOpen: () => void }) {
  const copy = cardCopy[index]
  const heroMetric = study.metrics.find((metric) => metric.value.includes('%')) ?? study.metrics[0]

  return (
    <button className={`project-card project-${index + 1}`} type="button" onClick={onOpen} aria-label={`Open ${study.title} case study`}>
      <div className="project-top"><span>0{index + 1}</span><span>{copy.label}</span></div>
      <div className="project-card-content">
        <div className="project-proofline"><strong>{heroMetric.value}</strong><span>{heroMetric.label}</span></div>
        <h2>{copy.headline}</h2>
        <p className="project-summary">{copy.body}</p>
      </div>
      <span className="project-open">{copy.cta} <b>→</b></span>
    </button>
  )
}
