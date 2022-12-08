import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './App.css'
import Search from './Search';



function NavBar ({user, setUser}){
    const navigate = useNavigate()

    function handleLogout() {
        console.log(user);
        fetch("/logout", {
            method: 'DELETE',
        }).then(res => {
            if(res.ok) {
                setUser(null)
            }
        })
    }

    return (
      <div className="navbar">
        <nav>
          <img id="logo" src="https://i.ibb.co/XsSZ0x1/image-1-1.jpg" alt="" />
          <NavLink exact to="/">
            MovieForum
          </NavLink>
          <Search />
          {!user ? <button id="login-btn" onClick={() => navigate("/login")}>Login</button> : <button id="login-btn" onClick={()=>handleLogout()}>Logout</button>}
        </nav>
      </div>
    );
}
export default NavBar;