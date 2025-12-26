import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "/Anshika.png",
  "/Rajeshwari.png",
  "/Tanmay.png",
  "/Nikhil.jpg",
  "/vidhushi.jpg",
  "/Ishwari.png"
];

export default function SliderSection() {
  // Custom arrows
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        aria-label="Previous" 
        className="slider-arrow left-arrow" 
        onClick={onClick}
      >
        <svg width="40" height="34" viewBox="0 0 40 34" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        aria-label="Next" 
        className="slider-arrow right-arrow" 
        onClick={onClick}
      >
        <svg width="40" height="34" viewBox="0 0 40 34" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 sm:py-16 w-full bg-white overflow-hidden">
      <div className="bg-cyan-400 py-6 sm:py-8 w-full mb-6 sm:mb-8">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center leading-tight break-words">
            OUR ENTHUSIASTIC INTERN
          </h2>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
                 

      Our core target areas will be our younger generations which comprises primarily students who are the real strength of our Nation in future. We have a motive to assist them in their education, sports and take care of their medical & basic needs in order to make sure they can have an enriched and decent life and should later contribute towards the betterment of the society as well as Nation on a bigger context in future. In order to comply with the above dream project in longer years to come, we hereby would like to have a good amount of contribution from our society and various individuals who can contribute towards the society by offer charity in terms of their services, expertises, funds etc. but only through a legitimate means as per guidelines setup by Govt. of India.
            </p>
          </div>
        </div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 mt-12 ">
        
          <p className="text-lg text-black max-w-2xl mx-auto">
            Meet our talented developers and professionals who contribute to our mission
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Horizontal Card Slider */}
        <div className="relative">
          <Slider {...settings} className="team-slider">
            {images.map((image, index) => (
              <div key={index} className="px-3">
                <div className="simple-card">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}