import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin} from 'lucide-react';
import IcoFigma from '../images/figma.png';
import IcoCss from '../images/css3.png';
import IcoHtml from '../images/html5.png';
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-10">
      {/* Section for Introduction */}
      <div className='px-5'>
        <h1 className="text-5xl sm:text-5xl md:text-5xl mb-4 ml-0 py-5 mt-20">Hola a todos, soy Marco</h1>
        <p className="text-base md:text-base text-gray-400 mb-6 pr-32">
        Bienvenido a mi portafolio. Soy un estudiante de ingeniería en software, con experiencia en diseño y desarrollo web y algúnos lenguajes de porgramación como C/C++, JavaScript y C#. Mi pasión es crear soluciones digitales innovadoras que no solo cumplen con los requisitos técnicos, sino que también deleitan a los usuarios.
        </p>

        {/* Location and Button */}
        <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs">
          <div className="flex items-center space-x-2 text-gray-500 pt-3">
            <span><icon><MapPin color='rgb(110 231 183)' /></icon></span>
            <span>Ambato, Ecuador</span>
          </div>
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>.........................................................</div>
          <Link
            to="/about"
            className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4  rounded-xl hover:border-emerald-300"
          >
            Más sobre mi →
          </Link>

        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="w-full max-w-6xl pl-1 py-4 mt-3">
        <h2 className="text-2xl md:text-3xl mb-8 text-left px-5">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-emerald-300 hover:border">
            <img
              src="path-to-project-1-image"
              alt="Project 1"
              className="w-full h-80 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-emerald-300 hover:border">
            <img
              src="path-to-project-2-image"
              alt="Project 2"
              className="w-full h-80 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-400">A brief description of the project.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>.......................................................................</div>
          <Link
            to="/projects"
            className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4 rounded-xl hover:border-emerald-300"
          >
            Ver más →
          </Link>
      </div>

        {/* Stack Section */}
        <div className="w-full max-w-6xl pl-1 md:w-full py-4 mt-3">
          <h2 className="text-2xl md:text-3xl mb-8 text-left px-5">Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 px-5">
            {/* Stack 1*/}
            <div className="bg-gray-900 p-6 rounded-xl border-gray-900 border md:h-28 sm:h-40 flex">
              <img
                src={IcoFigma}
                alt="Figma"
                className="w-20 sm:pt-4 md:h-full md:pt-1 object-contain mb-4"
              />
              <div>
              <h3 className="text-lg mb-2">Figma</h3>
              <p className="text-gray-400">Diseño colaborativo</p>
              </div>

            </div>

            {/* Stack 2 */}
            <div className="bg-gray-900 p-6 rounded-xl  border-gray-900 border md:h-28 sm:h-40 flex">
              <img
                src={IcoCss}
                alt="Css"
                className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4 pr-1 mr-1"
              />
              <div className=''>
              <h3 className="text-lg mb-2">CSS 3</h3>
              <p className="text-gray-400">Estilo visual Web</p>
              </div>
            </div>

              {/* Stack 3 */}
              <div className="bg-gray-900 p-6 rounded-xl border-gray-900 border md:h-28 sm:h-40 flex">
              <img
                  src={IcoHtml}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className=''>
              <h3 className="text-lg mb-2">HTML 5</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>.......................................................................</div>
          <Link
            to="/stack"
            className="bg-transparent border border-gray-500 hover:bg-gray-700 hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-sm py-3 px-4 rounded-xl hover:border-emerald-300"
          >
            Ver más →
          </Link>
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

export default Home;
