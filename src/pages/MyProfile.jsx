import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userData, setUserData]= useState({
     name: 'Sathoan Oamen',
     image: assets.profile,
     email: 'sathoanoamen@gmail.com',
     phone: '+234 702 323 2323',
     address:{
      line1: '10a Adelaja Street',
      line2: 'Off Emmanuel Keshi Magodo Phase2, Lagos'
     },
     gender: 'Male',
     dob: '2-2-2002'
  })

  const [isEdit, setIsEdit]= useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit
        ? <input className='bg-gray-600 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev =>({...prev,name:e.target.value}))}/>
        : <p className='font-medium text-3xl text-gray-400 mt-4'>{userData.name}</p>
      }

      <hr className='h-[1px] border-none bg-zinc-400'/>
      <div>
        <p className='text-neutral-400 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-500'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit
        ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev =>({...prev,phone:e.target.value}))}/>
        : <p className='text-blue-400'>{userData.phone}</p>
      }
      <p className='font-medium'>Address:</p>
      {
        isEdit
        ? <p>
          <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev.address, line1:e.target.value}))} value={userData.address.line1} type="text" /> <br />
          <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev.address, line2:e.target.value}))} value={userData.address.line2} type="text" />
        </p>
        : <p className='text-gray-500'>
          {userData.address.line1}
          <br />
          {userData.address.line2}
        </p>
      }
        </div>
      </div>

      <div>
        <p className='text-neutral-400 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-500'>
          <p className='font-medium'>Gender</p>
          {
        isEdit
        ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        : <p className='text-gray-400'>{userData.gender}</p>
      }

      <p className='font-medium'>Birthday</p>
      {
        isEdit 
        ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({...prev, dob:e.target.value}))} value={userData.dob}/>
        : <p className='text-gray-400'>{userData.dob}</p>
      }
        </div>
      </div>

      <div className='mt-10'>
       {
         isEdit
         ? <button className='border border-orange-200 px-8 py-2 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300' onClick={()=>setIsEdit(false)}>Save Info</button>
         : <button className='border border-orange-200 px-8 py-2 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300' onClick={()=>setIsEdit(true)}>Edit</button>
       }
      </div>

    </div>
  )
}

export default MyProfile