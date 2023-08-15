'use client'

import ImageCarousel from "./ImageCarousel";

export type Feature = {
    title: string;
    description: string;
    logoUrl: string;
    id: string;
    modal_text: string;
    modal_img: string[];
}


export default function FeatureCard(
    { feature, }
        : { feature: Feature }
) {
    function handleOpenModal() {
        const featureId = feature.id;

        switch (featureId) {
            case 'my_modal_1':
                window.my_modal_1.showModal()
                break;
            case 'my_modal_2':
                window.my_modal_2.showModal()
                break;
            case 'my_modal_3':
                window.my_modal_3.showModal()
                break;
            case 'my_modal_4':
                window.my_modal_4.showModal()
                break;
            case 'my_modal_5':
                window.my_modal_5.showModal()
                break;

            default:
                window.my_modal_6.showModal()
                break;
        }

    }

    const listImg = feature.modal_img;
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
                    <p className=' text-base-content text-justify'>{feature.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent" onClick={handleOpenModal}>Learn More</button>
                        {/* Modal */}
                        <dialog id={`${feature.id}`} className="modal">
                            <form method="dialog" className="modal-box text-base-content flex md:flex-row flex-col gap-4">
                                {feature.modal_img.length>1 && <ImageCarousel features={feature}></ImageCarousel> }
                                {feature.modal_img.length==1 && <img src={feature.modal_img[0]} width={200} height={200}></img> }

                                
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <div className=" flex flex-col">
                                    <h3 className="font-bold text-lg">{feature.title}</h3>
                                    <p className="py-4 break-words text-justify">{feature.modal_text}</p>

                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}
