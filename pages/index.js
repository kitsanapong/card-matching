import { useState, useMemo, useEffect } from 'react'
import { knuthShuffle } from 'knuth-shuffle'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import ControlPanel from '../components/ControlPanel/ControlPanel.module'
import CardBoard from '../components/CardBoard/CardBoard.module'

const STATE_PLAYING = 'STATE_PLAYING'
const STATE_NEW = 'STATE_NEW'
const STATE_CHECK = 'STATE_CHECK'

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
  const [clickCount, setClickCount] = useState(undefined)
  const [bestCount, setBestCount] = useState(undefined)
  const [state, setState] = useState(STATE_NEW)
  const [cards, setCards] = useState([...INIITAL_CARDS])
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1)
  useEffect(() => {
    if (state === STATE_NEW) {
      const openCardCount = cards.reduce((count, item) => {
        if (item.isOpen) return count + 1
        else return count
      }, 0)
      const isGameFinished = openCardCount === 12
      if (isGameFinished) {
        if (bestCount === undefined || clickCount < bestCount) setBestCount(clickCount)
      }
      setClickCount(0)

      const temp = JSON.parse(JSON.stringify(INIITAL_CARDS))
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
      <main className="container pt-3">
        <div className=" d-flex flex-row justify-content-center">
          <ControlPanel
            clickCount={clickCount}
            bestCount={bestCount}
            newGame={() => { setState(STATE_NEW) }}
          />
          <CardBoard
            cards={cards}
            clickCard={(index) => {
              if (state === STATE_PLAYING) {
                setClickCount(clickCount+1)
                const isNewRoundCard = selectedCardIndex === -1
                if (isNewRoundCard) {
                  const temp = [...cards]
                  temp[index].isOpen = true
                  setSelectedCardIndex(index)
                  setCards(temp)
                } else {
                  const previousCard = cards[selectedCardIndex]
                  const newCard = cards[index]
                  const temp = [...cards]
                  temp[index].isOpen = true
                  setCards(temp)
                  setState(STATE_CHECK)
                  setTimeout(() => {
                    const isMatched = previousCard.value === newCard.value
                    if (!isMatched) {
                      const temp = [...cards]
                      temp[selectedCardIndex].isOpen = false
                      temp[index].isOpen = false
                      setCards(temp)
                    }
                    setSelectedCardIndex(-1)
                    setState(STATE_PLAYING)
                  }, 500)
                }
              }
            }}
          />
        </div>
      </main>
    </div>
  )
}
