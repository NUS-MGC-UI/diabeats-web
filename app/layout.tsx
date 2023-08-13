import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DiabEats',
  description: 'Solusi Terbaik bagi Pasien Diabetes',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/diabeats-logo.png',
      sizes: 'any'
    }
  ]

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='diabeats' className=' scroll-smooth' >
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
