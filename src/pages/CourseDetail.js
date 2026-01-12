
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  
  // This is a placeholder - you would typically fetch course data based on the ID
  const course = {
    id: id,
    title: "Digital Marketing Mastery",
    description: "Learn comprehensive digital marketing strategies including SEO, social media, and content marketing to grow your business and career.",
    duration: "8 Weeks",
    price: "₹0",
    availability: "Open Now",
    type: "long",
    image: "/api/placeholder/800/400",
    level: "Beginner",
    students: 1250,
    rating: 4.8,
    featured: true,
    instructor: "John Doe",
    modules: [
      "Introduction to Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Email Marketing",
      "Pay-Per-Click Advertising",
      "Analytics and Measurement",
      "Final Project"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Courses
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-4 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-2">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {course.description}
                </p>
                
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center text-yellow-500">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700 font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-gray-500">{course.students.toLocaleString()} students</span>
                  <span className="text-gray-500">{course.duration}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    
                  </div>
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                <div className="grid gap-4 mb-12">
                  {course.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{module}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-2">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Students:</span>
                        <span className="font-semibold">{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Instructor:</span>
                        <span className="font-semibold">{course.instructor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Access:</span>
                        <span className="font-semibold">Lifetime</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <motion.button
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Enroll Now - {course.price}
                      </motion.button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        30-day money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;