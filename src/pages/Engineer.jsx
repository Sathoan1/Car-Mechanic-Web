import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Engineer = () => {

  const {specialty} = useParams()
  const [filterEngr, setFilterEngr]= useState([])
  const [showFilter, setShowFilter]= useState(false)
  const navigate = useNavigate()

  const {engineers} = useContext(AppContext)

  const applyFilter = () => {
     if (specialty) {
      setFilterEngr(engineers.filter(engr => engr.speciality ===specialty))
     } else{
      setFilterEngr(engineers)
     }
  }

  useEffect(()=> {
    applyFilter()
  },[engineers,specialty])

  return (
    <div>
      <p className='text-white'>Browse through our engineer list with different speciality.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

      <button className={`py-1 px-3 border border-orange-500 text-white rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-orange-500 text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>

        <div className={`flex-col gap-4 text-sm text-gray-200 ${showFilter ? 'flex': 'hidden sm:flex'}`} >
          <p onClick={()=> specialty === 'Engine Diagnostics' ? navigate('/engineers') : navigate('/engineers/Engine Diagnostics')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-orange-500 rounded transition-all cursor-pointer ${specialty === 'Engine Diagnostics' ? 'bg-orange-500 text-black' : ''}`}>Engine Diagnostics</p>
          <p onClick={()=> specialty === 'Tire Services' ? navigate('/engineers') : navigate('/engineers/Tire Services')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-orange-500 rounded transition-all cursor-pointer ${specialty === 'Tire Services' ? 'bg-orange-500 text-black' : ''}`}>Tire Services</p>
          <p onClick={()=> specialty === 'Lubrication Services' ? navigate('/engineers') : navigate('/engineers/Lubrication Services')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-orange-500 rounded transition-all cursor-pointer ${specialty === 'Lubrication Services' ? 'bg-orange-500 text-black' : ''}`}>Lubrication Services</p>
          <p onClick={()=> specialty === 'Brake Inspection' ? navigate('/engineers') : navigate('/engineers/Brake Inspection')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-orange-500 rounded transition-all cursor-pointer ${specialty === 'Brake Inspection' ? 'bg-orange-500 text-black' : ''}`}>Brake Inspection</p>
          <p onClick={()=> specialty === 'Spare Parts Replacements' ? navigate('/engineers') : navigate('/engineers/Spare Parts Replacements')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-orange-500 rounded transition-all cursor-pointer ${specialty === 'Spare Parts Replacements' ? 'bg-orange-500 text-black' : ''}`}>Spare Parts Replacements</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6 text-white'>
          {
           filterEngr.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='w-auto border border-orange-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='w-full h-52  object-cover bg-orange-200 ' src={item.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
                    </div>
                    <p className='text-lg font-medium'>{item.name}</p>
                    <p className='text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))
          }
        </div>
      </div>
    </div>
  )
}

export default Engineer