import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    const adminUsername = sessionStorage.getItem("adminUsername");
    
    if (!isAuthenticated || isAuthenticated !== "true") {
      navigate("/crm");
      return;
    }
    
    setUsername(adminUsername || "Admin");

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("adminUsername");
    navigate("/crm");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    { title: "Total Projects", value: "15", icon: "📊", color: "bg-orange-500" },
    { title: "Active Members", value: "24", icon: "👥", color: "bg-yellow-500" },
    { title: "Total Vendors", value: "120K", icon: "🎯", color: "bg-orange-600" },
    { title: "Total Events", value: "100", icon: " 📅", color: "bg-yellow-600" }
  ];



  const quickActions = [
    { title: "Feedback", icon: "➕", color: "bg-orange-500 hover:bg-orange-600", path: "/manage-feedback" },
    { title: "Manage Employee", icon: "👤", color: "bg-yellow-500 hover:bg-yellow-600", path: "/manage-employee" },
    { title: "Add Event", icon: "📈", color: "bg-orange-600 hover:bg-orange-700", path: "/manage-events" },
    { title: "Add Vendors", icon: "🏢", color: "bg-yellow-600 hover:bg-yellow-700", path: "/manage-event" },
    { title: "Leave Request", icon: "📝", color: "bg-green-600 hover:bg-green-700", path: "/manage-leaves" },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          className="mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                  Welcome back, <span className="text-orange-600">{username}</span>
                </h1>
                <p className="text-gray-600 text-sm">Here's what's happening with your organization today</p>
                <p className="text-xs text-gray-500 mt-1">
                  {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  {" • "}
                  {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-5"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl mb-3`}>
                {stat.icon}
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions Section */}
        <motion.div
          className="mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => action.path !== "#" && navigate(action.path)}
                  className={`${action.color} text-white rounded-xl p-10 flex flex-col items-center justify-center gap-4 transition-colors shadow-md hover:shadow-lg ${action.path === "#" ? "cursor-not-allowed opacity-75" : "cursor-pointer"}`}
                >
                  <span className="text-5xl">{action.icon}</span>
                  <span className="text-lg font-bold text-center">{action.title}</span>
                </button>
              ))}
            </div>

            {/* System Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">System Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex justify-between sm:flex-col sm:justify-start items-center sm:items-start gap-2">
                  <span className="text-base text-gray-600">Status</span>
                  <span className="flex items-center gap-2 text-base font-semibold text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                  </span>
                </div>
                <div className="flex justify-between sm:flex-col sm:justify-start items-center sm:items-start gap-2">
                  <span className="text-base text-gray-600">Last Backup</span>
                  <span className="text-base font-medium text-gray-800">2 hours ago</span>
                </div>
                <div className="flex justify-between sm:flex-col sm:justify-start items-center sm:items-start gap-2">
                  <span className="text-base text-gray-600">Database</span>
                  <span className="text-base font-medium text-gray-800">Healthy</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      
      </div>
    </div>
  );
};

export default Dashboard;
