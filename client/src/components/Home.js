import React from 'react'
import Navbar from './Navbar'
import MovieList from "./MovieList";
import Footer from "./Footer";

function Home() {
  return (
    <div>
        <Navbar />
        <MovieList />
        <Footer />
    </div>
  )
}

export default Home