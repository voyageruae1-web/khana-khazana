import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Cart from './pages/Cart'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:slug" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<main className="container"><h2>404 - Page not found</h2></main>} />
      </Routes>
    </>
  )
}
