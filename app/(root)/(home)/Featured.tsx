import Image from 'next/image'
import React from 'react'



const Featured = () => {
  return (
    <div className='flex flex-col  gap-4'>
        <div className="flex gap-4  items-center justify-center ">
            <div className="flex flex-col min-w-24  px-4 min-h-32 items-center justify-center bg-white rounded-xl border-gray-300">
                <Image className="w-12 h-12 md:h-16 md:w-16" src="/rk.jpg" width={50} height={50} alt='rising-kashmir'/>
                <span className='text-[12px] md:text-[16px] font-semibold'>Rising Kashmir</span>
            </div>
            
            <div className="flex flex-col min-w-24  px-4 min-h-32 items-center justify-center bg-white rounded-xl border-gray-300">
                <Image className="w-12 h-12 md:h-16 md:w-16" src="/gk.jpeg" width={50} height={50} alt='rising-kashmir'/>
                <span className='text-[12px] md:text-[16px] font-semibold'>Greater Kashmir</span>
            </div>
            <div className="flex flex-col min-w-24  px-4 min-h-32 items-center justify-center bg-white rounded-xl border-gray-300">
                <Image className="w-12 h-12 md:h-16 md:w-16" src="/toi.jpeg" width={50} height={50} alt='rising-kashmir'/>
                <span className='text-[12px] md:text-[16px] font-semibold'>Times Of India</span>
            </div>
            <div className="flex flex-col min-w-24  px-4 min-h-32 items-center justify-center bg-white rounded-xl border-gray-300">
                <Image className="w-12 h-12 md:h-16 md:w-16" src="/iex.png" width={50} height={50} alt='rising-kashmir'/>
                <span className='text-[12px] md:text-[16px] font-semibold'>Indian Express</span>
            </div>
 
            
          
        </div>
{/* line 2 */}
        


    </div>
  )
}

export default Featured