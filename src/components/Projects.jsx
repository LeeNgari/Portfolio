import React from 'react';
import project1Img from '../assets/project-1.png';
import project2Img from '../assets/project-2.png';
import project3Img from '../assets/project-3.png';
import arrowIcon from '../assets/arrow.png';

const ProjectCard = ({ imgSrc, title, githubLink, liveLink, description, technologies }) => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <div className="group relative overflow-hidden p-1 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      <div className="h-full bg-white rounded-[calc(1.5rem-4px)] p-6 flex flex-col">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-2xl mb-4 h-48">
          <img
            src={imgSrc}
            alt={`${title} project`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm">{description}</p>
          </div>
        </div>

        {/* Project Content */}
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h2>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-auto">
          <button
            onClick={() => openLink(githubLink)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Code
          </button>
          <button
            onClick={() => openLink(liveLink)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
            Demo
          </button>
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projects = [
    {
      imgSrc: project1Img,
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart functionality and payment processing",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/",
      liveLink: "https://github.com/"
    },
    {
      imgSrc: project2Img,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop interface and team collaboration",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD"],
      githubLink: "https://github.com/",
      liveLink: "https://github.com/"
    },
    {
      imgSrc: project3Img,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting with interactive maps and location search",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      githubLink: "https://github.com/",
      liveLink: "https://github.com/"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl font-medium text-gray-500 mb-2 animate-fadeIn">
          Browse My Recent
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeInUp">
          Projects
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-fadeInUp delay-100"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp delay-200">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-16 animate-fadeInUp delay-300">
        <button 
          onClick={scrollToContact}
          className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
        >
          <span>Let's Work Together</span>
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

export default Projects;