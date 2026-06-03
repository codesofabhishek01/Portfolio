import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import abhishek from "../assets/images/abhishek.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);



  useEffect(() => {
    gsap.fromTo(
      imageRef.current, { scale: 0.5, }, { scale: 1.1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom",       end: "bottom center",     scrub: true,  },   } );
  }, []);


  return (
    <section
      ref={sectionRef}
      className="h-[100vh] flex p-[70px] pt-[160px] justify-between items-center gap-[100px]"
      id="about"
    >
<div className='about-img'>
   <img  ref={imageRef}  className="-[100%] opacity-[0.9] max-w-[400px] h-auto rounded-4xl rotate-3 " src={abhishek}  alt="Abhishek" />
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
