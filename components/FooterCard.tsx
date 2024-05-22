import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaDiscord, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const FooterCard = () => {
  return (
<div className="bg-primary-crimson p-3 md:px-10 flex items-center justify-center h-[50px] text-white">
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-center md:justify-start items-center mb-3 md:mb-0">
            <span className="hidden md:flex font-semibold">Get connected with us on social media</span>
        </div>
        <div className="flex justify-center md:justify-end gap-3">
            <span><Link href="https://discord.com/invite/pMRQXHKbuA" target='__blank'>  <FaDiscord /> </Link></span>
            <span><Link href="https://www.instagram.com/researchsociety" target='__blank'>  <AiFillInstagram /> </Link></span>
            <span><Link href="https://www.linkedin.com/company/young-kashmir-research-society" target='__blank'><FaLinkedin />   </Link></span>
            <span><Link href="https://x.com/ykrsociety?t=n1Gj9B1FH963ei4XTd_7kA&s=08">   <FaXTwitter /></Link></span>
        </div>
    </div>
</div>

  )
}

export default FooterCard