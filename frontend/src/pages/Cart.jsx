import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { RUPEE } from '../config'

export default function Cart() {
  const cart = useCart()
  const [placed, setPlaced] = useState(false)

  const delivery = cart.count ? 30 : 0
  const tax = Math.round(cart.subtotal * 0.05)
  const total = cart.subtotal + delivery + tax

  if (placed) {
    return (
      <main className="container center">
        <h2>Order placed!</h2>
        <p className="muted">Your food is on the way (demo order).</p>
        <Link to="/">Order more</Link>
      </main>
    )
  }

  if (cart.count === 0) {
    return (
      <main className="container center">
        <h2>Your cart is empty</h2>
        <Link to="/">Browse restaurants</Link>
      </main>
    )
  }

  return (
    <main className="container">
      <h1>Your Cart</h1>
      {cart.list.map((i) => (
        <div className="dish" key={i.id}>
          <div>
            <strong>{i.name}</strong>
            <p className="muted">{RUPEE}{i.price} each</p>
          </div>
          <div className="qty">
            <button onClick={() => cart.remove(i.id)}>-</button>
            <span>{i.qty}</span>
            <button onClick={() => cart.add(cart.restaurantId, i)}>+</button>
          </div>
        </div>
      ))}
      <div className="bill">
        <p><span>Subtotal</span><span>{RUPEE}{cart.subtotal}</span></p>
        <p><span>Delivery</span><span>{RUPEE}{delivery}</span></p>
        <p><span>Tax (5%)</span><span>{RUPEE}{tax}</span></p>
        <p className="total"><span>Total</span><span>{RUPEE}{total}</span></p>
      </div>
      <button className="btn big" onClick={() => { cart.clear(); setPlaced(true) }}>Place Order</button>
    </main>
  )
}
