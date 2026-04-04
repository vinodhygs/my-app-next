"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react"; // npm install lucide-react

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form logic here
    alert("Message sent! We will get back to you shortly.");
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our services or want to book an appointment? 
            Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 1. Contact Information Cards */}
          <div className="space-y-6">
            <ContactInfoCard 
              icon={<Phone className="text-white" size={20} />}
              title="Emergency Call"
              detail="+1 (555) 123-4567"
              subDetail="24/7 Available"
            />
            <ContactInfoCard 
              icon={<Mail className="text-white" size={20} />}
              title="Email Us"
              detail="info@medcare.com"
              subDetail="Response within 24 hours"
            />
            <ContactInfoCard 
              icon={<MapPin className="text-white" size={20} />}
              title="Location"
              detail="123 Healthcare Ave"
              subDetail="Medical District, NY 10001"
            />
            <ContactInfoCard 
              icon={<Clock className="text-white" size={20} />}
              title="Working Hours"
              detail="Mon - Sat: 8am - 8pm"
              subDetail="Sunday: Emergency Only"
            />
          </div>

          {/* 2. Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all">
                  <option>General Inquiry</option>
                  <option>Appointment Booking</option>
                  <option>Medical Records</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] transition-all"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#4ECDC4] hover:bg-[#3dbdb4] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

// Reusable Info Card Component
function ContactInfoCard({ icon, title, detail, subDetail }: any) {
  return (
    <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#4ECDC4] transition-colors group">
      <div className="w-12 h-12 bg-[#4ECDC4] rounded-xl flex items-center justify-center mr-5 shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-bold text-[#4ECDC4] uppercase tracking-wider mb-0.5">{title}</h4>
        <p className="text-slate-900 font-bold">{detail}</p>
        <p className="text-slate-500 text-xs">{subDetail}</p>
      </div>
    </div>
  );
}

// import Form from 'next/form'
 
// export default function Page() {
//   return (
//     <Form action="/search">
//       {/* On submission, the input value will be appended to
//           the URL, e.g. /search?query=abc */}
//       <input name="query" />
//       <button type="submit">Submit</button>
//     </Form>
//   )
// }