import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name:'movie',
    initialState:{
        currentMovies:"",
        trailer:{
            title:"",
            overview:""
        },
        trailerVideo:""
        
    },
    reducers:{
        addMovies:(state,action)=>{
            state.currentMovies=action.payload
        },
        addTitle:(state,action)=>{
            state.trailer = { ...action.payload }        },
        addVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        
    }
})

export const {addMovies,addTitle,addVideo}=MovieSlice.actions
export default MovieSlice.reducer