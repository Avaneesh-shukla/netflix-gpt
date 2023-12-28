import { useEffect } from 'react';
import { Movie_url, options } from './constants';
import {url} from './constants'
import { useDispatch } from 'react-redux';
import { addMovies } from './MovieSlice';
const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const getMovies= async ()=>{
        const data = await fetch(Movie_url,options)
        const json = await data.json()
        dispatch(addMovies(json.results))
        console.log(json.results);
    }
    useEffect(()=>{getMovies()},[])
}

export default useNowPlayingMovies