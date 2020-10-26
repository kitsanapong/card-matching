import { useState, useMemo, useEffect } from 'react'
import { knuthShuffle } from 'knuth-shuffle'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import ControlPanel from '../components/ControlPanel'
import CardBoard from '../components/CardBoard/CardBoard.module'

const STATE_PLAYING = 'STATE_PLAYING'
const STATE_NEW = 'STATE_NEW'

const INIITAL_CARDS = [
  { id: 1, value: 1, isOpen: false },
  { id: 2, value: 2, isOpen: false },
  { id: 3, value: 3, isOpen: false },
  { id: 4, value: 4, isOpen: false },
  { id: 5, value: 5, isOpen: false },
  { id: 6, value: 6, isOpen: false },
  { id: 7, value: 1, isOpen: false },
  { id: 8, value: 2, isOpen: false },
  { id: 9, value: 3, isOpen: false },
  { id: 10, value: 4, isOpen: false },
  { id: 11, value: 5, isOpen: false },
  { id: 12, value: 6, isOpen: false },
]

export default function Home() {
  const [state, setState] = useState(STATE_NEW)
  const [cards, setCards] = useState([...INIITAL_CARDS])
  useEffect(() => {
    if (state === STATE_NEW) {
      const temp = [...INIITAL_CARDS]
      const newCards = knuthShuffle(temp)
      setCards(newCards)
      setState(STATE_PLAYING)
    }
  }, [state])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className=" d-flex flex-row justify-content-center">
          <ControlPanel
            newGame={() => { setState(STATE_NEW) }}
          />
          <CardBoard
            cards={cards}
            clickCard={(index) => {
              const temp = [...cards]
              temp[index].isOpen = !temp[index].isOpen
              setCards(temp)
            }}
          />
        </div>
      </main>
    </div>
  )
}
