"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ProductAddForm() {
  const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.title.value;
        const payload = {  productName };
         const res = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
         });

         const result = await res.json();
         form.reset();
        // alert(`Product  added successfully!`);
        router.push('/products');
    }

  return (
    <div className='max-w-7xl mx-auto p-4'>
      <form action="" onSubmit={handleSubmit} className='border border-white p-6 rounded-md shadow-md flex flex-col justify-center items-center'>
        <h2>Add New Product</h2>
        <input type="text" name="title" placeholder="Product Name" className='p-2 border border-gray-300 rounded-md mt-2'/>
        <br />
        <button type="submit" className='mt-4 p-2 bg-blue-500 text-white rounded-md'>Add Product</button>
      </form>
    </div>
  )
}
