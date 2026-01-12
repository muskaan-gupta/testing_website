
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
                        alt="Art and Culture"
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

export default function About() {
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
      
      content: "Our Organization is a core consortium of positive thoughts applied to personnel force and targets which have an in depth visioning with the prime objective of bringing the best possible solution for all those people in need of basic amenities of life. We always try to make sure not to leave any stone upturn in respect to provide support in all the philanthropy activities we perform as our daily routine work. It is a group of good number of individuals who have a hobby pertaining to social work and also provides a good platform to make the same as a professional life path. We invite professionals from different walk of lives and sectors, specifically fresher(s) to give themselves an opportunity to serve the society along with career progression. The Foundation has a specified work culture which is strictly blinded with Code of Conduct in all the perspectives of an organization behavior towards its employees as well as Society and Nation. We offer a great work culture wherein the employee has the opportunity to win accolades on completion of easily achievable targets as strict emphasis has been applied on ethical working. The promotion criteria are also not rigid and can be regained by any individual who has the positive intent and wisdom to work ethically.",
      image: "/Projects/img1pro1.jpg",
      
    },
    {
     
      content: "Our Foundation follows a zero-tolerance policy toward fraud, cheating, misinformation, and any unethical practices. Employees must maintain complete ethical and social compliance. After a 3-month probation, eligible employees receive life and health insurance as per IRDA rules. The work culture may require travel across India and abroad based on project needs, and all opportunities are earned through integrity and hard work. We support employees’ growth by offering approved technical or non-technical training with possible financial or non-financial assistance, subject to the MD’s final decision and available only after probation. All positions require a valid bachelor’s degree and standard PAN-India identity/address proofs. Jobs in the Foundation are strictly private-sector roles, not Government or Semi-Government positions, and follow the rules stated on our website and Code of Conduct. We never ask for money or favors for jobs; openings may appear on job portals or our website, but applications are always free. Candidates must avoid anyone seeking commissions or payments. Shortlisting is done only through interviews and verification checks.",
      image: "/Projects/img2pro1.jpg",
     
    },
    {
      
      content: "The jobs in this Foundation requires good amount of public dealings and interactions hence individuals applying for the same are expected to be well known to Hindi, English and Punjabi. The initial work profile will be in Chandigarh and in due course will be expanded to various States of North INDIA. The general working hours in this Foundation will be between Monday to Friday 9:30 am – 6:00 pm during summer and 9:30 am to 5:30pm during winters. There will be working ours based on any activity if being scheduled on Saturdays or any other holidays as per the case may arise. The employee will be benefited with an additional off day within next 45 -60 days from the day he or she had made her contribution on any holiday or weekends. The working rules will be applicable on the domestic as well as International official tours. The travel expenses for official trips will be borne by our Foundation. Our Foundation puts an extra emphasis over Gender Equality parameters, hence we hire close to 50% female employees in our projects and in general. The actual number may vary depends upon meeting financial and other work profile constraints. The detailed eligibility requirements of all the above mentioned benefits and processes are listed in “Code of Conduct” column in this website. We might involve other organizations, NGOs in our project(s) based on the need arises as per the situation. The preference will be through well established organization on State, Center or National Level which have positive track records. A strict compliance and due diligence will be followed as setup by Government for philanthropy organizations.",
       image: "/Projects/img3pro1.jpg",
      
    },
    
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh]  sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header1.jpg" 
          alt="About Us Background" 
          className="w-full h-auto object-contain object-center"
        />
       
       
      </section>
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA, are working on the <strong>Project Name "YATHA VAYUPATTI"</strong> under the <strong>Project Head "ART, LITERATURE, RELIGION and CULTURE"</strong>, working rigorously to nurture and care the Art and Culture of forgotten era, old literatures, cultural and beliefs of various creeds of our Hindu civilization. Every morning, many people enjoy sitting outside watching sunrise. They feel relaxed seeing the arrival of the sun with its pure light and the traveling of the night with its darkness. They consider that a new life will start as the sun starts her new life. Not only they watch the sun, many people enjoy drawing this view because they will feel for once that their minds are relaxed and not thinking except in this new born. People do like the view of rainfall, rainbow, snowfall, stars, mountains, rivers, oceans and natural vegetation. All of this is natural art and have a mesmerising view. “Art is your emotions flowing in a river of imagination".If you stand for a moment in front. any work of art, which has many shapes and many lines cannot be described, you start to imagine things by walking on that lines and shapes trying to connect them to get a specific shape done from your imagination.Art is everywhere in the entire world. It is one's creativity and imagination.
              <br/> <br/>
              Art is the most things you use and see always without paying attention to that. Art help us see everything and everyone completely different. Art is not a reading to get bored or listening to get epileptic, it’s something which opens to us a field of questions and answers to things we see. Art can be in different forms audio like music, songs, and poems. Visual as film making, photography and painting, they differ depending on artist, style and material used. They can be in the form of music, song or poetries. They help in relaxing one’s mind. Music is thought to link all of the emotional and physical elements of the universe. Music can also be used to change person’s mood, and has been found to cause like physical responses in many people simultaneously. Music also has the ability to strengthen or weaken emotions from a particular event such as a funeral. Visual arts are popular art. Artists place images, forms, colours, ideas, down in such a way that can be communicated with you the viewer. When you read the work, it will serve your understanding in a multitude of vibrant ways. It will begin to make sense, in some cases a perverse kind of sense. Art is an expression of a particular person, or group of people. Art can have a large effect on culture, as it can be symbolic of traits, morals, and religious characteristics. An artist is defined as a person whose creative work shows sensitivity and imagination. That sensitivity and imagination is what can make a culture. Artists have the ability to manipulate the form of their art therefore manipulating the experience of that art. Art is everywhere; it is in the car we drive, the magazine we read, and in the food that we eat.Art is something that influences many parts of our lives. Literature is the foundation of life.It places an emphasis on many topics from human tragedies to tales of the ever-popular search for love. While it is physically written in words, these words come alive in the imagination of the mind, and its ability to comprehend the complexity or simplicity of the text. Literature enables people to see through the lenses of others, and sometimes even inanimate objects; therefore, it becomes a looking glass into the world as others view it. It is a journey that is inscribed in pages, and powered by the imagination of the reader. Ultimately, literature has provided a gateway to teach the reader about life experiences from even the saddest stories to the most joyful ones that will touch their hearts.
            </p>
          </div>
        </div>
      </section>  


      {/* Alternating Image-Text Sections */}
      <AlternatingSection sections={alternatingSections} />
      

      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            <strong>Our Services & Initiatives:</strong> We at RUDRAKSHA, will try to provide help to the people in arranging and putting up exhibitions to showcase their artistic nature in form of paintings, handicrafts, idols, pottery, weaving, embroidery. Moreover, to the students who want to learn various types of arts like, painting, singing acting, dancing, pottery, embroidery etc. then we will try to help them out.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
           We at RUDRAKSHA, will try to provide help to the people in arranging and putting up exhibitions to showcase their artistic nature in form of paintings, handicrafts, idols, pottery, weaving, embroidery. Moreover, to the students who want to learn various types of arts like, painting, singing acting, dancing, pottery, embroidery etc. then we will try to help them out. We will try to provide help to the people who are more of the religious by our proposed channel partner Har Har Mahadev Sewa (Reg 37) Dal, Budhlada, Punjab and want to explore more by travelling to various religious places like, Amarnath Yatra, Kedarnath, Vaishno Devi, 12 jyotilingas and many more places and for them the food, shelter and water facilities will be free. We will be providing free education and training to those who want to learn literature, Shasta Acharya education, Astrology, Vaastu, Red Book, Vedic Granth, etc.</p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            We will be providing free education and training to those who want to learn literature, Shasta Acharya education, Astrology, Vaastu, Red Book, Vedic Granth, etc.
          </p>
        </div>
      </div>
      
           
    </div>
  );
}