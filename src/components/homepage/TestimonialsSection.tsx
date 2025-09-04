interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Wijaya",
      position: "CEO TasteLab",
      company: "TasteLab",
      quote: "Bersama Mediatech, kami berhasil mendigitalisasi seluruh operasional restoran kami. Profesional dan penuh solusi!",
      avatar: "/avatars/sarah-wijaya.jpg",
    },
    {
      id: "2", 
      name: "Budi Santosa",
      position: "Founder KampusTech",
      company: "KampusTech",
      quote: "Tim Mediatech tidak hanya membangun produk, tetapi juga memahami visi edukasi kami!",
      avatar: "/avatars/budi-santosa.jpg",
    },
    {
      id: "3",
      name: "Clara Anggraini", 
      position: "Property Manager BuiltHome Realty",
      company: "BuiltHome Realty",
      quote: "Tidak ada kata lain selain luar biasa untuk Mediatech!",
      avatar: "/avatars/clara-anggraini.jpg",
    },
    {
      id: "4",
      name: "Lina Marlina",
      position: "Digital Consultant", 
      company: "Independent",
      quote: "Mediatech punya pendekatan unik: tidak hanya teknis, tapi juga memahami brand kami secara menyeluruh.",
      avatar: "/avatars/lina-marlina.jpg",
    },
    {
      id: "5",
      name: "Budi Santosa",
      position: "Founder KampusTech",
      company: "KampusTech", 
      quote: "Pertama kali kerjasama dan sangat puas! Good Job!",
      avatar: "/avatars/budi-santosa-2.jpg",
    },
    {
      id: "6",
      name: "Rizky Ramadhan",
      position: "CTO @Innotech Global",
      company: "Innotech Global",
      quote: "Kolaborasi dengan Mediatech sangat mulus. Mereka cepat tanggap dan fleksibel dalam menyesuaikan kebutuhan teknologi kami.",
      avatar: "/avatars/rizky-ramadhan.jpg",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-blue-600 tracking-widest text-sm font-medium mb-4">
                TESTIMONIALS
              </h3>
              <h2 className="text-[#202020] text-4xl lg:text-5xl font-bold leading-tight">
                What Our Clients Say
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <p className="text-gray-600 text-base leading-relaxed">
                Kami dipercaya oleh banyak klien dari berbagai industri. Berikut kesan mereka terhadap layanan dan kolaborasi bersama Mediatech.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Layout - Equal width boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sarah Wijaya - Top Left */}
          <div className="rounded-2xl flex flex-col">
            <p className="text-gray-800 text-sm leading-relaxed italic mb-4 flex-grow border-gray-200 border-1 rounded-2xl p-4">
              "{testimonials[0].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-sm font-bold">${testimonials[0].name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonials[0].name}
                </h4>
                <p className="text-gray-600 text-xs">
                  {testimonials[0].position}
                </p>
              </div>
            </div>
          </div>

          {/* Budi Santosa - Top Center */}
          <div className="rounded-2xl flex flex-col">
            <p className="text-gray-800 text-sm leading-relaxed italic mb-4 flex-grow border-gray-200 border-1 rounded-2xl p-4">
              "{testimonials[1].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[1].avatar}
                  alt={testimonials[1].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-sm font-bold">${testimonials[1].name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonials[1].name}
                </h4>
                <p className="text-gray-600 text-xs">
                  {testimonials[1].position}
                </p>
              </div>
            </div>
          </div>

          {/* Clara Anggraini - Top Right */}
          <div className="rounded-2xl flex flex-col">
            <p className="text-gray-800 text-sm leading-relaxed italic mb-4 flex-grow border-gray-200 border-1 rounded-2xl p-4">
              "{testimonials[2].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[2].avatar}
                  alt={testimonials[2].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-sm font-bold">${testimonials[2].name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonials[2].name}
                </h4>
                <p className="text-gray-600 text-xs">
                  {testimonials[2].position}
                </p>
              </div>
            </div>
          </div>

          {/* Lina Marlina - Bottom Left */}
          <div className="rounded-2xl flex flex-col">
            <p className="text-gray-800 text-sm leading-relaxed italic mb-4 flex-grow border-gray-200 border-1 rounded-2xl p-4">
              "{testimonials[3].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[3].avatar}
                  alt={testimonials[3].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-sm font-bold">${testimonials[3].name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonials[3].name}
                </h4>
                <p className="text-gray-600 text-xs">
                  {testimonials[3].position}
                </p>
              </div>
            </div>
          </div>

          {/* Budi Santosa 2 - Bottom Center */}
          <div className="rounded-2xl flex flex-col">
            <p className="text-gray-800 text-sm leading-relaxed italic mb-4 flex-grow border-gray-200 border-1 rounded-2xl p-4">
              "{testimonials[4].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[4].avatar}
                  alt={testimonials[4].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-sm font-bold">${testimonials[4].name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonials[4].name}
                </h4>
                <p className="text-gray-600 text-xs">
                  {testimonials[4].position}
                </p>
              </div>
            </div>
          </div>

          {/* Rizky Ramadhan - Bottom Right */}
          <div className="rounded-2xl flex flex-col">
            <p className="text-gray-800 text-sm leading-relaxed italic mb-4 flex-grow border-gray-200 border-1 rounded-2xl p-4">
              "{testimonials[5].quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[5].avatar}
                  alt={testimonials[5].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-white text-sm font-bold">${testimonials[5].name.charAt(0)}</div>`;
                    }
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonials[5].name}
                </h4>
                <p className="text-gray-600 text-xs">
                  {testimonials[5].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
