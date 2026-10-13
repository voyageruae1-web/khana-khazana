import { Link } from 'react-router-dom'
import { BRAND } from '../config'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { count } = useCart()
  return (
    <header className="nav">
      <Link to="/" className="brand">{BRAND}</Link>
      <Link to="/cart" className="cart-link">Cart ({count})</Link>
    </header>
  )
}
