import React from 'react'
import { useSelector } from 'react-redux'
import TopRated from "./TopRated"
const GPTResult = () => {
  const movies = useSelector((store)=>store.gpt.searched_movies)
  // console.log(movies[0].poster_path);
  if(!movies) return
  return (
    <div>
      <h3 className='text-white text-2xl font-bold p-2'>Results</h3>
      <div className='flex overflow-x-auto'>
        {movies?.map((data)=><TopRated key={data.id} poster={data.poster_path}/>)}
      </div>
    </div>
  )
}

export default GPTResult