import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MovieSlice from "./MovieSlice";
import gptSlice from "../utils/GPTSlice"
const appStore=configureStore({
    reducer:{
        user:UserSlice,
        movie:MovieSlice,
        gpt:gptSlice
    }
})
export default appStore