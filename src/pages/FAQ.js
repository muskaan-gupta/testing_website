import { motion } from "framer-motion";

// FAQ data based on the image provided
const faqData = [
    {
    question: "What is the Objective of floating this Foundation?",
    answer: "Our Foundation is a Section 8 Company, (Non-Profit Organization), registered under Ministry of Corporate Affairs, GOI which was setup on 27th March 2019, with a prime core objective to serve our Nation on a larger perspective in the fields of Art, Culture, Religion, Education, Health, Environment Protection, Blood Donation, Old Age Homes, Orphanages Support, Sports Training, Professional Trainings, Acid Attack Victims Support, Animal Welfare, Defence Personals Families Support, Drugs De-addiction, Women Empowerment & Human Rights."},
   
  {
    question: "What would be the source of Funds?",
    answer: "We cummulate funds from legitimate means only by offering various types Premium quality IT & Digital services, Astrological, Vastu Shastra, Numerology, Tarot Cards, Lal Kitab services and FMCG products to society, by keeping a slight profit margin in order to fund the above mentioned Projects & Office maintenance costs attached."
  },
  {
    question: "Do we take CSR Funds for these Projects?",
    answer: "We will appreciate any respective Organization, State, Regulatory Bodies and Central Government, who would like to express their interest in our Projects; though our eligibility as per respected Ministry of Corporate Affairs, guidelines for a Section 8, will begin after 2 years of self-sustainability operations from FY 2023-24 onwards. Any other Donor / Organization / Regulatory Bodies / Government Authorities, in case interested will be highly appreciated and will be provided by detailed Reports of Expenditure, Purchases & Impact Assessment Reports & Feedback in respective to the Project(s), in which the money received had been spent."
  },
  {
    question: "Do we accept Donations?",
    answer: "Yes, we are obliged in case anyone would like to donate us in this social cause, though we would like to request everyone to kindly buy our Economical and Premium Quality FMCG Products, IT & Digital Services, as the Profit earned out of their Sales, will be used only for Philanthropic Activities and bearing maintenance costs attached. We work under strict compliance of Ministry of Corporate Affairs for a Section 8 unit and are under surveillance as per mandatory submissions supposed to be made at their respected official portals at regular intervals.The Donations made to us will be eligible for 80(G) Exemption and Certificate & will be provided by us."
  },
  {
    question: "Do we accept cash Donations?",
    answer: "NO, We don't accept Cash Donations !!. We have a legitimate Current Account, with a Private Nationalised Bank, which is being monitored by a Certified Accountant at regular monthly intervals. We accept donations only via legitimate means as approved by respected RBI, guidelines i.e. Fund Transfers, Checks, E-Wallets, UPI and Demand Drafts. We will also take care of all the National Travel & Stay expenses, which are involved in our Projects."
  },
  {
    question: "How many offices/ Branches do we have?",
    answer: "We have initiated operations with our H.O. in Chandigarh and will expedite operations in neighbouring States in upcoming time frame. The Head office Address is mentioned in the Footer of this website for your kind perusal."
  },
  {
    question: "Do we have GST & FSSAI Licences to operate Business?",
    answer: "Yes; we have them and details can be sought from our H.O. as per demand by all respected organizations or individuals. The GST Number is also mentioned in the Footer of this Website."
  },
  {
    question: "What is our Professional Hierarchy?",
    answer: "Our Professional hierarchy comprises from top to bottom as Promoter, onwards. The positions available for various candidates will be from Zonal Head and below as per the available options in future in any of the locations wherein we have our branches."
  },
  {
    question: "Do we have Volunteers?",
    answer: "Yes, we appreciate a lot whosoever would like to join in this social cause, without any deviation of his/her personal Business motive to be very clear from the beginning. We will provide them with Certificate and will try to present them in our Digital Marketing as well."
  },
  {
    question: "Can students join us for Internships?",
    answer: "Yes; we do hire Interns on various profiles like Mobile Application Development, Website Development, Surveys, Content Writing, Digital Marketing, Adobe Designing, Mobile Application UI/UX Designers, Language Converters and Philanthropic Workers. These Interns will always get monthly pay-outs, supported by Appointment Letters on Joining & Certificates on completion and possibly Job offers within our Organization in due course. The Stipends will be paid into their respective Savings Account or UPI, E-Wallets only."
  },
  {
    question: "What skills are we looking for in general?",
    answer: "We appreciate UNSDG / Masters in Social Work / CSR Professionals, IT Professionals, Sales Force and Marketing Experts. The Graduates & PG's, in any other stream can also apply."
  },
  {
    question: "What do we offer to our Employees?",
    answer: "We offer them a decent start-up salary, (as per NGO standards), IT Equipment's, Life, Travel & Health Insurance (post 6 months' probation) and opportunities for National & International Travel. The Travel Expenses will be based on International Travel on Project work. We will also take care of all the National Travel & Stay expenses, which are involved in our Projects."
  },
  {
    question: "What is the Promotion Criteria?",
    answer: "We have an Internal CRM system to monitor performance of our employees; every month, which is based on Professional Etiquettes, Sales Volumes, Attendance, Donations raised, Work Tenure, Network Enhancement and Behaviour. We will gauge the respective Employee on Quarterly/Half Yearly basis, though feedback will be offered on monthly basis. The initial promotion will be applicable after completion of 1 Year regular service with us at any branch or collectively at multiple branches, in case the Employee being transferred as per need of the Project(s). The rest of the detailed information is mentioned in our Code of Conduct, (Promotion Policy), as available in our website."
  }
];

export default function FAQ() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div>
      {/* Hero Image Section - Same as About page */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <img 
          src="/faq.jpg" 
          alt="FAQ Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Optional: Add overlay text here if needed */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="border-t border-gray-300 pt-8"
              >
                {/* Question with paper plane icon */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Red paper plane icon */}
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                  
                  {/* Question text in red */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 leading-tight">
                    {faq.question}
                  </h3>
                </div>

                {/* Answer text in black */}
                <div className="pl-10">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed text-justify font-serif">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
