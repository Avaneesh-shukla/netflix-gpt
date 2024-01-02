import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        isGpt:false,
        searched_movies:""
    },
    reducers:{
        toggleGPT:(state)=>{
            state.isGpt=!state.isGpt
        },
        addSearch:(state,action)=>{
            state.searched_movies=action.payload
        }
    }

})

export const {toggleGPT,addSearch}  = gptSlice.actions
export default gptSlice.reducer