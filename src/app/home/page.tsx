"use client";
import Button from "../components/Button";
import { homeProps } from "../types/components";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import LazyVideo from "../components/LazyVideo";
// import Slider from "../components/Slider";
import { motion } from 'framer-motion';
// import InlineSvg from "../components/InlineSvg";
// import Link from "next/link";
import { Bookmark,  Briefcase, MapPin, Layers } from 'lucide-react';
import { Job } from "../types/job";
import JobCard from "../components/jobs/JobCard";
import  Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import { useState } from "react";

const HomePage =({className}:homeProps)=>{ 
    // const cards=[
    //     {
    //     id: 1,
    //     title: "Product Designer",
    //     company: "A1 Technologies",
    //     price: "₦50,000",
    //     duration: "2 days ago",
    //     image: "/svg/HomeCardImageOne.svg", 
    //     },
    //     {
    //     id: 2,
    //     title: "Frontend Developer",
    //     company: "DigiHub",
    //     price: "₦70,000",
    //     duration: "5 days ago",
    //     image: "/svg/HomeCardImageTwo.svg",
    //     },
    //     {
    //     id: 3,
    //     title: "UI/UX Designer",
    //     company: "Creative Labs",
    //     price: "₦50,000",
    //     duration: "9 hours ago",
    //     image: "/user.png",
    //     },
    // ]
    

        const jobs: Job[] = [
            {
                id: '1',
                title: 'Forward Security Director',
                company: 'Slack',
                category: 'Health & Tourism',
                type: 'Full Time',
                salary: '$80,000 – $120,000',
                location: 'New York, USA',
                postedAt: '2 days ago',
                tags: ['Security', 'Director', 'Remote'],
                logo: '/svg/FSD.svg',
            },
            {
                id: '2',
                title: 'Regional Creative Facilitator',
                company: 'Adobe',
                category: 'Media',
                type: 'Full Time',
                salary: '$70,000 – $100,000',
                location: 'Los Angeles, USA',
                postedAt: '5 days ago',
                tags: ['Creative', 'Facilitator'],
                logo: '/svg/RCF.svg',
            },
            {
                id: '3',
                title: 'Internal Integration Planner',
                company: 'Google',
                category: 'Construction',
                type: 'Full Time',
                salary: '$85,000 – $130,000',
                location: 'Texas, USA',
                postedAt: '9 hours ago',
                tags: ['Integration', 'Planner'],
                logo: '/svg/IIP.svg',
            },
            {
                id: '4',
                title: 'District Intranet Director',
                company: 'Verizon',
                category: 'Government',
                type: 'Part Time',
                salary: '$40,000 – $80,000',
                location: 'Florida, USA',
                postedAt: '1 week ago',
                tags: ['Intranet', 'Director'],
                logo: '/svg/DID.svg',
            },
            {
                id: '5',
                title: 'Corporate Tactics Facilitator',
                company: 'Asana',
                category: 'Commerce',
                type: 'Full Time',
                salary: '$60,000 – $90,000',
                location: 'Boston, USA',
                postedAt: '3 days ago',
                tags: ['Corporate', 'Facilitator'],
                logo: '/svg/CTF.svg',
            },
        ];
    
    const stats = [
        { value: "12k+", label: "Clients worldwide" },
        { value: "20k+", label: "Active resumes" },
        { value: "18k+", label: "Companies" },
    ];
    const testimonials = [
        {
            title: "Amazing services",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            name: "Wade Warren",
        },
        {
            title: "Everything simple",
            text: "Sed ut perspiciatis unde omnis iste natus error sit.",
            name: "Kristin Watson",
        },
        {
            title: "Awesome, thank you!",
            text: "At vero eos et accusamus et iusto odio dignissimos.",
            name: "Jane Cooper",
        },
    ]

    const [showSearchResultModal, setShowSearchResultModal] = useState(false);
    return(
        <>
         
        <div id="home" className={`mb-30 pb-20 min-h-screen py-12 min-w-screen sm:w-screen ${className}`} >
            <div className="border-4 bg-gray-900 items-center w-full h-auto md:h-[200px] -mt-10 content-center py-6">
                <div className="bg-white w-full md:w-[45%] rounded-xl p-4 shadow-lg flex flex-col md:flex-row gap-4 items-center mx-auto">

                    <div className="flex items-center gap-2 w-full">
                        <Briefcase className="text-gray-400" size={18} />
                        <input
                        type="text"
                        placeholder="Job title"
                        className="w-full rounded px-2 outline-none text-gray-700 bg-gray-200 "
                        />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <MapPin className="text-gray-400" size={18} />
                        <input
                        type="text"
                        placeholder="Location"
                        className="w-full outline-none px-2 rounded bg-gray-100 text-gray-700"
                        />
                    </div>

                    <div className="flex items-center gap-2 w-full">
                        <Layers className="text-gray-400" size={18} />
                        <select className="w-full px-2 rounded  outline-none text-gray-700 bg-transparent">
                        <option>Select Category</option>
                        <option>Design</option>
                        <option>Development</option>
                        <option>Marketing</option>
                        <option>Writing</option>
                        </select>
                    </div>                      
                    <Button 
                        onClick={() => setShowSearchResultModal(true)}
                        btnLabel="Search"
                        variant="secondary"
                        className=" hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer transition text-white px-2  rounded-lg flex items-center gap-2 w-full md:w-auto"
                    />
                   
                </div>
                 {
                        showSearchResultModal && (
                            <SearchResults jobs={jobs} onClose={() => setShowSearchResultModal(false)} />
                        )
                    }
                <div className="flex flex-wrap justify-center gap-8  text-sm text-gray-300 mt-4">
                    <div className="flex gap-3">
                        <Image
                            src={"/svg/briefcase.svg"}
                            alt={"an icon of briefcase"}
                            height={30}
                            width={30}
                        />
                        <div>
                            <p className="text-xl font-semibold text-white">15,890</p>
                            <p>Jobs Posted</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3">
                            <Image
                                src={"/svg/users.svg"}
                                alt={"an icon of briefcase"}
                                height={30}
                                width={30}
                            />
                            <div>
                                <p className="text-xl font-semibold text-white">10,250</p>
                                <p>Companies</p>
                            </div>
                        </div>
                    </div>
          <div>
            <div className="flex gap-3">
                <Image
                    src={"/svg/companies.svg"}
                    alt={"an icon of briefcase"}
                    height={30}
                    width={30}
                />
                <div>
                    <p className="text-xl font-semibold text-white">18,400</p>
                    <p>Talents</p>
                </div>
            </div>
          </div>
        </div>
                </div>
                <div className={`flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 relative md:top-0 -top-10 overflow-hidden` }>
                {/* LEFT SIDE */}
                <div className="max-w-lg z-10">
                    {/* <Image
                        src="/svg/CirclesTwo.svg" 
                        alt="Food"
                        width={500}
                        height={200}
                        className=" z-0 md:-z-[200000] rounded-lg object-fill absolute top-30 hidden md:block -left-10 animate-spin  w-[550px]"
                    /> */}
                   
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Find the best Hands,
                        <br />
                        <span className="text-gray-900 md:text-4xl">  Talents, and Professionals. </span>
                    </h1>
                    <p className="text-gray-600 mt-4 md:text-sm">
                        We are your trusted partner that connects you to verified, reliable, highly-skilled Freelancing professionals or Artisans.           
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href='#contact'>
                            <Button 
                            btnLabel="Hire a Talent "
                            variant="secondary"
                            className="z-99999 hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer"
                            />
                        </a>
                        
                        <a href='#contact'>
                            <Button 
                            btnLabel="A session with us"
                            variant="primary"
                            className=" z-9999999 hover:rounded-tr-2xl hover:rounded-bl-2xl  cursor-pointer"
                            />
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-8 md:ml-30 text-gray-600 text-sm">
                        <span className="border-1 p-1 rounded-2xl hover:animate-bounce animate-pulse cursor-pointer">
                            <FaFacebookF />
                        </span>
                        <span className="border-1 p-1 rounded-2xl hover:animate-bounce animate-pulse cursor-pointer">
                        <FaInstagram />
                        </span>
                        <span className="border-1 p-1 rounded-2xl hover:animate-bounce animate-pulse cursor-pointer">
                            <FaTwitter />
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative mt-12 lg:mt-0 w-full md:max-w-xl lg:max-w-2xl">
                    {/* Background Image (Ambience) */}
                    <div className="rounded-2xl hidden md:block overflow-hidden w-full relative ">
                        <div className="relative w-[100%] h-[350px] flex items-center justify-center content-start  ">
                            <div className="relative h-full w-[100%] overflow-hidden">
                                 <Image
                                    src="/png/FashionDesigner.png"
                                    alt="Ambience"
                                    width={500}
                                    height={550}
                                    className="carousel-image  max-w-4xl mx-auto max-h-[90%] object-contain"
                                    style={{ animationDelay: "0s" }}
                                />
                               <Image
                                    src="/png/softwareEngineerTwo.png"
                                    alt="Ambience"
                                    width={300}
                                    height={350}
                                    className="carousel-image  max-w-3xl mx-auto max-h-[80%] object-contain"
                                    style={{ animationDelay: "8s" }}
                                />
                                <Image
                                    src="/svg/femaleFreelancer.svg"
                                    alt="Ambience"
                                    width={300}
                                    height={350}
                                    className="carousel-image max-w-3xl mx-auto max-h-[80%] object-contain"
                                    style={{ animationDelay: "16s" }}
                                />
                                <Image
                                    src="/svg/MaleArtisan.svg"
                                    alt="Ambience"
                                    width={300}
                                    height={350}
                                    className="carousel-image max-w-3xl mx-auto max-h-[80%] object-contain"
                                    style={{ animationDelay: "24s" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Jobs section */}
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                    Recent Jobs Available
                    </h2>
                    <p className="text-sm text-gray-500">
                    Explore the latest job opportunities curated for you.
                    </p>
                </div>

                <button className="text-emerald-600 text-sm font-medium hover:underline">
                    View all
                </button>
                </div>

                {/* Job List */}
                <div className="-space-y-6">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>


            {/* Top Companies section */}
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-3">Top Company</h2>
                <p className="text-center text-sm text-gray-500 mb-8">At la boster's platform incididunt amet lacus et veniam aliquip. Blandit a massa elementum</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: 'Instagram', emoji: '📷', desc: 'Eti velit varius aliquam sit amet. Leo sapien consectetur diam, eros velit.' },
                        { name: 'Tesla', emoji: '🚗', desc: 'At pellentesque amet odio lacus imperdiet. Ex magna aliquet massa laoreet.' },
                        { name: "McDonald's", emoji: '🍔', desc: 'Odio aliquip tellus facilisis posuere. Potentius in litora senectus et netus.' },
                        { name: 'Apple', emoji: '🍎', desc: 'Et cis we tristique posuere consectetur. Tristique posuere sapien.' },
                    ].map((c) => (
                        <div key={c.name} className="bg-white rounded-xl p-6 shadow text-center">
                            <div className="mx-auto w-12 h-12 bg-black text-white rounded-md flex items-center justify-center text-xl mb-4">
                                <span aria-hidden>{c.emoji}</span>
                            </div>
                            <h4 className="font-semibold mb-2">{c.name}</h4>
                            <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
                            <button className="text-sm border py-1 px-3 rounded-full text-teal-600 border-teal-200">Open jobs</button>
                        </div>
                    ))}
                </div>
            </div>  

            {/* Testimonial section */}
            <div className=" py-10 container mx-auto px-6   mt-15">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Testimonials from Our Customers
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                    <div key={t.name} className="bg-white p-6 rounded-xl shadow">
                        <h4 className="font-semibold mb-2">{t.title}</h4>
                        <p className="text-gray-600 mb-4">{t.text}</p>
                        <span className="font-medium">{t.name}</span>
                    </div>
                    ))}

                    <div className="container h-25  w-[100vw]  mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                        {stats.map((stat) => (
                            <div  key={stat.label}>
                            <h3 className="text-3xl font-bold text-teal-600">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage