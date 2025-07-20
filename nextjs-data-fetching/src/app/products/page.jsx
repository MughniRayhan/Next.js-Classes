import React from 'react'

export default async function ProductsPage() {

    const res = await fetch('http://localhost:3000/api/items',{
        cache: "force-cache"
    });
    const data = await res.json();
    console.log(data)
  return (
    <ul className='max-w-7xl mx-auto p-4'>
    {
      data?.data.map((item) => (
        <li key={item._id} >
          {item.productName}
        </li>
      ))
    }
    </ul>
  )
}
