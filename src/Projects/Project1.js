import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import {ArrowLeft} from 'lucide-react';


function Project1() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-10">
        <Link
            to="/projects"
            className='fixed top-[70px] md:top-[70px]  left-[350px] md:left-[350px] sm:left-2 max-sm:left-6 p-2 bg-black hover:bg-gray-700 text-white rounded-full focus:outline-none '
          > 
            <span><icon><ArrowLeft color='rgb(110 231 183)' /></icon></span>

         </Link>
      {/* Recent Projects Section */}
      <div className="w-full max-w-6xl pl-1 py-4 mt-3">
      <h1 className="text-5xl sm:text-5xl md:text-5xl mb-4 pl-10 top-10 mt-10">Project 1</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-10">
          {/* Project 1 */}
          <div className="p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src="path-to-project-2-image"
              alt="Project 1"
              className="w-full h-80 object-cover mb-4 bg-gray-900 rounded-lg  hover:border-emerald-300 hover:border"
            />
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>

        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>...................................................................................</div>

      </div>
            {/* Contact Section */}
        <div className="w-full max-w-6xl pl-1">
          <div className="px-5">
            {/* Stack 1*/}
            <Link
            to="/contact"
            className="bg-transparent hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4 "
            >
            <p className="text-9xl mb-2 text-center"> ¡Contáctame! </p>
            </Link>
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default Project1;
