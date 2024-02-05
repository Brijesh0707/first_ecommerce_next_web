'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function Navbar() {
    const pathname= usePathname()
    const token = localStorage.getItem("token")
  return (
    <>
        <header className='w-[100%] h-[60px] bg-gray-200 fixed top-0 z-10 '>
            <nav className='flex justify-between items-center container_maxWidth_1440'>
             <div className='left--side'>
              <Link href="/">
              <p className='text-[20px] text-base_color font-800 mt-2 ml-5 font-lato bg-gray-100 pl-2 pr-2 pt-2 pb-2'>Brij-Ecommerce 🛒</p>
              </Link>
             </div>
             <div className='right--side mr-10'>
               <div className='flex gap-5 items-center mt-1'>
                <Link href="/" className={`pl-3 pr-3 pt-1 pb-1 rounded-lg hover:text-white ${pathname==="/"?'bg-bgg_base text-white':''}  hover:bg-bgg_base `}
                  style={{ transition: 'ease-out 0.3s' }} >Home</Link>
                <Link  href="/allproducts" className={`pl-3 pr-3 pt-1 pb-1 rounded-lg  ${pathname==="/allproducts"?'bg-bgg_base text-white':''} hover:text-white hover:bg-bgg_base `}
                  style={{ transition: 'ease-out 0.3s' }}>All Products</Link>
                {token ?
                  <Link  href="/" className='pl-3 pr-3 pt-1 pb-1 rounded-lg hover:text-white hover:bg-bgg_base '
                  style={{ transition: 'ease-out 0.3s' }}>Profile</Link>:<Link href="/login" className={`pl-3 pr-3 pt-1 pb-1 rounded-lg hover:text-white hover:bg-bgg_base ${pathname==="/login"?'bg-bgg_base text-white':''}`}
                  style={{ transition: 'ease-out 0.3s' }}>Login</Link>

                }
                
                <Link href="/cart">🛒</Link>
               


               </div>
                </div>

            </nav>
        </header>
    </>
  )
}
