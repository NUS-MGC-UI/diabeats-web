'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function AppHeader() {
    const pathname = usePathname()
    const pageTitle = pathname.split('/').at(-1)

    return (
        <div className=' bg-primary h-[15vh] font-century-ghotic items-center px-4 flex flex-row justify-between'>
            <div className=' capitalize'> {pageTitle} </div>
            <div className='flex flex-row gap-3'>
                <div className='flex flex-col text-right'>
                    <p className=' font-thin text-sm'>Welcome Back,</p>
                    <p className=' font-semibold'>User</p>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="/profile-img.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
