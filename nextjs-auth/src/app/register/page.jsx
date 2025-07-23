"use client";
import React from 'react'
import { registerUser } from '../actions/auth/registerUser';

export default function RegisterForm() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        const result = await registerUser(data);
        console.log(result)
    };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
      <form action="" onSubmit={handleSubmit} className='space-y-4 bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md text-black'>
         <div>
            <label>User Name:</label>
         <input type="text" name='username' className='border border-gray-500 p-2 rounded-md w-full' />
         </div>

         <div>
            <label>Email:</label>
         <input type="email" name='email' className='border border-gray-500 p-2 rounded-md w-full' />
         </div>

         <div>
            <label>Password:</label>
         <input type="password" name='password' className='border border-gray-500 p-2 rounded-md w-full' />
         </div>

         <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
      </form>
    </div>
  )
}
