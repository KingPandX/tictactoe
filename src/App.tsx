import './App.css'
import Box from './components/box'
import Points from './components/points'
import WinnerCard from './components/winnercard'
import { useState, useEffect } from 'react'
import Header from './components/header';

export type turn = 'X' | 'O';
export type player = 'X' | 'O' | null;
export type tablle = [[player, player, player], [player, player, player], [player, player, player]];
export type status = 'Playing' | 'X Winner' | 'O Winner';

function App() {
  const [hide, setHide]: [boolean, any] = useState(true)
  const [turn, setTurn]: [turn, any] = useState('X')
  const [gamestatus, setGamestatus]: [status, any] = useState('Playing')
  const [table, setTable]: [tablle, any] = useState([[null, null, null], [null, null, null], [null, null, null]])
  const [Xpoints, setXpoints]: [number, any] = useState(0)
  const [Opoints, setOpoints]: [number, any] = useState(0)

  useEffect(() => {
    GameWinner()
  },)

  function createTable() {
    return table.map((col: player[], index) => {
      return (
        <div className='col' key={index}>
          {col.map((_: player, subindex) => {
            return (
              <Box key={subindex} status={gamestatus} ClearTable={ClearTable} checkWinner={winner} table={table} setTable={setTable} turn={turn} setTurn={setTurn} tableCords={[index, subindex]} />
            )
          })}
        </div>
      )
    })
  }

  function winner() {
    GameWinner()
    const cols = table
    const rows = table.map((_, index) => table.map(col => col[index]))
    const diagonal1 = table.map((col, index) => col[index])
    const diagonal2 = table.map((col, index) => col[2 - index])
    const lines = [...cols, ...rows, diagonal1, diagonal2]

    lines.forEach(line => {
      if (line.every(box => box === 'X')) {
        ClearTable()
        setXpoints(Xpoints + 1)
      }
      if (line.every(box => box === 'O')) {
        ClearTable()
        setOpoints(Opoints + 1)
      }
    })
  }

  function GameWinner() {
    if (Xpoints >= Opoints + 3) {
      setGamestatus('X Winner')
      setHide(false)
    }
    if (Opoints >= Xpoints + 3) {
      setGamestatus('O Winner')
      setHide(false)
    }
  }

  function ClearTable() {
    setTable([[null, null, null], [null, null, null], [null, null, null]])
    setTurn('X')
    setGamestatus('Playing')
  }

  function NewGame() {
    setXpoints(0)
    setOpoints(0)
    ClearTable()
    setHide(true)
    setGamestatus('Playing')
  }

  return (
    <>
      <Header turn={turn} clearTable={ClearTable} />
      <div className='table'>
        {createTable()}
      </div>
      <Points Opoints={Opoints} Xpoints={Xpoints} />
      <WinnerCard newGame={NewGame} winner={gamestatus} hide={hide} />
    </>
  )
}

export default App
