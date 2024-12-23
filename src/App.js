import React, { useState } from 'react';
import './App.css';
import MovieList from './Component/MovieList';
import {moviesData} from "./data";
import AddMovie from './Component/AddMovie';

function App() {
  const [movies,SetMovies] = useState(moviesData);
  const add=(newMovie)=>{
    SetMovies ([...movies,newMovie]);
  }

  return (
    <div className="App">
      <h1>Movie App</h1>
      <AddMovie add={add}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
