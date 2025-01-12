import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const [showMenu, setShowMenu]= useState(false)
    const [token, setToken]= useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-white'>
        <img onClick={()=>navigate('/')} className='w-10 rounded-full sm:w-20 h-20 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium '>
            <NavLink to='/'>
                <li className='py-1 text-white'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-orange-500 hidden'/>
            </NavLink>
            <NavLink to='/engineers'>
                <li className='py-1 text-white'>ENGINEERS</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-orange-500 hidden'/>
            </NavLink>
            <NavLink to='/service'>
                <li className='py-1 text-white'>SERVICES</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-orange-500 hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1 text-white'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-orange-500 hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1 text-white'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-orange-500 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relativea'>
                    <img className='w-8 rounded-full' src={assets.profile} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-gray-700 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer bg-inherit'>My Profile</p>
                            <p onClick={()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer bg-inherit'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer bg-inherit'>Logout</p>
                        </div>
                    </div>
                </div>
                : <button onClick={()=>navigate('/login')} className='bg-orange-600 text-black px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
            }

            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/* mobile menu */}
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden text-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-10 rounded-full sm:w-20 h-20 cursor-pointer' src={assets.logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  to='/' onClick={()=>setShowMenu(false)}> <p className='px-4 py-2 rounded inline-block'>Home</p> </NavLink>
                    <NavLink  to='/engineers' onClick={()=>setShowMenu(false)}> <p className='px-4 py-2 rounded inline-block'>ENGINEERS</p> </NavLink>
                    <NavLink  to='/about' onClick={()=>setShowMenu(false)}> <p className='px-4 py-2 rounded inline-block'>ABOUT</p> </NavLink>
                    <NavLink  to='/contact' onClick={()=>setShowMenu(false)}> <p className='px-4 py-2 rounded inline-block'>CONTACT</p> </NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar