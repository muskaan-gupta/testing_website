import React from "react";

export default function Mission() {
  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/MISSION.JPG" 
          alt="Mission Background" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
             RUDRAKSHA WELFARE FOUNDATION has been setup with a definite and prime motive to serve the society and Nation in the simplest way by avoiding complexities, dependencies and any sort of illicit processes. We have a futuristic self sustainability approach towards the philanthropy activities where in we stress on value driven activities under the firm direction and support of experienced personals from Govt. as we as Private sectors from different sections of the society in order to achieve the inspiring though quite challengeable social welfare targets without any misleading or corrupt or fraudulent intents in any criteria. The respected Govt. help and directions will be the core of this organization in longer run with a prime motive of serving the society to the maximum possible extent within the norms of GOI as well as State Govt. There will be a lot of contribution from various individuals from Private sectors as without their inline thought process and wisdom visioning our mission of social service would have been into a big jeopardy. Our self sustainability model enriches us to give back to the society to the max what we had earned due to their respect and support towards us. We all with a positive intent and aggression looking forward to serve our Nation in the most creative and supportive way possible with strict adherence to compliance standards for a Non Profit Entity under Ministry of Corporate Affairs, GOI.
            </p>
            
           
            
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              The Foundation operates on the principle of inclusive growth, ensuring that our interventions reach the most vulnerable and marginalized sections of society. We are dedicated to creating scalable and replicable models of social intervention that can be adapted across diverse geographical and cultural contexts throughout India and beyond.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Through innovative approaches, technology integration, and evidence-based practices, we aim to set new standards in the field of social welfare and community development. Our mission is to not just provide temporary relief but to empower individuals and communities to become self-reliant, resilient, and capable of driving their own development initiatives.
            </p>
        
          </div>
        </div>
      </section>
    </div>
  );
}