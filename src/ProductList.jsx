import React, { useEffect, useState } from 'react'
import { fetchProducts } from './api'
import ProductCard from './ProductCard'

export default function ProductList() {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    fetchProducts()
      .then((data) => {
        if (!mounted) return
        setProducts(data)
      })
      .catch((err) => {
        if (!mounted) return
        setError(err.message || 'Failed to load products')
      })
    return () => (mounted = false)
  }, [])

  if (error) return <div className="error">{error}</div>

  // show skeletons while loading
  if (products === null) {
    return (
      <div className="grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="card skeleton" key={i}>
            <div className="image" />
            <div className="line" />
            <div className="line short" />
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) return <div className="empty">No products available.</div>

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
