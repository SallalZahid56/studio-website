"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Zap, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset toast message after 5s
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id || "budget"]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-black text-white w-full overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mx-auto mb-8 max-w-4xl text-4xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-8xl">
            <div className="text-white">LET&rsquo;S CREATE</div>
            <div className="text-brand">SOMETHING EPIC</div>
          </div>
          <p className="mx-auto max-w-3xl text-lg font-medium text-gray-300 sm:text-xl md:text-2xl">
            Ready to <span className="font-bold text-brand">dominate your market?</span> Let&rsquo;s turn your vision into a <span className="font-bold text-white">digital masterpiece</span> that leaves your competition speechless.
          </p>
        </div>

        {/* Main Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Left Column: Info & Process */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-brand">READY TO LAUNCH?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Whether you&rsquo;re a startup ready to disrupt or an enterprise looking to innovate, we&rsquo;re here to make it happen. No project too bold, no vision too ambitious.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Email Us</div>
                  <div className="text-brand font-medium">hello@pixelcraft.studio</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Call Us</div>
                  <div className="text-gray-300">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Visit Us</div>
                  <div className="text-gray-300">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Process Card */}
            <div className="bg-gray-900 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-brand" />
                <h4 className="text-xl font-bold">OUR PROCESS</h4>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center shrink-0 font-black text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider">Discovery Call</div>
                    <div className="text-gray-400 text-sm">We dive deep into your vision and goals</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center shrink-0 font-black text-sm">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider">Strategy Session</div>
                    <div className="text-gray-400 text-sm">We craft a custom battle plan for success</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center shrink-0 font-black text-sm">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-white uppercase tracking-wider">Creation Magic</div>
                    <div className="text-gray-400 text-sm">We bring your vision to life with obsessive attention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl border-0 bg-gray-900 shadow-2xl p-8 h-fit">
            <div className="mb-8 text-xl font-black text-white sm:text-2xl">
              START YOUR <span className="text-brand">REVOLUTION</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-white font-bold block" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-md border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white font-bold block" htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-md border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white font-bold block" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-md border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white font-bold block" htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-md border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm"
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white font-bold block" htmlFor="budget">Investment Range</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm"
                >
                  <option value="">Select your investment level</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white font-bold block" htmlFor="message">Tell Us About Your Vision</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 rounded-md border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all text-sm resize-none"
                  placeholder="Describe your project, goals, and how you want to dominate your market..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center rounded-full bg-brand px-4 py-3 text-sm font-black text-white transition-all hover:bg-brand-light sm:px-6 sm:py-4 sm:text-lg"
              >
                <span className="leading-none">LAUNCH MY PROJECT</span>
                <Send className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 sm:ml-3 sm:h-5 sm:w-5" />
              </button>

              {submitted && (
                <div className="text-center text-green-400 font-bold mt-4 animate-fade-in">
                  Project request sent! We&rsquo;ll reach out within 24 hours.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}