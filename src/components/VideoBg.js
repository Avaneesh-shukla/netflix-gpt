import React, { useEffect, useRef } from 'react';
import useTitle from '../utils/useTitle';
import { trailer_video } from '../utils/constants';
import { useSelector } from 'react-redux';

const VideoBg = () => {
  useTitle();
  const id = useSelector((store) => store.movie.trailerVideo);
  // console.log(id);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      const player = playerRef.current;

      const onPlayerStateChange = (event) => {
        // Check if the video has ended
        if (event.data === window.YT.PlayerState.ENDED) {
          // Restart the video
          player.seekTo(0);
          player.playVideo();
        }
      };

      // Set up event listener for state changes
      player.addEventListener('onStateChange', onPlayerStateChange);

      return () => {
        // Clean up the event listener on component unmount
        player.removeEventListener('onStateChange', onPlayerStateChange);
      };
    }
  }, [id]);
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        className='w-screen top-0 h-screen'
        src={`${trailer_video}${id}?autoplay=1&mute=1&controls=0&enablejsapi=1&modestbranding=1&rel=0&showinfo=0&loop=1`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
