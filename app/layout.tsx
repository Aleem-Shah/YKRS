import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import MobileNavbar from '@/components/MobileNavbar'
import { ThemeProvider } from './ThemeProvider'
import Footer from '@/components/Footer'




export const metadata: Metadata = {
  title: 'YKRS-Young Kashmir Research Society',
  description: " Explore the world of technology and innovation with Burn Hall Higher Secondary School's Qubits Club - your premier destination for Computer Science and Artificial Intelligence. Join us to code, create, and innovate!.",
  other:{
    'theme-color':'#0F3F3F3',
    "color-scheme":"light only",
    "twitter:image":"https://i.imgur.com/qjSis1z.png",
    "og:url":"qubitsbhs.com",
    "og:image":"https://i.imgur.com/qjSis1z.png",
    "og:type":"website"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen !poppins-regular  bg-gradient-to-b from-purple-50 via-orange-50 to-transparent '>
      <Navbar/>
      <MobileNavbar/>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          > 
        {children}
        <Footer/>
          </ThemeProvider>
        </body>
    </html>
  )
}
