import React from 'react'

const Banner = () => {
  return (
    <section className="bg-cover bg-center py-28 sm:py-48"
        style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3727129/pexels-photo-3727129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }} >
   
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-4 px-4 text-white text-center">
            Plan, Organize, and Create Memorable Events
        </h1>
        <p className="text-lg md:text-xl mb-8 px-4 text-white text-center">
            We specialize in delivering exceptional event management solutions
        </p>
        <button className="bg-blue-500 text-white py-3 px-12 rounded-lg shadow-lg font-medium hover:bg-[#14213D] hover:text-white transition duration-300">
            Get Started
        </button>
    </div>
  </section>
  )
}

export default Banner