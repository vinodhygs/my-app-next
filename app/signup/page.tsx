import React from 'react';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Branding & Trust (Hidden on Mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#4ECDC4] to-[#45B7B8] p-12 flex-col justify-between text-white relative">
          {/* Abstract Decorations */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

          <div>
            <Link href="/" className="flex items-center gap-3 mb-12">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/20 backdrop-blur-sm">
                <i className="ri-heart-pulse-line text-2xl text-white"></i>
              </div>
              <span className="text-2xl font-bold tracking-tight">MedCare</span>
            </Link>
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Start Your Journey <br /> to Better Health
            </h1>
            <ul className="space-y-4">
              {[
                { icon: "ri-calendar-check-line", text: "Easy online appointment booking" },
                { icon: "ri-shield-check-line", text: "Secure access to medical records" },
                { icon: "ri-chat-smile-3-line", text: "Direct communication with specialists" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90">
                  <i className={`${item.icon} text-xl text-white`}></i>
                  <span className="text-sm font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <p className="text-sm italic text-white/90">
              "Joining MedCare was the best decision for my family's health. The portal is so easy to use!"
            </p>
            <p className="mt-2 text-xs font-bold">— Sarah Johnson, Patient</p>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-white">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-500">Join our community for personalized care.</p>
            </div>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <i className="ri-user-heart-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/50 focus:border-[#4ECDC4] transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/50 focus:border-[#4ECDC4] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <i className="ri-lock-2-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/50 focus:border-[#4ECDC4] transition-all"
                  />
                </div>
                <p className="mt-1 text-[10px] text-gray-400">Must be at least 8 characters with a number.</p>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-[#4ECDC4] focus:ring-[#4ECDC4]" />
                <label className="text-xs text-gray-500 leading-normal">
                  By creating an account, I agree to the 
                  <Link href="/terms" className="text-[#4ECDC4] font-semibold hover:underline px-1">Terms of Service</Link> 
                  and 
                  <Link href="/privacy" className="text-[#4ECDC4] font-semibold hover:underline px-1">Privacy Policy</Link>.
                </label>
              </div>

              {/* Submit */}
              <button className="w-full bg-[#4ECDC4] hover:bg-[#45B7B8] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#4ECDC4]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 mt-4">
                Create My Account
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2">
              <span className="text-sm text-gray-500">Already have an account?</span>
              <Link href="/login" className="text-sm font-bold text-[#4ECDC4] hover:text-[#45B7B8]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}