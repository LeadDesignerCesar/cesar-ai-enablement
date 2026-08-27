import RepresentativePreview from './RepresentativePreview'
import ProductionWorkflowDemo from './ProductionWorkflowDemo'
import AdaptiveCertificationDemo from './AdaptiveCertificationDemo'

export default function InteractiveRepresentativePreview({ kind, compact = false }: { kind: string; compact?: boolean }) {
  if (compact) return <RepresentativePreview kind={kind} compact />
  if (kind === 'pool-side-learning') return <div className="rep-preview rep-pool-side-learning" aria-label="Interactive representative AI production demo"><div className="rep-caption">REPRESENTATIVE DEMO — NOT PRODUCTION UI</div><ProductionWorkflowDemo /></div>
  if (kind === 'adaptive-quiz') return <div className="rep-preview rep-adaptive-quiz" aria-label="Interactive representative adaptive certification demo"><div className="rep-caption">REPRESENTATIVE DEMO — NOT PRODUCTION UI</div><AdaptiveCertificationDemo /></div>
  return <RepresentativePreview kind={kind} />
}
