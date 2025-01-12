import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [name,setName]= useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }


  return (
    <form className='min-h-[80vh] flex items-center' >
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-orange-200 rounded-xl text-gray-400 text-sm shadow-lg hover:border-orange-500'>
        <p className='text-2xl font-semibold text-orange-500'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>{state === 'Sign Up' ? 'Create Account' : 'log in'} to book an appointment</p>
        {
          state === 'Sign Up' &&  
        <div className='w-full'>
          <p>Fullname</p>
          <input className='border border-orange-200 hover:border-orange-500 rounded w-full p-2 mt-1 outline-none' type="text" onChange={(e)=>setName(e.target.value)} value={name}  required/>
        </div>
        }
       
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-orange-200 hover:border-orange-500 rounded w-full p-2 mt-1 outline-none' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-orange-200 hover:border-orange-500 rounded w-full p-2 mt-1 outline-none' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        </div>
        <button className='bg-orange-500 text-gray-300 w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create Account' : 'log in'}</button>
        {
          state === 'Sign Up'
          ? <p>Already have an account? <span className='text-orange-500 underline cursor-pointer' onClick={()=>setState('Login')}>Login here</span></p>
          : <p>Create a new account? <span className='text-orange-500 underline cursor-pointer' onClick={()=>setState('Sign Up')}>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login