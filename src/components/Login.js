import React, { useState } from 'react'
import Header from './Header'
import { header_img, netflix_logo } from '../utils/constants'
const Login = () => {
    const [signinToggle,setSigninToggle]=useState(true)
    const sign=()=>{
        setSigninToggle(!signinToggle)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={header_img}/>
        </div>
        <form className='absolute bg-black bg-opacity-70 w-3/12 mx-auto left-0 right-0 my-36 p-10 test-white'>
            <h3 className='text-white text-3xl'>{signinToggle?'Sign In':'Sign Up'}</h3>
            {
                !signinToggle&&<input type='text' placeholder='Full Name' className='w-full p-2 my-4 bg-slate-700'/>
            }
            <input type='text' placeholder='Email Address' className='w-full p-2 my-4 bg-slate-700'/>
            <input type='password' placeholder='Password' className='w-full p-2 my-4 bg-slate-700'/>
            <button className='w-full bg-red-600 p-2 my-6'>{signinToggle?'Sign In':'Sign Up'}</button>
            <p onClick={sign} className='text-white cursor-pointer'>{signinToggle?"Not yet Registered? Sign Up now":"Already Registered? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login