import FeatureCard, { Feature } from '@/components/FeatureCard'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

import Image from 'next/image'
import Link from 'next/link'





export default function Home() {
  const featuresData: Feature[] = [
    {
      title: 'Dashboard',
      description: "Offering a comprehensive snapshot of relevant information of user's Meal Plan and Food Tracking.",
      logoUrl: '/003-dashboard.png',
      id: 'my_modal_1',
      modal_text: 'This feature helps user to get a quick summary of important data of user\'s meal plan and food tracking data. Also being a bridge to get to other important features.',
      modal_img: ['/Dashboard.png']
    },
    {
      title: 'Log Meal',
      description: 'Monitoring companion with real time-insights, following the personalized meal plan.',
      logoUrl: '/001-log.png',
      id: 'my_modal_2',
      modal_text: 'Users can opt for two convenient routes: (1) manually input meals from the extensive database, tailoring portion sizes to their preferences, or (2) expedite the process through a novel scanning function. Upon logging, the app will compute caloric and nutritional values.',
      modal_img: ['/Log Meal.png', '/Scanner.png', '/Scan Result.png']
    },
    {
      title: 'Personalized Meal Plan',
      description: 'Simplifies diabetic meal planning by calculating user data, suggesting specific foods and portions for each meal and snack.',
      logoUrl: '/002-notes.png',
      id: 'my_modal_3',
      modal_text: 'Utilizing established diabetes guidelines, it calculates daily and meal-specific calorie requirements. This computation also centers on achieving weight reduction, which has shown to mitigate complications through various studies. This feature also calculates calories needed per nutrition type (carbohydrates, protein, and fats).',
      modal_img: ['/Meal Plan.png',
        '/User data form.png',
        '/User data form 2.png']
    },
    {
      title: 'Catering',
      description: 'A catering service that adheres to diabetes guidelines and follows the personalized meal plans.',
      logoUrl: '/004-food-delivery.png',
      id: 'my_modal_4',
      modal_text: "This feature partners with Indonesian delivery services, aligning seamlessly with personalized meal plans. It underscores 'personalization' as the app's innovation and unique selling proposition. Users can savor a variety of wholesome meals while effortlessly adhering to their dietary requirements.",
      modal_img: ['/Catering.png']
    },
    {
      title: 'Premium',
      description: 'Interactive Diabetes Diet Module for A Lifetime like videos and quizzes and no-Ads Experience',
      logoUrl: '/005-premium-quality.png',
      id: 'my_modal_5',
      modal_text: 'This feature is one of the revenue streams, offering a lifelong diabetes module. This module encompasses interactive elements like videos and quizzes. Educational features are available to non-premium users also, as "Insights" notifications based on meal plans and logs, but limited in form of articles only.',
      modal_img: ['/Premium.png']
    },
    {
      title: 'Recipes',
      description: 'Offers delicious, health-conscious recipes. It also prompts suitable alternatives in Meal Log. ',
      logoUrl: '/cook-book.png',
      id: 'my_modal_6',
      modal_text: 'This feature is designed to shatter the misconception that diabetes patients must sacrifice flavor due to dietary restrictions. It offers delicious, health-conscious dishes for everyday delight',
      modal_img: ['/cook-book.png']
    },
  ]

  return (
    <>
      <Navbar />
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
          <h2 className='lg:text-8xl font-bold text-base-content text-center text-5xl'>Our Features</h2>
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
                  <Link href={'https://www.instagram.com/diabeats.id/'} target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/instagram-new--v1.png" alt="instagram-new--v1" />
                  </Link>
                  <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/linkedin--v1.png" alt="linkedin--v1" />
                  <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/facebook.png" alt="facebook" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
