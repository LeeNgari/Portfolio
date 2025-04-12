import React, { useState, useEffect } from 'react';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-2xl font-bold text-gray-900 cursor-default">Lee Ngari</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {['about', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="relative px-2 py-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 ml-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 filter grayscale" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={githubIcon} alt="GitHub" className="w-6 h-6 filter grayscale" />
              </a>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container mx-auto px-4 py-8 h-full flex flex-col">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-900 text-2xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <ul className="flex-1 flex flex-col space-y-6 mt-12">
              {['about', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="w-full text-left text-xl font-medium text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex justify-center space-x-8 pt-8 border-t border-gray-200">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 filter grayscale" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 filter grayscale" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;