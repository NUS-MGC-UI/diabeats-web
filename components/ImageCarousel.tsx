'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Feature } from "./FeatureCard";

export default function ImageCarousel({features}:{features:Feature
}) {
  return (
    <div>
      <Carousel showArrows={true}
            infiniteLoop={true}
            dynamicHeight={false}
            showThumbs={false}>
        <img src={features.modal_img[0]} alt="aaa" height={200} width={200}/>
        <img src={features.modal_img[1]} alt="aaa" height={200} width={200}/>
        <img src={features.modal_img[2]} height={200} width={200}/>
      </Carousel>
    </div>
  )
}
