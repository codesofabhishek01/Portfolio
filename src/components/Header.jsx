
import React from 'react'
import '../App.css'
import { Moon, Sun } from "lucide-react";

function Header({ theme, setTheme }) {

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
   <header
  className='main-header flex justify-between items-center py-8 sticky top-0 px-[50px]'>
      <span className='text-xl font-semibold word-spacing text-center '> <code>{"<Codes of Abhishek/>"}</code></span>

     <button
      onClick={toggleTheme}
      className="
        relative
        w-[70px]
        h-[38px]
        rounded-full
        flex
        items-center
        px-1
        transition-all
        duration-500
        bg-zinc-800
        dark:bg-zinc-700
        border
        border-zinc-600
      "
    >

      <div
        className={`
          absolute
          w-[30px]
          h-[30px]
          rounded-full
          bg-white
          flex
          items-center
          justify-center
          transition-all
          duration-500
          shadow-lg
          ${theme === "dark"
            ? "translate-x-0"
            : "translate-x-[30px]"
          }
        `}
      >

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
