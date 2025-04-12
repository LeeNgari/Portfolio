import React from 'react';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const Profile = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="profile" 
      className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 min-h-screen px-6 md:px-8 lg:px-12 py-16 md:py-24 max-w-7xl mx-auto"
    >
      {/* Profile Image with Animation */}
      <div className="relative group h-[280px] w-[280px] md:h-[420px] md:w-[420px] mx-auto md:mx-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 group-hover:opacity-30 transition-all duration-500 blur-md"></div>
        <img 
          src={profilePic} 
          alt="John Doe profile picture" 
          className="relative rounded-full object-cover w-full h-full z-10 group-hover:scale-105 transition-transform duration-500 border-4 border-white shadow-xl"
        />
      </div>

      {/* Profile Content */}
      <div className="self-center text-center md:text-left max-w-2xl">
        <p className="text-lg md:text-xl font-medium text-gray-500 mb-2 animate-fadeIn">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-3 animate-fadeInUp">
          John Doe
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-gray-500 mb-6 animate-fadeInUp delay-100">
          Frontend Developer
        </p>
        
        <p className="text-gray-600 mb-8 leading-relaxed animate-fadeInUp delay-200">
          I build exceptional digital experiences with modern web technologies. 
          Passionate about creating intuitive, responsive, and performant interfaces.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8 animate-fadeInUp delay-300">
          <button
            onClick={() => window.open('/assets/resume-example.pdf', '_blank')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Download CV
          </button>
          <button 
            onClick={scrollToContact}
            className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Info
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-5 animate-fadeInUp delay-400">
          <button 
            onClick={() => openLink('https://linkedin.com/')}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="LinkedIn profile"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </button>
          <button 
            onClick={() => openLink('https://github.com/')}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="GitHub profile"
          >
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;