
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

export default function ProjectDetail() {
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
      image: "/Projects/img1pro2.jpg",
      
    },
    {
     
      content: "Our Foundation follows a zero-tolerance policy toward fraud, cheating, misinformation, and any unethical practices. Employees must maintain complete ethical and social compliance. After a 3-month probation, eligible employees receive life and health insurance as per IRDA rules. The work culture may require travel across India and abroad based on project needs, and all opportunities are earned through integrity and hard work. We support employees’ growth by offering approved technical or non-technical training with possible financial or non-financial assistance, subject to the MD’s final decision and available only after probation. All positions require a valid bachelor’s degree and standard PAN-India identity/address proofs. Jobs in the Foundation are strictly private-sector roles, not Government or Semi-Government positions, and follow the rules stated on our website and Code of Conduct. We never ask for money or favors for jobs; openings may appear on job portals or our website, but applications are always free. Candidates must avoid anyone seeking commissions or payments. Shortlisting is done only through interviews and verification checks.",
      image: "/Projects/img2pro2.jpg",
     
    },
    {
      
      content: "The jobs in this Foundation requires good amount of public dealings and interactions hence individuals applying for the same are expected to be well known to Hindi, English and Punjabi. The initial work profile will be in Chandigarh and in due course will be expanded to various States of North INDIA. The general working hours in this Foundation will be between Monday to Friday 9:30 am – 6:00 pm during summer and 9:30 am to 5:30pm during winters. There will be working ours based on any activity if being scheduled on Saturdays or any other holidays as per the case may arise. The employee will be benefited with an additional off day within next 45 -60 days from the day he or she had made her contribution on any holiday or weekends. The working rules will be applicable on the domestic as well as International official tours. The travel expenses for official trips will be borne by our Foundation. Our Foundation puts an extra emphasis over Gender Equality parameters, hence we hire close to 50% female employees in our projects and in general. The actual number may vary depends upon meeting financial and other work profile constraints. The detailed eligibility requirements of all the above mentioned benefits and processes are listed in “Code of Conduct” column in this website. We might involve other organizations, NGOs in our project(s) based on the need arises as per the situation. The preference will be through well established organization on State, Center or National Level which have positive track records. A strict compliance and due diligence will be followed as setup by Government for philanthropy organizations.",
       image: "/Projects/img3pro2.jpg",
      
    },
    
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img 
          src="/Projects/header2.jpg" 
          alt="blood donation background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
       
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
      </section>
      <section className="w-full bg-white py-8 sm:py-12 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              "Give me blood, and I shall give you Freedom": Netaji's Statement was enough to trigger loads of confidence and enthusiasm in our desire to live freely, hope the same rigor would be present for donation of this precious natural red liquid which can save lives of our several nationals. Blood Donation is the best form of donation one can do in his or her life spam while bringing absolute zero defect in the health of the donor with basic precautions being followed religiously. This is a donation wherein no discrimination is being made on the basis of caste, creed, religion, sect and economical status of the donor as well as the receiver. We at RUDRAKSHA, are working on the Project Name "RAKTACHARITRA" under the Project Head "BLOOD DONATION". We in medical science have done enough of researches and advances and literally have raised our levels to sky high while fighting with dreadful diseases, though almighty have still deprived us from developing blood in our labs. The natural cosmic motive behind this could be the truth of humanity wherein the Supreme Power is guiding the human race to be one and same like the blood which is running in their veins and keeping the alive and healthy with each and every passing fraction of a second anywhere in this universe. Blood Donation is most dreadfully hit by a conservative thought process where in humans can donate something which is priceless though refrain by doing so due to less or absolute nil knowledge about the healthy concepts hidden behind the same for a donor as well as the seeker. The worst scenario is even well educated and well to do individuals are not interested in Blood Donation and saving a mankind who might be in grave saving situation while waiting for this Red liquid to reach, though well in time. The challenges does not end here as in we have to go through a depth of processes and checks while making sure the person donating the blood and the seeker have compatibility and medical approvals chemically. We as a human being have a social responsibility of making sure to be a proud donor at least once in 3 months as this will bring down the death rate for several patients worldwide. We hope we are not waiting for some rules and regulations be implied on us to be a Blood donor by Govt. as a compulsory activity like Income tax returns or vehicle insurance. It is our moral duty to make sure we contribute towards society and this could be the best possible actions. The irony of Blood Donation knowledge base is so cruel that even since first transfusion was conducted in world way back in 1818, even post 200 years have passed, Blood donation is being primarily supported by our Defense forces through regular camps, though general public have already been provided on door service for Blood Donation by several Blood Donation Rotary Clubs being supported by State as well Central Government. India collected 11.1 million units of blood in 2016-17, meeting 85% of its 13 million units target based on World Health Organization (WHO) norms. India fell short of 1.9 million units of blood in 2016-17–equivalent to 60 tankers–that could have aided more than 320,000 heart surgeries or 49,000 organ transplants, according to official data. The World Blood Donor Day is celebrated on June 14 every year. About 112 million blood donations are collected worldwide every year, 50% of which are donated in low- and middle-income countries where around 80% of the world's population lives, according to the WHO.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Chandigarh collected 74,408 more units of blood than it needed as per the WHO norm in 2016-17, government data show. Chandigarh is entirely a unique area in terms of voluntary blood donation. The unique feature is promotion of voluntary blood donation through educational institutions. Chandigarh has proudly led the country's blood donation movement and the entire credit is being shared with donors and well adequate Blood Centers in various institutions. We would like to contribute in the same by tapping all the Government as well as Private organizations Schools, Colleges, Universities and Govt approved and governed Rotary clubs to schedule such precious activities at least once in 3 months. The prime motive behind the same would be to appreciate and improvise general public over Blood Donations. We all are facing severe issue and not knowing till what would be the end of this. Many places like the states as Maharashtra, Himachal Pradesh, west Bengal and the others the number of blood donation has took a dramatic reduce in its implementation. Due to this pandemic phase and precautions like social distancing and lockdown criteria everyone fears of the surrounding. As the incubation period is the time between virus attack and the sign and symptoms of the disease which ranges from 1-14 days. As said by the government of India the recommendations for the donors to maintain their own safety. Under the guidance of WHO which estimated that blood donation at minimum requirement is of 1% of the total population.In India we were lacked about 1.9 million units in the year 2016-2017.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              As said by the American Red Cross, has an urgent need of blood and platelet donation to fight against Corona virus. The pandemic has already taken over the world and everyone's life is affected by this. As the need of the blood product is constant and so the necessity of donating blood is essential. The Red Cross is also testing all the antibodies blood, platelets and plasma donations. Keeping the urgency at first priority there are few safety measures by the Red Cross.
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-serif">1. Frequently changing of gloves after use.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-serif">2. Cleaning down the touched area after every collection.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-serif">3. Preparing the arm for donation with aseptic scrub.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-serif">4. Checking donors mini physical health checkup for well on donation day.</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Only people who are eligible are allowed to give blood. These measures are taken very seriously to ensure recipient safety as well as the donors and other members safety. As many as 1.18 million units of blood–nearly 38 tankers full–was discarded in 2016-17, which further puts an additional burden on us to whom we might not meet in our lifetime. Each and every drop of blood donated is precious and can save up to 3 lives.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              This could be another gracious act towards humanity by any individual, irrespective of his caste, creed, religion, beliefs and gender.As per data being shared by Government Agencies, at present, India has 2,903 blood banks spread all across the country, of which 1,043 are public and 1,860 private, including those run by charitable trusts.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              The new National Blood Policy and the National Blood Transfusion Council was formed as a result of efforts by a group of activists in Chandigarh, who went to court demanding regulation of blood donation, and the Supreme Court issued the requisite orders to the central government. According to NACO (National AIDS Control Organization) A well organized Blood Transfusion Service (BTS) is a vital component of any health care delivery system. An integrated strategy for Blood Safety is required for elimination of transfusion transmitted infections and for provision of safe and adequate blood transfusion services to the people. The main component of an integrated strategy include collection of blood only from voluntary, non-remunerated blood donors, screening for all transfusion transmitted infections and reduction of unnecessary transfusion.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif font-semibold">
              The main objectives of this policy are to make sure:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">1. To reiterate firmly the Govt. commitment to provide safe and adequate quantity of blood, blood components and blood products.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">2. To make available adequate resources to develop and reorganize the blood transfusion services in the entire country.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">3. To make latest technology available for operating the blood transfusion services and ensure it's functioning in an updated manner.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">4. To launch extensive awareness programmes for donor information, education, motivation, recruitment and retention in order to ensure adequate availability of safe blood.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">5. To encourage appropriate clinical use of blood and blood products.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">6. To strengthen the manpower through human resource development.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">7. To encourage Research & Development in the field of Transfusion Medicine and related technology.</li>
              <li className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify font-serif">8. To take adequate regulatory and legislative steps for monitoring and evaluation of blood transfusion services and to take steps to eliminate profiteering in blood banks.</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We all have a moral duty to contribute towards this noble cause as and when we have the chance to do so hence @ RUDRAKSHA, we will get in touch with all the Educational Institutes, Offices and Individual peers and groups to come forward and help us in this activity with large numbers. In order to expedite participation, Educational competitions will be setup where in winners will be awarded with freebies and gifts. We might involve other organizations, NGOs in this project based on the need arises as per the situation. The preference will be through well established organization on State, Center or National Level which have positive track records. A strict compliance and due diligence will be followed as setup by Government for philanthropy organizations.
            </p>
          </div>
          </div>
          
           </section>  


      {/* Alternating Image-Text Sections */}
      <AlternatingSection sections={alternatingSections} />
      

           
    </div>
  );
}