import React from 'react'
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";

export default function page() {
    return (
        <div className='font-century-ghotic rounded-t-3xl bg-base-100 min-h-screen p-4'>
            <div className="collapse bg-base-200 shadow-xl text-base-content">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium flex justify-between">
                    <p>
                    Breakfast
                    </p>
                    <div className=' badge badge-accent'>123</div>
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}
