import React from 'react'
import PrimaryComponent from './PrimaryComponent'
import useMovieCategories from '../utils/useMovieCategories'
import SecondaryComponent from './SecondaryComponent'

const Browse = () => {
  useMovieCategories()
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