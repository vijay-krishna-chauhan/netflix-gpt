

import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from "react-redux";
import { addTVSeries } from '../utils/moviesSlice';

const useTVSeries=()=>{

    const dispatch=useDispatch();
    const getTVSeries = async () => {

        
      
  
      const data = await fetch(
       "https://api.themoviedb.org/3/tv/popular?page=1",
       API_OPTIONS
     //"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",


        //options
      );
      const json = await data.json();
      //console.log(json.results);  
      dispatch(addTVSeries(json.results));
    };
  
    useEffect(() => {
      getTVSeries();
    }, []);
  }

  export default useTVSeries;
 