import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Sample courses data - you can replace with your actual courses
const coursesData = [
  {
    id: 1,
    title: "Digital Marketing Mastery",
    description: "Learn comprehensive digital marketing strategies including SEO, social media, and content marketing.",
    duration: "8 Weeks",
    price: "₹0",
    availability: "Open Now",
    image: "/Courses/PHP.jpg",
    level: "Beginner",
    students: 1250,
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    description: "Master HTML, CSS, JavaScript, and React to build modern responsive websites.",
    duration: "12 Weeks",
    price: "₹0",
    image: "/Courses/Adobe.jpg",
    level: "Beginner",
    students: 890,
    rating: 4.9,
    featured: true
  },
  {
    id: 3,
    title: "Financial Literacy Basics",
    description: "Understand personal finance, investment strategies, and money management principles.",
    duration: "Self-paced",
    price: "Free",
    image: "/Courses/Android and Kotlin.jpg",
    level: "Beginner",
    students: 2340,
    rating: 4.6,
    featured: false
  },
  {
    id: 4,
    title: "Leadership & Management Skills",
    description: "Develop essential leadership qualities and management techniques for career growth.",
    duration: "6 Weeks",
    price: "₹0",
    image: "/Courses/Mern.jpg",
    level: "Intermediate",
    students: 675,
    rating: 4.7,
    featured: false
  },
  {
    id: 5,
    title: "Data Science with Python",
    description: "Learn data analysis, visualization, and machine learning using Python programming.",
    duration: "16 Weeks",
    price: "₹0",

    image: "/Courses/Python.jpg",
    level: "Advanced",
    students: 0,
    rating: 0,
    featured: true
  },
  
];



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Course Card Component
const CourseCard = ({ course}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const handleEnroll = (e) => {
    e.stopPropagation();
    // Add enrollment logic here
    console.log(`Enrolling in course: ${course.title}`);
  };

  const handleCardClick = () => {
    // Navigate to course detail page
    navigate(`/courses/${course.id}`);
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group cursor-pointer"
      onClick={handleCardClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 backdrop-blur-sm w-full max-w-md">
        {/* Availability Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            course.availability === "Open Now" 
              ? "bg-green-100 text-green-700" 
              : "bg-orange-100 text-orange-700"
          }`}>
            {course.availability}
          </span>
        </div>

        {/* Course Image */}
        <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
          <img 
            src={course.image} 
            alt={course.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
              <div className="text-gray-400 text-4xl">📚</div>
            </div>
          )}
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Course ID */}
          <p className="text-xs text-gray-400 mb-2">Course ID: {course.id}</p>
          
          {/* Course Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {course.title}
          </h3>

          {/* Course Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Duration */}
          <div className="flex items-center mb-2 text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Duration: {course.duration}</span>
          </div>

          {/* Availability */}
          <div className="flex items-center mb-4 text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Status: {course.availability}</span>
          </div>

          {/* Price and Enroll Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {course.price === "Free" ? (
                <span className="text-2xl font-bold text-green-600">Free</span>
              ) : (
                <span className="text-2xl font-bold text-gray-900">{course.price}</span>
              )}
            </div>

            <motion.button
              onClick={handleEnroll}
              className="relative px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={course.availability === "Coming Soon"}
            >
              <span className="relative z-10">
                {course.availability === "Coming Soon" ? "Notify Me" : "Enroll Now"}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};



// Main Courses Component
const Courses = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover a wide range of courses designed to help you learn new skills, 
              advance your career, and make a positive impact in your community.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Expert Instructors
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 01-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 01-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 01-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certified Programs
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Lifetime Access
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Courses Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {coursesData.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already transforming their lives through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Free Courses
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;