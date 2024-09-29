import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 md:px-10">
      {/* Recent Projects Section */}
      <div className="w-full max-w-6xl pl-1 px-5">
        <h1 className="text-5xl sm:text-6xl mb-4 mt-20 py-4 text-center">Mi galeria de proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-10">
          {/* Project 1 */}
          <Link to="/project1">
            <div className="p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="path-to-project-1-image"
                alt="Project 1"
                className="w-full h-60 md:h-80 object-cover mb-4 bg-gray-900 rounded-lg hover:border-emerald-300 hover:border"
              />
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-400">A brief description of the project.</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link to="/project2">
            <div className="p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="path-to-project-2-image"
                alt="Project 2"
                className="w-full h-60 md:h-80 object-cover mb-4 bg-gray-900 rounded-lg hover:border-emerald-300 hover:border"
              />
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-400">A brief description of the project.</p>
            </div>
          </Link>

          {/* Project 3 */}
          <Link to="/project3">
            <div className="p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="path-to-project-3-image"
                alt="Project 3"
                className="w-full h-60 md:h-80 object-cover mb-4 bg-gray-900 rounded-lg hover:border-emerald-300 hover:border"
              />
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-400">A brief description of the project.</p>
            </div>
          </Link>

          {/* Project 4 */}
          <Link to="/project4">
            <div className="p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="path-to-project-4-image"
                alt="Project 4"
                className="w-full h-60 md:h-80 object-cover mb-4 bg-gray-900 rounded-lg hover:border-emerald-300 hover:border"
              />
              <h3 className="text-xl font-semibold mb-2">Project 4</h3>
              <p className="text-gray-400">A brief description of the project.</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
        <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>
          ...................................................................................
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-6xl pl-1">
        <div className="px-5">
          <Link
            to="/contact"
            className="bg-transparent hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4"
          >
            <p className="text-4xl md:text-9xl mb-2 text-center">¡Contáctame!</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
