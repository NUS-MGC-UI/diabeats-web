import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <Image src={'/Order food-bro.png'} alt={'hero'} width={400} height={400}></Image>
    <div>
      <h1 className="text-5xl font-bold text-black">DiabEats</h1>
      <p className="py-6 text-black">Help beat your blood sugar back on track</p>
      <button className="btn bg-[#F5A302]">Try Our Demo</button>
    </div>
  </div>
</div>
  )
}
