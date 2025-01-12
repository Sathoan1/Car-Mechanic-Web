import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopEngineers = () => {
    const navigate = useNavigate()
    const {engineers} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-white md:mx-10'>
        <h1 className='text-3xl font-medium'>Top <span className='text-orange-500'>Engineers</span> To <span className='text-orange-500'>Book</span></h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse  through our extensive list of trusted engineers.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {engineers.slice(0,8).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='w-auto border border-orange-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='w-full h-52  object-cover bg-orange-200 ' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
                        </div>
                        <p className='text-lg font-medium'>{item.name}</p>
                        <p className='text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
            {/* sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  */}
        </div>
        <button onClick={()=> {navigate('/engineers'); scrollTo(0,0)}} className='bg-orange-500 px-12 py-2 rounded-full mt-16'>More Engineers</button>
    </div>
  )
}

export default TopEngineers