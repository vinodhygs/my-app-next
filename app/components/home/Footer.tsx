"use client";

import { useEffect, useState } from "react";

type FooterDataType = {
  about: string;
  socials: string[];
  quick_links: string[];
  services: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
};


export function Footer() {
  const [footerData, setFooterData] = useState<FooterDataType | null>(null);

  useEffect(() => {
    fetch("/api/footer")
      .then((res) => res.json())
      .then((data) => {
        setFooterData(data);
        console.log("Response:", data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!footerData) {
    return <p className="text-center text-white py-10">Loading...</p>;
  }

  return (
    <footer id="contact" className="bg-[#2A2A2A] pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4ECDC4] to-[#45B7B8] rounded-xl flex items-center justify-center">
                <i className="ri-heart-pulse-line text-2xl text-white"></i>
              </div>
              <span className="text-2xl font-bold text-white">MedCare</span>
            </div>

            <p className="text-white/70 leading-relaxed mb-6">
              {footerData?.about}
            </p>

            <div className="flex gap-4">
              {footerData.socials.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#4ECDC4] transition-colors"
                >
                  <i className={`ri-${item}-fill`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerData.quick_links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#4ECDC4] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {footerData.services.map((service, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-[#4ECDC4] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#4ECDC4] text-xl mt-1"></i>
                <span className="text-white/70">
                  {footerData.contact.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-[#4ECDC4] text-xl"></i>
                <span className="text-white/70">
                  {footerData.contact.phone}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-[#4ECDC4] text-xl"></i>
                <span className="text-white/70">
                  {footerData.contact.email}
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} MedCare Hospital. All rights reserved.
            </p>

            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/60 text-sm hover:text-[#4ECDC4] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}