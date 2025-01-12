import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {

    const {engineers} = useContext(AppContext)
  return (
    <div className='text-white'>
        <p className='pb-3 mt-12 font-medium text-orange-500 border-b border-gray-600'>MyAppointment</p>
        <div>
            {
                engineers.slice(0,3).map((item,index)=>(
                    <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-600' key={index}>
                        <div>
                        <img className='w-32 bg-orange-200' src={item.image} alt="" />
                        </div>

                        <div className='flex-1 text-sm text-zinc-400'>
                            <p className='text-neutral-200 font-semibold'>{item.name}</p>
                            <p className='text-zinc-400 font-medium mt-1'>{item.speciality}</p>
                            <p className='text-sm mt'><span className='text-sm text-neutral-200 font-medium'>Date & Time:</span> 5th January, 2025</p>
                        </div>
                        <div></div>
                        <div className='flex flex-col gap-2 justify-end'>
                            <button className='text-sm text-orange-500 text-center sm:min-w-48 py-2 border rounded hover:bg-orange-500 hover:text-white transition-all duration-300'>Pay Online</button>
                            <button className='text-sm text-orange-500 text-center sm:min-w-48 py-2 border rounded hover:bg-orange-500 hover:text-white transition-all duration-300'>Cancel Appointment</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MyAppointment