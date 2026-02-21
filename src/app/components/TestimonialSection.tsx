"use Client";
import Slider from './Slider';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Amanda',
    role: 'CEO, Alphatech Inc',
    image: '/avatar1.jpg',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet consectetur...',
  },
  {
    name: 'Khalid',
    role: 'COO, Axionair Inc',
    image: '/avatar2.jpg',
    rating: 4,
    text: 'Tortor massa nulla quam sit...',
  },
  {
    name: 'Khalid',
    role: 'COO, Axionair Inc',
    image: '/avatar2.jpg',
    rating: 4,
    text: 'Tortor massa nulla quam sit...',
  },
  {
    name: 'Khalid',
    role: 'COO, Axionair Inc',
    image: '/avatar2.jpg',
    rating: 4,
    text: 'Tortor massa nulla quam sit...',
  },
];

export default function TestimonialSection() {
  return (
    <div className=' md:max-h-[50vh] md:mt-0 mt-30 '>
        <Slider
          items={testimonials}
          title="Our Happy Customers"
          className=' relative md:top-[px]'
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          renderSlide={(item) => (
            <div className="bg-white shadow-xl rounded-2xl p-4 text-left h-full">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          )}
        />
    </div>
  );
}
