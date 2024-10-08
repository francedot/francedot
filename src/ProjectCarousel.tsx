import React, { useState } from 'react';

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center">
        <button onClick={prevProject} className="absolute left-0 z-10 p-1 sm:p-2 bg-gray-800 rounded-full">
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="px-4 sm:px-8">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img src={project.image} alt={project.title} className="w-full h-32 sm:h-48 object-cover rounded-lg mb-2 sm:mb-4" />
                    <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">{project.description}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextProject} className="absolute right-0 z-10 p-1 sm:p-2 bg-gray-800 rounded-full">
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;