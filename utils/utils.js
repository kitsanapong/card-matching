export function countOpenCards(cards = []) {
  return cards.reduce((count, item) => {
    if (item.isOpen) return count + 1
    else return count
  }, 0)
}

export function simpleDeepCopy(data = {}) {
  return JSON.parse(JSON.stringify(data))
}