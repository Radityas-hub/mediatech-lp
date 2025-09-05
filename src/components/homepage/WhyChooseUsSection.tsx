interface WhyChooseUsSectionProps {
  backgroundImage?: string;
}

export default function WhyChooseUsSection({
  backgroundImage = "/backgrounds/why-choose-us.png",
}: WhyChooseUsSectionProps) {
  const features = [
    {
      id: "diversified-solutions",
      title: "Diversified Solutions",
      description: "Melayani sektor teknologi, properti, edukasi, dan F&B.",
      icon: "/icons/diversified-solutions.svg", // Path ke gambar icon
    },
    {
      id: "integrated-ecosystem",
      title: "Integrated Ecosystem",
      description: "Setiap lini bisnis saling bersinergi untuk pertumbuhan.",
      icon: "/icons/integrated-ecosystem.svg", // Path ke gambar icon
    },
    {
      id: "commitment-to-quality",
      title: "Commitment to Quality",
      description: "Fokus pada kualitas dari desain hingga implementasi.",
      icon: "/icons/commitment-quality.svg", // Path ke gambar icon
    },
    {
      id: "people-centric-approach",
      title: "People-Centric Approach",
      description: "Fokus pada kolaborasi dan pengguna.",
      icon: "/icons/people-centric.svg", // Path ke gambar icon
    },
  ];

  return (
    <section
      className="relative w-full py-20 bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Content */}
        <div className="w-full h-[100%] max-w-6xl px-6 flex justify-center items-center flex-col relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white flex flex-col gap-3">
            <h3 className="text-white tracking-widest text-sm font-medium mb-14">
              WHY CHOOSE US
            </h3>
            <h2
              className="text-white
                false
                text-2xl sm:text-4xl leading-9 sm:leading-14
                false
                font-bold "
            >
              Trusted Digital Solutions for Every Industry
            </h2>
            <p className="text-sm sm:text-base opacity-60 leading-7 mx-auto mt-3">
              Dengan pengalaman lebih dari 10 tahun, kami membangun sistem
              digital yang fleksibel, terintegrasi, dan siap mendukung
              pertumbuhan bisnis di berbagai sektor.
            </p>

            {/* Client Stats */}
            <div className="flex items-center gap-4 mb-8 mt-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#006EFF]">600+</div>
                <div className="text-sm opacity-60">Our Trusted Clients</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 w-fit hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2">
              Get in touch
              <img
                src="/arrow-icon.webp"
                alt="Arrow"
                className="w-4 h-4"
              />
            </button>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-700 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-100 transition-all duration-300 border border-gray-600 border-opacity-30"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 bg-blue-500 rounded-lg mb-6 flex items-center justify-center p-3">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback jika gambar tidak ditemukan
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML =
                        '<div class="text-white text-lg">⚡</div>';
                    }}
                  />
                </div>

                <h3 className="text-white text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-white opacity-80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
