import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-6 sm:pt-8 mt-2 sm:mt-4 overflow-x-hidden">
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold mb-2 break-words text-yellow-400">About The Company</h2>
          <p className="text-xl sm:text-base lg:text-lg mb-2 leading-relaxed break-words">A Section 8 Company <span className="text-green-400 font-semibold">(Non Profit Organization)</span> under Companies Act 2013, Ministry of Corporate Affairs, Govt. of INDIA.</p>
          <p className="text-xl sm:text-base lg:text-lg break-all">GSTIN: <span className="text-yellow-400 font-bold">04AAJCR5020K1ZH</span></p>
          <p className="text-xl sm:text-base lg:text-lg break-all">TAN: <span className="text-green-400 font-bold">PTLR16249C</span></p>
          <p className="text-xl sm:text-base lg:text-lg break-all">PAN: <span className="text-yellow-400 font-bold">AAJCR5020K</span></p>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold mb-2 text-green-400">Quick Links</h2>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="text-yellow-400 hover:underline text-base sm:text-lg lg:text-xl transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-green-400 hover:underline text-base sm:text-lg lg:text-xl transition-colors">Copyright Policy</a></li>
            <li><a href="#" className="text-yellow-400 hover:underline text-base sm:text-lg lg:text-xl transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold mb-2 text-green-400">Let's Connect</h2>
          <ul className="space-y-1 sm:space-y-2">
            <li><a href="#" className="text-yellow-400 hover:underline text-base sm:text-lg lg:text-xl transition-colors">Our Mission</a></li>
            <li><a href="#" className="text-green-400 hover:underline text-base sm:text-lg lg:text-xl transition-colors">About Us</a></li>
            <li><a href="#" className="text-yellow-400 hover:underline text-base sm:text-lg lg:text-xl transition-colors">Blogs and newsletters</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold mb-2 text-yellow-400">Follow Us</h2>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <a href="#" aria-label="Facebook" className="text-green-400 hover:text-white text-2xl sm:text-3xl lg:text-4xl transition-colors"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter" className="text-yellow-400 hover:text-white text-2xl sm:text-3xl lg:text-4xl transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn" className="text-green-400 hover:text-white text-2xl sm:text-3xl lg:text-4xl transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Instagram" className="text-yellow-400 hover:text-white text-2xl sm:text-3xl lg:text-4xl transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 mb-2 sm:mt-6 text-base sm:text-lg lg:text-xl font-semibold px-3 break-words">Copyright ©2023 All rights reserved</div>
    </footer>
  );
};

export default Footer;
