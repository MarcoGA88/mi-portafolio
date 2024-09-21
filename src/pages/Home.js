import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin} from 'lucide-react';

function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-10">
      {/* Section for Introduction */}
      <div className='px-5'>
        <h1 className="text-5xl sm:text-5xl md:text-5xl mb-4 ml-0 py-5">Hello Everyone! I'm Marco</h1>
        <p className="text-xs md:text-xl text-gray-400 mb-6 pr-32">
        A passionate web designer and developer with lots of ideas, I am studying the last semester software engineering and this is my personal portfolio.
        </p>

        {/* Location and Button */}
        <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs">
          <div className="flex items-center space-x-2 text-gray-500">
            <span><icon><MapPin /></icon></span>
            <span>Ambato, Ecuador</span>
          </div>
          <div className="hidden md:block text-gray-500 pl-px" style={{ letterSpacing: '0.85em' }}>..............................................................</div>
          <Link
            to="/about"
            className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4 rounded-lg"
          >
            More about Me →
          </Link>

        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="w-full max-w-6xl pl-1">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="path-to-project-1-image"
              alt="Project 1"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-lg">
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

      {/* Recent Projects Section */}
      <div className="w-full max-w-6xl pl-1">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <img
              src="path-to-project-1-image"
              alt="Project 1"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-lg">
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
    </div>
  );
}

export default Home;
