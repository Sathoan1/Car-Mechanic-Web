import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import '../../src/index.css'
// import a from '../assets/assets_frontend'

const Header = () => {
  return (
    <div className=''>
        <div className='relative ' >
            <div className='background w-70 opacity-55 h-screen flex flex-col  justify-center items-start rounded-lg md:px-10 lg:px-20' >

            <div className=' absolute bg-inherit z-10 text-white p-8  flex flex-col items-start py-10 md:py-[10vw] md:mb-[-30px] gap-4 m-auto'>
                <p className='text-3xl font-bold bg-transparent md:text-4xl lg:text-5xl leading-tight  md:leading-tight'>Reliable <span className='bg-transparent text-orange-500'>Car Repairs,</span> Trusted Engineers</p>
                <p className='text-sm sm:text-lg bg-inherit  text-white md:font-bold'>Finding a <span className='bg-transparent sm:text-orange-500 font-bold'>trustworthy mechanic</span> just got easier. <br />We connect you to certified specialists for tire changes, engine servicing,<br /> and more—no more worries about fake spare parts or low-quality oil.</p>

                <a className='flex items-center gap-2 bg-orange-500 font-bold px-8 py-3 rounded-lg text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">Book Us <img className='w-3 bg-transparent' src={assets.arrow_icon} alt="" /></a>
            </div>
            
            </div>
          

           
        </div>
    </div>
  )
}

export default Header