import React from 'react'
import { CATEGORY_IMAGE } from '../utils/constants'

const TopRated = (props) => {
  return (
    <img className="w-32 m-2" src={CATEGORY_IMAGE+props.poster}/>
      )
}

export default TopRated