import { useMemo, useState } from 'react'
import { restaurants, categories } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard'
import { BRAND } from '../config'

export default function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return restaurants.filter(
      (r) =>
        (category === 'All' || r.category === category) &&
        (!q || r.name.toLowerCase().includes(q) || r.cuisines.join(' ').toLowerCase().includes(q))
    )
  }, [query, category])

  return (
    <>
      <section className="hero">
        <h1>{BRAND}</h1>
        <p>Discover the best food near you</p>
        <input
          className="search"
          placeholder="Search restaurant or cuisine..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>
      <main className="container">
        <div className="chips">
          {categories.map((c) => (
            <button key={c} className={c === category ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <p className="muted">No restaurants found.</p>
        ) : (
          <div className="grid">
            {list.map((r) => <RestaurantCard key={r.id} r={r} />)}
          </div>
        )}
      </main>
    </>
  )
}
