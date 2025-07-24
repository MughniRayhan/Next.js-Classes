import React from 'react'

export default function ProductAddPage() {
  return (
    <div>
      <h1>Add Product</h1>
      <form>
        <div>
          <label htmlFor="name">Product Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}
