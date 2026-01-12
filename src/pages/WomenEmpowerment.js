
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

export default function WomenEmpowerment() {
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
      content: "The prima facie evidence on Women Empowerment now days has been a dire need of hour even directed by United Nations guidance protocol for all Countries. It has been directed to make equal participation and opportunities for women whether it is social economic or political scenarios as a whole. It has already been directed to focus making a change in the situation on war front for providing education, health, safety and economic stability of women in our country. Government have already started on a big front in making equal opportunities for women in each and every field and even on the path of making the reservations for them in field of Education, Health facilities, Transportation, Politics, Jobs and new Laws have already been incorporated which in turn assures Women's Safety as the top most agenda. The recent shocking situations occurred in our Country with respect to Women Safety is a matter of grave concern not only for Govt. but for all of us to make way through which the same can be stopped is to incorporate Strict and Rigid laws which are enough to send cold shivers to such criminals. Women Empowerment is nothing less than providing them their basic human rights with a assurance of better and safe life in future. Almost every country, no matter how progressive has a history of ill-treating women. In other words, women from all over the world have been rebellious to reach the status they have today. While the western countries are still making progress, third world countries like India still lack behind in Women Empowerment.",
      image: "/Projects/img1pro15.jpg",
    },
    {
     
      content: "Our Foundation follows a zero-tolerance policy toward fraud, cheating, misinformation, and any unethical practices. Employees must maintain complete ethical and social compliance. After a 3-month probation, eligible employees receive life and health insurance as per IRDA rules. The work culture may require travel across India and abroad based on project needs, and all opportunities are earned through integrity and hard work. We support employees’ growth by offering approved technical or non-technical training with possible financial or non-financial assistance, subject to the MD’s final decision and available only after probation. All positions require a valid bachelor’s degree and standard PAN-India identity/address proofs. Jobs in the Foundation are strictly private-sector roles, not Government or Semi-Government positions, and follow the rules stated on our website and Code of Conduct. We never ask for money or favors for jobs; openings may appear on job portals or our website, but applications are always free. Candidates must avoid anyone seeking commissions or payments. Shortlisting is done only through interviews and verification checks.",
      image: "/Projects/img2pro15.jpg",
     
    },
    {
      
      content: "The jobs in this Foundation requires good amount of public dealings and interactions hence individuals applying for the same are expected to be well known to Hindi, English and Punjabi. The initial work profile will be in Chandigarh and in due course will be expanded to various States of North INDIA. The general working hours in this Foundation will be between Monday to Friday 9:30 am – 6:00 pm during summer and 9:30 am to 5:30pm during winters. There will be working ours based on any activity if being scheduled on Saturdays or any other holidays as per the case may arise. The employee will be benefited with an additional off day within next 45 -60 days from the day he or she had made her contribution on any holiday or weekends. The working rules will be applicable on the domestic as well as International official tours. The travel expenses for official trips will be borne by our Foundation. Our Foundation puts an extra emphasis over Gender Equality parameters, hence we hire close to 50% female employees in our projects and in general. The actual number may vary depends upon meeting financial and other work profile constraints. The detailed eligibility requirements of all the above mentioned benefits and processes are listed in “Code of Conduct” column in this website. We might involve other organizations, NGOs in our project(s) based on the need arises as per the situation. The preference will be through well established organization on State, Center or National Level which have positive track records. A strict compliance and due diligence will be followed as setup by Government for philanthropy organizations.",
       image: "/Projects/img3pro15.jpg",
      
    },
    
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh]  sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header15.jpg" 
          alt="Women Empowerment" 
          className="w-full h-auto object-contain object-center"
        />
       
       
      </section>
      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA, are working under the <strong>Project Name "PRANIKA"</strong> under the <strong>Project Name "WOMEN EMPOWERMENT"</strong>, with a motive to enhance the educational, basic rights, health, skill development and social personal security. Women Empowerment itself describes us the with most Hippocratic situation of our society as in with the grave desire to give her the right to Education, Safety, Economic Stability, Equality and Health when we consider her Goddess Saraswati, Goddess Durga Goddess Lakshmi, Goddess Parvati and Goddess Gayatri respectively in our Holy books. In case we could have understood the true meaning of a women in our lives, we would not have been staged at a place where in one of the most precious creature of God has been put under cages of ignorance, illiteracy and economic dependability. Women are the soul of a house, a society, a nation and world in a pure context, whether living in a shape of human body or Mother Nature hope are aware of it except on 8 th March every year being "Women's Day". We have unfortunately left no stone unturned to hit her with most dreadful situations in today's lives and time had already passed wherein she will be caged in the clutches of ignorance and fear. We at RUDRAKSHA, have a soul belief to assist her in attaining something which was originated by her as a matter of cosmic wisdom and nurture her to the best possible way as a respect gesture.
             <br/> <br/>Every morning, many people enjoy sitting outside watching sunrise. They feel relaxed seeing the arrival of the sun with its pure light and the traveling of the night with its darkness. They consider that a new life will start as the sun starts her new life. Not only they watch the sun, many people enjoy drawing this view because they will feel for once that their minds are relaxed and not thinking except in this new born. People do like the view of rainfall, rainbow, snowfall, stars, mountains, rivers, oceans and natural vegetation. All of this is natural art and have a mesmerising view. “Art is your emotions flowing in a river of imagination".If you stand for a moment in front. any work of art, which has many shapes and many lines cannot be described, you start to imagine things by walking on that lines and shapes trying to connect them to get a specific shape done from your imagination.Art is everywhere in the entire world. It is one's creativity and imagination.
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
            The Government has already framed a dignified "NATIONAL POLICY FOR THE EMPOWERMENT OF WOMEN (2001)", which protects the principle of gender equality as enshrined in the Indian Constitution in its Preamble, Fundamental Rights, Fundamental Duties and Directive Principles. The Constitution not only grants equality to women, but also empowers the State to adopt measures of positive discrimination in favor of women. The primary objective of this policy is to make sure women social and economic rights to be protected with utmost diligence with the help of several women organizations. They give immense stress over women intervention in making decisions related to social and economic decisions of the society and nation in a bigger framework. These objectives can be positively completely only if women should end up their taboo relating to limited thought process when it comes to society and their families. Government has always put stress over eliminating the gender discrimination and changing the social attitudes and communal practices which puts hindrances in women enhancements in various sectors of the society.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            In several countries round the globe preferably in our INDIA, the condition of women have considerably improved when it comes to super mega projects by GoI like "Beti Bachai Beti Parahao", "Poshan Abhiyaan", "One Stop Centre Scheme", "Women helpline scheme", "Working Women's Hostel (WWH)", "SWADHAR Greh Scheme", "Pradhan Mantri Mantru Vandana Yojana", "Rajiv Gandhi National Creche Scheme", "Mahila e-Haat", "Mahila police volunteers", "National Mission for Empowerment of Women (NMEW)", "Pradhan Mantri Mahila Shakti Kendra scheme", "Rastriya Mahila Kosh (RMK)", "NAND-GHAR YOJANA", "Pradhan Mantri Ujjwala Yojana", "Maternity Benefit Program", "Sukanya Samriddhi Yojana", "eSamvad portal", "Nari Web Portal", "She-Box Portal" and "New Draft National Policy". These schemes have already impacted several lives positively wherein when they have no way to look for help as per dire situations in their personal as well as professional lives.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            Mahila E-haat is a direct online marketing platform launched by the Ministry of Women and Child Development to support women entrepreneurs, Self Help Groups (SHGs) and Non-Governmental Organisations (NGOs) to showcase products made and services rendered by them. This is a part of the 'Digital India' initiative. Beti Bachao, Beti Padhao is a social campaign aimed at eradication of female foeticide and raising awareness on welfare services intended for young Indian girls. The "Save the Girl Child" movement was launched on 22 January 2015, it is a joint initiative run by the Ministry of Women and Child Development, the Ministry of Health and Family Welfare and the Ministry of Human Resource Development. To bridge the growing gap between the birth of girl and boy infants, the government of India has taken up an initiative to promote Beti Bachao Beti Padhao and many programmes has been organized to promote 'Save Girl Child' and to 'Educate Girl Child', since January 2015. The campaign has also received support from the Indian Medical Association.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            One Stop Centre Scheme Popularly known as 'Sakhi,' it was implemented on 1st April 2015 with the 'Nirbhaya' fund. The One Stop Centres are established at various locations in India for providing shelter, police desk, legal, medical and counselling services to victims of violence under one roof integrated with a 24-hour Helpline. The toll-free helpline number is 181. Working Women Hostels - The objective of the scheme is to promote the availability of safe and conveniently located accommodation for working women, with daycare facility for their children, wherever possible, in urban, semi-urban, or even rural areas where employment opportunity for women exist. The Support to Training and Employment Programme for Women (STEP) Scheme aims to provide skills that give employability to women and to provide competencies and skill that enable women to become self-employed/ entrepreneurs. A particular project will be for a duration of up to 5 years depending upon the nature, kind of activities and the number of beneficiaries to be undertaken. The Nari Shakti Puruskars are national level awards recognizing the efforts made by women and institutions in rendering distinguished services for the cause of women, especially vulnerable and marginalized women. The awards are presented by the President of India every year on 8 March, International Women's Day at Rashtrapati Bhavan in New Delhi.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            Women have a major impact over globalization of the economy as their basic rights if not nurtured properly in their favor will lead to breakdown of the economic policies and impacts the Nation from Environment to Agriculture, Health to upcoming generations, industry to Laws, Science & Technology to Home Science. We all have definite target to achieve in this concept and media plays a vital role in upbringing the women security, development, motivation, individuality and entitlements. We would be trying our best in helping the women from all phases of lives in the areas of health, sanitation, education, children welfare, medical facilities, and skill development. These projects will be undertaken with the help of Government and Private agencies, individuals, corporate etc. only through legitimate sources of funds as approved under rules and regulations by GOI. The main stress will be provided to Health, Education and Self Defense Training of Women and girls. The respected officials from Govt. as well as private sector will be involved for guidance and contribution in this philanthropy action towards building a sound future.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            We might involve other organizations, NGOs in this project based on the need arises as per the situation. The preference will be through well established organization on State, Center or National Level which have positive track records. A strict compliance and due diligence will be followed as setup by Government for philanthropy organizations.
          </p>
        </div>
      </div>
      
           
    </div>
  );
}