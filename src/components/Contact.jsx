import React from 'react';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
// You'll need to add a phone icon

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl font-medium text-gray-500 mb-2 animate-fadeIn">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
          Contact Me
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-fadeInUp delay-100"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeInUp delay-200">
        {/* Email Contact */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <img
              src={emailIcon}
              alt="Email icon"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Email</h3>
          <a 
            href="mailto:examplemail@gmail.com" 
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
          >
            Example@gmail.com
          </a>
        </div>

        {/* Phone Contact */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
            <img
              alt="Phone icon"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Phone</h3>
          <a 
            href="tel:0111620104" 
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
          >
            (011) 162-0104
          </a>
        </div>

        {/* LinkedIn Contact */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">LinkedIn</h3>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
          >
            Connect with me
          </a>
        </div>
      </div>

      {/* Optional Contact Form or Additional Message */}
      <div className="text-center mt-16 animate-fadeInUp delay-300">
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>
    </section>
  );
};

export default Contact;