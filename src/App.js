import React, { useState } from 'react';
import './App.css';
import MovieList from './Component/MovieList';
import {moviesData} from "./data";
import AddMovie from './Component/AddMovie';
import FilterByName from './Component/FilterByName';
import FilterByRate from "./Component/Rating"

function App() {
  const [movies,SetMovies] = useState(moviesData);
  const [inputSearch,setInputSearch] = useState("");
  const [rating, setRating] = useState(0);

  const add=(newMovie)=>{
    SetMovies ([...movies,newMovie]);
  }

  return (
    <div className="App">
      <h1>Movie App</h1>
      <AddMovie add={add}/>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterByRate rating={rating} setRating={setRating} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating}/>
    </div>
  );
}

export default App;
