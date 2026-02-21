"use client" ;
// import { Geist } from 'next/font/google'
// import Home from"@/app/components/Home"
// import Services from "./pages/Services";
import HomePage from "./home/page";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";

// const geist = Geist({
//   subsets: ['latin'],
// })

export default function Home() {
  return (
    <div className="items-center justify-items-center min-w-screen min-h-screen p-20 pb-5  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <HomePage className=""/>
     
    </div>
  );
}
