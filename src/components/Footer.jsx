import React from 'react';

const Footer = () => {
  // Re-use scroll helper if needed, or rely on basic href anchors
   const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="min-h-[20vh] md:min-h-[15vh] mx-4 mt-10 flex flex-col justify-center items-center"> {/* Adjusted height/margin */}
      <nav className="mb-8">
        <div className="flex justify-center items-center"> {/* nav-links-container */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-8 list-none text-lg md:text-xl"> {/* nav-links */}
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-gray-500 hover:underline hover:underline-offset-4">About</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="hover:text-gray-500 hover:underline hover:underline-offset-4">Experience</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="hover:text-gray-500 hover:underline hover:underline-offset-4">Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-gray-500 hover:underline hover:underline-offset-4">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p className="text-center text-sm text-custom-gray-medium">
          Copyright &#169; {new Date().getFullYear()} John Doe. All Rights Reserved. {/* Dynamic Year */}
      </p>
    </footer>
  );
};

export default Footer;