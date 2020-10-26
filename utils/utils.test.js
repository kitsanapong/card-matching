import { countOpenCards, simpleDeepCopy } from './utils'

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

describe('simpleDeepCopy', () => {
  test('handle undefined', () => {
    const result = simpleDeepCopy(undefined)
    expect(result).toEqual({})
  })
  test('handle empty array', () => {
    const result = simpleDeepCopy([])
    expect(result).toEqual([])
  })
  test('handle empty object', () => {
    const result = simpleDeepCopy({})
    expect(result).toEqual({})
  })
  test('should not be same object', () => {
    const temp = { key: 'A' }
    const result = simpleDeepCopy(temp)
    expect(temp === result).toBeFalsy()
  })
  test('should not be same array', () => {
    const temp = [1, 2]
    const result = simpleDeepCopy(temp)
    expect(temp === result).toBeFalsy()
  })
  test('should not be same nested array', () => {
    const temp = [{ key: 'A' }, { key: 'B' }]
    const result = simpleDeepCopy(temp)
    expect(temp === result).toBeFalsy()
  })
})