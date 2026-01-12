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
                        alt="Training and Skill Development"
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

export default function TrainingSkillDevelopment() {
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
      content: "Skill development is the foundation of economic growth and social progress. In today's rapidly evolving job market, continuous learning and skill enhancement are essential for individuals to remain competitive and relevant. Our Training and Skill Development program is designed to bridge the gap between education and employment by providing practical, industry-relevant training to youth, women, and marginalized communities. We focus on both technical skills and soft skills, ensuring holistic development that prepares individuals for success in diverse career paths.",
      image: "/Projects/img1pro11.jpg",
    },
    {
      content: "Through partnerships with industries, educational institutions, and government agencies, we offer training programs in various sectors including information technology, healthcare, hospitality, manufacturing, construction, and entrepreneurship. Our curriculum is designed in consultation with industry experts to ensure that trainees acquire skills that are in high demand. We provide hands-on training, internship opportunities, and placement assistance to help participants transition smoothly into employment or self-employment ventures.",
      image: "/Projects/img2pro11.jpg",
    },
    {
      content: "Our training centers are equipped with modern facilities and experienced instructors who are passionate about empowering learners. We offer flexible training schedules to accommodate working professionals, students, and homemakers. Additionally, we provide financial assistance and scholarships to economically disadvantaged individuals, ensuring that lack of resources does not become a barrier to skill development. Through our program, we aim to create a skilled workforce that contributes to India's economic development while improving their own quality of life.",
      image: "/Projects/img3proj11.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header11.jpg" 
          alt="Training and Skill Development" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we operate under the <strong>Project Name "KAUSHALYA"</strong> to provide comprehensive <strong>TRAINING AND SKILL DEVELOPMENT</strong> programs that empower individuals with the knowledge and capabilities needed to succeed in today's competitive world. Skill development is not just about acquiring technical expertise; it is about building confidence, fostering creativity, and developing problem-solving abilities that enable individuals to adapt to changing circumstances and seize opportunities.<br/><br/>
              
              Our skill development initiatives are aligned with national priorities such as the Skill India Mission and Make in India campaign. We focus on creating a skilled workforce that meets the demands of both domestic and international markets. Our training programs cover a wide range of sectors including digital literacy, financial literacy, vocational trades, soft skills, and entrepreneurship development. We believe that empowering individuals with relevant skills is the most effective way to combat unemployment and poverty.<br/><br/>
              
              We recognize that different groups have different needs and challenges. Therefore, our programs are tailored to address the specific requirements of youth seeking employment, women looking to re-enter the workforce, school dropouts needing alternative career paths, and rural communities requiring livelihood opportunities. We conduct regular needs assessments and market surveys to ensure that our training programs remain relevant and effective. Our success is measured not just by the number of people trained, but by the number who successfully transition into productive employment or self-employment.<br/><br/>
              
              Quality assurance is paramount in our training programs. We have established rigorous standards for curriculum development, trainer qualifications, and assessment procedures. Our training centers are regularly audited to ensure compliance with quality benchmarks. We also maintain strong relationships with employers and industry associations to ensure that our graduates meet industry expectations and have access to job opportunities upon completion of their training.
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
              Our entrepreneurship development programs deserve special mention. We understand that not everyone wants to be employed; many aspire to create their own enterprises and generate employment for others. For such individuals, we offer specialized training in business planning, financial management, marketing, and operations. We also facilitate access to credit through partnerships with banks and microfinance institutions, and provide mentorship support during the critical early stages of business establishment.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Technology plays a crucial role in modern skill development. We have embraced digital platforms to expand the reach of our training programs. Through online courses, webinars, and mobile learning applications, we enable individuals in remote areas to access quality training without the need to travel to urban centers. Our blended learning approach combines the flexibility of online learning with the effectiveness of face-to-face instruction, providing learners with the best of both worlds.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Soft skills training is an integral component of our programs. Communication skills, teamwork, time management, problem-solving, and professional ethics are emphasized alongside technical training. We recognize that employers value these skills as much as technical competence, and that success in any career requires a balance of both. Through interactive workshops, role-playing exercises, and real-world projects, we help participants develop the soft skills that will serve them throughout their careers.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we are committed to creating a culture of lifelong learning. In a world where technology and industries are constantly evolving, the ability to learn and adapt is crucial. We encourage our program participants to view skill development as a continuous journey rather than a one-time event. We maintain alumni networks that provide opportunities for continued learning, peer support, and professional networking. Together, we are building a skilled, confident, and empowered workforce that will drive India's progress in the 21st century.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
