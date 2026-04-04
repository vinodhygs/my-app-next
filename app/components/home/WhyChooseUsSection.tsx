function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 21s-7-4.534-9.333-8.12C.667 9.295 2.1 6.5 5.2 6.1c1.6-.2 3 .6 3.8 1.7.8-1.1 2.2-1.9 3.8-1.7 3.1.4 4.533 3.195 2.533 6.78C19 16.466 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 13h2l1-2 1.3 3 1-1.5h2.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MicroscopeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 20a7 7 0 0 1 7-7h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 4l-2 2 3 3 2-2-3-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 12l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UserHeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 21s-7-4.534-9.333-8.12C.667 9.295 2.1 6.5 5.2 6.1c1.6-.2 3 .6 3.8 1.7.8-1.1 2.2-1.9 3.8-1.7 3.1.4 4.533 3.195 2.533 6.78C19 16.466 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M7.5 14.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 17.5l-1.5-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17.5l1.5-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HospitalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M3 11h18v10H3V11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M8 11V5h8v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 15v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10.5 16.5h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const cards = [
  {
    title: "24/7 Emergency Care",
    description:
      "Round-the-clock emergency services with specialized trauma teams ready to provide immediate care when you need it most.",
    Icon: HeartIcon,
  },
  {
    title: "Advanced Diagnostics",
    description:
      "State-of-the-art medical imaging and laboratory services providing accurate, fast results for better patient outcomes.",
    Icon: MicroscopeIcon,
  },
  {
    title: "Personalized Treatment",
    description:
      "Tailored healthcare plans designed specifically for each patient's unique needs and medical history.",
    Icon: UserHeartIcon,
  },
  {
    title: "Modern Facilities",
    description:
      "Comfortable, healing environments equipped with the latest medical technology and amenities.",
    Icon: HospitalIcon,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-[#E8F5F3] text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-4">WHY CHOOSE US</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2A2A] mb-4">Comprehensive Healthcare Services</h2>
        <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">
          We provide a full spectrum of medical services designed to meet all your healthcare needs under one roof.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <article
            key={card.title}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#E8F5F3] text-[#4ECDC4] mb-6 transition-colors group-hover:bg-[#4ECDC4] group-hover:text-white">
                <card.Icon />
              </div>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2A2A2A] mb-3">{card.title}</h3>
            <p className="text-[#6B6B6B] leading-relaxed">{card.description}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}





