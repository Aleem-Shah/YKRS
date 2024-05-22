import React from 'react'
import FooterCard from './FooterCard'
import { footerLinks } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const date= new Date();
  const year= date.getFullYear();
  return (
    <footer className="bg-[#fbfbfc] shadow-2xl mt-auto">
      <FooterCard />
      <div className="grid grid-cols-3 gap-4 px-10 p-3">
        {footerLinks.map((item, i) => (
          <ul key={i} className="p-1">
            {i === 0 ? (
              <Image src="/logo.png" width={50} height={50} alt="Logo" />
            ) : (
              <b className='text-sm md:text-md lg:text-xl xl:text-2xl mt-10'>{item.title}</b>
            )}
            {item.links.map((link, linkIndex) => (
              <li key={linkIndex} className="list-none text-xs">
                <Link legacyBehavior href={link.route}>
                  <a className="text-gray-600 leading-[23px] hover:underline">{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="border-t-2 w-full text-center p-3">
        <span className='text-center font-semibold text-gray-600'>&copy; {year} YKRS all rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer