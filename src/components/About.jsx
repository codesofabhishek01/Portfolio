import React from 'react'
import '../App.css'
import abhishek from "../assets/images/abhishek.png"

function About() {
  return (
  <section className='h-[100vh] flex p-[70px] justify-between items-center gap-[100px]' id='about'>
<div className='about-img'>
    <img className='w--[100%] shadow-[0_0_25px_rgba(125,211,252,0.5)] max-w-[400px] h-auto rounded-4xl rotate-3' src={abhishek} alt="Abhishek" />
</div>
<div className='about-content'>
   < h4 className='text-[28px] font-normal  font-semibold mb-2'>Hello, I'm Abhishek.</h4>
   <p className='text-[20px] [word-spacing:6px]'>
I am a Frontend Developer focused on designing and building user-friendly web applications and websites. With a strong foundation in HTML, CSS, and JavaScript, I enjoy creating clean, functional, and engaging interfaces. I also work with tools like React and Tailwind CSS to develop responsive, modern user experiences.
<br />
<br />
Much of my work involves building custom WordPress websites using the Divi, Elementor, WP Bakery page builder. This allows me to create flexible, visually appealing solutions tailored to each client’s needs while ensuring usability and consistency.
<br /><br />
I am currently working as a Full-Stack Frontend Developer at GrayCell Technologies, Chandigarh, where I contribute to building modern, responsive, and user-focused web applications. This role allows me to combine creativity with technology to deliver engaging digital experiences and high-quality solutions for clients.</p>
</div>
  </section>
  )
}

export default About
