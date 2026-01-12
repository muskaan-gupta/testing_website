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
                        alt="Human Rights"
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

export default function HumanRights() {
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
      content: (
        <>
          <div className="mb-3"><strong>Article 1 - Free and Equal:</strong> All human beings are born free and equal and should be treated the same way. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.</div>
          <div className="mb-3"><strong>Article 2 - Freedom from Discrimination:</strong> Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status.</div>
          <div className="mb-3"><strong>Article 3 - Right to Life:</strong> Everyone has the right to life, liberty and security of person.</div>
          <div className="mb-3"><strong>Article 4 - Freedom from Slavery:</strong> No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.</div>
          <div className="mb-3"><strong>Article 5 - Freedom from Torture:</strong> No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.</div>
          <div className="mb-3"><strong>Article 6 - Right to Recognition Before the Law:</strong> Everyone has the right to recognition everywhere as a person before the law.</div>
        </>
      ),
      image: "/Projects/img1pro7.jpg",
    },
    {
      content: (
        <>
          <div className="mb-3"><strong>Article 7 - Right to Equality Before the Law:</strong> All are equal before the law and are entitled without any discrimination to equal protection of the law. All are entitled to equal protection against any discrimination in violation of this Declaration and against any incitement to such discrimination.</div>
          <div className="mb-3"><strong>Article 8 - Access to Justice:</strong> Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.</div>
          <div className="mb-3"><strong>Article 9 - Freedom from Arbitrary Detention:</strong> No one shall be subjected to arbitrary arrest, detention or exile.</div>
          <div className="mb-3"><strong>Article 10 - Right to Fair Trial:</strong> Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.</div>
          <div className="mb-3"><strong>Article 11 - Presumption of Innocence:</strong> Everyone charged with a penal offence has the right to be presumed innocent until proved guilty according to law in a public trial at which he has had all the guarantees necessary for his defence. No one shall be held guilty of any penal offence on account of any act or omission which did not constitute a penal offence, under national or international law, at the time when it was committed.</div>
        </>
      ),image: "/Projects/img2pro7.jpg",
    },
    {
      content: (
        <>
          <div className="mb-3"><strong>Article 12 - Right to Privacy:</strong> No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.</div>
          <div className="mb-3"><strong>Article 13 - Freedom of Movement:</strong> Everyone has the right to freedom of movement and residence within the borders of each State. Everyone has the right to leave any country, including his own, and to return to his country.</div>
          <div className="mb-3"><strong>Article 14 - Right to Asylum:</strong> Everyone has the right to seek and to enjoy in other countries asylum from persecution. This right may not be invoked in the case of prosecutions genuinely arising from non-political crimes or from acts contrary to the purposes and principles of the United Nations.</div>
          <div className="mb-3"><strong>Article 15 - Right to Nationality:</strong> Everyone has the right to a nationality. No one shall be arbitrarily deprived of his nationality nor denied the right to change his nationality.</div>
          <div className="mb-3"><strong>Article 16 - Right to Marriage and to Found a Family:</strong> Men and women of full age, without any limitation due to race, nationality or religion, have the right to marry and to found a family. They are entitled to equal rights as to marriage, during marriage and at its dissolution. Marriage shall be entered into only with the free and full consent of the intending spouses.</div>
        </>
      ),
      image: "/Projects/img3pro7.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh] sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header7(1).jpg" 
          alt="Human Rights" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      {/* Introduction Section */}
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA are working under the <strong>Project Name "AGNIPATH"</strong> to promote and protect <strong>HUMAN RIGHTS</strong> for all individuals in society. Human rights are rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status. Human rights include the right to life and liberty, freedom from slavery and torture, freedom of opinion and expression, the right to work and education, and many more. Everyone is entitled to these rights, without discrimination. The Universal Declaration of Human Rights (UDHR), adopted by the United Nations General Assembly in 1948, was the first legal document to set out the fundamental human rights to be universally protected. It continues to be an enduring foundation of international human rights law.
            
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
            <div className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              <div className="mb-3"><strong>Article 17 - Right to Own Property:</strong> Everyone has the right to own property alone as well as in association with others. No one shall be arbitrarily deprived of his property.</div>
              <div className="mb-3"><strong>Article 18 - Freedom of Religion or Belief:</strong> Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.</div>
              <div className="mb-3"><strong>Article 19 - Freedom of Expression:</strong> Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek receive and impart information and ideas though any media and regardless of frontiers.</div>
              <div className="mb-3"><strong>Article 20 - Freedom of Assembly:</strong> Everyone has the right to freedom of peaceful assembly and association. No one may be compelled to belong to an association.</div>
              <div className="mb-3"><strong>Article 21 - Right to Partake in Public Affairs:</strong> Everyone has the right to take part in the government of his country, directly or through freely chosen representatives. The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal voting system.</div>
              <div className="mb-3"><strong>Article 22 - Right to Social Security:</strong> Everyone, as a member of society, has the right to social security and is entitled to realization, through national effort and international cooperation and in accordance with the organization and resources of each State, of the economic, social and cultural rights indispensable for his dignity and the free development of his personality.</div>
              <div className="mb-3"><strong>Article 23 - Right to Work:</strong> Everyone has the right to work, to free choice of employment, to just and favourable conditions of work and to protection against unemployment, without any discrimination, has the right to equal pay for equal work. Everyone who works has the right to just and favourable remuneration ensuring for himself and his family and the right to form and to join trade unions for the protection of his interests.</div>
              <div className="mb-3"><strong>Article 24 - Right to Leisure and Rest:</strong> Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.</div>
              <div className="mb-3"><strong>Article 25 - Right to Adequate Standard of Living:</strong> Everyone has the right to a standard of living adequate for the health and well-being of himself and of his family, including foods, clothing, housing and medical care and necessary social services, and the right to security in the event of unemployment, sickness, disability, widowhood, old age or other lack of livelihood in circumstances beyond his control.</div>
              <div className="mb-3"><strong>Article 26 - Right to Education:</strong> Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages. Technical and professional education shall be made generally available and higher education shall be equally accessible to all on the basis of merit. It shall promote understanding, tolerance and friendship among all nations, racial or religious groups, and shall further the activities of the United Nations for the maintenance of peace.</div>
              <div className="mb-3"><strong>Article 27 - Right to Take Part in Cultural, Artistic and Scientific Life:</strong> Everyone has the right freely to participate in the cultural life of the community, to enjoy the arts and to share in scientific advancement and its benefits. Everyone has the right to the protection of the moral and material interests resulting from any scientific, literary or artistic production of which he is the author.</div>
              <div className="mb-3"><strong>Article 28 - Right to Free and Fair World:</strong> Everyone is entitled to a social and international order in which the rights and freedoms set forth in this Declaration can be fully realized.</div>
              <div className="mb-3"><strong>Article 29 - Duty to Your Community:</strong> Everyone has duties to the community in which alone the free and full development of his personality is possible. In the exercise of his rights and freedoms, everyone shall be subject only to such limitations as are determined by law solely for the purpose of securing due recognition and respect for the rights and freedoms of others.</div>
              <div className="mb-3"><strong>Article 30 - Rights are Inalienable:</strong> Nothing in this Declaration may be interpreted as implying for any State, group or person any right to engage in any activity or to perform any act aimed at the destruction of any of the rights and freedoms set forth herein.</div>
            </div>
           
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
           We at RUDRAKSHA will try to do every possible thing we can for the people who are alone i.e. the ones who are the only one member in their family, unable to fulfil their needs, lives on the road corners, not having any money to lead a better life and have a sudden demises or due to any illness or unnoticed demise or any untoward incident. Also, many families do not even have adequate financial position to live properly, and cannot afford the basic needs, and have a sudden death in their family. These families cannot afford even the prelamination of their beloved family member and due to this reason, these dead bodies get rotten. We will try to help these families, unclaimed bodies, and the ones who are alone, with a religious prelamination, with all the cultures and rituals and help them in gathering all the things which are needed. All the customs will be done in due diligence of priests, authorities from administration department, police, and family or relatives if any. We hope LORD MAHAKAAL will have mercy and make their souls rest in peace and allows us to perform the last duties of such unfortunate ones. </p>
          </div>
        </div>
      </section>
    </div>
  );
}
