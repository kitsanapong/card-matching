function Score(props) {
  const { name = '', value = '-'} = props
  return (
    <div className="score click-number d-flex flex-column">
      <div className="name">{name}</div>
      <div className="value">{value}</div>
    </div>
  )
}

function Button(props) {
  const { onClick = () => {} } = props
  return (
    <div onClick={onClick}>New Game</div>
  )
}

function ControlPanel(props) {
  const {
    newGame = () => {},
    clickCount = '-',
  } = props
  return (
    <div className="control-panel d-flx flex-column">
      <Score name="Click" value={clickCount}/>
      <Score name="My Best"/>
      <Score name="Global Best"/>
      <Button onClick={newGame}/>
    </div>
  )
}

export default ControlPanel