import React from 'react'
import useMovieCategories from '../utils/useMovieCategories'
import NowPlaying from './NowPlaying'
import Popular from './Popular'
import TopRated from './TopRated'
import Upcoming from './Upcoming'
import { useSelector } from 'react-redux'
const SecondaryComponent = () => {
    useMovieCategories()
    const nowPlaying = useSelector((store)=>store.movie.nowPlaying)
    const topRated = useSelector((store)=>store.movie.topRated)
    const popular = useSelector((store)=>store.movie.popular)
    const upcoming = useSelector((store)=>store.movie.upcoming)

    // console.log(nowPlaying,topRated,popular,upcoming);
  if(!nowPlaying || !popular || !topRated || !upcoming) return
  return (
    <div className='bg-black'>
        <div className='relative -m-32 z-40 mx-1'>
            <h4 className='px-3 py-1 text-white text-2xl'>Popular</h4>
            <div className="flex overflow-x-auto p-2">
            {popular.map((data)=><Popular key={data.id} poster={data.poster_path}/>)}
            </div>
        </div>

        <div className='mt-32 text-white'>
          

          <h4 className='px-3 py-1 text-2xl'>Upcoming</h4>
          <div className="flex overflow-x-auto p-2">
          {upcoming.map((data)=><Upcoming key={data.id} poster={data.poster_path}/>)}
          </div>

          <h4 className='px-3 py-1 text-2xl'>TopRated</h4>
          <div className="flex overflow-x-auto p-2">
          {topRated.map((data)=><TopRated key={data.id} poster={data.poster_path}/>)}
          </div>

          <h4 className='px-3 py-1 text-2xl'>Now Playing</h4>
          <div className="flex overflow-x-auto p-2">
          {nowPlaying.map((data)=><NowPlaying key={data.id} poster={data.poster_path}/>)}
          </div>
        </div>
    </div>
    
    
  )
}

export default SecondaryComponent