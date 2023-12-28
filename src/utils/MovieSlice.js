import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:'movie',
    initialState:{
        currentMovies:"",
        trailer:{
            title:"",
            overview:""
        },
        trailerVideo:"",
        
        nowPlaying:"",
        topRated:"",
        upcoming:"",
        popular:"",
    
        
    },
    reducers:{
        addMovies:(state,action)=>{
            state.currentMovies=action.payload
        },
        addTitle:(state,action)=>{
            state.trailer = { ...action.payload }
        },
        addVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload
        },
        addPopular:(state,action)=>{
            state.popular=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addUpcoming:(state,action)=>{
            state.upcoming=action.payload
        },
        
    }
})

export const {addMovies,addTitle,addVideo,addNowPlaying,addUpcoming,addTopRated,addPopular}=MovieSlice.actions
export default MovieSlice.reducer