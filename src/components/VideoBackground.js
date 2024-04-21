// import React, { useEffect } from 'react'
// import { API_OPTIONS } from '../utils/constants';

// const VideoBackground = ({movieId}) => {
//     const getMovieVideos=async()=>{
//         const data=await fetch('https://netflix54.p.rapidapi.com/title/trailers/?id=80057281&offset=0&limit=25&lang=en', API_OPTIONS);
//         const json=await data.json();
//         const result=json;
//         const trailer=result[0].details;
//         console.log(json);
//         console.log(trailer);

//     }

//     useEffect(()=>{
//         getMovieVideos();
//     })
//   return (
//     <div>VideoBackground</div>
//   )
// }

// export default VideoBackground


import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    useMovieTrailer(movieId);
  return (
    <div>
      {/* {trailer && (
                <div>
                    <h2>Trailer: {trailer.name}</h2>
                    <video controls>
                        <source src={trailer.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )} */}
      <iframe
        className="w-screen aspect-video"
        
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="Dune: Part Two | Official Trailer 3"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
