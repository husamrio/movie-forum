import React from 'react'
import Navbar from './Navbar'
import Movielist from "./Movielist";
import Footer from "./Footer";

function Home({user, setUser}) {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Movielist user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default Home