import React from "react";

const MARKERS = [
  { name: "United States of America", top: "40%", left: "25%" },
  { name: "Canada", top: "25%", left: "15%" },
  { name: "United Kingdom", top: "32%", left: "48%" },
  { name: "France", top: "38%", left: "50%" },
  { name: "Israel", top: "45%", left: "57%" },
  { name: "Russia", top: "25%", left: "65%" },
  { name: "India", top: "50%", left: "70%" },
  { name: "Nepal", top: "45%", left: "72%" },
  { name: "Bhutan", top: "48%", left: "76%" },
  { name: "Sri Lanka", top: "58%", left: "72%" },
  { name: "Malaysia", top: "58%", left: "78%" },
  { name: "Japan", top: "37%", left: "85%" },
  { name: "Singapore", top: "64%", left: "81%" },
  { name: "Australia", top: "77%", left: "85%" },
  { name: "New Zealand", top: "87%", left: "97%" },
  { name: "South Africa", top: "80%", left: "58%" },
];

export default function SupportersSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 overflow-x-hidden">
      {/* Our Supporters Header */}
      <div className="bg-cyan-400 py-6 sm:py-8 w-full mb-6 sm:mb-8">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-tight break-words">
            OUR PHILANTHROPIC SUPPORT
          </h2>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-6">
        <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] w-full">
          {/* Map */}
          <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
          <img
            src="/worldmap.png" 
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {MARKERS.map((m) => (
            <div
              key={m.name}
              className="absolute flex items-center space-x-1 sm:space-x-2"
              style={{ top: m.top, left: m.left, transform: "translate(-50%,-50%)" }}
            >
              <span
                className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500 shadow-lg animate-ping"
                aria-hidden
              />
              <span className="hidden lg:inline-block bg-white text-xs text-gray-800 px-2 py-1 rounded-full shadow-md border border-gray-200 whitespace-nowrap max-w-[150px] truncate">
                {m.name}
              </span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
