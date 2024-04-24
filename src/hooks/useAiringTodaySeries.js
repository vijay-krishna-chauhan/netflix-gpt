

import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from "react-redux";
import { addAiringTodaySeries } from '../utils/moviesSlice';

const useAiringTodaySeries=()=>{

    const dispatch=useDispatch();
    const getAiringTodaySeries = async () => {

       
  
      const data = await fetch(
       "https://api.themoviedb.org/3/tv/airing_today?page=1",
       API_OPTIONS
     //"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",


        //options
      );
      const json = await data.json();
      //console.log(json.results);  
      dispatch(addAiringTodaySeries(json.results));
    };
  
    useEffect(() => {
      getAiringTodaySeries();
    }, []);
  }

  export default useAiringTodaySeries;
 