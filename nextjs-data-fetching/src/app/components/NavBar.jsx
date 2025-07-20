"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBar() {
    const pathname = usePathname();
    console.log(pathname)
    if(!pathname.includes('dashboard')){
  return (
    <div>
      <nav className='bg-gray-800'>
          <ul className="flex items-center justify-between p-4  text-white px-8 w-[50%] mx-auto">
            <Link href="/">
               <li> Home </li>
            </Link>
            <Link href="/about">
              <li> About </li>
            </Link>
            <Link href="/posts">
              <li> Posts </li>
            </Link>
            <Link href="/meals">
              <li> Meals </li>
            </Link>
            <Link href="/products">
              <li> Products </li>
            </Link>
            <Link href="/products/add">
              <li>Add Products </li>
            </Link>
          </ul>
        </nav>
    </div>
  )
}else{
    return <></>
}
}
