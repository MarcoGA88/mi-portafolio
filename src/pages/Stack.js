import React from 'react';
import { Link } from 'react-router-dom';
import IcoFigma from '../images/figma.png';
import IcoCss from '../images/css3.png';
import IcoHtml from '../images/html5.png';
import Footer from '../components/Footer'

function Stack() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-10">
        {/* Stack Section */}
        
        <div className="w-full max-w-6xl pl-1 md:w-full px-5">
          <h1 className="text-5xl md:text-5xl mb-4 text-left py-4 mt-20 px-5">Stack</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-8 px-5 py-10">
            {/* Stack 1*/}
            <div className="bg-gray-900 p-6 rounded-3xl  border-gray-900 border md:h-full sm:h-full flex ">
              <img
                src={IcoFigma}
                alt="Figma"
                className="w-20 sm:pt-4 md:h-full md:pt-1 object-contain mb-4"
              />
              <div className='px-4'>
              <h3 className="text-lg ">Figma</h3>
              <p className="text-gray-400 pb-1">Diseño colaborativo</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  jakjnfm
              </div>
              </div>

            </div>

            {/* Stack 2 */}
            <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-40 flex">
              <img
                src={IcoCss}
                alt="Css"
                className="w-20 sm:pt-4 md:h-[86px] md:pt-0 object-contain mb-4 pr-1 mr-1"
              />
              <div className='px-4'>
              <h3 className="text-lg">CSS 3</h3>
              <p className="text-gray-400">Estilo visual Web</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  jakjnfm
              </div>
              </div>
            </div>

              {/* Stack 3 */}
              <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full flex">
              <img
                  src={IcoHtml}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className='px-4'>
              <h3 className="text-lg ">HTML 5</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  jakjnfm
              </div>
              </div>
            </div>

              {/* Stack 4*/}
              <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full flex">
              <img
                  src={IcoHtml}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className='px-4'>
              <h3 className="text-lg ">C/C++</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  jakjnfm
              </div>
              </div>
            </div>

                {/* Stack 5 */}
            <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full flex">
                <img
                  src={IcoHtml}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className='px-4'>
              <h3 className="text-lg ">JavaScript</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  jakjnfm
              </div>
              </div>
            </div>

            {/* Stack 5 */}
            <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full flex">
                <img
                  src={IcoHtml}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className='px-4'>
              <h3 className="text-lg ">C#</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  jakjnfm
              </div>
              </div>
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

export default Stack;
