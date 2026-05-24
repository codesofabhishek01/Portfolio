import React from 'react'
import banner from "../assets/images/My-Avtar.png";
function HeroBanner() {
  return (
    <section className='min-h-[82vh] flex flex-col sm:flex-row items-center justify-between pl-[70px]'>
      <div className='flex-5 '><h1 className='text-[4em] leading-[1.2] '>Hey Iam Abhishek Frontend Developer</h1>
      <p>Welcome to my portfolio site, built using Next.js, Tailwind CSS, TypeScript, Velite, MDX and shadcn/ui.</p></div>
      <div className='flex-5 flex justify-end'> <img className='w-full max-w-[625px] object-cover object-bottom ' src={banner} alt="Hero Banner" /></div>
      
    </section>
  )
}

export default HeroBanner
