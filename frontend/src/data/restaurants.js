const food = (f) => `/images/Food/${f}`
const dish = (id, name, price, veg, desc) => ({ id, name, price, veg, desc })

export const categories = ['All', 'Biryani', 'Pizza', 'North Indian', 'Seafood', 'Desserts', 'Fast Food']

export const restaurants = [
  {
    id: 1, slug: 'royal-biryani-house', name: 'Royal Biryani House', category: 'Biryani',
    cuisines: ['Biryani', 'Mughlai'], rating: 4.5, time: 35, costForTwo: 600, city: 'Mumbai',
    image: food('biryani.png'), offer: '20% OFF up to Rs.100',
    menu: [
      dish('r1-1', 'Chicken Dum Biryani', 289, false, 'Slow cooked basmati rice with tender chicken'),
      dish('r1-2', 'Veg Biryani', 219, true, 'Fragrant rice with seasonal vegetables'),
      dish('r1-3', 'Mutton Biryani', 349, false, 'Rich, spicy and layered'),
    ],
  },
  {
    id: 2, slug: 'pizza-corner', name: 'Pizza Corner', category: 'Pizza',
    cuisines: ['Pizza', 'Italian'], rating: 4.2, time: 30, costForTwo: 500, city: 'Mumbai',
    image: food('pizza.png'), offer: 'Free garlic bread over Rs.499',
    menu: [
      dish('r2-1', 'Margherita Pizza', 249, true, 'Classic cheese and tomato'),
      dish('r2-2', 'Farmhouse Pizza', 329, true, 'Loaded with veggies'),
      dish('r2-3', 'Chicken Tikka Pizza', 379, false, 'Smoky tikka chunks and onions'),
    ],
  },
  {
    id: 3, slug: 'punjabi-tadka', name: 'Punjabi Tadka', category: 'North Indian',
    cuisines: ['North Indian', 'Thali'], rating: 4.3, time: 40, costForTwo: 450, city: 'Mumbai',
    image: food('chapathi.png'), offer: '10% OFF on first order',
    menu: [
      dish('r3-1', 'Paneer Butter Masala', 259, true, 'Creamy tomato gravy'),
      dish('r3-2', 'Butter Naan', 49, true, 'Soft tandoor bread'),
      dish('r3-3', 'Dal Makhani', 199, true, 'Slow simmered black lentils'),
    ],
  },
  {
    id: 4, slug: 'coastal-catch', name: 'Coastal Catch', category: 'Seafood',
    cuisines: ['Seafood', 'Coastal'], rating: 4.4, time: 45, costForTwo: 800, city: 'Mumbai',
    image: food('fish.png'), offer: 'Flat Rs.75 OFF',
    menu: [
      dish('r4-1', 'Fish Fry', 329, false, 'Crispy masala-coated fish'),
      dish('r4-2', 'Prawn Curry', 399, false, 'Coconut based, tangy'),
      dish('r4-3', 'Surmai Thali', 449, false, 'Fish curry, rice and sides'),
    ],
  },
  {
    id: 5, slug: 'scoops-and-cones', name: 'Scoops & Cones', category: 'Desserts',
    cuisines: ['Ice Cream', 'Desserts'], rating: 4.6, time: 20, costForTwo: 250, city: 'Mumbai',
    image: food('icecream.png'), offer: 'Buy 1 Get 1 on sundaes',
    menu: [
      dish('r5-1', 'Chocolate Sundae', 149, true, 'Hot fudge and nuts'),
      dish('r5-2', 'Mango Cone', 79, true, 'Alphonso mango scoop'),
      dish('r5-3', 'Brownie with Ice Cream', 189, true, 'Warm brownie, vanilla scoop'),
    ],
  },
  {
    id: 6, slug: 'crispy-bucket', name: 'Crispy Bucket', category: 'Fast Food',
    cuisines: ['Fast Food', 'Chicken'], rating: 4.0, time: 25, costForTwo: 400, city: 'Mumbai',
    image: food('kfc.png'), offer: '30% OFF up to Rs.75',
    menu: [
      dish('r6-1', 'Crispy Chicken Bucket (6 pc)', 399, false, 'Golden fried chicken'),
      dish('r6-2', 'Zinger Burger', 169, false, 'Spicy fillet, lettuce, mayo'),
      dish('r6-3', 'French Fries', 99, true, 'Salted and crisp'),
    ],
  },
]
