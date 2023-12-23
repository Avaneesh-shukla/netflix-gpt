import React from 'react'
import { netflix_logo } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute z-50'>
      <img className='w-56 py-4 px-4 bg-gradient-to-b from-slate-800' src={netflix_logo}/>
    </div>
  )
}

export default Header