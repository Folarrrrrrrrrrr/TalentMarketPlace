"use client";

import TestimonialSection from "../components/TestimonialSection";
import Slider from "../components/Slider";
import ExpertChef from "../components/Chef";
import Image from "next/image"; 

const Gallery =()=>{

  const products=[
    {
      image:"/jpg/IMG_5402.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_5410.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_5399.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_7419.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_8755.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_8025.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_8473.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_8755.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_8756.jpg",
      name:"",
      description:""
    },
    {
      image:"/jpg/IMG_7418.jpg",
      name:"",
      description:""
    },
  ]

  return(

    <section id="gallery" className=" w-screen md:flex mdmax-h-screen md:py-15">
         {/* Gallery section (left) */}
        <Slider
          items={products}
          renderSlide={(product, i) => (
            // <img src={product.image} alt={`Image ${i}`} className="rounded-xl object-contain min-w-full  md:min-h-[500px] hover:scale-125 transition-all ease-in-out" />
            <Image
                src={product.image} 
                alt={`Image ${i}`}
                width={500}
                height={200}
                className="rounded-xl object-cover min-w-full min-h-[85vh]  md:min-h-[70vh] hover:scale-125 transition-all ease-in-out"
            />
          )}
          // title="Gallery"
          slidesPerView={3}
          imageContainer=""
          swipeItem=""
        />
        <div className="">
          <ExpertChef/>
          <TestimonialSection
          />
        </div>
    </section>

  )
}


export default Gallery;