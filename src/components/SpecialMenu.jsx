import React from 'react'
import { specialData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const SpecialMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-white' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by <span className='text-orange-500'>Speciality</span></h1>
        <p className='sm:w-1/3 text-center text-sm'>Browse Through our extensive list of engineers</p>
        <div className='flex sm:justify-center gap-8 pt-5 w-full overflow-scroll'>
            {specialData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/engineers/${item.specialty}`}>
                    <img className='w-16 h-16 sm:w-24 sm:h-24 mb-2 rounded-full' src={item.image} alt="" />
                    <p>{item.specialty}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialMenu