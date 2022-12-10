import './App.css'
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ReviewList from './ReviewList';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  // console.log(user)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home user={user} setUser={setUser}/>} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/review" element={<ReviewList user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
