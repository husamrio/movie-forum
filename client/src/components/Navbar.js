import React from "react";
import { NavLink } from "react-router-dom";
import './App.css'
import Search from './Search';



function NavBar (){
    return (
    <div className="navbar">
        
        <nav>
            <img id= 'logo' src="https://i.ibb.co/XsSZ0x1/image-1-1.jpg" alt=""/>
            <NavLink exact to ="/">MovieForum</NavLink>
            <Search />
            <button className= 'btn' id='login-btn'>Login</button>
            <button className= 'btn' id='signup-btn'>SignUp</button>
        </nav>
    </div>
    )
}
export default NavBar;