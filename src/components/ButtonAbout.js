import React from "react";
import '../styles/tailwind.css'

const ButtonAbout = () =>{
    return (
        <button className="relative px-6 py-3 text-white border-white border hover:border-emerald-300 hover:scale-110 transition-transform duration-300 bg-black rounded-xl overflow-hidden group w-full hover:text-emerald-300" type='submit'>
        <span className='relative z-10 text-sm'> Más sobre mi →</span>
        <div className='absolute inset-0 bg-gray-700 transition-all duration-[90ms] ease-out scale-0 rounded-xl group-hover:scale-100 origin-center'></div>
    </button>
    );
}

export default ButtonAbout;