
import React from 'react'
import '../App.css'
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";


function Header({ theme, setTheme }) {

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
<header
  className={`main-header flex justify-between z-[9999] items-center py-[25px] fixed top-0 left-1/2 -translate-x-1/2 px-[30px] w-full max-w-[800px] mx-auto backdrop-blur-md rounded-[60px] mt-[20px] ${
    theme === "dark" ? "bg-[#ffffff46]" : "bg-[#0000001f]"
  }`}
>
      <span className='text-sm md:text-xl font-semibold word-spacing text-center whitespace-nowrap '> <code>{"<Codes of Abhishek/>"}</code></span>

    
<ul className="menu flex gap-8">
  <li><Link to="/">Home</Link></li>
  <li><Link to="#about">About me</Link></li>
  <li><Link to="#work">Work</Link></li>
  <li><Link to="#contact">Let's Connect</Link></li>
</ul>
     <button
      onClick={toggleTheme}
      className=" relative  w-[70px] h-[38px] rounded-full flex items-center px-1 transition-all duration-500  bg-zinc-800 dark:bg-zinc-700   border border-zinc-600"  >

      <div  className={`absolute w-[30px]  h-[30px] rounded-full  bg-white flex  items-center  justify-center transition-all  duration-500    shadow-lg ${theme === "dark"  ? "translate-x-0" : "translate-x-[30px]" }`}>

        {theme === "dark" ? (
          <Moon size={16} className="text-black" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )} </div>
    </button>



    </header>
  )
}

export default Header
