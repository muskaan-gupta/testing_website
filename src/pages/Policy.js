import React from "react";
import { motion } from "framer-motion";

export default function Policy() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img 
          src="/policy.png" 
          alt="Policy Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
     
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
      </section>
      <section className="w-full bg-white py-8 sm:py-12 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
             We at RUDRAKSHA WELFARE FOUNDATION, appreciates and respects from the core of our heart the donations we receive from our precious and generous donors worldwide. We hereby follow a strict compliance in accepting donations through digital and paper banking & UPI applications modes as approved by Reserve Bank of India and fund raising guidelines approved by Ministry of Corporate Affairs for a Section 8 company. We don't have the provision to refund the donations receive from the respected donors as there are several projects in which we as a team are committed and hence requires good amount of fund flow in order to process them diligently and support various weaker sections of the society. We hereby accept donations with a firm view point belief that respected donor' are well in control and agrees to help us in assisting the various legitimate needs of the society on humanitarian grounds in various projects associated with our Foundation worldwide. In case at any point of time in future, any respected donor, post making donation changes his/her mind and decision, we would not be able to refund the amount donated, due to immediate commitment of the existing & collected funds in various executed, existing and proposed projects and other operational expenses. A detailed report of all the projects and expenditures conducted will be available online at our website in PDF format for downloading.Your support and understanding in this regard will be highly appreciated. We are grateful for reading this message. </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA WELFARE FOUNDATION, have a well defined journey with a prime motive to achieve success in making dreams come true for all those people around us who are lagged behind due to several personal and other challenges in their respective lives. The Foundation will work together along with them to fulfill their professional dreams & othe legitimate needs with a prime motive of allowing them to enrich and relish equal respect, dignity, health, earnings, better standard of living and confidence in their day to day lives. The mission of this Foundation will be completely unbiased and will act on first come first serve or first noticed first serve basis. The recommendations from any individual or group to provide any sort of legitimate help or assistance to anyone in the 15 Projects as per named mentioned below will be highly appreciated. These Activities will be requiring good amount of funds as well as technically enriched manpower to handle all projects. The Foundation will be working on self sustainability model along with support from various Govt. as well as Private Organizations PAN INDIA. The objective will not be stressed upon to raise funds from the CSR bucket of the various prestigious organizations, but will be raising funds through providing premium quality goods and services to general public at very reasonable rates in comparison to the prices quoted by several other respected players in the market. The respective Government Rules, Regulations and Licensing for the same will be procured well in advance before initiating any such business or activity of the nature as applicable.
            </p>
          </div>
          </div>
      </section>  

      
    </div>
  );
}