import Moviecard from "./Moviecard";
import "./Movie.css";

function Movielist({movies}) {

  return (
    <div className="movies">
      <div className="main">
      {movies.map((movie) => (
        <Moviecard key={movie.id} {...movie}/>
      ))}
      </div>
    </div>
  );
}

export default Movielist;