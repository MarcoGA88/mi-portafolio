import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react';
import Footer from '../components/Footer';
import AnimatedButton from '../components/AnimatedButton';

function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 sm:px-8">
      {/* Section for Introduction */}
      <div className='w-full max-w-7xl px-4'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 py-6 mt-20 sm:mt-16">Contáctame</h1>
      </div>

      {/* Contact section */}
      <div className="w-full max-w-7xl px-4 py-8 flex flex-col md:flex-row md:justify-between">
        <div className='w-full md:w-7/12 px-4'>
          <h2 className='text-xl sm:text-2xl md:text-3xl mb-6 pt-8'>Envíame un mensaje</h2>
          <form
            action='https://formsubmit.co/antonigabilanes102@gmail.com'
            method='POST'
            className='space-y-6'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <input
                type='text'
                name='name'
                required
                className='p-4 rounded-lg bg-gray-700 text-base w-full focus:border-emerald-300 focus:outline-none shadow-sm border border-black focus:right-1 focus:ring-emerald-300'
                placeholder='Nombre'
              ></input>
              <input
                type='email'
                name='email'
                required
                className='p-4 rounded-lg bg-gray-700 text-base w-full focus:border-emerald-300 focus:outline-none shadow-sm border border-black focus:right-1 focus:ring-emerald-300'
                placeholder='Email'
              ></input>
            </div>

            <div className='grid grid-cols-1 gap-6'>
              <textarea
                name='textarea'
                required
                rows={6}
                className='w-full rounded-lg bg-gray-700 focus:border-emerald-300 p-4 shadow-sm border border-black focus:outline-none focus:right-1 focus:ring-emerald-300 text-base'
                placeholder='Escribe un mensaje...'
              ></textarea>
            </div>
            <AnimatedButton></AnimatedButton>
            <input type='hidden' name='_next' value={"https://immarcogm.vercel.app/contact"}></input>
            <input type='hidden' name='_captcha' value={"false"}></input>
          </form>
        </div>

        {/* Contact Details */}
        <div className='w-full md:w-4/12 px-4 mt-8 md:mt-0'>
          <h2 className='text-xl sm:text-2xl md:text-3xl mb-6 pt-8'>Contacto</h2>
          <div className="flex items-center space-x-3 text-gray-500 pt-4 text-lg sm:text-base">
            <Mail color='rgb(110 231 183)' />
            <span>antonigabilanes102@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-500 pt-4 text-lg sm:text-base">
            <Phone color='rgb(110 231 183)' />
            <span>+593 98 694 4383</span>
          </div>

          {/* Social Media Links */}
          <h2 className='text-xl sm:text-2xl md:text-3xl mb-6 pt-8'>Social</h2>
          <div className="flex items-center space-x-3 text-gray-500 pt-4 text-lg sm:text-base">
            <Instagram color='rgb(110 231 183)' />
            <span>Instagram</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-500 pt-4 text-lg sm:text-base">
            <Linkedin color='rgb(110 231 183)' />
            <span>Linkedin</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-500 pt-4 text-lg sm:text-base">
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

