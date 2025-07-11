import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-900 text-gray-400 text-lg mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Logo & Text */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-white font-semibold text-lg">MovieFlix</span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ichiragtyagi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://chiragtyagi.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            Blog
          </a>
          <a
            href="https://x.com/I_am_Chirag28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            X (Twitter)
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="bg-[#e50914] hover:bg-[#f40612] text-white px-4 py-2 rounded transition duration-200 cursor-pointer"
        >
          ↑ Back to Top
        </button>
      </div>

      <div className="text-center text-xs text-white pb-4 space-y-1 ">
        <p>&copy; {year} MovieFlix. All rights reserved.</p>
        <p className="font-medium text-white dark:text-white">
          Designed & Built by <span className="text-[#f5babd]">Chirag Tyagi</span> with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
