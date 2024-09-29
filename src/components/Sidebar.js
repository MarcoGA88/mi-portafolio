import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileImage from '../images/placeholder.png';
import { Home, User, Briefcase, Layers, Mail, Twitter, Facebook, Instagram, Dribbble, Menu } from 'lucide-react';

function Sidebar() {
  // Estado para controlar si el sidebar está abierto o cerrado en pantallas pequeñas
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook para obtener la ubicación actual

  const navItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: User, text: 'About', path: '/about' },
    { icon: Briefcase, text: 'Projects', path: '/projects' },
    { icon: Layers, text: 'Stack', path: '/stack' },
    { icon: Mail, text: 'Contact', path: '/contact' },
  ];

  const socialIcons = [Twitter, Facebook, Instagram, Dribbble];

  // Función para alternar el sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón de menú hamburguesa visible solo en pantallas pequeñas */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-full focus:outline-none"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-72 md:min-w-[288px] md:max-w-[310px] bg-black text-white p-6 flex flex-col h-full border-r-[1px] border-stone-700 overflow-y-auto z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:relative md:translate-x-0`}
      >
        <div className="mb-8">
          <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-2xl mx-auto mb-4 object-cover" />
          <div className="text-center">
            <div className="bg-green-900/65 text-emerald-300 text-sm px-10 py-2 rounded-[14px] inline-block mb-3">Available for Work</div>
          </div>
        </div>
        <nav className="flex-grow px-4 space-y-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={closeSidebar} // Cierra el sidebar al hacer clic
                  className={`flex items-center p-4 rounded-xl hover:bg-gray-800 hover:text-emerald-300 ${
                    location.pathname === item.path ? 'bg-gray-800 text-emerald-300' : 'text-white'
                  }`}
                >
                  <item.icon className="mr-3" size={20} />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <div className="flex justify-start space-x-4 px-14">
            {socialIcons.map((Icon, index) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a key={index} href="#" className="text-gray-400 hover:text-white">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Fondo oscuro cuando el sidebar está abierto */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}
    </>
  );
}

export default Sidebar;
