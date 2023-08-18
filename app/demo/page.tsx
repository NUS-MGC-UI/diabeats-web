import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div className=' bg-primary min-h-screen'>
            <div className='flex flex-col justify-center min-h-screen items-center px-12 gap-3'>
                <Image src={'/diabeats-logo.png'} alt={'logo'} height={150} width={150}></Image>
                <h1 className=' font-century-ghotic tracking-widest font-bold text-3xl'>DIABEATS</h1>
                <p>Web version - v0.1</p>
                <div className='flex flex-col md:flex-row md:justify-center gap-3'>
                    <button className=' btn btn-accent min-w-full'>Get Started</button>
                    <button className=' btn btn-accent btn-outline min-w-full'>Already have an account</button>
                </div>
            </div>
        </div>
    )
}
