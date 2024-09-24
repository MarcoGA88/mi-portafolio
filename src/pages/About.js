import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin} from 'lucide-react';

function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-10">
      {/* Section for Introduction */}
      <div className='px-5'>
        <h1 className="text-5xl sm:text-5xl md:text-5xl mb-4 ml-0 py-5 mt-20">Get to Know Me</h1>
        <p className="text-base md:text-base text-gray-400 mb-6 pr-32">
        A passionate web designer and developer with lots of ideas, I am studying the last semester software engineering and this is my personal portfolio.
        </p>

        {/* Location and Button */}
        <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs">
          <div className="flex items-center space-x-2 text-gray-500 pt-3">
            <span><icon><MapPin /></icon></span>
            <span>Ambato, Ecuador</span>
          </div>
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light" style={{ letterSpacing: '0.85em' }}>.........................................................</div>
          <Link
            to="/"
            className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4  rounded-xl hover:border-emerald-300"
          >
            More about Me →
          </Link>

        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="w-full max-w-6xl pl-1">
        <h2 className="text-2xl md:text-3xl mb-8 text-left">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-emerald-300 hover:border">
            <img
              src="path-to-project-1-image"
              alt="Project 1"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-400n">A brief description of the project.</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-emerald-300 hover:border">
            <img
              src="path-to-project-2-image"
              alt="Project 2"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light" style={{ letterSpacing: '0.85em' }}>.......................................................................</div>
          <Link
            to="/projects"
            className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4 rounded-xl hover:border-emerald-300"
          >
            View all projects →
          </Link>
      </div>

        {/* Stack Section */}
        <div className="w-full max-w-6xl pl-1">
          <h2 className="text-2xl md:text-3xl mb-8 text-left">Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-3  sm:grid-cols-2 gap-8">
            {/* Stack 1*/}
            <div className="bg-gray-900 p-6 rounded-xl cursor-pointer h-full hover:border-emerald-300 border-gray-900 border  flex">
              <img
                src="path-to-project-1-image"
                alt="Stack 1"
                className="w-20 h-5 object-cover mb-4"
              />
              <div>
              <h3 className="text-lg font-semibold mb-2">Stack 1</h3>
              <p className="text-gray-400">A brief description of the project.</p>
              </div>

            </div>

            {/* Stack 2 */}
            <div className="bg-gray-900 p-6 rounded-xl cursor-pointer hover:border-emerald-300 border-gray-900 border h-full flex">
              <img
                src="path-to-project-1-image"
                alt="Stack 1"
                className="w-20 h-5 object-cover mb-4"
              />
              <div className=''>
              <h3 className="text-lg font-semibold mb-2">Stack 2</h3>
              <p className="text-gray-400">A brief description of the project.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light" style={{ letterSpacing: '0.85em' }}>.......................................................................</div>
          <Link
            to="/stack"
            className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4 rounded-xl hover:border-emerald-300"
          >
            View all stack →
          </Link>
      </div>
    </div>
  );
}

export default About;
