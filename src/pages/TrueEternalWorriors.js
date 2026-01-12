import React from "react";
import { motion } from "framer-motion";

// Alternating Section Component
const AlternatingSection = ({ sections }) => {
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-5 lg:py-4 bg-white">
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`${index !== 0 ? 'mt-2 lg:mt-2' : ''}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 items-center ${
                isEven ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
              }`}>
                
                {/* Image Column */}
                <motion.div
                  variants={isEven ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'} order-1`}
                >
                  <div className="relative group">
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <img
                        src={section.image}
                        alt="True Eternal Warriors"
                        className="w-full h-auto sm:h-90 lg:h-96 object-covered "
                      />
                    </div>
                    {/* Decorative overlay */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  variants={isEven ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={`${isEven ? 'lg:order-2' : 'lg:order-1'} order-2 space-y-4`}
                >
                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-lg text-black-900 leading-relaxed text-justify font-serif">
                      {section.content}
                    </p>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function TrueEternalWorriors() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Data for alternating sections
  const alternatingSections = [
    {
      content: "The True Eternal Warriors program is dedicated to empowering individuals who face adversity with courage and determination. Warriors are not just those who fight battles on the field, but those who overcome challenges in their daily lives with resilience and strength. Our initiative focuses on supporting individuals who demonstrate extraordinary courage in the face of physical, mental, or social challenges. We believe that true warriors inspire communities and create lasting positive change through their actions and perseverance.",
      image: "/Projects/img1pro10.jpg",
    },
    {
      content: "Through mentorship programs, skill development workshops, and community support systems, we help warriors build the confidence and capabilities they need to thrive. Our program connects veterans, differently-abled individuals, survivors of trauma, and other champions with resources, training, and opportunities. We celebrate their victories, support them through challenges, and amplify their voices to inspire others. Every warrior has a unique story, and we are committed to ensuring that each story is heard and valued.",
      image: "/Projects/img2pro10.jpg",
    },
    {
      content: "The True Eternal Warriors initiative also focuses on creating awareness about the struggles faced by unsung heroes in our society. We organize recognition events, facilitate peer support networks, and work with communities to build inclusive environments. By fostering a culture of respect, appreciation, and support, we aim to create a society where every warrior feels valued and empowered. Together, we can build a world where courage is celebrated, challenges are overcome, and every individual has the opportunity to shine as the warrior they truly are.",
      image: "/Projects/img3pro10.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header10.jpg" 
          alt="True Eternal Warriors" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we work under the <strong>Project Name "TRUE ETERNAL WARRIORS"</strong> to recognize, support, and empower individuals who demonstrate exceptional courage and resilience. True warriors are those who face life's challenges head-on, whether they are physical disabilities, mental health struggles, social discrimination, or any form of adversity that tests the human spirit.<br/><br/>
              
              Our vision is to create a supportive ecosystem where these warriors receive the recognition they deserve and the resources they need to continue their journey. We believe that every person who overcomes adversity becomes a beacon of hope for others facing similar challenges. By sharing their stories, providing mentorship opportunities, and facilitating access to essential services, we aim to build a community of resilient individuals who inspire positive change.<br/><br/>
              
              The True Eternal Warriors program encompasses multiple dimensions of support. We provide rehabilitation services for veterans and differently-abled individuals, mental health counseling for trauma survivors, vocational training for those seeking employment, and advocacy platforms for raising awareness about their rights and needs. Through partnerships with healthcare providers, educational institutions, and employers, we create pathways for warriors to rebuild their lives and achieve their full potential.<br/><br/>
              
              Recognition is a cornerstone of our program. We organize annual events to celebrate the achievements of warriors in various fields - from sports and arts to entrepreneurship and social service. These events not only honor individual accomplishments but also inspire communities to embrace inclusivity and compassion. We also facilitate peer support groups where warriors can connect, share experiences, and learn from each other's journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Image-Text Sections */}
      <AlternatingSection sections={alternatingSections} />

      {/* Additional Content Section */}
      <section className="w-full bg-white py-2 sm:py-4">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Our outreach extends to schools, colleges, and workplaces where we conduct awareness programs about the challenges faced by warriors and the importance of creating inclusive environments. We train educators, employers, and community leaders on how to support individuals with diverse needs and create opportunities for their participation and growth. Through these initiatives, we aim to break down barriers and build a society that values every individual's contribution.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              The True Eternal Warriors program also focuses on family support, recognizing that warriors often have caregivers and family members who need assistance and guidance. We provide counseling services, caregiver training, and respite care options to ensure that families have the support they need. By strengthening family units, we create a more robust support system for warriors to thrive.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we are committed to ensuring that no warrior fights their battle alone. Through our comprehensive support programs, advocacy efforts, and community building initiatives, we strive to create a world where courage is celebrated, challenges are overcome together, and every individual has the opportunity to live with dignity and purpose. Join us in honoring and supporting the True Eternal Warriors who make our communities stronger and more compassionate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
