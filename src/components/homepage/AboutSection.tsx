export default function AboutSection() {
  return (
    <section className="relative w-full h-[100%] flex flex-col items-center py-20 bg-white overflow-x-hidden">
      <div className="w-full h-[100%] max-w-6xl px-6 flex justify-center items-center flex-col ">
        {/* Title & Subtitle */}
        <div className="text-center gap-3">
          <h3 className="text-blue-600 tracking-widest text-sm font-medium">
            ABOUT US
          </h3>
          <h2
            className="
              text-[#202020]
              false
              text-2xl sm:text-4xl leading-9 sm:leading-14
              false
              font-bold max-w-[70%] mx-auto"
          >
            Technology Partner for Digital Transformation
          </h2>
          <p className="text-sm sm:text-base opacity-80 leading-7 max-w-[800px] mx-auto mt-3">
            Mediatech Indonesia telah membantu berbagai sektor mengembangkan
            bisnis melalui smart tech dan digital ecosystem yang scalable
            selama lebih dari satu dekade.
          </p>
        </div>

        {/* Main Image with Play Button */}
        <div className="relative mt-8 w-full rounded-2xl overflow-hidden shadow-lg bg-[#d9d9d9]">
          <img
            src="/about-main.jpg"
            alt="Video about Mediatech"
            className="w-full h-[400px] object-cover brightness-75"
          />
          {/* Play Button */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-0 shadow-lg hover:scale-105 transition-transform"
            aria-label="Play Video"
          >
            <svg width="80" height="80" viewBox="0 0 48 48" fill="none">
              <circle
                cx="24"
                cy="24"
                r="24"
                // fill="#2563eb"
                fillOpacity="0.15"
              />
              <polygon points="20,16 34,24 20,32" fill="#d9d9d9" />
            </svg>
          </button>
        </div>

        {/* Gear Icon Bottom Left */}
        {/* <img
          src="/gear-icon.svg"
          alt="Gear Icon"
          className="absolute left-0 bottom-0 w-20 md:w-24 -translate-x-1/3 translate-y-1/3 select-none pointer-events-none"
          draggable={false}
        /> */}
        {/* Gear Icon Top Right */}
        {/* <img
          src="/gear-icon.svg"
          alt="Gear Icon"
          className="absolute right-0 top-0 w-16 md:w-20 translate-x-1/3 -translate-y-1/3 select-none pointer-events-none"
          draggable={false}
        /> */}
      </div>
    </section>
  );
}
