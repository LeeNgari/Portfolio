import React from 'react';
import checkmarkIcon from '../assets/checkmark.png';
import arrowIcon from '../assets/arrow.png';

const SkillPill = ({ skill }) => (
  <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-gray-100">
    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
      <img 
        src={checkmarkIcon} 
        alt="Checkmark" 
        className="w-4 h-4" 
      />
    </div>
    <span className="text-gray-700 font-medium">{skill}</span>
  </div>
);

const Experience = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: ['JavaScript (React)', 'CSS', 'Tailwind CSS', 'HTML'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Backend Systems',
      icon: '⚙️',
      skills: ['Node.js', 'Spring Framework'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: ['SQL', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Dev Tools',
      icon: '🧰',
      skills: ['Git', 'GitHub', 'Selenium', 'JUnit'],
      color: 'from-orange-400 to-orange-500'
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl font-medium text-gray-500 mb-2 animate-fadeIn">
          Explore My
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
          Technical Expertise
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-fadeInUp delay-100"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className={`p-1 rounded-3xl bg-gradient-to-br ${category.color} animate-fadeInUp delay-${(index + 2) * 100}`}
          >
            <div className="bg-white rounded-[calc(1.5rem-4px)] p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16 animate-fadeInUp delay-600">
        <button 
          onClick={scrollToProjects}
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
        >
          <span>View My Projects</span>
          <img 
            src={arrowIcon} 
            alt="Arrow icon" 
            className="w-5 h-5 transition-transform group-hover:translate-x-1" 
          />
        </button>
      </div>
    </section>
  );
};

export default Experience;