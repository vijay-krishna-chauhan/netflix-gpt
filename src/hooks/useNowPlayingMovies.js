import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from "react-redux";
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
  const getNowPlayingMovies = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    //   API_OPTIONS
    // );
    // const json = await data.json();
    // console.log(json);
    //dispatch(addNowPlayingMovies(json.results));


    const data = await fetch(
      // "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
     "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);  
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;