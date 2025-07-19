import React from 'react'

export const getPosts = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

export default async function Posts() {
    const posts = await getPosts();
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <h1>Posts</h1>
        <p className='text-blue-600 mb-4'>List of posts fetched from an external API.</p>
        <div className='space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {posts.map(post => <div key={post.id} className='p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300'>
                <h2 className='text-lg font-semibold'>{post.title}</h2>
                <p className='text-gray-600'>{post.body}</p>
            </div>)}
        </div>
    </div>
  )
}

