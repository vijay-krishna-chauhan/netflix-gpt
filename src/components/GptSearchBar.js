import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const dispatch=useDispatch();
  const searchMovieTMDB= async (movie)=>{
    const data=await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+
        movie +
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
    )
    const json=await data.json();
    return json.results;
  }
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation System and for the queryand suggest some movie for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar, Parasite, Don, The banker, Jawan";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices){
        //TODO: Write Error Handling
    }
    console.log(gptResults.choices);

    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie)); 

    const tmdbResults=await Promise.all(promiseArray);

    dispatch(addGptMovies({movieNames: gptMovies, movieResults: tmdbResults}));
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full bg-black md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className=" p-4 m-4 col-span-9"
          placeholder="What would you want to watch today?"
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
