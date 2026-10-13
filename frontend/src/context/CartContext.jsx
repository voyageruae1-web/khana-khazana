import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext(null)
const KEY = 'kk_cart'
const empty = { restaurantId: null, items: {} }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      // one restaurant per cart
      const items = state.restaurantId && state.restaurantId !== action.restaurantId ? {} : state.items
      const cur = items[action.item.id]
      return {
        restaurantId: action.restaurantId,
        items: { ...items, [action.item.id]: { ...action.item, qty: (cur ? cur.qty : 0) + 1 } },
      }
    }
    case 'REMOVE': {
      const cur = state.items[action.id]
      if (!cur) return state
      const items = { ...state.items }
      if (cur.qty <= 1) delete items[action.id]
      else items[action.id] = { ...cur, qty: cur.qty - 1 }
      return { restaurantId: Object.keys(items).length ? state.restaurantId : null, items }
    }
    case 'CLEAR':
      return empty
    default:
      return state
  }
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || empty
  } catch {
    return empty
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, load)
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)) } catch { /* ignore */ }
  }, [state])

  const list = Object.values(state.items)
  const count = list.reduce((n, i) => n + i.qty, 0)
  const subtotal = list.reduce((n, i) => n + i.qty * i.price, 0)

  const value = {
    restaurantId: state.restaurantId,
    items: state.items,
    list, count, subtotal,
    add: (restaurantId, item) => dispatch({ type: 'ADD', restaurantId, item }),
    remove: (id) => dispatch({ type: 'REMOVE', id }),
    clear: () => dispatch({ type: 'CLEAR' }),
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
