import React from 'react'

export const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

export async function generateMetadata( { params }){
  // read route params
  const { id } = await params
 
  // fetch data
  const post = await getPost(id)

  
  return {
    title: post.title,
    description: post.body,
  }
}

export default async function SinglePost({params}) {
    const p = await getPost(params.id)
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <h1>Single Post:</h1>
      <p className='text-gray-600'>{JSON.stringify(p)}</p>
        <p className=' mt-4'>Post ID: {p.id}</p>
        <h2 className='text-xl  text-blue-500'>{p.title}</h2>
        <p className='text-gray-400 '>{p.body}</p>
    </div>
  )
}
