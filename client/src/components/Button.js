import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"


const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";


 function Filter() {
 
  const [one, setOne] = useState([]);
  
 

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOne(data.results);
      });
  }, []);

  return (
  // <Link>
    <button className="button" key={one.id} onclick={() => setOne(one.id) } >
      Reviews</button>
   // </Link>   */

  );
}

export default Filter;