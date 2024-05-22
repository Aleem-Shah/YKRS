"use client"
import { NavbarLinks } from '@/data';
import { cn } from '@/utils/cn';

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";

import { RxCross2 } from "react-icons/rx";
function handleMenu(){
  
    console.log("Works")
}

const Navbar = () => {
    const pathname=usePathname()
    return (
    <section className=''>

    <nav className='p-3 hidden md:flex bg-white justify-between items-center'>
        <a href="/" className='flex gap-2 items-center'>
            <Image className='object-cover max-w-16 max-h-16' src="/logo.png" width={150} height={150} alt='logo'/>
            <span className='text-lg font-medium '>YKRS</span>

        </a>

        
        <div className="hidden md:flex gap-12  ">
        {NavbarLinks.map((items,i)=>{
            const isActive = pathname === items.itemRoute || pathname.startsWith(`${items.itemRoute}/`);
                return(
                        
                          <Link key={i} href={items.itemRoute} className={cn('font-medium hover:text-primary-crimson nav-item text-black',{'text-primary-crimson':isActive})}>{items.navItem}</Link>            
                    
                )

            })}
        </div>
        <button className='hidden md:flex gap-2 items-center border border-1 px-6 py-2 rounded-lg font-medium text-lg hover:border-gray-600 border-gray-400 '>
            Sign Up
        <IoLogIn />
        </button>
        <button className='p-2 md:hidden' onClick={()=>handleMenu()}>
        <IoMenu />
        </button>

        {/* <div id="nav-dialog" className="fixed bg-white inset-0 p-3">
            <div className=" flex justify-between ">
            <a href="#" className='flex gap-2 items-center'>
            <Image className='object-cover max-w-16 max-h-16' src="/logo.png" width={150} height={150} alt='logo'/>
            <span className='text-lg font-medium '>YKRS</span>
            
            </a>
            <button className='p-2 md:hidden' onClick={()=>handleMenu()}>
            <RxCross2 />
            </button>

            </div>

        </div> */}

    </nav>
            </section>
  )
}

export default Navbar