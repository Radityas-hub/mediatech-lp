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
      avatar: "/person.png",
    },
    {
      id: "4",
      name: "Lina Marlina",
      position: "Digital Consultant", 
      company: "Independent",
      quote: "Mediatech punya pendekatan unik: tidak hanya teknis, tapi juga memahami brand kami secara menyeluruh.",
      avatar: "/person.png",
    },
    {
      id: "2", 
      name: "Budi Santosa",
      position: "Founder KampusTech",
      company: "KampusTech",
      quote: "Tim Mediatech tidak hanya membangun produk, tetapi juga memahami visi edukasi kami!",
      avatar: "/person.png",
    },
    {
      id: "5",
      name: "Budi Santosa",
      position: "Founder KampusTech",
      company: "KampusTech", 
      quote: "Pertama kali kerjasama dan sangat puas! Good Job!",
      avatar: "/person.png",
    },
    {
      id: "3",
      name: "Clara Anggraini", 
      position: "Property Manager BuiltHome Realty",
      company: "BuiltHome Realty",
      quote: "Tidak ada kata lain selain luar biasa untuk Mediatech!",
      avatar: "/person.png",
    },
    {
      id: "6",
      name: "Rizky Ramadhan",
      position: "CTO @Innotech Global",
      company: "Innotech Global",
      quote: "Kolaborasi dengan Mediatech sangat mulus. Mereka cepat tanggap dan fleksibel dalam menyesuaikan kebutuhan teknologi kami.",
      avatar: "/person.png",
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

        {/* Testimonials Layout - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid mb-6">
              <div className="rounded-2xl flex flex-col gap-4">
                <p className="text-gray-800 leading-relaxed italic border-gray-200 border rounded-2xl p-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 px-2">
                  <div className="w-12 h-12 rounded-full bg-[#d9d9d9] flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-white text-sm font-bold">${testimonial.name.charAt(0)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
