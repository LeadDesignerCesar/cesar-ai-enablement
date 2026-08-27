import type { caseStudies } from '../../data/portfolioData'
import RepresentativePreview from './RepresentativePreview'

type CaseStudy = (typeof caseStudies)[number]

const recruiterQuestions = [
  'Can he change a business outcome?',
  'Can he create something people want to use?',
  'Does he understand adaptive learning?',
  'Can he make AI practice useful and safe?',
]

export default function CaseStudyCard({ study, index, onOpen }: { study: CaseStudy; index: number; onOpen: () => void }) {
  const heroMetric = study.metrics.find((metric) => metric.value.includes('%')) ?? study.metrics[0]
  return (
    <button className={`project-card project-${index + 1}`} type="button" onClick={onOpen} aria-label={`Open ${study.title} case study`}>
      <div className="project-top"><span>0{index + 1}</span><span>{study.eyebrow}</span></div>
      <RepresentativePreview kind={study.slug} compact />
      <div className="project-proofline"><strong>{heroMetric.value}</strong><span>{heroMetric.label}</span></div>
      <div className="project-bottom">
        <p>{recruiterQuestions[index]}</p>
        <h2>{study.title}</h2>
        <span className="project-open">OPEN CASE STUDY <b>↗</b></span>
      </div>
    </button>
  )
}
