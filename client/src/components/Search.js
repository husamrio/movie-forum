import React from "react";
import { useEffect, useState } from "react";
// import Movielist from "./Movielist";

function Search() {
    const [movies, setMovies] = useState([]);

//     return (
//         <div className="searchbar">
//             <input 
//                 onChange={searchInput} 
//                 type="text"
//                 placeholder="Search for a show, movie..."
//             />
//         </div>
//     );
useEffect(() => {
    const fetchMovies = async ()=>{
        const result = await fetch("/movies")
        const resultJson = await result.json();
  
        setMovies(resultJson)
    }
    fetchMovies();
    },[])

  console.log(movies)
  const onChangeHandler = (event) => {
    event.preventDefault();
  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={onChangeHandler}
        // value= {searching}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}



export default Search;