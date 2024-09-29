import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin} from 'lucide-react';
import Footer from '../components/Footer'
import ButtonStack from '../components/ButtonStack';

function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-10">
      {/* Section for Introduction */}
      <div className='px-5'>
        <h1 className="text-5xl sm:text-5xl md:text-5xl mb-4 ml-0 py-5 mt-20">Un poco más sobre mi</h1>
        <p className="text-base md:text-base text-gray-400 mb-6 pr-32 text-justify">
        Hola, mi nombre es Marco Gabilanes, soy un estudiante de ingeniería en software. Siempre he tenido fascinación por el arte del diseño y desarrollo web, mi travesía durante mi proceso de formación como ingeniero en software me ha llevado a querer conocer y poner en práctica muchas tecnologías en el área de desarrollo de software. Con experiencia en diseño y desarrollo web, así como en lenguajes de programación como C/C++, JavaScript y C#, mi objetivo es crear soluciones digitales innovadoras que no solo cumplan los requisitos técnicos, sino también deleiten a los usuarios con experiencias excepcionales. <br></br><br></br> 
        Mi pasión radica en crear sitios y aplicaciones que combinen la funcionalidad con el diseño adecuado para que el usuario tenga un producto visualmente atractivo. Ya sea un sitio web corporativo, una plataforma de comercio electrónico y demás aplicaciones, me esfuerzo por crear soluciones digitales creativas que no solo funcionen a la perfección, sino que también inspiren, cautiven y dejen una impresión duradera en la mente de cada visitante. Porque en el ámbito digital, las historias bien contadas son las que realmente perduran.
        </p>

        {/* Location and Button */}
        <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs">
          <div className="flex items-center space-x-2 text-gray-500 pt-3">
            <span><icon><MapPin color='rgb(110 231 183)'/></icon></span>
            <span>Ambato, Ecuador</span>
          </div>
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>......................................................................</div>

        </div>
      </div>

      {/* Education Section */}
      <div className="w-full max-w-6xl pl-1 py-4 mt-3">
        <h2 className="text-2xl md:text-3xl mb-8 text-left px-5">Educación</h2>
        <div className="px-5">
          {/* Colegio */}
          <div className="px-5">
            <h3 className="text-xl mb-2 ">Bachiller en servicios Informáticos</h3>
            <p className="text-gray-400">Unidad Educativa Hispano América, 2020</p>
          </div>
          <div className=' border-dotted border-emerald-300 h-7 border-s-2'></div>
          {/* Colegio */}
          <div className="px-5">
            <h3 className="text-xl mb-2"> Ingeniería en software</h3>
            <p className="text-gray-400">Escuela Superior Politécnica de Chimborazo, en curso</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>................................................................................</div>

      </div>

        {/* Stack Section */}
        <div className="w-full max-w-6xl pl-1 py-4 mt-3">
          <h2 className="text-2xl md:text-3xl mb-8 text-left px-5">Stack</h2>
          <div className="px-5">
            {/* Stack 1*/}
              <p className="text-gray-400 mr-20">Dentro del Stack de tecnologías, herramientas y lenguajes de programacion en los que tengp experiencia se encuentran: Figma el cual domino con un enfoque práctico como herramienta 
                de diseño de interfaces, HTML 5 el cual domino en un  nivel bastante avanzado, CSS 3 en conjunto con herramientas como Tailwind he conseguido mucha experiencia en esta tecnología, C/C++ eb estos lenguajes de programación cuento con almenos 3 años
                de experiencia en uso constante, en cuanto a C# y JavaScript cuento con bases sólidas y más de algún proyecto desarrollado en estos lenguajes al igual que C/C++ como parte de mi formación académica</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-start space-y-2 md:space-y-0 md:space-x-4 mb-10 text-xs pt-10">
          <div className="hidden md:block text-emerald-300 pl-px pt-3 font-light cursor-default select-none" style={{ letterSpacing: '0.85em' }}>.........................................................................</div>
          <Link
            to="/stack"
          >
        <ButtonStack></ButtonStack>
          </Link>
      </div>

        {/* Experience Section*/}
        <div className="w-full max-w-6xl pl-1 py-4 mt-3">
        <h2 className="text-2xl md:text-3xl mb-8 text-left px-5">Experiencia</h2>
        <div className="px-5">
          {/* Colegio */}
          <div className="px-5">
            <h3 className="text-xl mb-2 ">Pasante de servicios Informáticos</h3>
            <p className="text-gray-400">SmartPC Tenchnology, 2018</p>
          </div>
          <div className=' border-dotted border-emerald-300 h-7 border-s-2'></div>
          {/* Colegio */}
          <div className="px-5">
            <h3 className="text-xl mb-2">Inicio de estudios universitarios en software</h3>
            <p className="text-gray-400">Escuela Superior Politécnica de Chimborazo, 2021</p>
          </div>
          <div className=' border-dotted border-emerald-300 h-7 border-s-2'></div>
            {/* Colegio */}
            <div className="px-5">
            <h3 className="text-xl mb-2"> Pasante como desarrollador web</h3>
            <p className="text-gray-400">Obsevatorio Politécnico del Agua, 2024</p>
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

export default About;
