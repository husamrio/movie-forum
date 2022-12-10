import React from "react";
import { NavLink } from "react-router-dom";

function Back() {
  return (
    <div className="review-header">
      <NavLink className="back-homepage" exact to="/">
        <button>{"<"}</button>
      </NavLink>
    </div>
  );
}

export default Back;
