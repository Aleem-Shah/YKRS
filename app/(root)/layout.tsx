
import React from 'react'
import Navbar from '../../components/Navbar'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='min-h-screen'>
       
        {children}
      
        </div>
  )
}

export default layout