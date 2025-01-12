import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* --------left section------ */}
            <div>
               <img className='w-20 rounded-full h-20 cursor-pointer mb-5' src= {assets.logo} />
               <p className='w-full md:w-2/3 text-gray-300 leading-6'> <b className='text-orange-500'>Stay Connected! </b>
               We’re here to keep your car running and your mind at ease. Contact us today for reliable service you can trust.</p>
            </div>
            {/* --------center section------ */}
            <div>
                <p className='text-xl font-medium mb-5 text-orange-500'>COMPANY</p>
                <ul className='flex flex-col gap-4 text-gray-300'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* --------right section------ */}
            <div>
                <p className='text-xl font-medium mb-5 text-orange-500'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-4 text-gray-300'>
                    <li>+234 8080 808</li>
                    <li>sathoanoamen@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* ------------------copyright text------ */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-orange-500'>© Fixes, 2025. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer