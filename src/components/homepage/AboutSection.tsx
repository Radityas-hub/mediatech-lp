export default function AboutSection() {
  return (
    <section className="relative w-full flex flex-col items-center py-16 md:py-20 bg-white overflow-x-hidden">
      <div className="w-full max-w-6xl px-4 md:px-6 flex justify-center items-center flex-col">
        {/* Title & Subtitle */}
        <div className="text-center space-y-4 md:space-y-6">
          <h3 className="text-blue-600 tracking-widest text-sm font-medium">
            ABOUT US
          </h3>
          <h2 className="text-[#202020] text-2xl md:text-3xl lg:text-4xl leading-tight font-bold max-w-4xl mx-auto">
            Technology Partner for Digital Transformation
          </h2>
          <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-3xl mx-auto">
            Mediatech Indonesia telah membantu berbagai sektor mengembangkan
            bisnis melalui smart tech dan digital ecosystem yang scalable
            selama lebih dari satu dekade.
          </p>
        </div>

        {/* Main Image with Play Button */}
        <div className="relative mt-8 md:mt-12 w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-[#d9d9d9]">
          <img
            src="/video-placeholder.png"
            alt="Video about Mediatech"
            className="w-full h-64 md:h-80 lg:h-96 object-cover brightness-75"
          />
          {/* Play Button */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow-lg hover:scale-105 transition-transform"
            aria-label="Play Video"
          >
            <svg width="60" height="60" viewBox="0 0 48 48" fill="none" className="md:w-20 md:h-20">
              <circle
                cx="24"
                cy="24"
                r="24"
                fillOpacity="0.15"
              />
              <polygon points="20,16 34,24 20,32" fill="#101010" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
