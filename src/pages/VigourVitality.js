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
                        alt="Vigour and Vitality"
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

export default function VigourVitality() {
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
      content: "Vigour and vitality are the essence of a life lived fully. Physical health and mental well-being form the foundation upon which we build our dreams and achieve our goals. Our Vigour and Vitality program is dedicated to promoting holistic health through fitness, nutrition, preventive healthcare, and mental wellness initiatives. We believe that everyone deserves access to resources and knowledge that enable them to live energetic, healthy, and fulfilling lives regardless of age, socioeconomic status, or physical abilities.",
      image: "/Projects/img1pro13.jpg",
    },
    {
      content: "Through community fitness programs, health camps, nutritional education, and wellness workshops, we empower individuals to take charge of their health. We organize yoga sessions, sports activities, aerobics classes, and outdoor recreation programs that make physical activity accessible and enjoyable for all. Our nutritionists provide guidance on balanced diets, meal planning, and healthy cooking practices. We conduct regular health screenings and medical camps to detect and prevent lifestyle diseases such as diabetes, hypertension, and obesity.",
      image: "/Projects/img2pro13.jpg",
    },
    {
      content: "Mental health is equally important as physical health in our comprehensive approach to well-being. We offer stress management workshops, meditation sessions, counseling services, and support groups for those facing mental health challenges. Our programs address the interconnectedness of body, mind, and spirit, recognizing that true vitality comes from harmony in all aspects of life. By creating supportive communities and promoting healthy lifestyles, we inspire people to embrace wellness as a way of life.",
      image: "/Projects/img3pro13.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header13.jpg" 
          alt="Vigour and Vitality" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we operate under the <strong>Project Name "VIGOUR AND VITALITY"</strong> to promote comprehensive health and wellness across all age groups and communities. In today's fast-paced world, sedentary lifestyles, unhealthy eating habits, stress, and environmental factors have contributed to a rise in chronic diseases and declining overall health. Our initiative addresses these challenges by creating awareness, providing resources, and fostering habits that lead to sustainable health and vitality.<br/><br/>
              
              Our approach to health is holistic, recognizing that true wellness encompasses physical fitness, nutritional health, mental and emotional well-being, adequate rest, meaningful relationships, and a sense of purpose. We design programs that address all these dimensions, understanding that they are interconnected and mutually reinforcing. A person who exercises regularly but eats poorly, or who is physically fit but chronically stressed, cannot achieve optimal health. Our programs therefore integrate multiple wellness dimensions.<br/><br/>
              
              Physical fitness programs form a major component of our initiative. We establish community fitness centers and outdoor exercise spaces where people can engage in various forms of physical activity. We offer programs suitable for different age groups and fitness levels—from prenatal yoga for expecting mothers to senior citizens' exercise classes, from children's sports programs to high-intensity training for youth. Our qualified instructors ensure that activities are safe, effective, and enjoyable, helping participants develop lifelong fitness habits.<br/><br/>
              
              Nutrition education is another pillar of our program. We conduct workshops on understanding nutritional needs, reading food labels, meal planning, portion control, and healthy cooking methods. We address specific concerns such as childhood nutrition, managing diabetes through diet, nutrition for athletes, and healthy eating on a budget. We also work with local farmers and food producers to promote access to fresh, nutritious foods in underserved communities.
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
              Preventive healthcare is emphasized throughout our programs. Regular health screenings help detect potential health issues early when they are most treatable. We organize eye camps, dental check-ups, blood pressure monitoring, diabetes screening, and comprehensive health assessments. We also conduct vaccination drives and health awareness campaigns on topics such as hygiene, disease prevention, reproductive health, and substance abuse prevention.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Mental wellness receives special attention in our programs. We recognize that stress, anxiety, depression, and other mental health challenges are increasingly common and can significantly impact overall quality of life. We offer counseling services, stress management techniques, mindfulness training, and support groups. We work to reduce stigma around mental health issues and encourage people to seek help when needed. Our holistic approach includes yoga, meditation, art therapy, and nature-based activities that promote mental peace and emotional balance.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Community engagement is central to our Vigour and Vitality initiative. We organize health fairs, fitness challenges, walkathons, and wellness festivals that bring communities together around health goals. We create peer support networks where people encourage and motivate each other in their wellness journeys. We recognize and celebrate individuals and groups who demonstrate commitment to healthy living, creating positive role models within communities.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we believe that health is not merely the absence of disease but a state of complete physical, mental, and social well-being. Through our Vigour and Vitality program, we strive to create a culture where healthy living is valued, accessible, and enjoyable for everyone. We envision communities where people of all ages live with energy, enthusiasm, and the vitality needed to pursue their dreams and contribute meaningfully to society.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
