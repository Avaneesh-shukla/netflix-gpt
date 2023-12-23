import React from 'react'
import { netflix_logo } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute z-50 w-screen bg-gradient-to-b from-slate-800'>
      <img className='w-56 py-4 px-4 ' src={netflix_logo}/>
    </div>
  )
}

export default Header