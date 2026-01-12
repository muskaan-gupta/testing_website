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
                        alt="Old Age, Orphanage & Blind Home"
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

export default function OldAgeOrphanage() {
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
      content: "Elderly are the truest form of wisdom. They have lived for a long time- from generations to generations. They teach us respect, perseverance, wisdom. By being with them and caring for them establish relationships. We learn patience and tolerance by caring for them. As they have lived long, they know life very well. We learn how to face problems- we learn everyone have to face problems and anyone can overcome it. They teach us to look at things in a deeper level rather than waddling in the shallow pool. Elderly helps us to see people as well as ourselves differently- in a good way. There teach us that that there is so much more to things as well as people than they appear. We become more self-aware and wiser through all the things they teach and do. Through their actions we imbibe better the seeds they sown. Through their calmness and serenity from all the experiences and lessons they have learnt and gathered through the years they provide us a better platform for us follow and imitate as actions speak louder than words. Caring for them benefits us in many ways and prepares us to face life and overcome it.",
       image: "/Projects/img1pro8.jpg",
    },
    {
      content: "All the little things that we learnt through caring strengthens us and help us to live life in fulfilment and satisfaction; storing all the things that we learnt and doing it. Still we are forcing our parents and elder people to go and live in a old age home. They are our family; they have raised us, give us an identity and we are giving them this result by leaving them alone because they do not understand our generation. Elderly teach us the value of family, relationships and life. As humans are industrious being- we don’t like to feel stagnant. We love progress. And through progress we win. Caring for the elders help us to grow in many ways which altogether lead to who we are. We owe to them. We will not be here if it were not for them. It is everyone’s responsibility to grow into a respectable elder- someone whom we can go to for help and counsel. And as no man is an island and he is constantly shaped and influenced by the experience of life he goes through, it is very important that he get the right experience and counsel by being with the diamonds, and storehouse of wisdom and goodness- the elderly!",
       image: "/Projects/img2pro8.jpg",
    },
    {
      content: "Pradhan Mantri Vaya Vandana Scheme is one of the most popular senior citizen pension schemes in India. Designed for senior citizens above 60 years of age, the policy term of this Prime Minister Senior Citizen Scheme extends to ten years. They can earn interest of 8% per annum over this scheme. Indira Gandhi National Old Age Pension Scheme is specially intended for older adults above the age of 60 years, who fall below the poverty line, according to the guidelines prescribed by the Government of India. National Programme for the Health Care of Elderly was introduced in 2010, this scheme concentrates on preventive as well as promotive care for the maintenance of overall health. This program was launched to address the health issues faced by seniors. Varishta Mediclaim Policy aids seniors by covering the cost of medicines, blood, ambulance charges, and other diagnosis related charges. Designed for senior citizens between the age of 60 and 80 years, this helps meet the health-related expenses of senior citizens.",
       image: "/Projects/img3pro8.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header8.png" 
          alt="Old Age, Orphanage & Blind Home" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA are working under the <strong>Project Name "AVSHTAMBH"</strong> to provide comprehensive care and support for <strong>OLD AGE CITIZENS, ORPHANED CHILDREN, AND BLIND INDIVIDUALS</strong>, focussing on basic needs, health care, emotional and religious support to senior citizens homes, blind homes and orphanages. There is one Acharya more than ten Upadhyas, father is more than hundred Acharyas and mother is more than a thousand times prouder than father. In both the above verses, the glory of parents, gurus and superior people is clear. These three are our direct deities. Therefore, it is our duty to serve these souls with their bodies, minds and wealth, it is our religion to always keep them satisfied and happy. Apart from Manusmriti, in our other religious texts, parents, gurus and best people have been considered venerable. It is the duty of all of us to keep these three happy forever. To care for someone who once cared for us is the highest honour. Getting old is an inevitable process. It is inherent to human being. And with old age comes maturity, wisdom and respectability. Elderly people are precious. They are the revered members of our family, wise sages and keeper of traditions. They are a goldmine storehouse of knowledge. Caring for the elderly aids to self-development. Old-age is a time when they need help in things, they effortlessly do by themselves before. It is a time when they need attention and affection.  </p>
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
            Senior Citizens Welfare Fund launched by the Ministry of Social Justice and Empowerment, this fund includes unclaimed amounts from small savings and savings accounts in the Central government schemes. It aims to make seniors financially stable for their overall welfare and health care. There is nothing denying in the well said quote; If love is blind, then maybe a blind person that loves has a greater understanding of it. A blind person will not thank anyone for a looking glass but will definitely pass on the blessings from his soul for all those actions you have taken to make that person life shining like a diamond with dignity and ethics. Close your eyes and try to do something you do every day, like putting toothpaste on a toothbrush. You will soon realise how difficult it is to do things if you cannot see what you are doing. People who cannot see face such difficulties every day. They depend on their other senses (touch, smell, sound and taste) to learn about the world around them. And, with practice, they learn to use these senses better than people with sight.  </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
             Around 20,000 cases are adding every year. Divyangjan Swavalamban Yojana Scheme for Persons with Disabilities scheme is to assist the needy disabled persons by providing concessional loan for economic and overall empowerment. The blind person may not be present at the station for purchase of the ticket, prescribed form, from a government doctor, is eligible to get the concession. Under the scheme, handicapped children are sought to be integrated in the normal. Being an Orphan is a lethal pain that cuts down the life of any human being at any stage of his life and this very well describes the agony, pain, scare, demotivation for all those unfortunate children who don't have Parents either from the time they are born or later during young age. Their eyes always look out for those Honest, Graceful, Dignified, True & Loveable Seniors who can provide them love, care, Affection, Attention & Security. Throughout our world, hundreds upon thousands of children are kept in orphanages. These children, who have no home, no parents, and no siblings to play with, are kept in a place where all they have left is their childhood; and even that is taken away from them in these living hells. Most people would define the word orphanage as a public or private institution for the care and protection of children without parents.  </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
             According to UNICEF, almost 10,000 children become orphans every day. According to internationally accepted figures, there are at least 140 million orphans in the world. Given the fact that there is so much compelling evidence showing that there are millions of more orphans not included in official statistics, there is no doubt that this number is actually much higher. Orphans who have lost both parents in a hostile action, and became orphan before the age of 37, will be entitled to a benefit and advantages, by virtue of one parent, under the Compensations for Victims of Hostile Actions Law. Until age 21, an orphan is entitled to a survivor’s pension by virtue of the second parent, under the Old Age and Survivors Law. And when it comes to adopt orphans, our country has shameful record on adoption. We have more than 30 million orphans in the country, but when it comes to adopt only 2500 orphans were adopted last year.   </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
             We at RUDRAKSHA, will try to help old people, orphans and persons with physical disabilities. For the old people we will try to help them in availing pension benefits and can help them by providing them the things they need, like clothes, books, spending time with them, arranging various games at old age homes, overall good environment, etc. and try to help them in providing them various needy things like, television, medicines. For the blind people we can try and help them out in terms of providing education, visiting blind homes and spending time with them. Also, we can try to provide them some special books, games, and items that are meant for them only. For orphans, we will try to help the orphan children to provide them education, food, clothes, spending time with them, taking them on picnic, and any help if required. </p>
           
          </div>
        </div>
      </section>
    </div>
  );
}
