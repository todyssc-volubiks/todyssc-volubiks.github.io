import React from 'react'
import ProductList from './ProductList'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Shop</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  )
}
