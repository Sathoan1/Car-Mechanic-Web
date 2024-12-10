import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Services = () => {
    const navigate = useNavigate()
    const {services} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-white md:mx-10'>
                <h1 className='text-3xl font-medium'>Services <span className='text-orange-500'>We</span> <span className='text-orange-500'>Offer</span></h1>
                <p className='sm:w-1/3 text-center text-sm'>We bring services ranging from - to - , original spare parts and more.</p>
                <div className='w-full grid md:grid-cols-2  gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                  {services.slice(0,8).map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='w-auto border border-orange-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='w-full h-auto object-cover ' src={item.image} alt="" />
                    <div className='p-4'>
                        <p className='text-lg font-medium'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services