import { Link, useParams } from 'react-router-dom'
import { restaurants } from '../data/restaurants'
import { useCart } from '../context/CartContext'
import { RUPEE } from '../config'

export default function Restaurant() {
  const { slug } = useParams()
  const r = restaurants.find((x) => x.slug === slug)
  const cart = useCart()

  if (!r) {
    return (
      <main className="container">
        <h2>Restaurant not found</h2>
        <Link to="/">Back to home</Link>
      </main>
    )
  }

  return (
    <main className="container">
      <img className="banner" src={r.image} alt={r.name} />
      <h1>{r.name}</h1>
      <p className="muted">{r.cuisines.join(', ')} &bull; {r.city}</p>
      <p className="muted">Rating {r.rating} &bull; {r.time} min &bull; {RUPEE}{r.costForTwo} for two</p>
      <p className="offer">{r.offer}</p>

      <h2>Menu</h2>
      {r.menu.map((m) => {
        const qty = cart.items[m.id] ? cart.items[m.id].qty : 0
        return (
          <div className="dish" key={m.id}>
            <div>
              <span className={m.veg ? 'dot veg' : 'dot nonveg'} />
              <strong>{m.name}</strong>
              <p className="muted">{m.desc}</p>
              <p>{RUPEE}{m.price}</p>
            </div>
            {qty === 0 ? (
              <button className="btn" onClick={() => cart.add(r.id, m)}>ADD</button>
            ) : (
              <div className="qty">
                <button onClick={() => cart.remove(m.id)}>-</button>
                <span>{qty}</span>
                <button onClick={() => cart.add(r.id, m)}>+</button>
              </div>
            )}
          </div>
        )
      })}

      {cart.count > 0 && (
        <Link to="/cart" className="cartbar">
          {cart.count} item(s) &bull; {RUPEE}{cart.subtotal} &mdash; View Cart
        </Link>
      )}
    </main>
  )
}
