import { useState } from 'react';
import Movies from './components/Movies';
import './App.css';


function App() {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);
 

  const API_KEY = "38fd0af9a364e45ff656fb0cb0a08c80";
 
  //Fetch Movie Data
  const movieData = async () => {
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setMovies(data.results);
    })
  }


  const handleClick = (e)=>{
    e.preventDefault();
    if(text !== ""){
      movieData();
    }
  }

 

  return (
    <header className='app'>
      <nav>
        <h1>MOVIES</h1>
        <ul>
          <li>Genre</li>
          <li>Release Date</li>
        </ul>
      </nav>
      <main>
            <input 
            type="text" 
            placeholder='Search movie'
            onChange={(e)=> setText(e.target.value)}
            />
            <button onClick={handleClick} className='btn'><ion-icon name="search" ></ion-icon></button>
            <div className='movie-info'>
            {movies.map((movie, i)=> (
              <div key={i} className='container'>
                <Movies movie={movie} />   
              </div>
              
            ))}

            </div>
        
          </main>
    </header>
  )
}

export default App

