interface Props {
  turn: string,
  clearTable: any,
}

export default function Header({ turn, clearTable }: Props) {

  return (
    <div className="Header">
      <div className="decored">
        <span className="player-X">X</span>
        <span className="player-O">O</span>
      </div>
      <div className="turns">
        <span>
          {turn}
        </span>

        Turn
      </div>

      <button onClick={clearTable}>
        Reset
      </button>
    </div>
  )
}
