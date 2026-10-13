import { Link } from 'react-router-dom'
import { RUPEE } from '../config'

export default function RestaurantCard({ r }) {
  return (
    <Link to={`/restaurant/${r.slug}`} className="card">
      <img src={r.image} alt={r.name} />
      <div className="card-body">
        <div className="row">
          <h3>{r.name}</h3>
          <span className="rating">{r.rating}</span>
        </div>
        <p className="muted">{r.cuisines.join(', ')}</p>
        <p className="muted">{RUPEE}{r.costForTwo} for two &bull; {r.time} min</p>
        <p className="offer">{r.offer}</p>
      </div>
    </Link>
  )
}
