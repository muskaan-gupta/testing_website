
import { motion } from "framer-motion";

export default function CoreValues() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const coreValues = [
    {
      number: "1.",
      letter: "C",
      title: "ourage",
      content: "This natural value is desired from each soul participating in our social cause as several times during the project phases and other related activities, courage within the limits of rules and regulations would be required in order to have victory over difficult times. A coward in character would not be harmful for an organizational growth but will definitely be useless for his personal as well as society upgrade. We follow and expect the same to be the DNA of all the precious employees of this organization. A support will be offered to each employee provided he/she should be involved in a positive courageous activity within the compliance of social rules, regulations and law in general.", },
    {
      number: "2.",
      letter: "H",
      title: "onesty",
      content: "This is undoubtedly the most important base of any individual’s or entity’s character that indicates the attributes such as integrity, straightforwardness, transparency with complete commitment towards designated duties and ownerships. We at our Foundation, respects and appreciates this feature in each and every person associated with us, in no matter what so ever be the situation prevailing. This Foundation precisely works on the faith of several donors and above all MCA, GOI guidelines, who had offered license to operate as per their written code of conduct in companies Act 2013 for section 8, and hence puts an ownership on us to religiously follow the desired transparency with zero tolerance to any sort of misappropriation, concealment, fraud, fake, hypocrisy, illegal actions with respect to philanthropy activities worldwide." },
    {
      number: "3.",
      letter: "A",
      title: "ccountability",
      content: "This is one of the utmost basic requirements desired from an employee, professional, human being both in personal as well as professional behaviors, as our organization has a deep resistant belief stating any individual or entity that does not care for taking ownerships of his/her actions is absolutely not at all good for society.We expect the same from us for our precious and trustworthy employees, partners,donors, service providers, individuals, firms, organization, companies, NGO,NPO and vice versa. We all have a mandate to make sure our donors, stakeholders, outsiders, Government should respect our work and culture, which will be possible only if all of us have these core values embedded in our natural process and working ethics." },
    {
      number: "4.",
      letter: "I",
      title: "nnovative",
      content: "This Foundation motivates and supports all positive suggestions, ideas which are triggered from the creative grey matters of any of the person within the organization or via social human network. The same can be applied to any of the executed, existing or forthcoming social events with due discussion and approval of the team involved in the concerned project. Innovation is mandatory for each organization to flourish as creativity brings originality and further formulates the stepping stone of a successful internal and externals factors involved in completion of a project. We are into a humanitarian business which is being done since ages and now a day’s requires extensive creativity to perform monotonous tasks in order to capture positivity from more inquisitive brains and thoughts with our mission and vision."  },
    {
      number: "5.",
      letter: "R",
      title: "elaibility",
      content: "This encourages & enhances the performance of an employee manifolds as a strict discipline will be expressed by him/her whether it comes to adherence of organization mission via cultivating methodologies to meet daily timelines in respect to various projects. We appreciate and support such individuals and make sure they learn a lot from this work environment and be self dependent economically and professionally. This also provides a clear showcase of their trust worthiness, loyalty and confidence towards the action(s) we all perform for the better sake of humanity and society."
    }
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/cvnew.jpg" 
          alt="Core Values Background" 
          className="w-full h-auto object-contain object-center"
        />
       
      </section>
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
             We at RUDRAKSHA, have strict compliance to embrace a positive attitude towards performing our duties and take ownerships of the actions involved in it. This Foundation appreciates constructive initiatives from all employees and society and implication of the same in our projects, post due discussions of the facts and figures. We work with a definite motive of social service for different sections of the society with no discrimination to any class, creed, religion, sect, gender, color etc. This further trigger the compliance to our mentioned core values which are expected & mandated for each and every individual/entity associated with this Foundation.

We have to take into consideration all of the 5 elements of our Core Values while performing our duties on a daily basis while working in this Foundation. The concept will be as follows: </p>
          </div>
          </div>
      </section>  

      {/* Content Section */}
      <section className="w-full bg-white py-12 sm:py-16 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* Core Values */}
          <div className="space-y-16 sm:space-y-20">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={slideInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Value Container */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-2 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 group">
                  
                  {/* Number and Title Header */}
                  <div className="flex items-start mb-3 space-x-4 sm:space-x-6">
                    {/* Number */}
                    <motion.span 
                      className="text-4xl sm:text-5xl lg:text-6xl font-black  leading-none"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value.number}
                    </motion.span>
                    
                    {/* Large Initial Letter and Title */}
                    <div className="flex-1">
                      <div className="flex items-baseline mb-2">
                        <motion.span 
                          className="text-6xl sm:text-7xl lg:text-8xl font-black text-red-500 leading-none mr-2 drop-shadow-lg"
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          transition={{ duration: 0.3 }}>

                          {value.letter}
                        </motion.span>
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-none ">
                          {value.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pl-0 sm:pl-16 lg:pl-20">
                    <p className="text-base sm:text-lg lg:text-xl text-black-900 leading-relaxed text-justify font-serif tracking-wide">
                      {value.content}
                    </p>
                  </div>

                 
                </div>

                {/* Side Accent Line */}
                
              </motion.div>
            ))}
          </div>

        

        </div>
      </section>
    </div>
  );
}