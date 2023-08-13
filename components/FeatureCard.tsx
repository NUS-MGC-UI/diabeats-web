'use client'

export type Feature = {
    title: string;
    description: string;
    logoUrl: string;
    id: number;
}


export default function FeatureCard(
    { feature, }
        : { feature: Feature }
) {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">

                <div className="card-body items-center">
                    <img src={feature.logoUrl} width={40} height={40}></img>
                    <h2 className="card-title text-base-content">
                        {feature.title}
                        {feature.title == 'Log Meal' &&
                            <span className="badge badge-lg badge-secondary">Scanner!</span>
                        }
                    </h2>
                    <p className=' text-base-content'>{feature.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">Learn More</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
