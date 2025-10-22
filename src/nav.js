import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // adjust according to navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-10 left-0 w-[calc(100%-2rem)] z-30 p-4 flex items-center
                    bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl mx-4">

      {/* Logo */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-700 via-gray-300 to-white bg-clip-text text-transparent text-gradient-animate">
        Portfolite
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-lg">
        {["home", "services", "myprojects", "contact"].map((section) => (
          <button
            key={section}
            className="text-gray-400 hover:text-white"
            onClick={() => scrollToSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Hamburger Button for Mobile */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-200 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-full left-0 w-full bg-white/10 backdrop-blur-md
                    rounded-b-3xl mt-2 flex flex-col items-center space-y-4 p-4
                    md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {["home", "services", "myprojects", "contact"].map((section) => (
          <li key={section}>
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
