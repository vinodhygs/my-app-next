"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#4ECDC4] to-[#45B7B8]">
              <i className="ri-heart-pulse-line text-2xl text-white"></i>
            </div>
          </Link>
        </div>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
              <p className="text-gray-500">
                No worries! Enter your email and we'll send you reset instructions.
              </p>
            </div>

            <form 
              className="space-y-6" 
              onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <i className="ri-mail-send-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/50 focus:border-[#4ECDC4] transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#4ECDC4] hover:bg-[#45B7B8] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#4ECDC4]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="text-center animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-mail-check-line text-4xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
            <p className="text-gray-500 mb-8">
              We've sent a password reset link to your email address.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-[#4ECDC4] font-bold hover:text-[#45B7B8] flex items-center justify-center gap-2 mx-auto"
            >
              <i className="ri-arrow-left-line"></i>
              Try another email
            </button>
          </div>
        )}

        {/* Back to Login */}
        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <Link href="/login" className="text-sm font-bold text-gray-400 hover:text-[#4ECDC4] transition-colors flex items-center justify-center gap-2">
            <i className="ri-arrow-left-s-line"></i>
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}