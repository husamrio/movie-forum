import React from 'react'
import Navbar from './Navbar'
import Movielist from "./Movielist";
import Footer from "./Footer";

function Home() {
  return (
    <div>
        <Navbar />
        <Movielist />
        <Footer />
    </div>
  )
}

export default Home