import React from 'react'
import '../App.css'
import flamestone from '../assets/images/flamestonefoods.com_.png'
import aimgallery from '../assets/images/aimgallery.in_.png'
function Portfolio() {
  return (
    <section className=' flex flex-col gap-3 align-middle relative p-[70px] pt-[230px]' id='portfolio'>
        <h2 className='text-[300px] text-center font-semibold  absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Portfolio</h2>
      <div className='w-full flex portfolio-container justify-start gap-[30px] mt-[-50px] z-10 '>
       
           <div className=' min-w-[33%] min-h-[500px] flex flex-col items-center justify-center p-[50px] shadow-[-2rem_0_3rem_-2rem_#F9F6EE]  rounded-[25px] mini-card' style={{ backgroundImage: `url(${flamestone})` }} >
        </div>
         <div className=' min-w-[33%] min-h-[500px] flex flex-col items-center justify-center p-[50px] shadow-[-2rem_0_3rem_-2rem_#F9F6EE]  rounded-[25px] mini-card' style={{ backgroundImage: `url(${aimgallery})` }} >
        </div>
          <div className=' min-w-[33%] min-h-[500px] flex flex-col items-center justify-center p-[50px] shadow-[-2rem_0_3rem_-2rem_#F9F6EE]  rounded-[25px] mini-card' style={{ backgroundImage: `url(${flamestone})` }} >
        </div>

        </div>
      
    </section>
  )
}

export default Portfolio
