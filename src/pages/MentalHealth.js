
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
                        alt="Drug Addiction Awareness"
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
      content: " Every year 2.5 million people die due to alcohol and drug use worldwide. In India, there are around 75 crore drug abusers, Haryana- 63.3%, Ambala- 60%. People in the age group of 12-18 years consume alcohol of around 21.9%, cannabis- 3%, Opiates- 0.7%, Illicit drug- 3.6%. According to a piece of recent news by Tribune in Aug 20, Punjab Excise Department has seized in a total of 27,600 litres of illicit chemicals which contains spirit in raids conducted at factories of Dera Bassi in Mohali on 9th August 2020. During the raid, seven people were arrested and the factories have been sealed. Officials found a factory in Dera Bassi manufacturing unauthorised chemicals like isopropyl alcohol stores in 136 drums of 200 litres each. Heroin is an opioid drug which is made from morphine, i.e. is a natural substance taken from the seed pod of the various opium poppy plants grown in Southeast and Southwest Asia, Mexico, and Colombia. It can be a white or brown powder or can be like a black sticky thing known as black tar heroin. People inject, sniff, snort, or smoke heroin. Also, some people mix it with crack cocaine, called speedballing. Crack cocaine, the crystal form of cocaine, usually available in powder form. Its colour varies from yellow to pale rose or white. It is named as crack because it is heated and smoked, and make a very cracking or popping sound when heated. It is the riskiest form of cocaine as it is between 75% to 100% pure, far stronger and more potent than regular cocaine.",
      image: "/Projects/img1pro3.jpg",
    },
    {
      content:  "Crystal meth or Mephedrone, also known as 4-methyl methcathinone or 4-methyl ephedrone, is a synthetic stimulant drug of the amphetamine and cathinone classes. Slang names include bath salts, drone, M-CAT, White Magic and meow meow comes in clear crystal chunks or like a shiny blue-white rock. It is a popular party drug, also known as ice or glass. Generally, people smoke crystal meth with a small glass pipe, but they may also swallow it, snort it, or inject it. I personally had known one individual, who not only cheated me & several others for money and trust, but even act as a drug peddler, druggist and a prostitute under the grave influence of this Crystal Myth that she didn't even bother to respect for basic social values, norms or relations in front of greed and dire need of this addiction. During World War II, soldiers were given meth to keep them awake. People have consumed this drug to lose weight and ease a way to deal with depression. Today, only legal meth product is one tablet which is used for treating obesity and attention deficit hyperactivity disorder (ADHD). It is available only after showing a prescription from a certified doctor. During the 26/11 attack, terrorists also consumed this drug so that they do not feel the pain of bullets and other injuries and can be fought more rigorously during that time. The terrorist's gang were so firm with their objective, and this didn't give up at any moment. Cocaine is a very powerful addictive stimulant drug which is made from the leaves of the coca plant native to South America. Health care providers can use it for valid medical purposes, such as for local anaesthesia for surgeries. Cocaine looks like a fine, white, crystal powder as a street drug. Street dealers often mix it up with other drugs such as synthetic opioids which is risky. People snort cocaine powder through the nose or inject into their veins.",
      image: "/Projects/img2pro3.jpg",
    },
    {
      content:"  Barbiturates are central nervous depressants. They tend to reduce the activity of nerves causing muscle relaxation. They also reduce the heart rate, breathing and blood pressure. All barbiturates affect gamma-aminobutyric acid (GABA), a neurotransmitter (chemical) that nerves use to communicate with one another. Common side-effects of barbiturates include dizziness, sedation, nausea, etc. It can lead to slow breathing; reduce heart rate and they can be habit-forming. Nicotine is a plant alkaloid, found in the tobacco plant and addictive central nervous system (CNS) stimulant that causes either ganglionic stimulation in low doses or ganglionic blockage in high doses. It acts as an agonist at the nicotinic cholinergic receptors in the autonomic ganglia, at neuromuscular junctions, and in the adrenal medulla and the brain. Alcohol (drug) is a toxic and psychoactive substance with dependence producing properties. The consumption contributes 3 million deaths every year globally and disabilities and health issues to millions of people. Harmful use of alcohol is accountable for a significant percentage of the global burden of disease for males as well as females respectively. It is the most leading risk factor for premature mortality and disability among the age group of 15 to 49 years, accounting 10% of deaths in the particular age group.",  image: "/Projects/img3pro3.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-[40vh]  sm:h-auto overflow-hidden">
        <img 
          src="/Projects/header3.jpg" 
          alt="Drug Addiction Awareness" 
          className="w-full h-auto object-contain object-center"
        />
      </section>

      <section className="w-full bg-white py-2 sm:py-4 overflow-x-hidden">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
              We at RUDRAKSHA, are working on the <strong>Project Name "VAGUNAYA"</strong> under the <strong>Project Head "DRUG OF ADDICTION"</strong>, directed towards providing Health and Educational Support to youth and protect them from drugs addiction. Hallucinogenic drugs play a significant role in the development of religion since the middle of twentieth century. Herb is good for food, bad for the brain. Drugs are a constituent when taken results in altering the body functions, physically or psychologically. Consumption of drugs is an illegal practice as they can affect the central nervous system which results in disorders like change in mood, thinking and behaviour. Addiction to drugs usually starts with the use of recreational drug and gradually it becomes frequent. With time, an individual is so addicted that they may need larger doses to stay high as they tend to feel this state of mind as good. Gradually the drug use gets to increase and soon it becomes difficult to stay without having regular drug doses, which makes them physically and mentally ill.
              <br/><br/>
According Drug addiction symptoms or behaviours includes intense urge for drug, consuming drug more than the usual quantity, having a permanent supply of maintaining drugs, continuing drug usage irrespective of having many problems and doing things that you never wanted to do. There are many reasons because of which people are consuming drugs and most importantly many teenagers are considering drugs as the solution to every problem. Teenagers want to consume drugs because they have seen many films, series, etc, from which they got to know about this thing. They tend to have a perception after watching the films or shows that drugs will solve their problems, but the reality is the opposite. Many of them consume because they want to experiment with drugs. People consume drugs due to many reasons like everybody is doing it, so you are doing the same. Teenagers tend to consume because of their friends, but they don’t know that drugs can ruin their friendship completely. They feel like drugs can help them to deal with stress. Drugs change the way of thinking and leads to depression, anxiety and other mental illness. According to the census reports, the following findings have been made. 
            </p>
          </div>
        </div>
      </section>  

      {/* Alternating Image-Text Sections */}
      <AlternatingSection sections={alternatingSections} />
      
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="space-y-6 sm:space-y-8">
          
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            Amphetamine is a powerful stimulator of the central nervous system. It is used to treat some special medical conditions, and is highly addictive, with a history of abuse. Amphetamines are central nervous system (CNS) stimulants. They are used to treat ADHD and narcolepsy. Adverse effects include restlessness, acne and blurred vision. Side effects include seizures, heart problems and psychosis. Opioids are a type of drugs that include illegal drug heroin, synthetic opioids such as fentanyl, and pain relievers available legally by prescription, such as oxycodone, hydrocodone, codeine, etc. Opioid drugs are treated chemically and interact with receptors on nerve cells in the body and the brain. It relieves the pain in a very short time and can be misused in a different way or in a larger quantity than prescribed. In a study conducted by NIDA found that, after initiating the treatment, both a buprenorphine combination and an extended-release naltrexone formulation are similarly effective in treating opioid addiction. Benzodiazepines are man-made medications that cause mild to severe depression of the nerves within the brain and sedation. This drug is generally used to treat anxiety, panic disorders, muscle spasms, nervousness, etc. Combining this drug with alcohol is very dangerous. The side effects include- drowsiness, sedation, memory impairment, improper body balance, weight gain, fatigue, dry mouth, respiratory depression, dependence and abuse, jaundice, suicide, slow heart rate and seizures.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            <strong>Treatment & Support:</strong> The treatment includes medication for depression or other disorders, counselling by experts and sharing of experience with other addicts. Rehab centres include meditations and spiritual wisdom in the treatment process. The National Institute on Drug Abuse (NIDA) recommends detoxification followed by both medication and behavioural therapy, followed by relapse prevention.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            <strong>Central Sector Scheme:</strong> Central sector scheme of Assistance for Prevention of Alcoholism and Substance (Drugs) Abuse for Social Defence Services (effective from 01.01.2015) is the flagship scheme of the Ministry in the field of drug demand reduction. The scheme has two parts- Assistance to Voluntary Organisations for Prevention of Alcoholism and Drug Abuse is being implemented for identification, counselling, treatment and rehabilitation of addicts through voluntary and other eligible organisations. Under this scheme, financial assistance up to 90% of the approved expenditure is given to the voluntary organisation and other eligible agencies for setting up or running the Integrated Rehabilitation Centre for Addicts (IRCA), Regional Resource and Training Centres (RRTCs), for holding awareness-cum-de-addiction camps (ACDC) and Workplace prevention programmes, etc. Financial Assistance in the field of Social Defence aims to Prohibition and Drug abuse prevention scheme deals with budget allocation, grants sanctioned, several projects assisted and beneficiaries under the scheme for Assistance for Prevention of Alcoholism and substance (drug) abuse in India.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-justify break-words font-serif">
            W.H.O works with member states and partners to prevent and stop the consumption of harmful drugs as a public health priority. WHO 2010 global strategy aims to reduce the consumption of alcohol and provides guidance on reducing the harmful use of alcohol at all levels. WHOs approach aligns with and is working towards the UN Sustainable Goals (SDGs), specifically target 3.5 on substance abuses, including harmful use of alcohol. Many NGOs and NPOs are working for drug de-addiction and likewise, we are also working to help people who are addicted to drugs and want to improve their lives and realise their mistake. We will try to help to people those can't afford the rehabilitation centres treatment, medicines, etc. We at RUDRAKSHA personally know one girl, who not only cheated one of our Top Management Individual & several outsiders for money and trust but even act as a drug peddler, druggist, and a prostitute under the grave influence of this Crystal Myth that she didn't even bother to respect for basic social values, norms or relations in front of greed and dire need of this addiction.
          </p>
        </div>
      </div>
    </div>
  );
}
