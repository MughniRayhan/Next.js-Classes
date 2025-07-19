"use client";

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {
    const [meals, setMeals] = useState([]); 
    const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    useEffect(()=>{
       const  searchQuery = {search};
       const urlQueryParams = new URLSearchParams(searchQuery);
       const url = `${pathname}?${urlQueryParams}`;
       router.push(url);
    }, [search]);

  return (
    <div>
      <input className='border mb-2 rounded ' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}
