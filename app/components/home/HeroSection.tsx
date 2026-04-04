"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Excellence in Healthcare",
    subtitle: "World-class medical care with compassion and innovation",
    image: "/banners/banner1.jpg",
  },
  {
    title: "Cutting-Edge Technology",
    subtitle: "State-of-the-art diagnostic and treatment facilities",
    image: "/banners/banner2.jpg",
  },
  {
    title: "Personalized Patient Care",
    subtitle: "Dedicated specialists focused on your recovery journey",
    image: "/banners/banner3.jpg",
  },
];

// ── Replace this with your actual YouTube / Vimeo embed URL ──────────────────
const VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/EngW7tLk6R8?autoplay=1&rel=0&modestbranding=1";

// ── Video Modal ───────────────────────────────────────────────────────────────
function VideoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Keyboard: close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-all duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Video player"
        className={`fixed inset-0 z-[70] flex items-center justify-center p-4 transition-all duration-300 ${open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
          }`}
      >
        <div className="relative w-full max-w-4xl">
          {/* Close button */}
          <button
            aria-label="Close video"
            onClick={onClose}
            className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* 16 : 9 iframe wrapper */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            {open && (
              <iframe
                ref={iframeRef}
                src={VIDEO_EMBED_URL}
                title="MedCare – Watch Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────
export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <>
      <section id="home" className="relative h-[600px] overflow-hidden lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              alt={slide.title}
              className="h-full w-full object-cover"
              src={slide.image}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl text-white">
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-200">
                EXCELLENCE IN HEALTHCARE
              </p>
              <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl font-serif">
                {slides[activeIndex].title}
              </h1>
              <p className="mt-5 text-lg text-white/90 md:text-xl">
                {slides[activeIndex].subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-cyan-500 px-8 py-4 font-medium text-white transition-colors hover:bg-cyan-600">
                  Get Started
                </button>

                {/* Watch Video button */}
                <button
                  id="watch-video-btn"
                  aria-haspopup="dialog"
                  onClick={() => setVideoOpen(true)}
                  className="cursor-pointer group flex items-center gap-3 rounded-full bg-white/20 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105"
                >
                  {/* Pulsing play icon */}
                  <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white text-cyan-600 pr-[3px]">
                    <span className="absolute inset-0 rounded-full bg-white/60" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="relative h-4 w-4 translate-x-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 rounded-full transition-all ${index === activeIndex
                ? "w-8 bg-cyan-400"
                : "w-3 bg-white/60 hover:bg-white"
                }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <button
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          onClick={nextSlide}
        >
          ›
        </button>
      </section>

      {/* Video Modal (rendered outside the section so z-index is clean) */}
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
