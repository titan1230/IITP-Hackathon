import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VitalEase',
  description: 'Ease your life with VitalEase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
}
