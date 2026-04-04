import Image from "next/image";
import { blogs } from "@/data/blog";
import { notFound } from "next/navigation";

export default async function BlogDetail({ params }: any) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) return notFound(); // Better than a simple h1

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="mx-auto max-w-4xl px-6 pt-16 pb-10 text-center">
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
            {/* Category Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#4ECDC4] text-white text-xs font-bold uppercase tracking-widest shadow-sm">
            {blog.category}
            </span>
            
            {/* Date with icon/styling */}
            <div className="flex items-center text-sm text-gray-500 font-medium">
            <span className="mr-2 italic opacity-70">Published on</span>
            <time>{blog.date}</time>
            </div>
        </div>
        
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {blog.title}
        </h1>
        </header>

      {/* Featured Image */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-video">
        <Image 
          src={blog.image} 
          alt={blog.title} 
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:bg-[#000] first-letter:text-white first-letter:pl-[15px] first-letter:pr-[15px] first-letter:pt-[8px] first-letter:pb-[8px]">
            {blog.description}
          </p>
        </div>

        {/* Footer / Share (Optional) */}
        <div className="mt-16 border-t border-gray-100 pt-8">
          <div className="flex items-center justify-between">
            <a  href="/blog" className="font-semibold rounded-full bg-[#4ECDC4] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#45B7B8]">
              ← Back to all posts
            </a>
            <div className="flex gap-4">
              {/* Add social icons here */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}