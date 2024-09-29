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
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-10">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl sm:text-5xl mb-4 text-left py-4 mt-20">Stack</h1>
        <div className="space-y-8">
          {[
            { icon: IcoFigma, name: "Figma", description: "Diseño colaborativo", content: "Figma es mi herramienta favorita para el diseño colaborativo. La utilizo a diario para trabajar mano a mano con mis compañeros de equipo y clientes, facilitando un flujo de retroalimentación en tiempo real y permitiendo iteraciones ágiles en los diseños. Su enfoque basado en la nube realmente agiliza y simplifica todo el proceso creativo." },
            { icon: IcoCss, name: "CSS 3", description: "Estilo visual Web", content: "El CSS es uno de los lenguajes que manejo con soltura y pasión. Me permite dar vida a diseños web cautivadores y adaptativos, asegurando que la experiencia de usuario sea excepcional en cualquier dispositivo o pantalla. Desde la elección de la paleta de colores hasta las animaciones sutiles, el CSS es mi lienzo para plasmar cada detalle visual." },
            { icon: IcoHtml, name: "HTML 5", description: "Estructura y contenido", content: "El HTML es el lenguaje de marcado que utilizo como base para estructurar y dar forma a los sitios web. Con él, puedo definir la arquitectura de la página, organizando contenido, creando secciones y estableciendo una jerarquía visual. El HTML es el esqueleto sobre el cual construyo experiencias web atractivas e intuitivas." },
            { icon: iconC, name: "C/C++", description: "Desarrollo de software robusto", content: "Estos lenguajes de programación son de los que cuento con más experiencia dentro de mi arsenal técnico. C y C++ me brindan la capacidad de desarrollar aplicaciones de software robustas y eficientes, ya sean programas de escritorio, sistemas embebidos o soluciones empresariales complejas. Su potencia y control de bajo nivel me permiten empujar los límites de lo posible." },
            { icon: iconJavaS, name: "JavaScript", description: "Interactividad web", content: "En el mundo del desarrollo web, JavaScript es un lenguaje con bastante potencial dentro de mi stack de herramientas. Este lenguaje dinámico me permite agregar interactividad y dinamismo a las páginas web y aplicaciones, mejorando notablemente la experiencia del usuario final. Desde animaciones suaves hasta funcionalidades complejas, JavaScript es mi aliado para llevar las interfaces a un nuevo nivel." },
            { icon: iconCsharp, name: "C#", description: "Desarrollo versátil", content: "C# es otro lenguaje versátil que domino y que me ha acompañado en numerosos proyectos. Dentro del ecosistema de Microsoft, me ha permitido crear aplicaciones de escritorio, servicios web y hasta videojuegos. Su sintaxis elegante y su amplia gama de bibliotecas lo convierten en una herramienta invaluable para cualquier desarrollador." },
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-3xl border-gray-900 border flex flex-col sm:flex-row items-start">
              <img
                src={item.icon}
                alt={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4 sm:mb-0 sm:mr-6"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400 mb-2">{item.description}</p>
                <div className="border-dotted border-emerald-300 h-4 border-s-2 mb-2"></div>
                <p className="text-gray-400 text-sm">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl md:max-w-6xl mt-20">
        <Link to="/contact" className="block bg-transparent hover:text-emerald-300 transition-colors duration-300 text-center">
          <p className="text-5xl sm:text-7xl md:text-9xl">¡Contáctame!</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Stack;