import style from './ControlPanel.module.scss'
import { useState, useEffect } from 'react'
import Axios from 'axios'

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
  const [globalBest, setGlobalBest] = useState(undefined)
  useEffect(() => {
    Axios.get('http://localhost:3000/api/global').then((res) => {
      if (res && res.data) setGlobalBest(res.data.globalBest)
    })
  }, [])
  return (
    <div className={style.panel}>
      <Score name="Click" value={clickCount}/>
      <Score name="My Best" value={bestCount}/>
      <Score name="Global Best" value={globalBest}/>
      <Button onClick={newGame}/>
    </div>
  )
}

export default ControlPanel