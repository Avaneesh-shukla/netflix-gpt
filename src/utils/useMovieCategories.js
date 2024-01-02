import { useDispatch } from "react-redux"
import { PopularURL, TopRatedURL, UpcomingURL, nowPlayingURL, options } from "./constants"
import { addNowPlaying, addPopular, addTopRated, addUpcoming } from "./MovieSlice"
import { useEffect } from "react"
const useMovieCategories = ()=> {

    const disaptch = useDispatch()

    // Fetching All Categories

    // Now Playing
    const getNowPlaying = async ()=>{
        const data = await fetch(nowPlayingURL,options)
        const json = await data.json()
        // console.log("now-Playing - ",json.results);
        disaptch(addNowPlaying(json.results))
    }

    // Toprated
    const getTopRated = async ()=>{
        const data = await fetch(TopRatedURL,options)
        const json = await data.json()
        // console.log("Toprated - ",json.results);
        disaptch(addTopRated(json.results))
    }

    // Popular
    const getPopular = async ()=>{
        const data = await fetch(PopularURL,options)
        const json = await data.json()
        // console.log("Popular - ",json.results);
        disaptch(addPopular(json.results))
    }

    // Upcoming
    const getUpcoming = async ()=>{
        const data = await fetch(UpcomingURL,options)
        const json = await data.json()
        // console.log("Upcoming - ",json.results);
        disaptch(addUpcoming(json.results))
    }

    // Calling all the fetch functions 
    useEffect(()=>{
        getNowPlaying()
        getPopular()
        getTopRated()
        getUpcoming()
    },[])
}

export default useMovieCategories