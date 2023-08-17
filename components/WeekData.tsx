import getWeek from '@/lib/getWeek'
import React from 'react'

export default function WeekData({ currentDate }: { currentDate: Date }) {

    const week = getWeek(currentDate);
    const dayName = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return (
        <div className='flex flex-row gap-4 overflow-auto py-4'>
            {week.map((day, index) => {
                return (
                    <div className='flex flex-col items-center' key={index}>
                        <p className='text-center text-primary font-bold'>{dayName[index]}</p>
                        <button className="btn btn-circle btn-outline">
                            {day.getDate()}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
