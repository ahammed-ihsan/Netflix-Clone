import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl} from '../../constants/Constants'

const RowPost = ({url,title, isSmall}) => {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(()=>{
        async function fetch(){
            const res = await axios.get(url)
            setMovies(res.data.results)
        }
        fetch()
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars:{
            autoplay:1
        }
    }

    const handleMovieClick = async (id) => {
        
            try{
                const res = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
                if(res.data.results.length!==0){
                    setUrlId(res.data.results[0])
                }else{
                    console.log('trailer not available');
                }
            }catch(err){
                console.log(err);
            }
        
        
    }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
        <img onClick={()=>handleMovieClick(obj.id)} className={isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        )}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
