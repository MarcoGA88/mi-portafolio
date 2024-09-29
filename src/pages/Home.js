import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import IcoFigma from '../images/figma.png';
import IcoCss from '../images/css3.png';
import IcoHtml from '../images/html5.png';
import Footer from '../components/Footer';
import ButtonLink from '../components/Buttonlink';
import ButtonAbout from '../components/ButtonAbout';

function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Sección Principal */}
      <div className="flex-grow flex flex-col items-center px-4 sm:px-6 md:px-10 py-10">
        {/* Introducción */}
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-5xl mb-4 py-5 mt-16 sm:mt-10 text-center md:text-left">
            Hola a todos, soy Marco
          </h1>
          <p className="text-sm sm:text-base md:text-base text-gray-400 mb-6 pr-0 md:pr-32 text-center md:text-left">
            Bienvenido a mi portafolio. Soy un estudiante de ingeniería en software, con experiencia en diseño y desarrollo web y algunos lenguajes de programación como C/C++, JavaScript y C#. Mi pasión es crear soluciones digitales innovadoras que no solo cumplen con los requisitos técnicos, sino que también deleitan a los usuarios.
          </p>

          {/* Ubicación y Botón */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs">
            <div className="flex items-center space-x-2 text-gray-500 pt-3">
              <MapPin color="rgb(110 231 183)" size={20} />
              <span>Ambato, Ecuador</span>
            </div>
            <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>
              .....................................................
            </div>
            <Link to="/about">
              <ButtonAbout />
            </Link>
          </div>
        </div>

        {/* Sección de Proyectos Recientes */}
        <div className="w-full max-w-6xl py-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl mb-8 text-center md:text-left">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-2">
            {/* Proyecto 1 */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-emerald-300 hover:border">
              <img
                src="path-to-project-1-image"
                alt="Project 1"
                className="w-full h-40 sm:h-48 md:h-80 object-cover mb-4 rounded"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-400 text-sm sm:text-base">A brief description of the project.</p>
            </div>

            {/* Proyecto 2 */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:border-emerald-300 hover:border">
              <img
                src="path-to-project-2-image"
                alt="Project 2"
                className="w-full h-40 sm:h-48 md:h-80 object-cover mb-4 rounded"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-400 text-sm sm:text-base">A brief description of the project.</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-10">
            <Link to="/projects">
              <ButtonLink />
            </Link>
          </div>
        </div>

        {/* Sección de Stack */}
        <div className="w-full max-w-6xl py-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl mb-8 text-center md:text-left">Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-2">
            {/* Stack 1 */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border-gray-900 border flex flex-col items-center md:h-28 sm:h-40">
              <img
                src={IcoFigma}
                alt="Figma"
                className="w-16 sm:w-20 md:w-20 object-contain mb-2 sm:mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg sm:text-lg md:text-lg mb-2">Figma</h3>
                <p className="text-gray-400 text-sm sm:text-sm">Diseño colaborativo</p>
              </div>
            </div>

            {/* Stack 2 */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border-gray-900 border flex flex-col items-center md:h-28 sm:h-40">
              <img
                src={IcoCss}
                alt="CSS 3"
                className="w-16 sm:w-20 md:w-20 object-contain mb-2 sm:mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg sm:text-lg md:text-lg mb-2">CSS 3</h3>
                <p className="text-gray-400 text-sm sm:text-sm">Estilo visual Web</p>
              </div>
            </div>

            {/* Stack 3 */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-xl border-gray-900 border flex flex-col items-center md:h-28 sm:h-40">
              <img
                src={IcoHtml}
                alt="HTML 5"
                className="w-16 sm:w-20 md:w-20 object-contain mb-2 sm:mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg sm:text-lg md:text-lg mb-2">HTML 5</h3>
                <p className="text-gray-400 text-sm sm:text-sm">Estructura y contenido</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-10">
            <Link to="/stack">
              <ButtonLink />
            </Link>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="w-full max-w-6xl py-10">
          <div className="text-center">
            <Link
              to="/contact"
              className="bg-transparent hover:text-emerald-300 hover:scale-110 transition-transform duration-300 text-white text-3xl sm:text-4xl mb-2"
            >
              ¡Contáctame!
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
