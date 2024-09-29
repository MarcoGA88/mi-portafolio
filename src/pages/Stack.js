import React from 'react';
import { Link } from 'react-router-dom';
import IcoFigma from '../images/figma.png';
import IcoCss from '../images/css3.png';
import IcoHtml from '../images/html5.png';
import iconC from '../images/C++_logo.png';
import iconCsharp from '../images/c-sharp.png';
import iconJavaS from '../images/png-javascript-badge-picture-8.png';
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
                  <p>
                  Figma es mi herramienta favorita para el diseño colaborativo. La utilizo a diario para trabajar mano a mano con mis compañeros de equipo y clientes, facilitando un flujo de retroalimentación en tiempo real y permitiendo iteraciones ágiles en los diseños. Su enfoque basado en la nube realmente agiliza y simplifica todo el proceso creativo.
                  </p>
              </div>
              </div>

            </div>

            {/* Stack 2 */}
            <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full h-full flex">
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
                  <p>El CSS es uno de los lenguajes que manejo con soltura y pasión. Me permite dar vida a diseños web cautivadores y adaptativos, asegurando que la experiencia de usuario sea excepcional en cualquier dispositivo o pantalla. Desde la elección de la paleta de colores hasta las animaciones sutiles, el CSS es mi lienzo para plasmar cada detalle visual.</p>
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
                  <p>El HTML es el lenguaje de marcado que utilizo como base para estructurar y dar forma a los sitios web. Con él, puedo definir la arquitectura de la página, organizando contenido, creando secciones y estableciendo una jerarquía visual. El HTML es el esqueleto sobre el cual construyo experiencias web atractivas e intuitivas.</p>
              </div>
              </div>
            </div>

              {/* Stack 4*/}
              <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full flex">
              <img
                  src={iconC}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className='px-4'>
              <h3 className="text-lg ">C/C++</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  <p>Estos lenguajes de programación son de los que cuento con más experiencia dentro de mi arsenal técnico. C y C++ me brindan la capacidad de desarrollar aplicaciones de software robustas y eficientes, ya sean programas de escritorio, sistemas embebidos o soluciones empresariales complejas. Su potencia y control de bajo nivel me permiten empujar los límites de lo posible.</p>
              </div>
              </div>
            </div>

                {/* Stack 5 */}
            <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full flex">
                <img
                  src={iconJavaS}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className='px-4'>
              <h3 className="text-lg ">JavaScript</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  <p>En el mundo del desarrollo web, JavaScript es mi un lenguaje con bastante potencian dentro de mi stack de herramientas. Este lenguaje dinámico me permite agregar interactividad y dinamismo a las páginas web y aplicaciones, mejorando notablemente la experiencia del usuario final. Desde animaciones suaves hasta funcionalidades complejas, JavaScript es mi aliado para llevar las interfaces a un nuevo nivel.</p>
              </div>
              </div>
            </div>

            {/* Stack 5 */}
            <div className="bg-gray-900 p-6 rounded-3xl border-gray-900 border md:h-full sm:h-full flex">
                <img
                  src={iconCsharp}
                  alt="Html"
                  className="w-20 sm:pt-4 md:h-full md:pt-0 object-contain mb-4"
                />

              <div className='px-4'>
              <h3 className="text-lg ">C#</h3>
              <p className="text-gray-400">Estrcutura y contenido</p>
              <div className=' border-dotted border-emerald-300 h-4 border-s-3'></div>
              <div className='text-gray-400'>
                  <p>C# es otro lenguaje versátil que domino y que me ha acompañado en numerosos proyectos. Dentro del ecosistema de Microsoft, me ha permitido crear aplicaciones de escritorio, servicios web y hasta videojuegos. Su sintaxis elegante y su amplia gama de bibliotecas lo convierten en una herramienta invaluable para cualquier desarrollador.</p>
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
