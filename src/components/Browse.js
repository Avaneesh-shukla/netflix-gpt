import React from 'react'
import PrimaryComponent from './PrimaryComponent'
import useMovieCategories from '../utils/useMovieCategories'
import SecondaryComponent from './SecondaryComponent'
import Header from './Header'
import GPTPage from './GPTPage'
import { useDispatch, useSelector } from 'react-redux'
import useSearchMovies from '../utils/useSearchMovies'

const Browse = () => {
  const {isGpt} = useSelector((store)=>store.gpt)
  // console.log(isGpt);
  useMovieCategories()
  useSearchMovies()
  if(isGpt) return <GPTPage/>
  return (
    <div>
      
      <div>
        <PrimaryComponent/>
      </div>
      <div >
        <SecondaryComponent/>
      </div>
    </div>
  )
}

export default Browse