import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className='relative'>
      {/* Header */}
      <div className='absolute z-30 top-0 left-0 right-0'>
        <Header />
      </div>

      {/* VideoTitle and VideoBg */}
      <div className='absolute z-20 flex flex-col text-white bg-gradient-to-r from-black w-screen h-screen opacity-70'>
        <VideoTitle />
      </div>
      <div className='absolute top-0 left-0 right-0'>
        <VideoBg />
      </div>
    </div>
  );
};

export default Browse;
