export default function ServicesSection() {
  const services = [
    {
      id: "koding-akademi",
      title: "Koding Akademi",
      description:
        "Kursus belajar teknologi di Indonesia untuk berbagai kalangan usia",
      image: "/services/koding-akademi.jpg",
    },
    {
      id: "virtual-office",
      title: "Virtual Office",
      description: "Kursus belajar teknologi di Indonesia...",
      image: "/services/virtual-office.jpg",
    },
    {
      id: "fnb-bali",
      title: "FNB Bali",
      description: "Kursus belajar teknologi di Indonesia...",
      image: "/services/fnb-bali.jpg",
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
    <section className="w-full py-20 bg-white flex justify-center items-center">
      <div className="w-full h-[100%] max-w-6xl px-6 flex justify-center items-center flex-col">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-8">
            <div className="lg:w-1/2">
            <h3 className="text-blue-600 tracking-widest text-sm font-medium">
                SERVICES
              </h3>
              <h2 className="text-[#202020]
                false mt-2
                text-2xl sm:text-4xl leading-9 sm:leading-14
                false
                font-bold">
                Smart, Scalable, and Integrated Digital Solutions
              </h2>
            </div>
            <div className="lg:w-1/2 flex justify-end items-end h-[100%]">
            <p className="text-sm sm:text-base opacity-80 leading-7 text-right max-w-[540px] pl-26">
                Kami menyediakan layanan berbasis teknologi, mulai dari UI/UX,
                software development, hingga cloud-based solutions — semuanya
                dirancang untuk pertumbuhan yang berkelanjutan dan efisien.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[600px]">
            {/* Koding Akademi - Top Left */}
            <div className="col-span-12 md:col-span-6 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              {/* <img 
                            src={services[0].image} 
                            alt={services[0].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        /> */}

              {/* Overlay */}
              <div className="absolute inset-0 bg-[black] bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-xl font-bold">{services[0].title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {services[0].description}
                </p>
              </div>
            </div>

            {/* Virtual Office - Top Right */}
            <div className="col-span-12 md:col-span-6 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              {/* <img 
                            src={services[1].image} 
                            alt={services[1].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        /> */}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-xl font-bold">{services[1].title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>

            {/* FNB Bali - Bottom Left (Smaller) */}
            <div className="col-span-12 md:col-span-4 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              {/* <img 
                            src={services[2].image} 
                            alt={services[2].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        /> */}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-xl font-bold">{services[2].title}</h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {services[2].description}
                </p>
              </div>
            </div>

            {/* Software House - Bottom Right (Larger) */}
            <div className="col-span-12 md:col-span-8 row-span-1 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-[#d9d9d9]"></div>

              {/* Future image */}
              {/* <img 
                            src={services[3].image} 
                            alt={services[3].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        /> */}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-xl font-bold">{services[3].title}</h3>
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
