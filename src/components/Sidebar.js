import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/placeholder.png';
import { Home, User, Briefcase, Layers, Mail, Copyright, Twitter, Facebook, Instagram, Dribbble } from 'lucide-react';

function Sidebar() {
  const navItems = [
    { icon: Home, text: 'Home', path: '/' },
    { icon: User, text: 'About', path: '/about' },
    { icon: Briefcase, text: 'Projects', path: '/projects' },
    { icon: Layers, text: 'Stack', path: '/stack' },
    { icon: Mail, text: 'Contact', path: '/contact' },
    { icon: Copyright, text: 'Licensing', path: '/licensing' }
  ];

  const socialIcons = [Twitter, Facebook, Instagram, Dribbble];

  return (
    <aside className="w-80 bg-black text-white p-6 flex flex-col h-full border-r-[1px] border-stone-700 overflow-y-auto">
      <div className="mb-8">
        <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-2xl mx-auto mb-4 object-cover" />
        <div className="text-center">
          <div className="bg-green-900/65 text-emerald-300 text-sm px-10 py-2 rounded-[14px] inline-block mb-3">Available for Work</div>
        </div>
      </div>
      <nav className="flex-grow px-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className={`flex items-center p-2 rounded-xl hover:bg-gray-800 ${index === 0 ? 'bg-gray-800' : ''}`}>
                <item.icon className="mr-3" size={20} />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex justify-start space-x-4">
          {socialIcons.map((Icon, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a key={index} href="#" className="text-gray-400 hover:text-white">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;