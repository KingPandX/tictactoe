
interface PointsProps {
  Xpoints: number,
  Opoints: number
}

export default function Points({ Xpoints, Opoints }: PointsProps) {

  return (
    <div className="Points">
      <div>
        <span>X</span>
        <span>{Xpoints}</span>
      </div>
      <div>
        <span>O</span>
        <span>{Opoints}</span>
      </div>
    </div>
  )
}
