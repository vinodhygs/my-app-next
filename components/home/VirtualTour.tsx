'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

export function VirtualTour() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#2A2A2A] relative overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/bg.jpg"
            alt="bg"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-block bg-[#4ECDC4]/20 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-6">
                VIRTUAL TOUR
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
                Experience Our Hospital Virtually
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Take a virtual tour of our state-of-the-art facilities and discover why thousands of patients trust us with their healthcare needs. See our modern equipment, comfortable patient rooms, and welcoming environment.
              </p>

              <div className="flex flex-wrap gap-6">

                {/* Item 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4ECDC4] rounded-full flex items-center justify-center">
                    <i className="ri-hospital-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">500+ Beds</div>
                    <div className="text-white/60 text-sm">Patient Capacity</div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center">
                    <i className="ri-user-star-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold">200+ Doctors</div>
                    <div className="text-white/60 text-sm">Expert Physicians</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80">

                <Image
                  src="/popup.jpg"
                  alt="popup"
                  fill
                  className="w-full  h-80 object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    id="watch-Virtually-btn"
                    aria-haspopup="dialog"
                    onClick={() => setVideoOpen(true)}
                    className="cursor-pointer w-20 h-20 bg-[#4ECDC4] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <i className="ri-play-fill text-white text-3xl ml-1"></i>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Video Modal (rendered outside the section so z-index is clean) */}
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}