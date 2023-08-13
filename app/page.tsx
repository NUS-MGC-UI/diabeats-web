import FeatureCard, { Feature } from '@/components/FeatureCard'
import Hero from '@/components/Hero'

import Image from 'next/image'





export default function Home() {
  const featuresData: Feature[] = [
    {
      title: 'Dashboard',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      logoUrl: '/003-dashboard.png',
      id: 1
    },
    {
      title: 'Log Meal',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      logoUrl: '/001-log.png',
      id: 2
    },
    {
      title: 'Meal Plan',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      logoUrl: '/002-notes.png',
      id: 3
    },
    {
      title: 'Catering',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      logoUrl: '/004-food-delivery.png',
      id: 4
    },
    {
      title: 'Premium',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      logoUrl: '/005-premium-quality.png',
      id: 5
    },
    {
      title: 'More in the future',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
      logoUrl: '/006-question-mark.png',
      id: 6
    },
  ]

  return (
    <main className="min-h-screen min-w-full">
      <Hero />
      <section id='about-us' className=' hero min-h-screen min-w-full bg-base-300 bg-food font-sans'>
        <div className='hero-content flex flex-col lg:flex-row-reverse gap-x-20'>
          <h2 className='lg:text-8xl font-bold text-base-100 text-center lg:text-left text-5xl'>About Us</h2>
          <p className='py-8 text-justify text-base-100 px-8'>DiabEats is a personalized and novel-scanner-integrated app designed to help diabetic patients with their dietary needs. The idea has been consulted by a nutritionist from our university and we have also acquired the diabetes guidelines. Our app will have various features,
            including personalized meal plans, meal logs/trackers, recipes, catering, community, and a premium-payed service.</p>
        </div>
      </section>
      <section id='feature' className=' min-h-screen min-w-full bg-base-300 scroll-mt-12 md:p-8 pt-8'>
        <h2 className='lg:text-8xl font-bold text-base-content text-center text-5xl'>Our Feature</h2>
        <div className='mx-auto p-16'>
          <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 flex flex-col gap-2">
            {featuresData.map((feature, index) => {
              return (
                <FeatureCard feature={feature} key={index} />
              )
            })}

          </div>
        </div>
      </section>
      <section id='social-media'>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-20">
            <Image src={'/eat breakfast-bro.png'} alt={'hero'} width={400} height={400}></Image>
            <div>
              <h1 className="text-5xl font-bold text-black">Visit Our Social Media</h1>
              <p className="py-6 text-black">and Support Us!</p>
              <div className=' flex flex-row'>
              <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/instagram-new--v1.png" alt="instagram-new--v1"/>
              <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/linkedin--v1.png" alt="linkedin--v1"/>
              <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/facebook.png" alt="facebook"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
