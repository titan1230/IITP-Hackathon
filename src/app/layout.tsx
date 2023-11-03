"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const noNav = ["/"];

  if (noNav.includes(usePathname())) {
    return (

      <html lang="en">

        <body className={inter.className}>
          <div className='bg-gradient-to-br from-white to-[#89D7FF]'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    )
  } else {
    return (
      <html lang="en">

        <body className={inter.className}>
          <div className='bg-gradient-to-br from-white to-[#89D7FF]'>
            <Footer />
          </div>
        </body>
      </html>
    )
  }
}
