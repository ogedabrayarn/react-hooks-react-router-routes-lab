import React from "react";
import { directors } from "../data";

function Directors() {
  let directorsCards = directors.map(director => (
    <div key={director.name}>
      Name: {director.name}
      Movies:
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsCards}
    </div>);
}

export default Directors;
