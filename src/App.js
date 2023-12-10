import './App.css';
import movies from "./movies";
import { Fragment } from 'react';
import { MoviePreview } from './MoviePreview';
import {useState} from 'react';

function App() {
  const [currentMovie, setCurrentMovie] = useState(null)
  
  return (
    <div class="moviePreview">
      <p class="title">My Movie App</p>

      <div className="movieContainer">
      {
          movies.map((_movie, index) => {

            return (
              <MoviePreview 
                movie={_movie} 
                key={_movie.title} 
                onClick={() => setCurrentMovie(_movie)}
              />
            )
          })
      }
      </div>

        <div class="movieSelection">
          <p>Current Movie:</p>

          {
            currentMovie ?
              <>
                <p>{currentMovie.title}</p>
                <p>{currentMovie.director}</p>
                <p>{currentMovie.rating}</p>
                <img src={currentMovie.posterUrl} width={'200px'} class="rotate" alt={""} />
                <p>Hover over image for effect</p>
                <p><button onClick={() => setCurrentMovie(null)}>Clear Movie</button></p>
              </>
              :
              <p>No selection</p>
          }
          
        </div>

    </div>
  );
}

export default App;
