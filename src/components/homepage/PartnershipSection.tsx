interface PartnershipSectionProps {
  partnershipImage?: string;
}

export default function PartnershipSection({
  partnershipImage = "/partnership-logos.png"
}: PartnershipSectionProps) {
  return (
    <section className="relative w-full py-16 md:py-20 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-blue-600 tracking-widest text-sm font-medium mb-4">
            PARTNERSHIP
          </h3>
          <h2 className="text-[#202020] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 max-w-4xl mx-auto">
            Partnered with Leading Brands
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Kami berkolaborasi dengan brand ternama dari sektor F&B, edukasi, 
            properti, teknologi, dan lainnya — untuk bersama menghadirkan solusi 
            digital yang berdampak nyata.
          </p>
        </div>

        {/* Partnership Logos */}
        <div className="relative w-full flex justify-center">
          <img
            src={partnershipImage}
            alt="Partnership Logos - Mediatech's trusted partners including leading brands from F&B, education, property, technology and other sectors"
            className="w-full max-w-5xl h-auto object-contain"
            onError={(e) => {
              // Fallback jika gambar tidak ditemukan
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-48 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div class="text-center text-gray-500">
                      <div class="text-lg font-medium mb-2">Partnership Logos</div>
                      <div class="text-sm">Please add your partnership image at: ${partnershipImage}</div>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
