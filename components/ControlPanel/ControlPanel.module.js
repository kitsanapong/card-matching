import style from './ControlPanel.module.scss'

function Score(props) {
  const { name = '', value = '-'} = props
  return (
    <div className={style.score}>
      <div className="name">{name}</div>
      <div className="value">{value}</div>
    </div>
  )
}

function Button(props) {
  const { onClick = () => {} } = props
  return (
    <div
      className={style.button}
      onClick={onClick}
    >New Game</div>
  )
}

function ControlPanel(props) {
  const {
    newGame = () => {},
    clickCount = '-',
    bestCount = '-',
  } = props
  return (
    <div className={style.panel}>
      <Score name="Click" value={clickCount}/>
      <Score name="My Best" value={bestCount}/>
      <Score name="Global Best"/>
      <Button onClick={newGame}/>
    </div>
  )
}

export default ControlPanel