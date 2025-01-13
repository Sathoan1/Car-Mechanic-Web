import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const Services = () => {

  const {specialty} = useParams()

  const {services} = useContext(AppContext)
  console.log('services', services);
  console.log(specialty);
  


  return (
    <div>
     <div className='flex flex-col items-center gap-4 my-16 text-white md:mx-10'>
    <h1 className='text-3xl font-medium'>Services <span className='text-orange-500'>We</span> <span className='text-orange-500'>Offer</span></h1>
    <p className='sm:w-1/3 text-center text-sm'>We bring services ranging from all round Vehicle diagnostics to sourcing original spare parts and more.</p>
    <div className='w-full grid md:grid-cols-2  gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
      {services.map((item,index)=>(
    <div className='w-auto border border-orange-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
        <img className='w-full h-auto object-cover ' src={item.image} alt="" />
        <div className='p-4'>
            <p className='text-lg font-medium'>{item.speciality}</p>
        </div>
    </div>
))}
    </div>
   </div>
  </div>
  )
}

export default Services