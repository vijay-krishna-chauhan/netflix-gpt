import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className='fixed -z-10 '>
        <img
        className='h-screen object-cover w-screen'
          src={BG_URL}
          alt="background image"
        />
        </div>
        
        <div className=''>
        
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
        
    
  )
}

export default GPTSearch