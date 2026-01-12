import { motion } from "framer-motion";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Aacharya Yogesh Kaushik",
    designation: "Director",
    image: "/Director.jpg",
    description: "AACHARYA Yogesh Kumar Kaushik, hails from Haryana and holds a Masters Degree in Vedic Astrology, Karam Kaand, Vastu & HINDU Dharma Shastra in Sanskrit. He has a rich experience of 18+ years in Astrology, Vastu & HINDU Dharma Shastra. He is a shareholder Director in RUDRAKSHA WELFARE FOUNDATION since FY 2020-21 onwards."
  },
  {
    id: 2,
    name: "Mr. Atul Dev Arora",
    designation: "Managing Director",
    image: "/AtulDevArora.jpeg",
    description: "Atul Dev Arora, is a localite from Chandigarh and holds Masters in IT, Cosmic Science, Social Work, CSR & DM. He has rich experience of 17+ years in National & International Projects of Ministry of Corporate Affairs, Regulatory Bodies, Government Organisations & Private Banks. He is the Founder & MD in RUDRAKSHA WELFARE FOUNDATION since FY 2019-20 onwards."
  }
];

export default function Management() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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

  return (
    <div>
      {/* Hero Image Section - Same as About page */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/manage.jpg" 
          alt="Management Team Background" 
          className="w-full h-auto object-contain object-center"
        />
       
      </section>

      {/* Team Members Section */}
      <section className="w-full bg-white py-2 sm:py-4 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
              >
                {/* Profile Image */}
                <motion.div
                  variants={slideInLeft}
                  className="flex-shrink-0"
                >
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-4 ring-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative gradient overlay */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl -z-10 blur-xl"></div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={slideInRight}
                  className="flex-1 text-center lg:text-left"
                >
                  {/* Name */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-500 mb-3 hover:text-cyan-600 transition-colors">
                    {member.name}
                  </h2>

                  {/* Designation */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black mb-6">
                    {member.designation}
                  </h3>

                  {/* Description */}
                  <motion.p
                    variants={fadeUpVariants}
                    className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed text-justify font-serif"
                  >
                    {member.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
