import Image from "next/image";

export default function VirtualTourStats() {
  return (
    <>
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block bg-[#4ECDC4]/20 text-[#4ECDC4] px-4 py-2 rounded-full text-sm font-medium mb-6">
              VIRTUAL TOUR
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-6">
              Experience Our Hospital Virtually
            </h2>

            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
              Take a virtual tour of our state-of-the-art facilities and discover why thousands of patients trust us with their healthcare needs. See our modern equipment, comfortable patient rooms, and welcoming environment.
            </p>

            <div className="flex flex-wrap gap-6">

              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4ECDC4] rounded-full flex items-center justify-center">
                  <i className="ri-hospital-line text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-[#6B6B6B] font-semibold">500+ Beds</div>
                  <div className="text-[#6B6B6B] text-sm">Patient Capacity</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center">
                  <i className="ri-user-star-line text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-[#6B6B6B] font-semibold">200+ Doctors</div>
                  <div className="text-[#6B6B6B] text-sm">Expert Physicians</div>
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


              </div>
            </div>

        </div>
      </div>
      </section>
    </>
  );
}