import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailerVideo=action.payload;
        },
    },
});

export const {addNowPlayingMovies}=moviesSlice.actions;
export const {addPopularMovies}=moviesSlice.actions;
export const {addTrailerVideo}=moviesSlice.actions;

export default moviesSlice.reducer;