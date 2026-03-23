"use client";

import { useState } from "react";
import Link from "next/link";
export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We provide strategic outsourcing, professional training, business consulting,
          and HR solutions tailored to help organizations grow, scale, and thrive.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-10">

        {/* Outsourcing */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Outsourcing Solutions
          </h2>
          <p className="text-gray-600">
            We take the weight of daily operations off your shoulders. By 
            outsourcing your core processes to us, you eliminate the overhead of 
            direct management.
            Focus Areas: Administrative support, customer service operations, 
            and back-office management.
            The Benefit: Transition from "working in" your business to "working 
            on" your business
          </p>
        </div>

        {/* Training */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Professional Training
          </h2>
          <p className="text-gray-600">
            Reliability is built, not just found. We offer rigorous training 
            programs designed to bridge the gap between "available talent" 
            and "exceptional professionals."
            Focus Areas: Soft skills, service etiquette, operational efficiency, 
            and leadership alignment.
          </p>
        </div>

        {/* Business Consulting */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Business Consulting
          </h2>
          <p className="text-gray-600">
            True rest comes from having a plan. Our advisory wing provides the 
            roadmap for sustainable scaling.
            Focus Areas: Operational auditing, growth strategy, and 
            organizational restructuring.
          </p>
        </div>

        {/* HR Services */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            VENDOR Outsourcing & Talent Management
          </h2>
          <p className="text-gray-600">
            The stress of an event or project often lies in the "middleman" 
            friction—chasing suppliers, vetting quality, and negotiating terms.
            Our Role: We act as your single point of contact, sourcing and 
            managing high-tier vendors who align with your brand's excellence.
          </p>
        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="mb-6">
          Let’s partner with you to build efficient systems and high-performing teams.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}