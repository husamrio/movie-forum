import Moviecard from "./Moviecard";
import "./Movie.css";
import { useEffect, useState } from "react";

// FETCH FROM EXTERNAL API
// const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";


// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

function Movielist() {
  const [movies, setMovies] = useState([]);

  //FETCH FROM LOCAL SERVER
  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(setMovies)
  }, []);

  // FETCH FROM EXTERNAL API
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // }, []);

  return (
    <div className="main">
      {movies.length > 0 && movies.map((movie) => (
        <Moviecard key={movie.id} {...movie}/>
      ))}
    </div>
  );
}

export default Movielist;