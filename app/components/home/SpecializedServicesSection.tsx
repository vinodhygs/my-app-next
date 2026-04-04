const services = [
  {
    title: "Primary Care",
    description:
      "Comprehensive health services for the whole family, from routine check-ups to chronic disease management.",
    icon: "ri-stethoscope-line",
    bg: "bg-[#E8F5F3]",
    iconBg: "bg-[#4ECDC4]",
  },
  {
    title: "Surgery",
    description:
      "Expert surgical care using minimally invasive techniques for faster recovery and better outcomes.",
    icon: "ri-surgical-mask-line",
    bg: "bg-[#FFE8E8]",
    iconBg: "bg-[#FF6B6B]",
  },
  {
    title: "Mental Health",
    description:
      "Compassionate psychiatric and counseling services to support your emotional and psychological well-being.",
    icon: "ri-mental-health-line",
    bg: "bg-[#E8E3FF]",
    iconBg: "bg-[#9B8FD4]",
  },
  {
    title: "Women's Health",
    description:
      "Specialized care for women at every stage of life, from preventive screenings to maternity services.",
    icon: "ri-women-line",
    bg: "bg-[#FFF0E8]",
    iconBg: "bg-[#FF9B6B]",
  },
];

export function SpecializedServicesSection() {
  return (
    <section id="specialized-services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16"><span className="inline-block bg-[#E8E3FF] text-[#9B8FD4] px-4 py-2 rounded-full text-sm font-medium mb-4">OUR SERVICES</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2A2A2A] mb-4">Specialized Medical Services</h2>
      <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto">From routine care to specialized treatments, we offer comprehensive medical services for every need.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <article
          key={index}
          className={`${service.bg} rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 group`}
        >
            <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-3xl text-white`}></i>
              </div>
             {/* Title */}
             <h3 className="font-serif text-2xl font-bold text-[#2A2A2A] mb-4">
                {service.title}
              </h3>

            {/* Description */}
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
                {service.description}
            </p>

            {/* Link */}
            <a
                href="#"
                className="inline-flex items-center gap-2 text-[#2A2A2A] font-medium group-hover:text-[#4ECDC4] transition-colors"
              >
                Learn More
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </a>

          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
