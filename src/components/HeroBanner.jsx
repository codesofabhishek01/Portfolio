import React from 'react'
import banner from "../assets/images/banner.svg";
function HeroBanner() {
  return (
    <section className='min-h-[100vh] flex flex-col sm:flex-row items-center justify-between pl-[70px] pt-[60px]'>
      <div className='flex-5 '><h1 className='text-[4em] leading-[1.2] '>Hey Iam Abhishek Frontend Developer</h1>
      <p>Welcome to my portfolio site, built using React.js, Tailwind CSS, GSAP, Lenis </p></div>
      <div className='flex-5 flex justify-end self-end '> <img className='w-full max-w-[100%] object-cover object-bottom ' src={banner} alt="Hero Banner" /></div>
      
    </section>
  )
}

export default HeroBanner


