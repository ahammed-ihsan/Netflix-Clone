import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl} from '../../constants/Constants'

const Banner = () => {
    
    const [movie, setMovie] = useState([])
    useEffect(()=>{
    async function fetch(){
        try{
            const res = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
            setMovie(res.data.results[Math.floor(Math.random() *res.data.results.length)])   
        }catch(err){
            console.log('banner',err);
        }
    
    }
    fetch()
    },[])
    
  return (
    <div 
    style={{backgroundImage:`url(${ movie ? imageUrl + movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='content'>
        <h1 className="title">{movie ? movie.title :""}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
