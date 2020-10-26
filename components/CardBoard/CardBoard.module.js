import Card from '../Card/Card.module'

import style from './CardBoard.module.scss'
import { useState } from 'react'

function CardBoard() {
  const [cards, setCards] = useState([
    { value: 1, isOpen: false },
    { value: 2, isOpen: false },
    { value: 3, isOpen: false },
    { value: 4, isOpen: false },
    { value: 5, isOpen: false },
    { value: 6, isOpen: false },
    { value: 1, isOpen: false },
    { value: 2, isOpen: false },
    { value: 3, isOpen: false },
    { value: 4, isOpen: false },
    { value: 5, isOpen: false },
    { value: 6, isOpen: false },
  ])
  return (
    <div className={style.board}>
      {cards.map((item, index) => {
        return (
          <Card
            key={item.value}
            value={item.value}
            isOpen={item.isOpen}
            onClick={() => {
              const temp = [...cards]
              temp[index].isOpen = !temp[index].isOpen
              setCards(temp)
            }}
          />
        )
      })}
    </div>
  )
}

export default CardBoard