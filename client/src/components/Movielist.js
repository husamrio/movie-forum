import Moviecard from "./Moviecard";
import "./Movie.css";
import { useEffect, useState } from "react";

function Movielist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(setMovies)
  }, []);

  return (
    <div className="main">
      {movies.map((movie) => (
        <Moviecard key={movie.id} {...movie}/>
      ))}
    </div>
  );
}

export default Movielist;