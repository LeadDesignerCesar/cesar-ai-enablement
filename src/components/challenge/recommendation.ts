import {
  solutionRecommendations,
  type Adoption,
  type Audience,
  type Friction,
  type Measure,
  type Solution,
} from '../../data/portfolioData'

export interface ChallengeSelections {
  friction: Friction
  audience: Audience
  solution: Solution
  adoption: Adoption
  measure: Measure
}

const adoptionPhrase: Record<Adoption, string> = {
  'TRY IT': 'give people a low-risk practice environment',
  COACHING: 'reinforce it with structured coaching and reflection',
  'JOB AID': 'reinforce it with a searchable job aid at the point of need',
  CHAMPIONS: 'support it with visible local champions who can surface resistance early',
}

const measurePhrase: Record<Measure, string> = {
  'TIME SAVED': 'compare task-completion time before and after adoption',
  'REPEAT USE': 'track repeat use and whether the behavior continues after launch',
  QUALITY: 'compare quality scores before and after adoption',
  'BUSINESS RESULT': 'connect usage to a downstream business result rather than completion alone',
}

export function buildRecommendation(s: ChallengeSelections) {
  const solution = solutionRecommendations[s.friction][s.solution]
  return `${solution} For ${s.audience.toLowerCase()}, ${adoptionPhrase[s.adoption]}, then ${measurePhrase[s.measure]}.`
}
