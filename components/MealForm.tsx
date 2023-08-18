'use client'
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import Select from 'react-select'

type FormValues = {
  food: {
    name: string;
    quantity: number;
  }[];
};



const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "food",
    control
  });

  //   Calorie logic
  // get food(name)-> fat carb protein fiber * quantity
  return <p>Total Amount: Jumlah Kalori</p>;
};

export default function MealForm({ mealName }: { mealName: string }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    mode: "onBlur"
  });
  const { fields, append, remove } = useFieldArray({
    name: "food",
    control
  });
  const onSubmit = (data: FormValues) => console.log(data);

  // Prisma get the typing
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

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
                    <Select options={options}
                    className={errors?.food?.[index]?.name ? "error" : ""}
                    required
                    />
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

            <Total control={control} />

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
