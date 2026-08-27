import { describe, expect, it } from 'vitest'
import { buildRecommendation } from './recommendation'
import { challenge } from '../../data/portfolioData'

describe('challenge recommendation paths', () => {
  const frictions = Object.keys(challenge.friction.options) as (keyof typeof challenge.friction.options)[]
  const audiences = challenge.friction.audiences
  const solutions = challenge.solution.options
  const adoptions = challenge.enablement.options
  const measures = challenge.impact.options

  it('generates a recommendation for every possible path', () => {
    let count = 0
    for (const friction of frictions) {
      for (const audience of audiences) {
        for (const solution of solutions) {
          for (const adoption of adoptions) {
            for (const measure of measures) {
              const output = buildRecommendation({ friction, audience, solution, adoption, measure })
              expect(output.length).toBeGreaterThan(60)
              expect(output).toContain(audience.toLowerCase())
              count += 1
            }
          }
        }
      }
    }
    expect(count).toBe(576)
  })
})
