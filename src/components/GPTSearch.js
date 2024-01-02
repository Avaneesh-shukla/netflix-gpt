import React, { useRef } from 'react'
import Header from './Header'
import useSearchMovies from '../utils/useSearchMovies'
const GPTSearch = () => {
  const searchMovie = useRef()
  const getMovies=useSearchMovies()
  const handleClick = ()=>{
    // console.log(searchMovie.current.value);
    getMovies(searchMovie.current.value)
  }
  return (
    <div className=' text-center'>
        <input ref={searchMovie} className='w-4/12 border border-black p-2 m-2 mx-1 bg-slate-300  rounded-l-full' type='text' placeholder="What's in your mind" />
        <button className='w-2/12 bg-red-800 p-2 text-white rounded-r-full' onClick={handleClick}>Search</button>
    </div>
  )
}

export default GPTSearch