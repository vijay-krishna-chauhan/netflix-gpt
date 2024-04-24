
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
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
