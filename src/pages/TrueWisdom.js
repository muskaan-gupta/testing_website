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
                        alt="True Wisdom"
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

export default function TrueWisdom() {
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
      content: "True wisdom transcends mere knowledge and intellectual understanding. It is the profound ability to apply knowledge with compassion, discernment, and ethical consideration. Our True Wisdom initiative focuses on nurturing holistic development that encompasses intellectual growth, emotional intelligence, spiritual awareness, and practical life skills. We believe that wisdom is cultivated through a combination of education, experience, reflection, and guidance from mentors who embody the values we seek to instill in future generations.",
      image: "/Projects/img1pro12.jpg",
    },
    {
      content: "Through our comprehensive programs, we provide educational resources, mentorship opportunities, and platforms for philosophical discourse and personal development. We organize workshops on critical thinking, ethical decision-making, mindfulness practices, and life skills that help individuals navigate the complexities of modern life with wisdom and grace. Our approach integrates ancient wisdom traditions with contemporary insights from psychology, neuroscience, and social sciences to create a well-rounded framework for personal and community transformation.",
      image: "/Projects/img2pro12.jpg",
    },
    {
      content: "The True Wisdom project emphasizes the importance of intergenerational learning, where elders share their life experiences and younger generations contribute fresh perspectives and innovative ideas. We create spaces for meaningful dialogue, contemplation, and community learning that foster mutual respect and understanding. By promoting values such as humility, curiosity, compassion, and integrity, we aim to cultivate a society where decisions are made thoughtfully, relationships are nurtured with care, and challenges are met with resilience and wisdom.",
      image: "/Projects/img3pro12.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header12.jpg" 
          alt="True Wisdom" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we work under the <strong>Project Name "TRUE WISDOM"</strong> to promote intellectual, emotional, and spiritual growth that leads to genuine wisdom. In an era of information overload and rapid technological change, the ability to discern truth, make ethical choices, and live with purpose has become more important than ever. True wisdom is not simply about accumulating facts or achieving academic success; it is about developing the insight and character to use knowledge for the greater good.<br/><br/>
              
              Our vision encompasses multiple dimensions of wisdom development. We believe that intellectual wisdom comes from rigorous study, critical thinking, and the ability to see connections between disparate ideas. Emotional wisdom involves self-awareness, empathy, and the capacity to manage one's emotions constructively. Spiritual wisdom includes a sense of purpose, connection to something greater than oneself, and an understanding of life's deeper meanings. Practical wisdom is the ability to navigate real-world challenges with good judgment and effectiveness.<br/><br/>
              
              The True Wisdom initiative offers programs for all age groups, from children learning fundamental values to adults seeking personal transformation. For young people, we provide educational enrichment programs that go beyond conventional curricula to include philosophy, ethics, comparative religions, psychology, and arts. We encourage questioning, exploration, and the development of independent thinking. For adults, we offer continuing education opportunities, discussion groups, contemplative practices, and leadership development programs that help them grow in wisdom and effectiveness.<br/><br/>
              
              Mentorship is a cornerstone of our approach. We connect seekers of wisdom with experienced mentors who can guide them on their journey. These mentors come from diverse backgrounds—scholars, spiritual teachers, business leaders, artists, and community elders—each bringing unique perspectives and insights. Through one-on-one mentoring relationships and group learning circles, participants receive personalized guidance while also benefiting from collective wisdom and peer learning.
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
              We organize regular events that bring together thought leaders, scholars, and practitioners to explore important questions facing humanity. These include lecture series, symposiums, retreats, and community forums where participants engage in deep dialogue about ethics, meaning, purpose, and human flourishing. We create safe spaces where people can express doubts, ask difficult questions, and explore different worldviews without fear of judgment.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              The True Wisdom project also emphasizes experiential learning through service projects, nature immersion experiences, artistic expression, and contemplative practices such as meditation and journaling. We believe that wisdom is not just intellectual but must be embodied and practiced in daily life. By engaging in service to others, participants develop compassion and humility. Through nature experiences, they cultivate awe and ecological awareness. Through arts, they express their inner truths and connect with beauty.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we are committed to being a learning community where wisdom is valued, cultivated, and shared. We recognize that the pursuit of wisdom is a lifelong journey with no final destination, only continuous growth and deepening understanding. Through our True Wisdom initiative, we strive to create a culture where people of all backgrounds can develop the insight, character, and judgment needed to live meaningful lives and contribute to a more just, compassionate, and flourishing world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
