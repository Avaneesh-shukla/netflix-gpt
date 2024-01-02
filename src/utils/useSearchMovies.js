import { useEffect } from "react";
import { Search_URL, options } from "./constants";
import { useDispatch } from "react-redux";
import { addSearch } from "./GPTSlice";

const useSearchMovies = (props)=>{
    const dispatch = useDispatch()
    const getMovies = async (datas)=>{
        const data = await fetch(Search_URL+datas+"&page=1",options)
        const json = await data.json()
        // console.log(json.results);
        dispatch(addSearch(json.results))
    }
    useEffect(()=>{
    
    },[])
    return getMovies
}

export default useSearchMovies