import Card from '../Card/Card.module'

import style from './CardBoard.module.scss'

function CardBoard() {
  return (
    <div className={style.board}>
      <Card value={1}/>
      <Card value={2}/>
      <Card value={3}/>
      <Card value={4}/>
      <Card value={5}/>
      <Card value={6}/>
      <Card value={7}/>
      <Card value={8}/>
      <Card value={9}/>
    </div>
  )
}

export default CardBoard