export function countOpenCards(cards) {
  return cards.reduce((count, item) => {
    if (item.isOpen) return count + 1
    else return count
  }, 0)
}