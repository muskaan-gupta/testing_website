import React from "react";
import { motion } from "framer-motion";

const SkillDevelopment = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[40vh] lg:h-[50vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/api/placeholder/1920/600"
          alt="Skill Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/60 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Skill Development
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light drop-shadow-lg">
              Empowering Through Skills and Training
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="w-full px-2 lg:px-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Coming Soon</h2>
            <p className="text-lg text-gray-600">Skill Development project details will be available soon.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;
