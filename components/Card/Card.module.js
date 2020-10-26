import style from './Card.module.scss'

function Card(props) {
  const { value = '' } = props
  return (
    <div className={style.card}>
      {value}
    </div>
  )
}

export default Card