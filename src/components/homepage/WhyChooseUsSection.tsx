import Button from "@/components/core/button";

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
      icon: "/public/reason-icon (2).svg", // Path ke gambar icon
    },
    {
      id: "integrated-ecosystem",
      title: "Integrated Ecosystem",
      description: "Setiap lini bisnis saling bersinergi untuk pertumbuhan.",
      icon: "/public/reason-icon (3).svg", // Path ke gambar icon
    },
    {
      id: "commitment-to-quality",
      title: "Commitment to Quality",
      description: "Fokus pada kualitas dari desain hingga implementasi.",
      icon: "/public/reason-icon (1).svg", // Path ke gambar icon
    },
    {
      id: "people-centric-approach",
      title: "People-Centric Approach",
      description: "Fokus pada kolaborasi dan pengguna.",
      icon: "/public/reason-icon (4).svg", // Path ke gambar icon
    },
  ];

  return (
    <section
      className="relative w-full py-16 md:py-20 bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Content */}
      <div className="w-full max-w-6xl px-4 md:px-6 flex justify-center items-center flex-col relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white flex flex-col gap-4 text-left">
            <h3 className="text-white tracking-widest text-sm font-medium mb-8 md:mb-14">
              WHY CHOOSE US
            </h3>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl leading-tight font-bold">
              Trusted Digital Solutions for Every Industry
            </h2>
            <p className="text-sm sm:text-base opacity-60 leading-7 mt-3">
              Dengan pengalaman lebih dari 10 tahun, kami membangun sistem
              digital yang fleksibel, terintegrasi, dan siap mendukung
              pertumbuhan bisnis di berbagai sektor.
            </p>

            {/* Client Stats */}
            <div className="flex items-center justify-start gap-4 mb-6 md:mb-8 mt-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: "url('/person.png')" }}></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: "url('/person.png')" }}></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: "url('/person.png')" }}></div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-[#006EFF]">600+</div>
                <div className="text-xs md:text-sm opacity-60">Our Trusted Clients</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start">
              <Button>Get in touch</Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-700 bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-opacity-100 transition-all duration-300 border border-gray-600 border-opacity-30"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg mb-3 flex items-center justify-center border-2 border-transparent">
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

                <h3 className="text-white font-bold mb-2 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-white opacity-80 text-xs md:text-sm leading-relaxed">
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
