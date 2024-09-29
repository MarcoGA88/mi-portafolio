import React from "react";
import '../styles/tailwind.css'

const AnimatedButton = () =>{
    return (
        <button className="relative px-6 py-3 text-black bg-emerald-300 rounded-xl hover:border-emerald-300 border border-black overflow-hidden group w-full hover:text-emerald-300" type='submit'>
        <span className='relative z-10'> Enviar</span>
        <div className='absolute inset-0 bg-gray-700 transition-all duration-[90ms] ease-out scale-0 rounded-xl group-hover:scale-100 origin-center'></div>
    </button>
    );
}

export default AnimatedButton;