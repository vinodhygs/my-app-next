import type { Metadata } from "next";

import Link from "next/link";

import { Card } from "../components/card/Card"

import { blogs } from "@/data/blog";

export const metadata: Metadata = {
  title: "blog section",
  description: "blog post from blog section.",
};

export default function BlogPage() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFE8E8] text-[#FF6B6B] px-4 py-2 rounded-full text-sm font-medium mb-4">
            HEALTH INSIGHTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2A2A] mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">Experience our state-of-the-art medical facility designed for your comfort and care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <Card key={blog.slug} {...blog} />
          ))}

        </div>
      </div>
    </section>

  );
}