import React from 'react';
import { Link } from 'react-router-dom';
import { Mail,Phone, Instagram,Linkedin,Github} from 'lucide-react';
import Footer from '../components/Footer'
import AnimatedButton from '../components/AnimatedButton';


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
        <input type='text' name='name' required className='p-3 rounded-xl bg-gray-700 text-sm w-64 focus:border-emerald-300 focus:outline-none shadow-sm  border border-black focus:right-1 focus:ring-emerald-300' placeholder='Name'></input>
        <input type='email' name='email' required className='p-3 rounded-xl bg-gray-700 text-sm focus:border-emerald-300 focus:outline-none shadow-sm  border border-black focus:right-1 focus:ring-emerald-300' placeholder='Email'></input>
        </div>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-8 py-2 '>
            <textarea type='text' name='textarea' required rows={10} className='md:min-w-96 h-60 rounded-xl bg-gray-700 focus:border-emerald-300 p-3 shadow-sm border border-black focus:outline-none focus:right-1 focus:ring-emerald-300' placeholder='Escribe un mensaje...'></textarea>
            </div>
            <AnimatedButton></AnimatedButton>
            <input type='hidden' name='_next' value={"https://immarcogm.vercel.app/contact"}></input>
            <input type='hidden' name='_captcha' value={"false"}></input>
        </form>
        </div>

        <div className='px-5'>
            <h2 className='text-xl sm:text-xl md:text-xl mb-4 ml-0 pt-10'> Contacto</h2>
            <div className="flex items-center space-x-2 text-gray-500 pt-3">
              <span><icon><Mail color='rgb(110 231 183)' /></icon></span>
              <span>antonigabilanes102@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 pt-3">
              <span><icon><Phone color='rgb(110 231 183)' /></icon></span>
              <span>+593 98 694 4383</span>
            </div>
          <div className=''>
          <h2 className='text-xl sm:text-xl md:text-xl mb-4 ml-0 pt-10'>Social</h2>
            <div className="flex items-center space-x-2 text-gray-500 pt-3">
              <span><icon><Instagram color='rgb(110 231 183)' /></icon></span>
              <span >Instagram</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 pt-3">
              <span><icon><Linkedin color='rgb(110 231 183)' /></icon></span>
              <span>Linkedin</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 pt-3">
              <span><icon><Github color='rgb(110 231 183)' /></icon></span>
              <span>Github</span>
            </div>
        </div>
        </div>
        </div>

      <Footer></Footer>
    </div>

  );
}

export default Contact;
