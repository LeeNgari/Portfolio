import React, { useState } from 'react';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';
import { motion } from 'framer-motion';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

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

  const certificates = [
    {
      id: 1,
      title: "Advanced React",
      issuer: "Meta",
      year: "2023"
    },
    {
      id: 2,
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2022"
    },
    {
      id: 3,
      title: "UI/UX Design",
      issuer: "Google",
      year: "2021"
    },
    {
      id: 4,
      title: "Frontend Development",
      issuer: "Scrimba",
      year: "2020"
    }
  ];

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
          Professional Profile
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

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'about' ? 'bg-white shadow-md text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'certificates' ? 'bg-white shadow-md text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Certificates
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {activeTab === 'about' ? (
          <>
            {/* Stats cards with animation */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full max-w-4xl justify-center">
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
                  B.Sc. Computer Science<br className="hidden sm:block" />M.Sc. Software Engineering
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
              className="text-center max-w-3xl mb-10"
            >
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                I'm a passionate frontend developer specializing in React, TypeScript, and modern web technologies. 
                With a strong foundation in computer science and hands-on experience building scalable applications, 
                I focus on creating intuitive user interfaces that deliver exceptional experiences.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                My approach combines technical expertise with clean code principles and performance optimization. 
                I'm committed to continuous learning and staying updated with industry trends to implement 
                cutting-edge solutions.
              </p>
            </motion.div>

            {/* Animated scroll button */}
            <motion.button 
              onClick={scrollToExperience}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
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
          </>
        ) : (
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">My Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: cert.id * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                     
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{cert.title}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                      <p className="text-gray-500 text-sm mt-1">Issued: {cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;