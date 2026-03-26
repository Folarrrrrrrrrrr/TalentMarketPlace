"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Message sent successfully!");
};

  return (
    <div className="bg-white text-gray-700">

      /* NAVBAR */
      <nav className="bg-green-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">GreenHR</h1>

          <div className="space-x-6">
            <Link href="/" className="hover:text-green-200">Home</Link>
            <Link href="/about" className="hover:text-green-200">About</Link>
            <Link href="/services" className="hover:text-green-200">Services</Link>
            <Link href="/contact" className="text-green-200">Contact</Link>
          </div>
        </div>
      </nav>


      /* HERO */
      <section className="bg-green-50 py-20 text-center px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Get in Touch with Us
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Have questions or need HR support? Our team is here to help you build a stronger workforce.
        </p>
      </section>


      /* CONTACT SECTION */
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          /* FORM */
          <div className="bg-white shadow-lg p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Send Message
              </button>

            </form>
          </div>


          /* CONTACT INFO */
          <div className="bg-green-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Contact Information
            </h3>

            <p className="mb-4">
              Reach out to us through any of the following channels:
            </p>

            <div className="space-y-4">
              <p><strong>Email:</strong> info@greenhr.com</p>
              <p><strong>Phone:</strong> +234 XXX XXX XXXX</p>
              <p><strong>Address:</strong> Ibadan, Oyo State, Nigeria</p>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-green-800 mb-2">
                Business Hours
              </h4>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p>Sat: 10:00 AM - 2:00 PM</p>
            </div>
          </div>

        </div>
      </section>


      /* CTA */
      <section className="bg-green-700 text-white py-16 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Let’s Work Together
        </h3>

        <p className="mb-6">
          Partner with us to build a thriving and productive workforce.
        </p>

        <Link
          href="/about"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100"
        >
          Learn More About Us
        </Link>
      </section>


      /* FOOTER */
      <footer className="bg-green-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div>
            <h4 className="text-white font-bold mb-3">GreenHR</h4>
            <p>
              Empowering businesses through strategic HR solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p>Email: Theisinmibrand@gmail.com</p>
            <p>Phone: +234 704 988 3459</p>
          </div>

        </div>

        <div className="text-center text-sm mt-10 text-gray-400">
          © 2026 ISINMI BRAND. All rights reserved.
        </div>
      </footer>

    </div>
  );
}