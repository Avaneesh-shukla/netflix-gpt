import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MovieSlice from "./MovieSlice";

const appStore=configureStore({
    reducer:{
        user:UserSlice,
        movie:MovieSlice
    }
})
export default appStore