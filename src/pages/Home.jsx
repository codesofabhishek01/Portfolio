import React from 'react'
import '../App.css'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner.jsx'
import About from '../components/About.jsx'
function Home({ theme, setTheme }) {
  
  return (
    <div className='w-full '>
     <Header theme={theme} setTheme={setTheme} />

  <HeroBanner />
  <About />
    </div>
  )
}

export default Home
