import React from 'react'
import { useEffect, useState } from "react";
import Navbar from './Navbar'
import Movielist from "./Movielist";
import Footer from "./Footer";


function Home({user, setUser}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then((m) => setMovies(m))
  }, []);


  return (
    <div>
      <Navbar user={user} setUser={setUser} movies={movies} setMovies={setMovies}/>
      <Movielist user={user} setUser={setUser} movies={movies}/>
      <Footer />
    </div>
  );
}

export default Home