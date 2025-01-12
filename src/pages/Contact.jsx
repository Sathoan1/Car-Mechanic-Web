import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-white'>
        <p>CONTACT <span className='font-semibold text-orange-500'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] h-full' src={assets.contact_img} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-orange-500'>OUR OFFICE</p>
          <p className='text-gray-400'>Mayfair gardens Lakowe <br /> Ibeju-Lekki Lagos</p>
          <p className='text-gray-400'>Tel: (+234) 70- 111-2233 <br /> Email: sathoanoamen@gmail.com </p>
          <p className='font-semibold text-lg text-orange-500'>Engineers at Fixes</p>
          <p className='text-gray-400'>Learn more bout our team and job openings</p>

          <button className='text-white border border-orange-500 px-8 py-4 text-sm hover:bg-orange-200 hover:text-orange-500 transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact