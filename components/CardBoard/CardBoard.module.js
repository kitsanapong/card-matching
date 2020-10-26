import React from "react";

import Card from '../Card/Card.module'

import style from './CardBoard.module.scss'

function CardBoard(props) {
  const {
    cards = [],
    clickCard = () => {},
  } = props
  return (
    <div className={style.board}>
      {cards.map((item, index) => {
        return (
          <Card
            key={item.id}
            value={item.value}
            isOpen={item.isOpen}
            onClick={() => { clickCard(index) }}
          />
        )
      })}
    </div>
  )
}

export default CardBoard