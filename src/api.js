export async function fetchProducts() {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 800))

  // return sample products; replace this with real API call when available
  return [
    { id: 1, name: 'Classic Tee', price: 19.99, image: 'https://picsum.photos/seed/1/400/300' },
    { id: 2, name: 'Formal Shirt', price: 34.5, image: 'https://picsum.photos/seed/2/400/300' },
    { id: 3, name: 'Sneakers', price: 59.99, image: 'https://picsum.photos/seed/3/400/300' },
    { id: 4, name: 'Baseball Cap', price: 12.0, image: 'https://picsum.photos/seed/4/400/300' }
  ]
}
