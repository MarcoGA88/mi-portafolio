import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react';
import Footer from '../components/Footer';
import AnimatedButton from '../components/AnimatedButton';

function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
      {/* Section for Introduction */}
      <div className='w-full max-w-6xl pl-1 px-4 sm:px-2'>
        <h1 className="text-4xl sm:text-3xl md:text-5xl mb-4 py-4 mt-16 sm:mt-10">Contáctame</h1>
      </div>

      {/* Contact section */}
      <div className="w-full max-w-6xl pl-1 py-4 mt-3 flex flex-wrap md:flex-nowrap">
        <div className='px-4 sm:px-2'>
          <h2 className='text-lg sm:text-base md:text-xl mb-4 ml-0 pt-8'>Envíame un mensaje</h2>
          <form
            action='https://formsubmit.co/antonigabilanes102@gmail.com'
            method='POST'
            className='space-y-4'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                name='name'
                required
                className='p-2 rounded-lg bg-gray-700 text-sm w-full focus:border-emerald-300 focus:outline-none shadow-sm border border-black focus:right-1 focus:ring-emerald-300'
                placeholder='Nombre'
              ></input>
              <input
                type='email'
                name='email'
                required
                className='p-2 rounded-lg bg-gray-700 text-sm w-full focus:border-emerald-300 focus:outline-none shadow-sm border border-black focus:right-1 focus:ring-emerald-300'
                placeholder='Email'
              ></input>
            </div>

            <div className='grid grid-cols-1 gap-4 py-2'>
              <textarea
                name='textarea'
                required
                rows={5}
                className='w-full h-40 rounded-lg bg-gray-700 focus:border-emerald-300 p-2 shadow-sm border border-black focus:outline-none focus:right-1 focus:ring-emerald-300'
                placeholder='Escribe un mensaje...'
              ></textarea>
            </div>
            <AnimatedButton></AnimatedButton>
            <input type='hidden' name='_next' value={"https://immarcogm.vercel.app/contact"}></input>
            <input type='hidden' name='_captcha' value={"false"}></input>
          </form>
        </div>

        {/* Contact Details */}
        <div className='px-4 sm:px-2 mt-8 md:mt-0'>
          <h2 className='text-lg sm:text-base md:text-xl mb-4 ml-0 pt-8'>Contacto</h2>
          <div className="flex items-center space-x-2 text-gray-500 pt-3 text-sm sm:text-xs">
            <Mail color='rgb(110 231 183)' />
            <span>antonigabilanes102@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 pt-3 text-sm sm:text-xs">
            <Phone color='rgb(110 231 183)' />
            <span>+593 98 694 4383</span>
          </div>

          {/* Social Media Links */}
          <h2 className='text-lg sm:text-base md:text-xl mb-4 ml-0 pt-8'>Social</h2>
          <div className="flex items-center space-x-2 text-gray-500 pt-3 text-sm sm:text-xs">
            <Instagram color='rgb(110 231 183)' />
            <span>Instagram</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 pt-3 text-sm sm:text-xs">
            <Linkedin color='rgb(110 231 183)' />
            <span>Linkedin</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 pt-3 text-sm sm:text-xs">
            <Github color='rgb(110 231 183)' />
            <span>Github</span>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Contact;
