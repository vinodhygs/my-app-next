import React from 'react';
import Link from 'next/link';
import Signup from '../signup/page';


export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Visual/Branding */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-[#4ECDC4] to-[#45B7B8] p-12 flex-col justify-between text-white relative">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

          <div>
            <Link href="/" className="flex items-center gap-3 mb-12">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/20 backdrop-blur-sm">
                <i className="ri-heart-pulse-line text-2xl text-white"></i>
              </div>
              <span className="text-2xl font-bold tracking-tight">MedCare</span>
            </Link>
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Welcome Back to <br /> Your Health Portal
            </h1>
            <p className="text-white/80 text-lg max-w-sm">
              Access your medical records, book appointments, and connect with your doctors in one secure place.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-[#4ECDC4] bg-gray-200"></div>
              ))}
            </div>
            <p className="text-sm font-medium">Join 10k+ patients today</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <div className="max-w-sm mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-500">Enter your details to access your account</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/50 focus:border-[#4ECDC4] transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <Link href={"forgotpassword"} className="text-sm font-semibold text-[#4ECDC4] hover:text-[#45B7B8]">Forgot?</Link>
                </div>
                <div className="relative">
                  <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/50 focus:border-[#4ECDC4] transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#4ECDC4] focus:ring-[#4ECDC4]" />
                <label className="ml-2 text-sm text-gray-600">Remember me for 30 days</label>
              </div>

              <button className="w-full bg-[#4ECDC4] hover:bg-[#45B7B8] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#4ECDC4]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Sign In
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2">
              <span className="text-gray-500">Don't have an account?</span>
              <Link href={"signup"} className="font-bold text-[#4ECDC4] hover:text-[#45B7B8]">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}