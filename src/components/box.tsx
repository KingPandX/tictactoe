import { turn, tablle, status } from '../App'

interface boxprops {
  tableCords: [number, number],
  setTable: any,
  table: tablle,
  turn: turn,
  setTurn: any,
  checkWinner: any,
  ClearTable: any,
  status: status
}

export default function Box({ turn, setTurn, setTable, tableCords, table, checkWinner, ClearTable, status }: boxprops) {

  const inner = table[tableCords[0]][tableCords[1]]

  function play() {
    if (status !== 'Playing') return
    if (inner != null) return
    let tmpTable = table
    tmpTable[tableCords[0]][tableCords[1]] = turn
    setTable(tmpTable)
    setTurn(turn === 'X' ? 'O' : 'X')
    checkWinner()
    if (table.every(col => col.every(box => box != null))) {
      ClearTable()
    }
  }

  return (
    <div className={inner != null ? `PlayBox player-${inner}` : 'PlayBox'} onClick={play}>
      <h1>
        {
          inner
        }
      </h1>
    </div>
  )
}
