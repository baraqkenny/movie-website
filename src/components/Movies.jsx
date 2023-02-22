import React from 'react';
import './Movies.css';

const Movies = ({movie, i}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  
  return (
    
     <section key={movie.i} className='movie'>
     <img src={BASE_URL + movie.poster_path} className="poster-path" loading='lazy' alt={movie.title} />
      <div className='movie-details'>
        <div className="box">
               <h3 className='title'>{movie.title}</h3>
               <h5 className='date'>{movie.release_date}</h5>
               </div>
               <div className="overview">
                <p>{movie.overview}</p>
               </div>
               </div>
      
     </section>
    
  )
}

export default Movies
