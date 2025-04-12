import React, { useState } from 'react';
import aboutPic from '../assets/about-pic.png';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';
import { motion } from 'framer-motion';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="about" 
      className="relative py-24 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-medium text-gray-500 mb-2"
        >
          Get To Know More
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          About Me
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full"
        ></motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        {/* Image with animation */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: imageLoaded ? 1 : 0, x: imageLoaded ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center relative group"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-70 blur-lg group-hover:opacity-90 transition-all duration-500 -z-10"></div>
          <img
            src={aboutPic}
            alt="Profile picture"
            className="rounded-3xl object-cover w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] border-4 border-white shadow-2xl group-hover:scale-[1.02] transition-transform duration-500 z-10"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute -z-20 -inset-4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-3xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-700"></div>
        </motion.div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          {/* Stats cards with animation */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full justify-center lg:justify-start">
            <motion.div 
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              onMouseEnter={() => setHoveredCard('experience')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 bg-white rounded-3xl border border-gray-200 text-center min-w-[240px] transition-all duration-300 flex-1 shadow-sm ${hoveredCard === 'experience' ? 'shadow-lg' : ''}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={experienceIcon}
                  alt="Experience icon"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Experience</h3>
              <p className="text-gray-600 text-md">
                2+ years <br className="hidden sm:block" />Frontend Development
              </p>
              {hoveredCard === 'experience' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-b-3xl"></div>
              )}
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              onMouseEnter={() => setHoveredCard('education')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 bg-white rounded-3xl border border-gray-200 text-center min-w-[240px] transition-all duration-300 flex-1 shadow-sm ${hoveredCard === 'education' ? 'shadow-lg' : ''}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={educationIcon}
                  alt="Education icon"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Education</h3>
              <p className="text-gray-600 text-md">
                B.Sc. Bachelors Degree<br className="hidden sm:block" />M.Sc. Masters Degree
              </p>
              {hoveredCard === 'education' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-b-3xl"></div>
              )}
            </motion.div>
          </div>

          {/* Description with animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              I'm a passionate frontend developer with expertise in modern JavaScript frameworks. 
              My journey in web development began during my computer science studies, and I've been 
              building interactive, user-friendly applications ever since.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              When I'm not coding, you can find me contributing to open-source projects, 
              learning new technologies, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Animated scroll button */}
          <motion.button 
            onClick={scrollToExperience}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <span>View My Experience</span>
            <motion.img 
              src={arrowIcon} 
              alt="Arrow icon" 
              className="w-5 h-5"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;