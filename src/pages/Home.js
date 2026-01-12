import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SupportersSection from "../components/SupportersSection";
import SliderSection from "../components/SliderSection";





export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array of slider images
  const sliderImages = [
    "/fp9.png",
    "/fp8.png",
    "/fp10.png",
    "/fp7.png",
    "/fp5.png",
    "/fp6.png",
    "/fp4.jpg",
    "/fp3.jpg",
    "/fp2.jpg",
    "/fp1.jpg"

  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative w-full h-[60vh] overflow-hidden mt-2">
        {/* Slider Images */}
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity  duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain object-center"
            />
         
          
          </div>
           ))}
           

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>


      {/* UNSDG Guidelines Section */}

      <section className="w-full bg-white py-8 sm:py-12 overflow-x-hidden">
       
        <div className="w-full max-w-none mb-5">
         
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed text-justify break-words hyphens-auto font-serif ml-6 mr-6">
                 RUDRAKSHA WELFARE FOUNDATION, has been initiated with a precise extraction of wisdom reasoning which comprises a definite motivational subpoena of philanthropy. We are living in a world where in most of the living souls who have been blessed with several amenities of today’s life are primarily egocentric, along with a grimy hypocritical behavior towards the social issues and vanquished weaker sections of the society.
                  <br/><br/>

RELIGION has become an enormous pursuit of acquiring an individual’s character and molding it for personal benefit than uniting the souls for the betterment of the society in a larger context. The name of our Foundation has been set up with a crystal clear contemplation towards "SHIVA SHAKTI" which guides us to help the underprivileged or forcefully deprived individual(s) and protect his or her rights without making any discrimination of their caste, creed, race, place of birth, sex, religious beliefs, etc. as mentioned under Article 15 of Indian Constitution 1950 ,along with keeping in-depth check towards due diligence towards the operational instructions issued as per guidelines issued by Ministry of Corporate Affairs, Govt. of INDIA. We hereby gracefully comply with the instructions issued as per the law of Republic of INDIA for a Section 8 company under Companies Act 2013.
        </p>
       
              </div>
        {/* Header */}
        <div className="bg-cyan-400 py-6 sm:py-8 w-full mb-6 sm:mb-8">
          <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
            <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center leading-tight break-words">
              WE HAVE FAITH IN UNSDG GUIDELINES
            </h2>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="w-full mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col md:flex-row items-stretch min-h-[50vh] md:min-h-[60vh]">
            {/* Left - Video Section */}
            <div className=" md:w-1/2 w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] relative overflow-hidden rounded-lg md:rounded-r-none">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover "
              >
                <source src="/unsdg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Right - Text Section */}
            <div className="md:w-1/2 w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12 bg-gray-50 flex items-center rounded-lg md:rounded-l-none">
              <div className="w-full max-w-none">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed text-justify break-words hyphens-auto font-serif">
                  We have a set of core team individuals who are expert in their respective fields of Designing, Web Development, Cosmic Science Professionals & Experts, Financial Analysts, Law Professionals, State & Central Government Senior officials, Defence Personals, Digital Marketing Experts, Businessmen, and our precious Volunteers who spare themselves for our activities & discussions out of their busy schedules. Their joint efforts and directions have allowed us to set up this Foundation with a clear intention of philanthropic activities along with strict compliance to high business & ethics standards. We hereby support the guidelines issued as per UNSDG & would like to implement the same in our existing & forthcoming Projects. The various sustainable Goals as described by United Nation are shown as follows. 
                  <br/><br/>
                  These are expressed here at our webpage only for information & knowledge purpose. We hereby try to follow the guidelines of UNSDG & there is no other specific monetary motive directly or indirectly behind displaying the respective UNSDG Logos. RUDRAKSHA WELFARE FOUNDATION hereby tries to implement the directions of UNSDG into its existing Projects and preferably in future as well. We don't work for UNSDG as on date in any Project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Background Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
       
        
      </section>

      {/* Statistics Section */}
      <section className="w-full bg-cyan-400 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Events Completed */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">20+</h3>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Events Completed</p>
            </div>

            {/* Happy Clients */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">100+</h3>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Happy Clients</p>
            </div>

            {/* Interns */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">100+</h3>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Interns</p>
            </div>

            {/* Volunteers */}
            <div className="text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">50+</h3>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Target Section */}
      <section className="w-full bg-white py-12 sm:py-15">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify font-serif">
            Our core target areas will be our younger generations which comprises primarily students who are the real strength of our Nation in future. We have a motive to assist them in their education, sports and take care of their medical & basic needs in order to make sure they can have an enriched and decent life and should later contribute towards the betterment of the society as well as Nation on a bigger context in future. In order to comply with the above dream project in longer years to come, we hereby would like to have a good amount of contribution from our society and various individuals who can contribute towards the society by offer charity in terms of their services, expertises, funds etc. but only through a legitimate means as per guidelines setup by Govt. of India.
          </p>
        </div>
      </section>

      {/* project sections */}
      {/* Header */}
      <div className="bg-cyan-400 py-6 sm:py-8 w-full mb-6 sm:mb-8">
          <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
            <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center leading-tight break-words">
             OUR PROJECTS
            </h2>
          </div>
        </div>

      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
          src="/projects.png" 
          alt="project  Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        </div>
       
        
      </section>



   

      {/* Slider Section */}
      <div className="mb-12">
        <SliderSection />
      </div>
      

      

      {/* Supporters Section */}
      <div className="mt-12">
        <SupportersSection />
      </div>
    </div>
  );
}
