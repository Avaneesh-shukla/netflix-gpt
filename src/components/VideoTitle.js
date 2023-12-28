import React from 'react'
import useTitle from '../utils/useTitle'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
    useTitle()
    const title=useSelector((store)=>store.movie)
    console.log(title.trailer);
    const name=title.trailer.title
    const desc=title.trailer.overview
  return (
    <div className='w-4/12 text-left mt-64 mx-12'>
        <h3 className='font-bold text-3xl'>{name}</h3>
        <h4 className='my-4'>{desc}</h4>
    </div>

  )
}

export default VideoTitle