// components/Card.tsx

import Image from "next/image";
import Link from "next/link";

type CardProps = {
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
    slug: string;
};

export function Card({
    title,
    description,
    image,
    category,
    date,
    slug,
}: CardProps) {
    return (
        <article className="bg-[#FAF8F5] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
            <Link
                href={`/blog/${slug}`} >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={250}
                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#4ECDC4] text-white px-3 py-1 rounded-full text-sm">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{date}</p>

                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-[#4ECDC4]">
                        {title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>


                    <div className="font-semibold font-serif inline-flex items-center gap-2 text-[#2A2A2A] font-medium group-hover:text-[#4ECDC4] transition-colors">

                        Read More
                        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </div>
            </Link>
        </article>
    );
}