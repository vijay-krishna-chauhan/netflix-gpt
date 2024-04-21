import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movie trailers");
    }
    const data = await response.json();

    const filterData = data.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    //console.log(trailer);
    // const result = data?.trailers?.[0]?.details;

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
