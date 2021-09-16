import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => {
          return <div>
            <h1>{movie.title}</h1>
            <small>Time: {movie.time}</small>
            <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
