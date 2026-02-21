
"use client";
import { useState } from "react";
import Image from "next/image";

const Services =()=>{
    const [activeServices, setActiveService] = useState(0)
    
    const forteData = [
        {
            title: 'Weddings',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/svg/weddingHallOne.svg',            
        },
        {
            title: 'Irresistible Menu',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/svg/VegiePlate.svg',           
        },
        {
            title: 'Royal Dinners',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/svg/weddingHallTwo.svg',            
        },
        {
            title: 'Conference Hall',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: '/svg/ConferenceHall.svg',
        },
    ];
    const facility=[
        {
            icon:"",
            header:"Ample Parking Space",
            summary:"Your guest are guaranteed of safe and ample parking space."
        },
        {
            icon:"",
            header:"Stress-free Planning",
            summary:" We pride ourselves on our stress-free planning process. Our dedicated events manager will guide you through your planning decisions and be on hand throughout the reception - so you can focus on enjoying your big day."
        },
        {
            icon:"",
            header:"Convenience",
            summary:"Your guest are guaranteed of safe and ample parking space."
        },
        {
            icon:"",
            header:"Elaborate space",
            summary:" An abundance of natural light and a stunning hanging garden of tropical plants. The venue includes a cocktail bar, lounge area and separate dining space, as well as a covered summer terrace."
        },
    ]

    return(
       <section id="services" className="w-screen bg-gray-50 py-10 text-center">
            <div className="w-full max-w-screen-2xl mx-auto px-4">

                <div className="absolute flex ">
                     <Image
                        width={100}
                        height={300}
                        src={`/svg/ServiceLeaf.svg`}
                       className=" relative left-45 md:left-75 -top-13 my-5  h-36 object-contain rounded-lg"
                        alt=""
                    />
                    <Image
                        width={100}
                        height={300}
                        src={`/svg/serviceFlowerTwo.svg`}
                        className="hidden md:block  my-5 relative left-[380%] -top-13 h-36 object-contain rounded-lg"
                        alt=""
                    />
                   
                </div>
                <h2 className=" text-2xl md:text-4xl font-bold text-gray-900">OUR FORTE</h2>
                <p className="mt-2 text-gray-500  justify-self-center  text-wrap  w-[40%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    {forteData.map((item, index) => (                        
                        <div
                            onMouseEnter={()=>setActiveService(index)}
                            key={index}
                            className={`relative mt-15 w-64 border-2 border-white inset-shadow-blue-300 shadow-inner rounded-tl-4xl ease-in-out rounded-br-4xl h-64 bg-transparent rounded-l transition duration-300 ${
                                activeServices === index? "bg-white ease-in-out shadow-md shadow-gray-800 " : ""
                            }`}
                        >
                            <div className=" relative -top-[30%]">
                                <Image
                                    width={250}
                                    height={300}
                                    src={item.image}
                                    className={`my-5 relative -top-5 left-24 ease-in-out w-[30%] 
                                        ${activeServices===index? 'ease-in-out animate-pulse transition duration-300 scale-150 left-[35%]': ''} 
                                        h-36 object-contain rounded-lg`
                                    }
                                    // className="my-5 w-full h-36 object-contain rounded-lg"
                                    alt=""
                                /> 
                                 {/* <p className="absolute  top-4 min-w-[1%] right-[18%] bg-black text-white  p-3 rounded-full flex items-center justify-center text-sm font-bold">
                                    {index +1}
                                </p> */}
                                <Image
                                    width={250}
                                    height={300}
                                    src={`${ index===0? '/svg/watermelon.svg': index===3? "/svg/Onion.svg": index===2? "/svg/banana.svg":"/"}`}
                                    className={`my-5 left-14 w-[10%] 
                                        ${index === 0? 'relative w-[20%] left-[80%] top-13': 
                                            index === 3? 'relative w-[40%] left-[80%] top-15': 
                                            index === 2? 'w-[20%] relative md:left-[150%] z-100 top-13':
                                            'hidden'
                                        }
                                        h-36 object-contain rounded-lg`
                                    }
                                    // className="my-5 w-full h-36 object-contain rounded-lg"
                                    alt=""
                                /> 
                               

                                
                            </div>
                            
                            <div className={`p-2 relative ${index === 0? '-top-65': index === 2? '-top-65':index === 3? '-top-65':'-top-25'}`}>
                                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                 <h2 className=" mt-12 text-2xl md:text-4xl font-bold text-gray-900">Explore our facilities</h2>
                <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>

                <div className="-mt-5 flex flex-wrap justify-center gap-6">
                    {facility.map((item, index) => (                        
                        <div
                            key={index}
                            className={`relative mt-15 w-64 rounded-tl-4xl rounded-br-4xl h-64 bg-transparent rounded-l shadow-md transition duration-300 shadow-gray-800 shadow-4xl" : ""
                            }`}
                        >
                            <div className="p-2 relative ">
                                <h3 className="mt-4 text-lg font-semibold">{item.header}</h3>
                                <p className="text-sm text-gray-500">{item.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;