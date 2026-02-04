export default function TrainersSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f0f9ff]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b]">
            Your{" "}
            <span
              style={{
                borderBottom: "3px solid #a855f7",
                paddingBottom: "4px",
              }}
            >
              Trainers
            </span>{" "}
            are Alumni of
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Stanford */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8c1515] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-[#8c1515]">Stanford</span>
              <br />
              <span className="text-gray-600 text-xs">University</span>
            </div>
          </div>

          {/* Google */}
          <div className="text-2xl font-bold">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#ea4335]">o</span>
            <span className="text-[#fbbc05]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#34a853]">l</span>
            <span className="text-[#ea4335]">e</span>
          </div>

          {/* IIT Bombay */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <span className="text-xs">🏛️</span>
            </div>
            <span className="font-bold text-gray-700">IIT Bombay</span>
          </div>

          {/* Amazon */}
          <div className="text-2xl font-bold text-[#1e293b]">
            amazon
            <div className="h-1 w-16 bg-[#ff9900] rounded-full mt-0.5 ml-auto" />
          </div>

          {/* IIT Delhi */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-50">
              <span className="text-xs">🏛️</span>
            </div>
            <span className="font-bold text-gray-700">IIT Delhi</span>
          </div>

          {/* Microsoft */}
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
              <div className="bg-[#f25022]" />
              <div className="bg-[#7fba00]" />
              <div className="bg-[#00a4ef]" />
              <div className="bg-[#ffb900]" />
            </div>
            <span className="font-semibold text-gray-600">Microsoft</span>
          </div>
        </div>

        {/* And many more */}
        <div className="text-center mt-8">
          <span className="text-gray-500 text-sm">and many more...</span>
        </div>
      </div>
    </section>
  );
}
