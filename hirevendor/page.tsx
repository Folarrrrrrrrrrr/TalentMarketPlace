"use client";

import { useState } from "react";

export default function HireVendorPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert("Request submitted! We'll contact you shortly.");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
    

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Hire a Vendor</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Get access to trusted, pre-vetted professionals for your business needs.
          We connect you with the right vendors so you can focus on growth.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            Verified Vendors
          </h3>
          <p className="text-gray-600">
            All vendors are carefully screened to ensure quality, reliability,
            and professionalism.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            Fast Matching
          </h3>
          <p className="text-gray-600">
            We quickly connect you with the right vendor based on your business
            needs and goals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700 mb-3">
            Cost Effective
          </h3>
          <p className="text-gray-600">
            Save time and money by outsourcing tasks to skilled professionals
            without long-term commitments.
          </p>
        </div>
      </section>

      {/* Vendor Categories */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Vendor Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Administrative Support",
              "Customer Service",
              "HR & Recruitment",
              "Digital Marketing",
              "IT & Tech Support",
              "Training & Facilitation",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-green-100 p-6 rounded-xl hover:shadow-md"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Request a Vendor
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <select
            name="service"
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="">Select Service Needed</option>
            <option>Administrative Support</option>
            <option>Customer Service</option>
            <option>HR & Recruitment</option>
            <option>Digital Marketing</option>
            <option>IT & Tech Support</option>
            <option>Training</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe your needs..."
            rows={4}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Need Help Choosing a Vendor?
        </h2>
        <p className="mb-6">
          Our team is ready to guide you to the best solution for your business.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold"
        >
          Talk to Us
        </a>
      </section>
    </div>
  );
}