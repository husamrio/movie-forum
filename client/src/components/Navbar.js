import React from "react";
import { NavLink } from "react-router-dom";
import './App.css'
import Search from './Search';



function NavBar (){
    return (
    <div className="navbar">
        {/* <h1><em>MovieForum</em></h1> */}
        <nav>
            <NavLink exact to ="/">MovieForum</NavLink>
            <Search />
            <button id='login-btn'>Login</button>
        </nav>
    </div>
    )
}
export default NavBar;