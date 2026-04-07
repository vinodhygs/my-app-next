

"use client";
import { useState } from "react";

export function AboutTabs() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    {
      id: "mission",
      label: "Our Mission",
      title: "Dedicated to Healing and Hope",
      description:
        "Our mission is to provide exceptional healthcare services that improve the quality of life for our patients and communities. We strive to combine medical excellence with compassionate care.",
        image: "/tab.jpg",
    },
    {
      id: "values",
      label: "Our Values",
      title: "Our Core Values",
      description:
        "We believe in integrity, compassion, and excellence. Our values guide every decision we make and ensure the best care for our patients.",
        image: "/tab.jpg",
    },
    {
      id: "team",
      label: "Our Team",
      title: "Meet Our Experts",
      description:
        "Our team consists of highly qualified doctors and healthcare professionals dedicated to providing top-quality care.",
        image: "/tab.jpg",
    },
    {
      id: "history",
      label: "Our History",
      title: "Our Journey",
      description:
        "From humble beginnings to a leading healthcare provider, our journey reflects dedication and growth.",
        image: "/tab.jpg",
    },
  ];

  const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E8F5F3] text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-4">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2A2A] mb-4">
            Discover Our Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Tabs */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-2 shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#4ECDC4] text-white shadow-md"
                      : "text-[#6B6B6B] hover:bg-[#E8F5F3]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{tab.label}</span>
                    <i
                      className={`ri-arrow-right-line transition-opacity ${
                        activeTab === tab.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    ></i>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">

                {/* Text */}
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-serif text-[#2A2A2A] mb-6">
                    {active.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
                    {active.description}
                  </p>

                  <button className="bg-[#2A2A2A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4ECDC4] transition-colors">
                    Learn More
                  </button>
                </div>

                {/* Image */}
                <div className="h-64 md:h-auto">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}