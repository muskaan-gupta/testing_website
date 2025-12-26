import React from "react";

export default function Vision() {
  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img 
          src="/vision.jpg" 
          alt="Vision Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-8 sm:py-12 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA have a strong belief to bestow towards our Society and Nation to the best of our ability and intent in order to help humanity in all the weaker sections of their life spans. The entire objective of this Foundation is to help the under privileged and needy souls irrespective of their caste, creed, religion etc. The organization proudly has been ensemble with a firm belief in LORD SHIVA, and is pledged towards serving the Nation and Humanity in all the possible ways within the strict compliance of Law and Ethics towards the growth of our first and foremost Nation INDIA. <br/> <br/>
              The general observation towards Religion now-a-days have changed manifolds and this is just an attempt towards making all of us understand the fact that Religion, can & should be used positively in order to make day to day lives better than bitter on this planet. We are looking towards all those precious helping souls from this planet to contribute their efforts towards making our planet a superior place to live in liaison with the UN Sustainable Development Goals. A strong belief within us makes us strive to look out for all those possible means through which one can unite the human race towards the achievement of all those stiff targets which have to be achieved at any cost sooner by human race as a whole before it surpasses the mark of irreparable damages as per all the social evolution vectors guided by UN SDG for our society and Nation.
            </p>
            
           
            
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Looking ahead, we see RUDRAKSHA WELFARE FOUNDATION as a beacon of hope and a symbol of what can be achieved when compassion meets action, when vision meets determination, and when individual efforts are channeled towards collective good. We envision a legacy of empowered communities, transformed lives, and a more equitable and just society for future generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}