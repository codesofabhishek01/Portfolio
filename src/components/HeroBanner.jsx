import React from 'react'
import banner from "../assets/images/My-Avtar.png";
function HeroBanner() {
  return (
    <section className='min-h-[80vh] flex items-center justify-between'>
      <div className='flex-5'><h1 className='text-2xl text-center'>Hero section text side </h1></div>
      <div className='flex-5'> <img className='w-full max-h-[86vh] object-cover object-bottom' src={banner} alt="Hero Banner" /></div>
      
    </section>
  )
}

export default HeroBanner
