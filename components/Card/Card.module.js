import React from "react";

import style from './Card.module.scss'

function Card(props) {
  const {
    value = '',
    isOpen = false,
    onClick = () => {},
  } = props
  return (
    <div
      className={style.card}
      onClick={() => { onClick() }}
    >
      {isOpen? (
        <div className={style.number}>{value}</div>
      ) : (
        <img
          className={style.image}
          src="/card.jpg"
        />
      )}
    </div>
  )
}

export default Card