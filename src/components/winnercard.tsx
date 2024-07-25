import { status } from '../App.tsx'

interface WinnerCardProps {
  winner: status;
  newGame: () => void;
  hide: boolean;
}

export default function WinnerCard({ winner, newGame, hide }: WinnerCardProps) {

  return (
    <div className={hide === true ? 'BGBlack hide' : 'BGBlack'}>
      <div className='WinnerCard'>
        <h3 className={winner === 'X Winner' ? 'player-X' : 'player-O'}>{winner}</h3>
        <button onClick={newGame}>New Game</button>
      </div>
    </div>
  )

}
