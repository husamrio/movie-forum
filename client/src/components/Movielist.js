import Moviecard from "./Moviecard";
import "./Movie.css";
import { useEffect, useState } from "react";


// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

function Movielist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    fetch("/movies")
      .then((res) => res.json())
      .then(setMovies)

  }, []);
  

  return (
    <div className="main">
      { movies.map((m) =>  ( <Moviecard key={m.id} props = {m} />)) }
    </div>
  );
}

export default Movielist;