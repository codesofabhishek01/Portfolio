import React from 'react'
import '../App.css'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner.jsx'

function Home({ theme, setTheme }) {
  
  return (
    <div className='w-full '>
     <Header theme={theme} setTheme={setTheme} />

  <HeroBanner />
    </div>
  )
}

export default Home
