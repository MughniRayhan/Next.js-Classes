"use client";
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogoutButton() {
  return (
    <div>
      <button onClick={() => signOut()}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              >Logout</button>
    </div>
  )
}
