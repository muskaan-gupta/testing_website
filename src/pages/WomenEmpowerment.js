
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
    <section className="py-5 lg:py-4 bg-black-500">
      <div className="max-w-8xl mx-auto  sm:px-6 lg:px-8">
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
                       
                        className="w-full h-100 sm:h-90 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Decorative overlay */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                   
                    <p className="text-lg  text-black-900 leading-relaxed font-serif">
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
      image: "/abus-1.jpeg",
      
    },
    {
     
      content: "Our Foundation follows a zero-tolerance policy toward fraud, cheating, misinformation, and any unethical practices. Employees must maintain complete ethical and social compliance. After a 3-month probation, eligible employees receive life and health insurance as per IRDA rules. The work culture may require travel across India and abroad based on project needs, and all opportunities are earned through integrity and hard work. We support employees’ growth by offering approved technical or non-technical training with possible financial or non-financial assistance, subject to the MD’s final decision and available only after probation. All positions require a valid bachelor’s degree and standard PAN-India identity/address proofs. Jobs in the Foundation are strictly private-sector roles, not Government or Semi-Government positions, and follow the rules stated on our website and Code of Conduct. We never ask for money or favors for jobs; openings may appear on job portals or our website, but applications are always free. Candidates must avoid anyone seeking commissions or payments. Shortlisting is done only through interviews and verification checks.",
      image: "/abus-2.jpeg",
     
    },
    {
      
      content: "The jobs in this Foundation requires good amount of public dealings and interactions hence individuals applying for the same are expected to be well known to Hindi, English and Punjabi. The initial work profile will be in Chandigarh and in due course will be expanded to various States of North INDIA. The general working hours in this Foundation will be between Monday to Friday 9:30 am – 6:00 pm during summer and 9:30 am to 5:30pm during winters. There will be working ours based on any activity if being scheduled on Saturdays or any other holidays as per the case may arise. The employee will be benefited with an additional off day within next 45 -60 days from the day he or she had made her contribution on any holiday or weekends. The working rules will be applicable on the domestic as well as International official tours. The travel expenses for official trips will be borne by our Foundation. Our Foundation puts an extra emphasis over Gender Equality parameters, hence we hire close to 50% female employees in our projects and in general. The actual number may vary depends upon meeting financial and other work profile constraints. The detailed eligibility requirements of all the above mentioned benefits and processes are listed in “Code of Conduct” column in this website. We might involve other organizations, NGOs in our project(s) based on the need arises as per the situation. The preference will be through well established organization on State, Center or National Level which have positive track records. A strict compliance and due diligence will be followed as setup by Government for philanthropy organizations.",
       image: "/abus-3.jpeg",
      
    },
    
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img 
          src="/about.jpeg" 
          alt="About Us Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
       
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
      </section>
      <section className="w-full bg-white py-8 sm:py-12 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA WELFARE FOUNDATION, have a well defined journey with a prime motive to achieve success in making dreams come true for all those people around us who are lagged behind due to several personal and other challenges in their respective lives. The Foundation will work together along with them to fulfill their professional dreams & othe legitimate needs with a prime motive of allowing them to enrich and relish equal respect, dignity, health, earnings, better standard of living and confidence in their day to day lives. The mission of this Foundation will be completely unbiased and will act on first come first serve or first noticed first serve basis. The recommendations from any individual or group to provide any sort of legitimate help or assistance to anyone in the 15 Projects as per named mentioned below will be highly appreciated. These Activities will be requiring good amount of funds as well as technically enriched manpower to handle all projects. The Foundation will be working on self sustainability model along with support from various Govt. as well as Private Organizations PAN INDIA. The objective will not be stressed upon to raise funds from the CSR bucket of the various prestigious organizations, but will be raising funds through providing premium quality goods and services to general public at very reasonable rates in comparison to the prices quoted by several other respected players in the market. The respective Government Rules, Regulations and Licensing for the same will be procured well in advance before initiating any such business or activity of the nature as applicable.
            </p>
          </div>
          </div>
          
           </section>  


      {/* Alternating Image-Text Sections */}
      <AlternatingSection sections={alternatingSections} />
      

      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
               In everything we do, we remain committed to serving society with integrity, transparency, and purpose. Our mission is guided by strong ethical values, and we strive to create meaningful, sustainable impact through every project, initiative, and partnership. As we move forward, we continue to empower individuals, uplift communities, and contribute to the nation’s progress with unwavering dedication. Together—with our team, supporters, and beneficiaries—we aim to build a brighter, more inclusive, and responsible future for all.
     </p>
          </div>
          </div>
      
           
    </div>
  );
}