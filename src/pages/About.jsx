import React from 'react'
import Header from '../components/Header'

function About() {
  return (
    <>

      <div className="w-full min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-20 px-5 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img 
              src="https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A=" 
              alt="Chef Cooking" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-yellow-500"/>
          </div>

          {/* Right Side - Text */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <h2 className="text-5xl md:text-6xl font-extrabold text-black drop-shadow-lg">
              About <span className="text-red-700">Golden Spoon</span>
            </h2>
            
            <p className="text-black text-lg md:text-xl leading-relaxed">
              At <span className="font-bold">Golden Spoon</span>, dining is not just a meal, it’s an experience. Our chefs craft every dish with passion and precision, blending flavors that excite your senses and leave you craving more.
            </p>

            <p className="text-black text-md md:text-lg italic leading-relaxed">
              From cozy interiors to the finest ingredients, every detail is designed to make your visit unforgettable. Join us and taste the art of cuisine.
            </p>

            <p className="text-black text-sm mt-2">
              Whether it's a family dinner, a romantic evening, or a casual lunch, <span className="font-semibold">Golden Spoon</span> is your perfect dining destination.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
