export default function TrainersSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f0f9ff]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
            Your{" "}
            <span className="relative inline-block">
              Trainers
              <svg 
                className="absolute -bottom-2 left-0 w-full h-3 text-[#a855f7]/60" 
                viewBox="0 0 300 20" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path d="M5 15C50 12 150 5 295 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            are Alumni of
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12 max-w-7xl mx-auto px-4">
          {/* Stanford */}
          <div className="h-12 md:h-18 w-auto flex items-center flex-shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_S_logo.svg/1200px-Stanford_S_logo.svg.png" 
              alt="Stanford University" 
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Google */}
          <div className="h-8 md:h-10 w-auto flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" 
              alt="Google" 
              className="h-full w-auto object-contain"
            />
          </div>

          {/* IIT Bombay */}
          <div className="h-10 md:h-12 w-auto flex items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" 
              alt="IIT Bombay" 
              className="h-full w-auto object-contain grayscale opacity-80"
            />
            <span className="font-bold text-gray-700 text-sm md:text-base">IIT Bombay</span>
          </div>

          {/* Amazon */}
          <div className="h-8 md:h-10 w-auto flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
              alt="Amazon" 
              className="h-full w-auto object-contain"
            />
          </div>

          {/* IIT Delhi */}
          <div className="h-10 md:h-12 w-auto flex items-center gap-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" 
              alt="IIT Delhi" 
              className="h-full w-auto object-contain grayscale opacity-80"
            />
            <span className="font-bold text-gray-700 text-sm md:text-base">IIT Delhi</span>
          </div>

          {/* Microsoft */}
          <div className="h-8 md:h-10 w-auto flex items-center gap-2 flex-shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" 
              alt="Microsoft" 
              className="h-full w-auto object-contain"
            />
            <span className="font-semibold text-gray-600 whitespace-nowrap">Microsoft</span>
          </div>
        </div>

        {/* And many more */}
        <div className="text-center mt-12">
          <span className="text-gray-500 text-sm">and many more...</span>
        </div>
      </div>
    </section>
  );
}
