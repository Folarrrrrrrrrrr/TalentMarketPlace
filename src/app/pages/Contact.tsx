"use client";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Image from 'next/image';

const Contact = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  
  return (
    <section id='contact' className=" absolute w-screen bg-white mt-20 px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map + Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-64 md:h-72"
              src="https://www.google.com/maps/embed?pb=..." // Replace!
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Calendar */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
              Our Calendar
            </h3>
           <Calendar
                onChange={(value) => setDate(value as Date)}
                value={date}
            />
        </div>
        </motion.div>

        {/* Contact + Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Contact
            </h3>
           <form
              action="https://formsubmit.co/your@email.com"
              method="POST"
              className="space-y-3"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Message!" />

              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-1/2 border px-3 py-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-1/2 border px-3 py-2 rounded"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full border px-3 py-2 rounded"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                rows={4}
                className="w-full border px-3 py-2 rounded"
              ></textarea>

              <Button 
                type="submit"
                btnLabel="Book Inspection"
                variant="primary"
                className=" hover:rounded-tr-2xl hover:rounded-bl-2xl  cursor-pointer"
              />
            </form>


          </div>

          {/* Newsletter */}
          <div className="relative rounded-xl overflow-hidden h-40 md:h-[310px]">
            <Image
              fill
              src="/svg/Subscribe.svg"
              alt="Newsletter Background"
              className="absolute w-full h-full object-cover"
           
            />
           
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
              <h4 className="text-white text-lg font-semibold mb-2">
                Subscribing To our Newsletter
              </h4>
              <div className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-l-md text-sm bg-white text-black"
                />
                <button className="bg-orange-500 text-white px-4 rounded-r-md text-sm hover:bg-orange-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

