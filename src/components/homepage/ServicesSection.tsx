export default function ServicesSection() {
  const services = [
    {
      id: "koding-akademi",
      title: "Koding Akademi",
      description:
        "Kursus belajar teknologi di Indonesia untuk berbagai kalangan usia",
      image: "/services (1).png",
    },
    {
      id: "virtual-office",
      title: "Virtual Office",
      description: "Kursus belajar teknologi di Indonesia...",
      image: "/services (2).png",
    },
    {
      id: "fnb-bali",
      title: "FNB Bali",
      description: "Kursus belajar teknologi di Indonesia...",
      image: "/services (3).png",
    },
    {
      id: "software-house",
      title: "Software House",
      description:
        "Kursus belajar teknologi di Indonesia untuk berbagai kalangan usia",
      image: "/services.png",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white flex justify-center items-center">
      <div className="w-full max-w-6xl px-4 md:px-6 flex justify-center items-center flex-col">
        <div className="w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="lg:w-1/2">
              <h3 className="text-blue-600 tracking-widest text-sm font-medium">
                SERVICES
              </h3>
              <h2 className="text-[#202020] mt-2 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
                Smart, Scalable, and Integrated Digital Solutions
              </h2>
            </div>
            <div className="lg:w-1/2 flex justify-start lg:justify-end items-end">
              <p className="text-sm md:text-base opacity-80 leading-relaxed text-left lg:text-right lg:max-w-[540px] lg:pl-[100px]">
                Kami menyediakan layanan berbasis teknologi, mulai dari UI/UX,
                software development, hingga cloud-based solutions — semuanya
                dirancang untuk pertumbuhan yang berkelanjutan dan efisien.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-fr lg:h-[600px]">
            {/* Koding Akademi - Top Left */}
            <div className="lg:col-span-6 lg:row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300  min-h-[250px] md:min-h-[300px]">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              <img
                src={services[0].image}
                alt={services[0].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white backdrop-blur-sm bg-black/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-lg md:text-xl font-bold">{services[0].title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {services[0].description}
                </p>
              </div>
            </div>

            {/* Virtual Office - Top Right */}
            <div className="lg:col-span-6 lg:row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300  min-h-[250px] md:min-h-[300px]">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              <img
                src={services[1].image}
                alt={services[1].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white backdrop-blur-sm bg-black/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-lg md:text-xl font-bold">{services[1].title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>

            {/* FNB Bali - Bottom Left (Smaller) */}
            <div className="lg:col-span-4 lg:row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300  min-h-[250px] md:min-h-[300px] mt-2">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              <img
                src={services[2].image}
                alt={services[2].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white backdrop-blur-sm bg-black/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-lg md:text-xl font-bold">{services[2].title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {services[2].description}
                </p>
              </div>
            </div>

            {/* Software House - Bottom Right (Larger) */}
            <div className="lg:col-span-8 lg:row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300  min-h-[250px] md:min-h-[300px] mt-2">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              <img
                src={services[3].image}
                alt={services[3].title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white backdrop-blur-sm bg-black/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-lg md:text-xl font-bold">{services[3].title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {services[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
