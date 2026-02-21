import Image from "next/image";

export default function Footer() {
   
  
  return (
    <footer className="absolute bg-black text-gray-400 buttom-0 w-full">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            {/* <div className="w-8 h-8 bg-teal-600 rounded-full" /> */}
            <Image
              src={"/png/isinmiLogo.png"}
              alt={""}
              width={30}
              height={30}
            />
            <span className="text-white text-xl font-bold">Isinmi</span>
          </div>

          <p className="max-w-sm text-sm">
            Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil molestiae consequatur.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Job Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Job Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>Telecommunications</li>
            <li>Design & Creative</li>
            <li>Marketing</li>
            <li>Finance</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to get the latest job updates.
          </p>

          <div className="flex bg-gray-900 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent px-4 py-2 text-sm text-white outline-none w-full"
            />
            <button className="bg-teal-600 px-4 text-sm text-white">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <span>© Copyright Isinmi 2024. All rights reserved.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
