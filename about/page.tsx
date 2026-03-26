"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-700">

      {/* NAVBAR */}
      <nav className="bg-green-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">HR Growth</h1>

          <div className="space-x-6">
            <Link href="/" className="hover:text-green-200">Home</Link>
            <Link href="/about" className="hover:text-green-200">About</Link>
            <Link href="/services" className="hover:text-green-200">Services</Link>
            <Link href="/contact" className="hover:text-green-200">Contact</Link>
          </div>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Empowering Businesses Through People
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a people-first Human Resource consulting firm dedicated to helping
            organizations build strong teams, create thriving workplace cultures,
            and unlock the full potential of their workforce.
          </p>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              Who We Are
            </h3>

            <p className="mb-4">
              Our HR brand was founded with the mission to transform how
              businesses manage their most valuable asset — people.
            </p>

            <p className="mb-4">
              From talent acquisition to workforce development, we provide
              innovative HR solutions that help organizations scale
              efficiently and build productive teams.
            </p>

            <p>
              With years of experience across industries, our consultants
              work closely with companies to design HR strategies that
              improve performance, engagement, and long-term success.
            </p>
          </div>

          <div className="bg-green-100 p-10 rounded-xl">
            <h4 className="text-2xl font-semibold text-green-800 mb-4">
              Our Impact
            </h4>

            <ul className="space-y-3">
              <li>✔ Talent recruitment & acquisition</li>
              <li>✔ HR consulting & advisory</li>
              <li>✔ Leadership development</li>
              <li>✔ Organizational growth strategy</li>
              <li>✔ Employee engagement programs</li>
            </ul>
          </div>

        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Our Mission
            </h3>

            <p>
              To help organizations attract, develop, and retain exceptional
              talent through strategic human resource solutions that
              drive productivity and sustainable growth.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Our Vision
            </h3>

            <p>
              To become a leading HR consulting partner recognized
              globally for empowering organizations to build
              high-performing teams and exceptional workplace cultures.
            </p>
          </div>

        </div>
      </section>


      {/* CORE VALUES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-bold text-green-700 mb-10">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 shadow rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-green-700">
                Integrity
              </h4>
              <p>We operate with honesty, transparency, and strong ethics.</p>
            </div>

            <div className="p-6 shadow rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-green-700">
                Excellence
              </h4>
              <p>We strive to deliver outstanding HR solutions every time.</p>
            </div>

            <div className="p-6 shadow rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-green-700">
                Innovation
              </h4>
              <p>We use modern HR strategies to help organizations grow.</p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h3 className="text-3xl font-bold mb-4">
            Let’s Build Strong Teams Together
          </h3>

          <p className="mb-6">
            Partner with us to create better hiring strategies,
            stronger leadership, and a thriving workforce.
          </p>

          <Link
            href="/contact"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100"
          >
            Contact Us
          </Link>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-green-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div>
            <h4 className="text-white font-bold mb-3">HR Growth</h4>
            <p>
              Helping organizations build high-performing teams
              through strategic HR solutions.
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
            <p>Email: info@hrgrowth.com</p>
            <p>Phone: +234 XXX XXX XXXX</p>
          </div>

        </div>

        <div className="text-center text-sm mt-10 text-gray-400">
          © 2026 HR Growth. All rights reserved.
        </div>
      </footer>

    </div>
  );
}