import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="image" style={{ backgroundImage: `url(${product.image})` }} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
    </div>
  )
}
