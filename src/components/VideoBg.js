import React from 'react';
import useTitle from '../utils/useTitle';
import { trailer_video } from '../utils/constants';
import { useSelector } from 'react-redux';

const VideoBg = () => {
  useTitle();
  const id = useSelector((store) => store.movie.trailerVideo);
  // console.log(id);

  return (
    <div className='aspect-video'>
      <iframe
        className='w-screen h-screen object-cover'
        src={`${trailer_video}${id}?autoplay=1&mute=1&loop=1&controls=0`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
