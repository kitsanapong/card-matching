import { countOpenCards } from './utils'

describe('countOpenCards', () => {
  test('handle empty array', () => {
    const data = []
    const count = countOpenCards(data)
    expect(count).toEqual(0)
  })
})