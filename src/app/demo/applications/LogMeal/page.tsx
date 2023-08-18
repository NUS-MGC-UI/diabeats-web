import MealForm from '@/components/MealForm';
import React from 'react'
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";



export default function page() {


    return (
        <div className='font-century-ghotic rounded-t-3xl bg-base-100 min-h-screen p-4 flex flex-col gap-4'>
            <MealForm mealName='Breakfast' />
            <MealForm mealName='Lunch' />
            <MealForm mealName='Dinner' />
            <MealForm mealName='Snacks' />
        </div>
    )
}
