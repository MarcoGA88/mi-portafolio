import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin} from 'lucide-react';
import Footer from '../components/Footer'


function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-10">
      {/* Section for Introduction */}
      <div className='w-full max-w-6xl pl-1 px-5'>
        <h1 className="text-5xl sm:text-5xl md:text-5xl mb-4 ml-0 py-4 mt-20 px-5">Contáctame</h1>
      </div>

      {/* Contact section */}
      <div className="w-full max-w-6xl pl-1 py-4 mt-3 flex">
        <div className='px-5'>
            <h2 className='text-xl sm:text-xl md:text-xl mb-4 ml-0 pt-10 '>Enviame un mensaje</h2>
        <form action='https://formsubmit.co/antonigabilanes102@gmail.com' method='POST' className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <input type='text' name='name' required className='p-3 rounded-xl bg-gray-700 text-sm w-64' placeholder='Name'></input>
        <input type='email' name='email' required className='p-3 rounded-xl bg-gray-700 text-sm' placeholder='Email'></input>
        </div>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-8 py-2 '>
            <textarea type='text' name='textarea' required rows={10} className='md:min-w-96 h-60 rounded-xl bg-gray-700 focus:border-emerald-300 p-3 shadow-sm border border-black focus:outline-none focus:right-1 focus:ring-emerald-300' placeholder='Escribe un mensaje...'></textarea>
            </div>
            <div className="flex items-center justify-center h-screen">
                <button className="relative px-6 py-3 text-white bg-emerald-300 rounded-xl overflow-hidden group" type='submit'>
                    <span className='relative z-10'> Enviar</span>
                    <div className='absolute inset-0 bg-gray-700 transition-all duration-75 ease-out scale-0 rounded-xl group-hover:scale-100 origin-center'></div>
                </button>
            </div>
        </form>
        </div>

        <div>
            <h2> Contacto</h2>
        </div>
        </div>

      <Footer></Footer>
    </div>

  );
}

export default Contact;
