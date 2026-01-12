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
                        alt="Voiceless Souls Protection"
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

export default function VoicelessSoulsProtection() {
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
      content: "Animals are sentient beings that experience joy, pain, fear, and suffering just as humans do, yet they often lack the means to defend themselves against cruelty and exploitation. Our Voiceless Souls Protection initiative is dedicated to animal welfare, wildlife conservation, and promoting compassionate treatment of all living beings. We work to rescue and rehabilitate injured and abandoned animals, prevent cruelty, educate communities about animal rights, and advocate for stronger legal protections for animals.",
      image: "/Projects/img1pro14.jpg",
    },
    {
      content: "Through partnerships with veterinarians, wildlife experts, and animal welfare organizations, we operate rescue centers, provide medical treatment to sick and injured animals, and facilitate adoptions for homeless pets. We conduct sterilization programs to control stray animal populations humanely. We also work to protect wildlife habitats, prevent poaching and illegal wildlife trade, and rehabilitate animals for release back into their natural environments. Education is key to our approach—we conduct awareness programs in schools and communities about responsible pet ownership, animal welfare laws, and the importance of biodiversity.",
      image: "/Projects/img2pro14.jpg",
    },
    {
      content: "The Voiceless Souls Protection project recognizes the intrinsic value of all life and the interconnectedness of human and animal welfare. By promoting compassion towards animals, we foster empathy and kindness that extends to all relationships. We advocate for policy changes that strengthen animal protection laws, ban cruel practices, and promote ethical treatment of animals in agriculture, research, entertainment, and other industries. Through our efforts, we strive to create a society where all beings—human and non-human—are treated with dignity and respect.",
      image: "/Projects/img3pro14.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header14.jpg" 
          alt="Voiceless Souls Protection" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we work under the <strong>Project Name "VOICELESS SOULS PROTECTION"</strong> to champion the rights and welfare of animals who cannot speak for themselves. Animals play vital roles in our ecosystems, contribute to human well-being in countless ways, and deserve our protection and compassion. Yet millions of animals suffer from neglect, abuse, exploitation, and habitat destruction. Our initiative aims to be their voice, their protectors, and their advocates.<br/><br/>
              
              Our animal welfare programs address multiple dimensions of the challenges facing animals. For companion animals like dogs and cats, we provide rescue services for abandoned and abused animals, operate shelters where they receive care and rehabilitation, facilitate adoptions to loving homes, and promote responsible pet ownership. We conduct mass sterilization and vaccination campaigns to control stray populations and prevent disease transmission, addressing the root causes of animal homelessness rather than relying solely on shelters.<br/><br/>
              
              For wildlife, our conservation efforts focus on protecting habitats, preventing human-wildlife conflict, combating poaching and illegal wildlife trade, and rehabilitating injured wild animals. We work with forest departments, wildlife authorities, and conservation organizations to monitor endangered species, restore degraded habitats, and create wildlife corridors that allow animals to move safely between fragmented habitats. We also engage local communities in conservation efforts, helping them find sustainable livelihoods that don't depend on exploiting wildlife.<br/><br/>
              
              Farm animals and working animals also fall within our scope of concern. We advocate for humane treatment of animals in agriculture, promote alternatives to factory farming, and work with farmers to improve animal welfare standards. We provide medical care and retirement facilities for working animals like horses, donkeys, and bullocks that have served humans faithfully. We believe that animals used for human purposes deserve lives free from suffering and opportunities for natural behaviors.
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
              Education and awareness are central to our mission. We conduct school programs teaching children about animal welfare, the importance of biodiversity, and ways they can help protect animals. We organize community workshops on responsible pet ownership, how to coexist peacefully with wildlife, and alternatives to using animals in entertainment and festivals. We use social media, public campaigns, and media partnerships to raise awareness about animal cruelty issues and mobilize public support for animal protection.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Our rescue and rehabilitation work requires a network of volunteers, veterinarians, and foster caregivers. We train volunteers in animal handling, first aid, and rescue techniques. We operate helplines that people can call to report animal cruelty or animals in distress. Our rapid response teams intervene in emergency situations—rescuing animals from floods, fires, accidents, or abusive situations. Our rehabilitation centers provide medical treatment, psychological care, and socialization to help animals recover from trauma and prepare for adoption or release.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              Advocacy for stronger legal protections is another important aspect of our work. We engage with policymakers to strengthen animal welfare laws, increase penalties for animal cruelty, ban harmful practices like animal fighting and certain types of animal testing, and establish better enforcement mechanisms. We provide legal assistance to prosecute animal cruelty cases and support landmark cases that can set important precedents for animal rights.<br/><br/>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              At RUDRAKSHA, we believe that how a society treats its most vulnerable members—including animals—reflects its moral character. Through our Voiceless Souls Protection initiative, we work tirelessly to create a world where animals are valued, protected, and allowed to live with dignity. We envision a future where cruelty to animals is unthinkable, where humans and animals coexist harmoniously, and where the rights of all sentient beings are recognized and respected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
