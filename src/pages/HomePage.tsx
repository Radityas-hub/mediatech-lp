import Button from "@/components/core/button";
import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/Navbar";
import {
  PartnerSlider,
  AboutSection,
  ServicesSection,
  WhyChooseUsSection,
  TestimonialsSection,
  PartnershipSection,
  BlogSection,
  CareersSection,
  DigitalIdeaSection,
} from "@/components/homepage";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      {/* ==== hero section ===== */}
      <section
        className="w-full min-h-screen flex justify-center items-center bg-[#0C192B] bg-[url('../public/bgheader.png')] bg-cover bg-center relative pt-20"
        id="home"
      >
        {/* Navbar */}
        <Navbar />

        <div className="w-full min-h-[80vh] max-w-6xl px-4 md:px-6 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start md:items-center lg:items-start gap-4 text-left md:text-center lg:text-left">
              <p className="italic opacity-60 text-white text-sm md:text-base">
                Indonesian Digital Company
              </p>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl leading-tight text-white">
                Powered by Smart Tech
              </h1>
              <p className="text-sm md:text-base opacity-60 text-white max-w-lg">
                Solusi digital terintegrasi untuk mendukung transformasi dan
                pertumbuhan bisnis Anda di era teknologi.
              </p>
              <div className="mt-4 w-full flex justify-start md:justify-center lg:justify-start md:mb-8">
                <Button>Get in touch</Button>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end items-center order-first lg:order-last">
              <img 
                src="https://github.com/Radityas-hub/mediatech-lp/blob/main/public/header-home.png?raw=true" 
                alt="Mediatech Hero Image" 
                className="w-full max-w-md lg:max-w-none lg:w-4/5 h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==== partner section ===== */}
      <PartnerSlider />

      {/* ==== about section ===== */}
      <AboutSection />

      {/* ==== services section ===== */}
      <ServicesSection />

      {/* ==== why choose us section ===== */}
      <WhyChooseUsSection />

      {/* ==== testimonials section ===== */}
      <TestimonialsSection />

      {/* ==== partnership section ===== */}
      <PartnershipSection />

      {/* ==== blog section ===== */}
      <BlogSection />

      {/* ==== careers section ===== */}
      <CareersSection />

      {/* ==== digital idea section ===== */}
      <DigitalIdeaSection />

      {/* ==== footer section ===== */}
      <Footer />
    </div>
  );
}
