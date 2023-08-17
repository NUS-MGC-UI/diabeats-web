import React from 'react'

export default function PlanCard({img,title}:{img:string,title:string}) {
    return (
        <div className="card bg-base-100 shadow-xl resize-none w-36">
            <figure className='p-2 resize-none'><img src={img} alt="plan-img" width={140} height={140} /></figure>
            <div className="card-body">
                <h2 className="card-title text-base-content text-center">{title}</h2>
            </div>
        </div>
    )
}
