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
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTVSeries:(state,action)=>{
            state.tvSeries=action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailerVideo=action.payload;
        },
        addAiringTodaySeries: (state, action)=>{
            state.airingTodaySeries=action.payload;
        },
    },
});

export const {addNowPlayingMovies}=moviesSlice.actions;
export const {addPopularMovies}=moviesSlice.actions;
export const {addUpcomingMovies}=moviesSlice.actions;
export const {addTVSeries}=moviesSlice.actions;
export const {addTrailerVideo}=moviesSlice.actions;
export const {addAiringTodaySeries}=moviesSlice.actions;

export default moviesSlice.reducer;