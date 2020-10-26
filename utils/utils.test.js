import { countOpenCards } from './utils'

describe('countOpenCards', () => {
  test('handle empty array', () => {
    const data = []
    const count = countOpenCards(data)
    expect(count).toEqual(0)
  })
  test('handle undefined', () => {
    const count = countOpenCards(undefined)
    expect(count).toEqual(0)
  })
  test('return 2', () => {
    const data = [{ isOpen: true }, { isOpen: true }]
    const count = countOpenCards(data)
    expect(count).toEqual(2)
  })
  test('return 2', () => {
    const data = [{ isOpen: true}, { isOpen: false }, { isOpen: true }]
    const count = countOpenCards(data)
    expect(count).toEqual(2)
  })
  test('return 0', () => {
    const data = [{ isOpen: false}, { isOpen: false }, { isOpen: false }]
    const count = countOpenCards(data)
    expect(count).toEqual(0)
  })
})