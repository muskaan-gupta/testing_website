
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
                        alt="Environment Protection"
                        className="w-full h-100 sm:h-90 lg:h-96 object-cover"
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
      content: "The hard core facts are staring at our face which depicts the harsh reality of a severely damaged and pollute environment as now a days we are keener towards acquiring latest gadgets and machine without giving a single bit of thought towards cleaning our locality and setting up trees and plants which will be more essentially required for our future generations. We all can quote ourselves an example of our life style as on today in comparisons to the one we had been living since our childhood. We had enjoyed lots of greenery in our locality and cities till the time we had been stuck vigorously with globalization of each sector of our Economy. The tremendous increase in the number of production plants, vehicles, real estate etc. sectors have brutally killed billions of trees in and around our cities. Let's begin discussing what Government and Laws have setup for all of us to follow which in general we make sure to mess it up partially or completely even in our daily lives. The Environment (Protection) Act, 1986 authorizes the central government to protect and improve environmental quality, control and reduce pollution from all sources, and prohibit or restrict the setting and /or operation of any industrial facility on environmental grounds.",
      image: "/Projects/img1pro4.jpg",
    },
    {
      content: "The Environment (Protection) Act was enacted in 1986 with the objective of providing for the protection and improvement of the environment. It empowers the Central Government to establish authorities charged with the mandate of preventing environmental pollution in all its forms and to tackle specific environmental problems that are peculiar to different parts of the country. The Act was last amended in 1991. The Environment (Protection) Rules lay down procedures for setting standards of emission or discharge of environmental pollutants. The objective of Hazardous Waste (Management and Handling) Rules, 1989 is to control the generation, collection, treatment, import, storage, and handling of hazardous waste. It was introduced with a view to protect the environment, nature, and health, in connection with the application of gene technology and micro-organisms. The Biological Diversity Act 2002 and Biological Diversity Rules provide for the conservation of biological diversity, sustainable use of its components, and fair and equitable sharing of the benefits arising out of the use of biological resources and knowledge associated with it.",
      image: "/Projects/img2pro4.jpg",
    },
    {
      content: "Under the National Green Tribunal Act 2010 for effective and expeditious disposal of cases relating to environmental protection and conservation of forests and other natural resources including enforcement of any legal right relating to environment and giving relief and compensation for damages to persons and property and for matters connected therewith or incidental thereto. The Tribunal's dedicated jurisdiction in environmental matters shall provide speedy environmental justice and help reduce the burden of litigation in the higher courts. The Noise Pollution (Regulation and control) (Amendment) Rules, 2010 states to reduce noise pollution, permit use of loud speakers or public address systems during night hours (between 10:00 p.m. to 12:00 midnight) on or during any cultural or religious festive occasion. The Municipal Solid Wastes (Management and Handling) Rules, 2000 is applied to every municipal authority responsible for the collection, segregation, storage, transportation, processing, and disposal of municipal solid wastes. The Biomedical waste (Management and Handling) Rules,1998, is a legal binding on the health care institutions to streamline the process of proper handling of hospital waste such as segregation, disposal, collection, and treatment.",
      image: "/Projects/img3pro4.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh]  sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header4.jpg" 
          alt="Environment Protection" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA, are working on the <strong>Project Name "SOOKASHAM RAKSHNAM"</strong> under the <strong>Project Head "ENVIRONMENT ARMOUR"</strong>, concentration of care and plantation of existing and new trees in society and road side. We, have a firm belief of making as much contribution as we could with the help of society towards setting up clean and healthy surroundings as that could be the best gift we would be able to handover to our upcoming generation as whole. This objective will for sure be in progress religiously beyond "World Environment Day, 5th June". 
            </p>
          </div>
        </div>
      </section>  

      {/* Alternating Image-Text Sections */}
      <AlternatingSection sections={alternatingSections} />
      
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="space-y-6 sm:space-y-8">
          
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            <strong>National Environment Appellate Authority Act (1997):</strong> The Act provides for the establishment of a National Environment Appellate Authority to hear appeals with respect to restriction of areas in which any industries, operations or processes or class of industries, operations or processes shall not be carried out or shall be carried out subject to certain safeguards under the Environment (Protection) Act, 1986. <strong>National Environment Tribunal Act (1995):</strong> This Act has been created to provide for strict liability for damages arising out of any accident occurring while handling any hazardous substance and for the establishment of a National Environment Tribunal for effective and expeditious disposal of cases arising from such accident, with a view to giving relief and compensation for damages to persons, property and the environment and for matters connected therewith or incidental thereto.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            One of the collateral damages of the COVID-19 pandemic has been a hike in waste. This waste includes plastic bottles, disposable masks, gloves, and other personal protective equipment. The streets and canals around the world are filled with litter. Ironically, if the litter is burnt, the smoke that arises causes air pollution. The other side is to either deposit it in landfills or let them find it in our water bodies. The Pandemic has caused a tremendous damage on the economic front, but the environment flourished during the first phase of the lockdown. One could witness cleaner air, crystal clear water in rivers, empty roads with sparrows chirping. Well it was for like a month or two when everyone was locked down and locked up at their places and all of sudden during 2020 we got breathing fresh Air in our cities which had been polluted because of huge number of vehicles. <strong>Carbon Emissions:</strong> According to IPCC's fifth assessment report on climate change in Asia, Asia is the largest emitter of Co2 at 17 giga tonnes of carbon dioxide equivalent per year, amounting to almost 50% of global emissions. The latest report of Global Carbon Project indicates that in 2018, global emissions were at 37.1giga tonnes of carbon dioxide, and even if countries meet their commitments under the Paris Agreement, we are still on course to a 3-degree Celsius temperature rise.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            <strong>What can be done?</strong> People like you and me, meaning all individuals have to take it seriously on one side towards our duty towards society as a responsible citizen and at the same time we need to share the same knowledge with our coming generation to set a tone for them to follow this for rest of their life. It could be a small role from our side by planting a tree this World Environment Day and Bhoomi Pooja Day each year in our society or colonies or even in our office premises too and celebrate this as "Plantation Day". We in RUDRAKSHA, will ensure that each member to follow this task and we will concentrate ourselves more towards plantation of trees in our locality and surroundings. Apart from this, we will collaborate with other NPO, NGOs for supporting and donating them who are in this environment cause. We at RUDRAKSHA, welcome all like-minded individuals and NPOs and NGOs and Corporate Firms to join this cause to create a better healthy and green future. The fact that everyone needs to understand that it's not the task which is impossible. It's us as an individual need to shun laziness and think about our world on serious grounds. Come together and let's do it as a Team.
          </p>
        </div>
      </div>
    </div>
  );
}
