import React from "react";
import { movies } from "../data";

function Movies() {
  let movieCard = movies.map(movie => (
    <div key={movie.title}>
      Name: {movie.title}<br/>
      Time: {movie.time}
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {movieCard}
    </div>);
}

export default Movies;