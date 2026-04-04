import Link from "next/link";

import { FacilityTourSection } from "./components/home/FacilityTourSection";
import { SpecializedServicesSection } from "./components/home/SpecializedServicesSection";
import { VirtualTour } from "./components/home/VirtualTour";
import { WhyChooseUsSection } from "./components/home/WhyChooseUsSection";
import { AboutTabs } from "./components/home/AboutTabs";
import { Card } from "./components/card/Card";

import { blogs } from "@/data/blog";

export default function Home() {
  return (
    <div className="bg-[#FAF8F5] text-slate-900">
      <main>
        <WhyChooseUsSection />
        <FacilityTourSection />
        <SpecializedServicesSection />
        <VirtualTour />
        <AboutTabs />

        <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <span className="inline-block bg-[#FFE8E8] text-[#FF6B6B] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  HEALTH INSIGHTS
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2A2A]">
                  Latest from Our Blog
                </h2>
              </div>

             
              <Link
                href="/blog"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#4ECDC4] font-medium hover:gap-3 transition-all"
              >
                View All Articles
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
            {blogs.map((blog) => (
              <Card key={blog.slug} {...blog} />
            ))}
              
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}