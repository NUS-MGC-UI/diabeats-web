'use client'
import { getListFood } from "@/src/lib/getListFood";
import { useForm, useFieldArray, useWatch, Control, useController, Controller } from "react-hook-form";
import Select from 'react-select'
import {prisma} from '@/src/lib/prisma'
import { redirect } from 'next/navigation'

type FormValues = {
  food: {
    name: string|undefined,
    quantity: number,
  }[];
};



// const Total = ({ control }: { control: Control<FormValues> }) => {
//   const formValues = useWatch({
//     name: "food",
//     control
//   });

//   //   Calorie logic
//   // get food(name)-> fat carb protein fiber * quantity
//   return <p>Total Amount: Jumlah Kalori</p>;
// };

export default function MealForm({ mealName, foodOptions }: { mealName: string, foodOptions: { value: string, label: string }[] }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormValues>({
    mode: "onBlur"
  });

  const { fields, append, remove } = useFieldArray({
    name: "food",
    control
  });
  const onSubmit = (formData: FormValues) => {
    window.location.replace('/demo/applications/dashboard')
  };

  const handleonChange = (index: number) => {
    register(`food.${index}.name` as const, {
      valueAsNumber: true,
      required: true
    })
  }
  const { field: { value: foodValue, onChange: langOnChange, ...restFoodField } } = useController({ name:'food', control });


  return (
    <div className="collapse bg-base-100 shadow-xl">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-bold text-base-content">
        {mealName}
      </div>
      <div className="collapse-content">
        <div className="grid grid-cols-2 grid-rows-2 gap-5 text-base-content">
          <div className=" flex flex-row gap-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] justify-between rounded-full pl-2">
            <p>Carbs</p>
            <p className=" bg-primary badge text-base-100 h-full pl-4">123</p>
          </div>
          <div className=" flex flex-row gap-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] justify-between rounded-full pl-2">
            <p>Fats</p>
            <p className=" bg-primary badge text-base-100 h-full pl-4">123</p>
          </div>
          <div className=" flex flex-row gap-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] justify-between rounded-full pl-2">
            <p>Protein</p>
            <p className=" bg-primary badge text-base-100 h-full pl-4">123</p>
          </div>
          <div className=" flex flex-row gap-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] justify-between rounded-full pl-2">
            <p>Fiber</p>
            <p className=" bg-primary badge text-base-100 h-full pl-4">123</p>
          </div>
        </div>
        <div className=" text-base-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <section className={"section flex flex-row pt-3 gap-3"} key={field.id}>
                    {/* <Controller
                      name="foodName" // Replace with your field name
                      control={control}
                      // as = {<Select/>}
                      // defaultValue={} // Set the initial selected value
                      render={({ field }) => (
                        <Select
                        {...field}
                          options={foodOptions} // Replace with your options array
                        />
                      )}
                    /> */}
                    <Select options={foodOptions}
                      className={errors?.food?.[index]?.name ? "error" : ""}
                      required
                      isClearable
                      onChange={(choice)=>{setValue(`food.${index}.name`,choice?.label)}}
                    />
                    {/* <Select
                      className='select-input'
                      placeholder="Select Language"
                      isClearable
                      options={foodOptions}
                      value={foodValue? foodOptions.find(x => x.value === foodValue) : foodValue}
                      onChange={option => langOnChange(option ? option.value : option)}
                      {...restFoodField}
                    /> */}
                    <input
                      placeholder="Quantity (in gr)"
                      type="number"
                      {...register(`food.${index}.quantity` as const, {
                        valueAsNumber: true,
                        required: true
                      })}
                      className={errors?.food?.[index]?.quantity ? "error" : ""}
                    />
                    <button type="button" onClick={() => remove(index)} className="btn btn-circle btn-sm btn-error">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </section>
                </div>
              );
            })}

            {/* <Total control={control} /> */}

            <button
              type="button" className="btn rounded-full btn-sm"
              onClick={() =>
                append({
                  name: "",
                  quantity: 0,
                })
              }
            >
              Add food
            </button>
            <button type="submit">
              Save log
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
