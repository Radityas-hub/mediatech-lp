import Button from "@/components/core/button";

interface CareersSectionProps {
  backgroundImage?: string;
}

export default function CareersSection({
  backgroundImage = "/careers-background.jpg"
}: CareersSectionProps) {
  return (
    <section 
      className="relative w-full py-16 md:py-20 min-h-[70vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >      
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh] max-w-6xl mx-auto px-4 md:px-6 z-10 flex justify-center items-center">
        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* Top Left Image */}
          <div className="absolute top-0 left-5 w-48 lg:w-64 h-auto rounded-2xl overflow-hidden opacity-80">
            <img
              src="/carreers (3).png"
              alt="Career opportunity 1"
              className="w-full h-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-auto bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-2xl py-12">
                      <div class="text-white text-center">
                        <div class="text-2xl mb-2">💻</div>
                        <div class="text-sm font-medium">Career Image 1</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>

          {/* Top Right Image */}
          <div className="absolute top-0 right-5 w-44 lg:w-56 h-auto rounded-2xl overflow-hidden opacity-80">
            <img
              src="/carreers (2).png"
              alt="Career opportunity 2"
              className="w-full h-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-auto bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center rounded-2xl py-10">
                      <div class="text-white text-center">
                        <div class="text-2xl mb-2">👥</div>
                        <div class="text-sm font-medium">Career Image 2</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-0 left-5 lg:left-16 w-48 lg:w-60 h-auto rounded-2xl overflow-hidden opacity-80">
            <img
              src="/carreers (1).png"
              alt="Career opportunity 3"
              className="w-full h-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-auto bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center rounded-2xl py-11">
                      <div class="text-white text-center">
                        <div class="text-2xl mb-2">🚀</div>
                        <div class="text-sm font-medium">Career Image 3</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-5 w-48 lg:w-64 h-auto rounded-2xl overflow-hidden opacity-80">
            <img
              src="/carreers (4).png"
              alt="Career opportunity 4"
              className="w-full h-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-auto bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center rounded-2xl py-12">
                      <div class="text-white text-center">
                        <div class="text-2xl mb-2">🎯</div>
                        <div class="text-sm font-medium">Career Image 4</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] text-center relative z-20 px-4">
          {/* Header */}
          <h3 className="text-blue-400 tracking-widest text-sm font-medium mb-4">
            CAREERS
          </h3>
          
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Grow with Us
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-sm md:max-w-md opacity-60">
            Bergabunglah bersama tim Mediatech dan ikut membangun solusi digital inovatif yang berdampak luas.
          </p>

          {/* CTA Button */}
          <Button>Peluang Karir</Button>
        </div>

      </div>
    </section>
  );
}
