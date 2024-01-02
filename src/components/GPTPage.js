import React from 'react'
import GPTSearch from './GPTSearch'
import Header from './Header'
import GPTResult from './GPTResult'

const GPTPage = () => {
  return (
    <div className='bg-black w-screen h-screen'>
        <Header/>
        <GPTSearch/>
        <GPTResult/>
    </div>
  )
}

export default GPTPage