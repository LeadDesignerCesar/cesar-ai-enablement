// Draft portfolio figures — review with Cesar before production publishing.

export const site = {
  name: 'Cesar Ramos', title: 'AI Enablement & Learning Experience Strategist',
  statement: 'I turn emerging technology into practical learning experiences people can understand, trust, and use at work.',
  heroHeading: "Don’t read my portfolio. Try it.", heroSubheading: 'Find the friction. Build the solution. Make adoption stick.',
  email: 'caramos0918@gmail.com', location: 'Tampa, Florida', verifiedTurnoverClaim: 'Reduced pool-side employee turnover by 10% within three months.',
}
export const method = ['FRICTION', 'DISCOVERY', 'SOLUTION', 'ENABLEMENT', 'GOVERNANCE', 'IMPACT'] as const
export const proofCards = [
  { value: '29', label: 'COURSES', headline: 'One course a day for a month', body: 'Added AI to a human-reviewed SME workflow to build the core curriculum at speed.' },
  { value: '10%', label: 'LOWER TURNOVER', headline: 'Pool-side turnover reduced in three months', body: 'Connected onboarding, role clarity, and practical learning support to an observable workforce result.' },
  { value: 'EVENT', label: 'APP', headline: 'A live participation layer for a Training Summit', body: 'Combined personalized logistics, speaker Q&A, a gamified scavenger hunt, live competition, and attendee-generated content in one experience.' },
  { value: 'TARGETED', label: 'REMEDIATION', headline: 'Certification prep based on actual weak areas', body: 'Used bucketed diagnostic assessment results to route each learner to the course sections they needed most.' },
  { value: 'BETTER', label: 'HIRING', headline: 'Train managers to hire from evidence', body: 'Designed manager training that turns résumé claims into structured interview questions and role-fit decisions instead of gut-feel hiring.' },
]
export const challenge = {
  friction: { prompt: 'What is getting in the way of performance?', options: { TIME: 'People may understand what to do, but the workflow makes the right action too slow or difficult.', CONFUSION: 'People may have access to information without knowing what applies to their situation.', INCONSISTENCY: 'Different people may be solving the same problem in different ways, producing unpredictable results.' }, audiencePrompt: 'Who feels the friction most?', audiences: ['EMPLOYEES', 'MANAGERS', 'CUSTOMERS'] },
  solution: { prompt: 'What kind of support would remove the friction?', options: ['GUIDANCE', 'PRACTICE', 'WORKFLOW', 'TOOL'], principle: 'AI should remove friction—not add another step.' },
  enablement: { prompt: 'How will people gain enough confidence to use the solution?', options: ['TRY IT', 'COACHING', 'JOB AID', 'CHAMPIONS'], pattern: 'SEE IT → TRY IT → USE IT AT WORK', principle: 'Adoption happens through practice, not slides.' },
  impact: { prompt: 'What evidence would show that the solution is working?', options: ['TIME SAVED', 'REPEAT USE', 'QUALITY', 'BUSINESS RESULT'], principle: 'COMPLETION IS NOT IMPACT', simulatedMetrics: { 'TIME SAVED': ['18% reduction in task-completion time', '16% faster manager response time'], 'REPEAT USE': ['74% repeat use after 30 days', '21% reduction in repeat questions'], QUALITY: ['12% improvement in quality scores', '23% fewer repeated errors'], 'BUSINESS RESULT': ['10% reduction in early turnover', '17% faster role readiness'] } },
} as const
export const adoptionRecommendations: Record<string, string> = { 'TRY IT': 'Give people a low-risk sandbox where the desired behavior can be practiced before it matters.', COACHING: 'Use guided feedback and reflection so people can improve without treating AI as the final authority.', 'JOB AID': 'Keep the support searchable, role-specific, and close to the moment of work.', CHAMPIONS: 'Champions create visible local support and help the organization identify resistance before it becomes disengagement.' }
export const solutionRecommendations: Record<string, Record<string, string>> = {
  TIME: { GUIDANCE: 'Reduce decision time with concise guidance embedded at the point of need.', PRACTICE: 'Practice the highest-friction decisions until the correct response becomes faster and more automatic.', WORKFLOW: 'Remove unnecessary handoffs and put the right prompt or decision point directly into the workflow.', TOOL: 'Use a tool only where it eliminates steps or automates repeatable work.' },
  CONFUSION: { GUIDANCE: 'Start with a role-specific decision guide before introducing a new tool.', PRACTICE: 'Use realistic scenarios to expose misconceptions and let people rehearse the correct decision.', WORKFLOW: 'Make the workflow itself explain what applies, when, and why.', TOOL: 'Use a tool only if it makes the right information easier to find and apply.' },
  INCONSISTENCY: { GUIDANCE: 'Create a shared standard that is clear enough for teams to use the same way.', PRACTICE: 'Calibrate teams against the same scenarios so expectations become observable, not assumed.', WORKFLOW: 'Standardize the critical steps while leaving room for appropriate human judgment.', TOOL: 'Use a tool to reinforce the standard, capture variation, and surface where teams diverge.' },
}
export type Friction = keyof typeof challenge.friction.options
export type Audience = (typeof challenge.friction.audiences)[number]
export type Solution = (typeof challenge.solution.options)[number]
export type Adoption = (typeof challenge.enablement.options)[number]
export type Measure = (typeof challenge.impact.options)[number]
export const caseStudies = [
  {
    slug: 'pool-side-learning', eyebrow: 'AI-ENABLED LEARNING PRODUCTION', title: '29 courses. One month. Human-reviewed.',
    friction: 'The organization needed a complete core curriculum quickly, but course development still depended on subject-matter expertise, review, correction, and approval. Speed could not come at the expense of accuracy.',
    discovery: 'Cesar mapped the work into a repeatable production loop: capture SME expertise, accelerate the first draft with AI, review the learning design, collect SME corrections, revise, and publish.',
    solution: 'Cesar added AI to the development workflow and sustained a roughly one-course-per-day production cadence for a month. While one course moved through drafting and build, another moved through comments, revision, and SME review.',
    enablement: 'The parallel workflow kept production moving every day instead of waiting for one course to finish its entire review cycle before beginning the next. The result was a completed 29-course core curriculum.',
    governance: 'AI accelerated drafting and production. Cesar and the subject-matter expert remained responsible for learning design, operational accuracy, comments, revisions, approval, and final decisions.',
    metrics: [{ value: '29', label: 'courses completed in one month' }, { value: '~1/day', label: 'sustained course-production cadence' }],
    note: 'The proof here is the production system: AI increased throughput while human review remained inside the workflow.', status: 'Core curriculum completed',
  },
  {
    slug: 'event-app', eyebrow: 'PARTICIPATION DESIGN', title: 'Turning a Training Summit into a live participation system',
    friction: 'A multi-session Training Summit created the usual event friction: attendees needed to know where to be, vendors needed meaningful traffic, speakers needed a way to collect questions, and teams needed more reasons to interact across company lines.',
    discovery: 'The opportunity was bigger than a digital agenda. The experience could become a live layer over the event—changing with the time of day, guiding each attendee to the correct breakout room, and using participation mechanics to create conversations instead of passive attendance.',
    solution: 'Cesar created an Event App with a time-aware landing page, personalized breakout-room guidance, the full agenda, speaker question submission, hidden QR codes, a gamified scavenger hunt, a live scoreboard, and attendee photo uploads. Many QR codes were intentionally placed with vendors, turning discovery into vendor engagement.',
    enablement: 'The app required almost no formal training. The current moment was surfaced automatically, QR discovery rewarded exploration, and the live scoreboard made participation visible enough to trigger friendly competition and cross-company conversation.',
    governance: 'Speaker questions could be reviewed and answered during the summit or on the final day. Photo uploads created a reusable content stream for Communications and Marketing while still requiring appropriate moderation and permissions.',
    metrics: [{ value: '82%', label: 'draft attendee participation' }, { value: '317', label: 'draft attendee photo submissions' }, { value: '64', label: 'draft speaker questions submitted' }, { value: '41%', label: 'draft increase in session interaction' }, { value: '$10K+', label: 'estimated market-comparison value' }],
    note: 'The strongest evidence is behavioral: vendors received more attendee interaction, the scavenger hunt sparked cross-company conversation, and attendee-uploaded photos became the source library used by Communications and Marketing for social posts. Numeric event figures remain draft portfolio figures until reviewed.', status: 'Prototype completed and tested',
  },
  {
    slug: 'adaptive-quiz', eyebrow: 'CERTIFICATION READINESS', title: 'A certification program that diagnoses the gap before assigning remediation',
    friction: 'Technicians were repeatedly failing a required certification. A generic study plan treated every learner the same even though different people were missing different knowledge areas.',
    discovery: 'The assessment already contained the signal needed to personalize preparation. By organizing questions into skill and knowledge buckets, wrong answers could reveal where each learner was actually struggling instead of only producing a pass/fail score.',
    solution: 'Cesar built a bucketed diagnostic assessment that pulled questions across certification-aligned areas, analyzed which buckets each learner missed, and then recommended specific course sections tied to those weak areas.',
    enablement: 'Instead of telling learners to restudy everything, the program gave them a targeted path: take the diagnostic, see the weak buckets, review the exact course sections connected to those gaps, practice, and retest.',
    governance: 'Question buckets, answer logic, remediation mappings, and course-section recommendations were tied to the certification content and required instructional-design and subject-matter review. The system guided preparation; it did not replace the certification standard.',
    metrics: [{ value: 'TARGETED', label: 'remediation by weak knowledge bucket' }, { value: 'SECTION-LEVEL', label: 'course recommendations tied to missed areas' }],
    note: 'This case is about changing certification preparation from one-size-fits-all review to diagnostic, targeted remediation. No performance lift is claimed here until outcome data is validated.', status: 'Built for certification preparation',
  },
  {
    slug: 'evidence-based-hiring', eyebrow: 'MANAGER ENABLEMENT', title: 'Teaching managers to hire for evidence—not familiarity',
    friction: 'Managers can fall back on gut feel, personality similarity, or vague impressions when interviewing. That makes “fit” subjective and can reward candidates who simply resemble the interviewer instead of candidates who demonstrate the behaviors the role actually requires.',
    discovery: 'The résumé already contains testable claims. The training opportunity was to teach managers how to separate evidence from self-description, identify what is missing, and turn each claim or gap into a structured behavioral question.',
    solution: 'Cesar designed a manager-training and train-the-trainer approach that moves through four steps: inspect the résumé for evidence, identify role-relevant claims and gaps, ask questions tied directly to that evidence, and score the response against a consistent role-fit rubric.',
    enablement: 'Managers practice on realistic candidate profiles instead of sitting through a lecture about interviewing. Trainers can coach the same repeatable method: evidence first, question second, structured evaluation third.',
    governance: 'The method explicitly separates role fit from personal similarity. Interviewers are coached to evaluate demonstrated behavior against job requirements, use consistent criteria, document evidence, and avoid making decisions because someone “feels like us.”',
    metrics: [{ value: '4-STEP', label: 'evidence-based interview method' }, { value: 'STRUCTURED', label: 'role-fit evaluation instead of gut feel' }],
    note: 'The value of the program is decision quality: managers learn to ask better questions, trainers gain a repeatable coaching framework, and candidates are evaluated against evidence tied to the role.', status: 'Manager training concept',
  },
]
export const about = { heading: 'Educator first. Enablement strategist by practice.', body: 'I’m an educator and learning strategist who helps organizations turn complex tools into practical behavior change. My work sits between people, technology, and performance: identifying friction, designing useful experiences, supporting adoption, and measuring what changes afterward.', stats: [{ value: '3+', label: 'years corporate learning & development' }, { value: '8+', label: 'years in education' }, { value: 'M.Ed.', label: 'Instructional Design & Technology' }], capabilities: ['AI literacy & role-specific enablement','Use-case discovery & workflow redesign','Learning strategy & instructional design','Facilitation & stakeholder coaching','Onboarding & course development','Learning technology & LMS administration','Change enablement & adoption strategy','Impact measurement & governance'], experience: [['Learning Experience Manager','CERTUS','Sep 2025 — Present'],['Lead Instructional Designer','Deployed Services','May 2024 — Aug 2025'],['Instructional Designer','Carley Corporation','May 2023 — Apr 2024'],['ESE Case Manager','Hillsborough County Public Schools','Aug 2017 — May 2023'],['Teacher','East Baton Rouge Parish School System','Oct 2014 — May 2017']] }
