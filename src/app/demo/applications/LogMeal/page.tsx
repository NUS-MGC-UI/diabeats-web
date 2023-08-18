import MealForm from '@/components/MealForm';
import { getListFood } from '@/src/lib/getListFood';
import React from 'react'
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";



export default async function page() {
    // Prisma get the typing
  const foodData:any = await getListFood()
  const options = foodData.map((food: { name: any; }) => ({
    value: food.name,
    label: food.name
  }));
    return (
        <div className='font-century-ghotic rounded-t-3xl bg-base-100 min-h-screen p-4 flex flex-col gap-4'>
            <MealForm mealName='Breakfast' foodOptions={options}/>
            <MealForm mealName='Lunch' foodOptions={options}/>
            <MealForm mealName='Dinner' foodOptions={options}/>
            <MealForm mealName='Snacks' foodOptions={options}/>
        </div>
    )
}
