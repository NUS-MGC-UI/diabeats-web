import PlanCard from '@/components/PlanCard'
import WeekData from '@/components/WeekData'
import Link from 'next/link'
import React from 'react'



export default function page() {

  return (
    <div className='bg-base-200 min-h-screen font-century-ghotic rounded-t-3xl mx-auto'>
      <section id='meal-plan' className=' h-max p-4'>
        <h2 className=' text-base-content text-xl pl-3 font-bold'>Meal Plan</h2>
        <div className='flex flex-row overflow-x-auto gap-3 justify-center'>
            <PlanCard img='/plan-card/breakfast.png' title='Breakfast'></PlanCard>
            <PlanCard img='/plan-card/lunch.png' title='Lunch'></PlanCard>
            <PlanCard img='/plan-card/dinner.png' title='Dinner'></PlanCard>
        </div>
      </section>
      <section id='food-tracker' className='p-4'>
        <h2 className=' text-base-content text-xl pl-3 font-bold'>Food Tracker</h2>
        <WeekData currentDate={new Date()}></WeekData>
        <div className=' flex flex-row gap-4 md:justify-center'>
          <div className=' rounded-full bg-primary-focus w-24 h-24 flex justify-center items-center'>{new Date().getDate()}</div>
          <div className='flex flex-col text-base-content justify-center'>
            <h2>You Are on Track Today</h2>
            <p className=' text-accent font-bold'>Keep it Up</p>
            <Link href={'/demo/applications/LogMeal'}>
            <button className='rounded-full bg-primary text-primary-content max-w-fit px-5 shadow-xl'>Log Your Meal</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
