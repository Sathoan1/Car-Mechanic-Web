import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl mt-10 text-white'>
      <p>ABOUT <span className='text-orange-500 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full h-full md:max-w-[400px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-4 md:w-2/4 text-white'>
          <p>At Fixes, we are more than just a car repair service, we’re your trusted partner for all your automotive needs. We understand the challenges car owners face in Nigeria, from unreliable engineers to counterfeit spare parts and bad engine oil. That’s why we’ve built our business around transparency, quality, and expertise.</p>

          <p>Our team of certified engineers specializes in tire changes, oil maintenance, engine diagnostics, and genuine spare parts replacements. Each engineer brings a unique specialty and years of experience, ensuring your car gets the care it deserves.</p>

          <p>We’re committed to providing solutions you can trust, keeping your vehicle safe, efficient, and reliable for the road ahead. At Fixes, your satisfaction and safety drive everything we do.</p>

          <b className='text-orange-200'>Our Vision</b>
          <p>We aim to redefine automotive care in Nigeria by delivering trusted, high-quality services and empowering car owners with transparency, reliability, and innovation.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p className='text-white'>MAKE US <span className='text-orange-500 font-semibold'>YOUR FIRST</span> CHOICE</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 text-white'>
        <div className='border border-orange-500 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-orange-500 hover:bg-orange-200 cursor-pointer transition-all duration-300'>
          <b className='bg-inherit uppercase'>Genuine Solutions:</b>
          <p className='bg-inherit italic'>We only use certified spare parts and premium-grade engine oil, ensuring quality and longevity for your vehicle. Say goodbye to fake products and substandard services.</p>
        </div>

        <div className='border border-orange-500 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-orange-500 hover:bg-orange-200 cursor-pointer transition-all duration-300'>
        <b className='bg-inherit uppercase'>Trusted Expertise:</b>
        <p className='bg-inherit italic'>Our team of certified engineers is skilled, experienced, and committed to delivering honest and reliable repairs. We tackle complex problems with precision and care, so you can trust your car is in good hands.</p>
        </div>

        <div className='border border-orange-500 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:text-orange-500 hover:bg-orange-200 cursor-pointer transition-all duration-300'>
          <b className='bg-inherit uppercase'>Customer-Centric Care:</b>
          <p className='bg-inherit italic'>Your satisfaction and safety are our top priorities. From transparent pricing to professional advice, we’re here to ensure your experience is seamless, stress-free, and trustworthy.</p>
        </div>
      </div>
    </div>
  )
}

export default About