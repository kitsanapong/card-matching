import style from './Card.module.scss'

function Card(props) {
  const { value = '' } = props
  return (
    <div
      className={style.card}
    >
      <img
        className={style.image}
        src="/card.jpg"
      />
    </div>
  )
}

export default Card