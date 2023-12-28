import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, addVideo } from "./MovieSlice";
import { options, trailer_url } from "./constants";

const useTitle = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movie);
  const url_t=trailer_url+"695721/videos"
  const getVideo= async ()=>{
    const data = await fetch(url_t,options)
    const json = await data.json()
    const trailer_video= json.results?.filter((data)=>data.type==="Trailer")
    dispatch(addVideo(trailer_video[0].key))

    // console.log(trailer_video[0].key);

  }
  useEffect(() => {
    // Ensure that movies.currentMovies is not null or undefined
    if (movies?.currentMovies && movies.currentMovies.length > 0) {
      // console.log(movies.currentMovies[0], movies.currentMovies[0].overview);

      const titlePayload = {
        title: movies.currentMovies[0].title,
        overview: movies.currentMovies[0].overview,
      
      }
      // const trailer=movies?.currentMovies.filter((tra)=>);
      dispatch(addTitle(titlePayload));
    }
    getVideo()
  }, [dispatch, movies.currentMovies]);
};

export default useTitle;
