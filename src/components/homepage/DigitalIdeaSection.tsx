export default function DigitalIdeaSection() {
  return (
    <section className="relative w-full py-16 md:py-18 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 flex justify-center items-center overflow-hidden">
      {/* White Ball Ornaments */}
      <div className="absolute top-8 right-1.5/2 pointer-events-none z-20">
        <img
          src="/white-ball.svg"
          alt="White ball ornament"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
        />
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none z-20 trnasform translate-y-2 translate-x-14">
        <img
          src="/white-ball.svg"
          alt="White ball ornament"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-38 lg:h-38"
        />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none z-20 transform translate-y-8 -translate-x-10">
        <img
          src="/white-ball.svg"
          alt="White ball ornament"
          className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl px-4 md:px-6 flex justify-start flex-col items-start relative z-10 text-left">
        <div className="w-full max-w-4xl">
          {/* Subtitle */}
          <p className="text-white/80 text-sm md:text-base italic mb-4 md:mb-6">
            It's Your Time!
          </p>
        </div>

          <div className="flex justify-between w-full items-start flex-col md:flex-row ">
          {/* Main Title */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold max-w-[680px]">
            Have a Digital Idea? Let's Build Together
          </h2>

          {/* CTA Button */}
            <button className="bg-white w-[180px] mt-8 md:mt-0 lg:mt-0 hover:bg-gray-100 text-blue-600 h-fit justify-center align-center py-3 text-lg font-medium rounded transition-colors duration-300 flex items-center gap-2">
              Get in touch
              <img
                src="/arrow-icon-blue.webp"
                alt="Arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
      </div>
    </section>
  );
}
