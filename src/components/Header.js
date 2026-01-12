import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  "Home",
  "About Us",
  "Agenda",
  "Mission",
  "Vision",
  "Core values",
  "Organogram",
  "Career",
  "Policy",
  "CRM",
  "Projects",
  "FAQ",
  "Management",
  "Contact Us",
];

const PROJECT_ITEMS = [
  { id: 1, name: "Community Building", slug: "community-building" },
  { id: 2, name: "Blood Donation", slug: "blood-donation" },
   { id: 3, name: "Drug De-addiction", slug: "mental-health" },
  
  { id: 4, name: "Environment Armour", slug: "environment-armour" },
  { id: 5, name: "Gender Justice", slug: "education-initiative" },
  { id: 6, name: "Gracious Justice", slug: "rural-development" },

  { id: 7, name: "Human Right", slug: "human-right" },

  { id: 8, name: "Old age, Orphanage & Blind Home", slug: "old-age-orphanage-blind-home" },
  { id: 9, name: "Sports Training Support", slug: "sports-training-support" },
  { id: 10, name: "True Eternal Worriors", slug: "true-eternal-worriors" },

  { id: 11, name: "Training and Skill Development", slug: "training-and-skill-development" },
  { id: 12, name: "True wisdom", slug: "true-wisdom" },
    { id: 13, name: "Vigour and Vitality", slug: "vigour-and-vitality" },
  { id: 14, name: "Voiceless Souls Protection", slug: "voiceless-souls-protection" },
  { id: 15, name: "Women Empowerment", slug: "women-empowerment" }
 
  
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = sessionStorage.getItem("isAuthenticated");
      setIsAuthenticated(authStatus === "true");
    };
    
    checkAuth();
    
    // Listen for storage changes (for logout from dashboard)
    window.addEventListener('storage', checkAuth);
    
    // Check auth status periodically in case sessionStorage changes
    const interval = setInterval(checkAuth, 1000);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      clearInterval(interval);
    };
  }, []);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProjectsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setProjectsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 300);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white shadow">
      {/* Top: rudraksha.png image */}
      <div className="w-full">
        <div className="w-full">
          <img 
            loading="lazy" 
            src="/rudraksha.png" 
            alt="Rudraksha Welfare Foundation" 
            className="w-full h-auto object-contain max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[300px]"
          />
        </div>
      </div>
     

      {/* Comment banner image */}
      <div className="w-full">
        <img 
          loading="lazy" 
          src="/comment.jpg" 
          alt="Comment banner" 
          className="w-full h-auto object-contain max-h-[80px] sm:max-h-[100px] md:max-h-[120px] lg:max-h-[150px]"
        />
      </div>

      {/* Navbar */}
      <nav className="relative w-full bg-gray-900 text-white z-[60]" style={{ zIndex: 60 }}>
        <div className="w-full mx-auto px-4">
          <div className="flex items-center justify-between min-h-12 py-1" style={{ position: 'relative', zIndex: 61 }}>
            {/* Desktop nav (centered) */}
            <nav className="relative hidden md:flex items-center justify-center flex-wrap gap-2 flex-1 z-[60] py-1">
                {NAV_ITEMS.map((item) => {
                  const getRoute = (item) => {
                    if (item === "Home") return "/";
                    if (item === "Agenda") return "/agenda";
                    if (item === "Mission") return "/mission";
                    if (item === "Vision") return "/vision";
                    if (item === "About Us") return "/about-us";
                    if (item === "Core values") return "/core-values";
                    if (item === "Organogram") return "/organogram";
                    if (item === "Policy") return "/policy";
                    if (item === "CRM") return "/crm";
                    if (item === "FAQ") return "/faq";
                    if (item === "Career") return "/career";
                    if (item === "Management") return "/management";
                    if (item === "Contact Us") return "#contact";
                    return `/#${item.replace(/\s+/g, "-").toLowerCase()}`;
                  };

                  // Special handling for Projects dropdown
                  if (item === "Projects") {
                    return (
                      <div 
                        key={item} 
                        className="relative z-[70]"
                        ref={dropdownRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ position: 'relative', zIndex: 70 }}
                      >
                        <button
                          className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-100 bg-gray-900/0 hover:bg-gray-800/80 transition transform hover:-translate-y-0.5"
                          onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                        >
                          {item}
                          <svg 
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {projectsDropdownOpen && (
                          <div className="fixed inset-0 z-[99998]" onClick={() => setProjectsDropdownOpen(false)} />
                        )}
                        <div className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-2xl border border-gray-200 z-[99999] transition-all duration-300 ease-out ${
                          projectsDropdownOpen 
                            ? 'opacity-100 visible transform translate-y-0' 
                            : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        style={{ position: 'absolute', zIndex: 99999 }}>
                          <div className="py-2 max-h-96 overflow-y-auto">
                            {PROJECT_ITEMS.map((project, index) => (
                              <Link
                                key={project.id}
                                to={`/projects/${project.slug}`}
                                className="block px-4 py-3 text-sm text-black hover:bg-blue-50  transition-all duration-200 hover:scale-105 transform origin-left"
                                onClick={() => setProjectsDropdownOpen(false)}
                              >
                                <div className="flex items-center">
                                  <span className="w-6 h-6  text-black flex items-center justify-center text-xs font-bold mr-3">
                                    {index + 1}
                                  </span>
                                  {project.name}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  return item === "Home" || item === "Agenda" || item === "Mission" || item === "Vision" || item === "About Us" || item === "Core values" || item === "Policy" || item === "CRM" || item === "FAQ" || item === "Career" || item === "Management" ? (
                    <Link
                      key={item}
                      to={getRoute(item)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-100 bg-gray-900/0 hover:bg-gray-800/80 transition transform hover:-translate-y-0.5"
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      key={item}
                      href={getRoute(item)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-100 bg-gray-900/0 hover:bg-gray-800/80 transition transform hover:-translate-y-0.5"
                    >
                      {item}
                    </a>
                  );
                })}
                
                {/* Dashboard link - only show when authenticated */}
                {isAuthenticated && (
                  <Link
                    to="/dashboard"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-100 bg-gray-900/0 hover:bg-gray-800/80 transition transform hover:-translate-y-0.5"
                  >
                    Dashboard
                  </Link>
                )}
              </nav>
            
            {/* Mobile: hamburger on the right */}
            <div className="md:hidden ml-auto">
              <button
                aria-label="Toggle navigation"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className="p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
              >
                {!open ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu items (slide down) */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}>
            <ul className="flex flex-col gap-1 py-3">
              {NAV_ITEMS.map((item) => {
                const getRoute = (item) => {
                  if (item === "Home") return "/";
                  if (item === "Agenda") return "/agenda";
                  if (item === "Mission") return "/mission";
                  if (item === "Vision") return "/vision";
                  if (item === "About Us") return "/about-us";
                  if (item === "Core values") return "/core-values";
                  if (item === "Organogram") return "/organogram";
                  if (item === "Policy") return "/policy";
                  if (item === "CRM") return "/crm";
                  if (item === "FAQ") return "/faq";
                  if (item === "Career") return "/career";
                  if (item === "Management") return "/management";
                  if (item === "Contact Us") return "#contact";
                  return `/#${item.replace(/\s+/g, "-").toLowerCase()}`;
                };

                // Special handling for Projects dropdown in mobile
                if (item === "Projects") {
                  return (
                    <li key={item}>
                      <button
                        onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 text-gray-100 hover:bg-gray-800/60 transition"
                      >
                        {item}
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Projects Submenu */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        mobileProjectsOpen ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="bg-gray-800/50 ml-4 mr-2 rounded-lg mt-2">
                          {PROJECT_ITEMS.map((project, index) => (
                            <Link
                              key={project.id}
                              to={`/projects/${project.slug}`}
                              onClick={() => {
                                setOpen(false);
                                setMobileProjectsOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/60 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              <div className="flex items-center">
                                <span className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                                  {index + 1}
                                </span>
                                {project.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }
                
                return (
                  <li key={item}>
                    {item === "Home" || item === "Agenda" || item === "Mission" || item === "Vision" || item === "About Us" || item === "Core values" || item === "Organogram" || item === "Policy" || item === "CRM" || item === "FAQ" || item === "Career" || item === "Management" ? (
                      <Link
                        to={getRoute(item)}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-gray-100 hover:bg-gray-800/60 transition"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href={getRoute(item)}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-gray-100 hover:bg-gray-800/60 transition"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                );
              })}
              
              {/* Dashboard link - only show when authenticated */}
              {isAuthenticated && (
                <li>
                  <Link
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-gray-100 hover:bg-gray-800/60 transition"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
