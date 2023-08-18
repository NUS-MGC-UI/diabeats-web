import AppHeader from '@/components/AppHeader';
import BottomNav from '@/components/BottomNav';
import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
    children,
}:{
    children:React.ReactNode;
}) {
  return (
    <main className={inter.className + ' bg-primary'}>
      <AppHeader/>
        {children}
        <BottomNav/>
    </main>
  )
}
