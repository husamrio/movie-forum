import React from "react";
import { useState } from "react"



function Moviecard( {props} ) {

  const [clicked, setClicked] = useState("false")

  function handleClick(e) { 
    if (clicked == "false"){
    setClicked("true")
    }
    else {
      setClicked("false")
    }
  }

  // let reviews = props.reviews.map((r) => (<p key={r.id}>{r.comment}</p>))


 let poster_path = props.poster_path 

  return (
  
      <div className="movie">
    <img src={IMG_PATH + poster_path } alt={props.title} />
    <div className="movie-info">
      <h3>{props.title}</h3>
      <span className={`movie-info ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
    </div>

    <div className="overview">
        <h3>Overview</h3>
    <>
        <p>{props.overview}</p>
        {/* { clicked == "true"? reviews  : null } */}
    </>
        <button className="button" onClick={ handleClick }>
      Reviews
    </button>
    </div>
  </div>
  )
}

export default Moviecard

// export default Moviecard

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) =>{

  if(vote >=7){
    return 'green'
  }else if (vote >=5){
    return 'orange'
  }else {
    return 'red'
  }

}

// const Moviecard = ( {props} ) => (
//   { <p>{props.reviews}</p> }
// )

// export default Moviecard
// const Movie = ({ props }) => (
//   <div className="movie">
//     <img src={IMG_PATH + props.poster_path} alt={props.title} />
//     <div className="movie-info">
//       <h3>{props.title}</h3>
//       <span className={`movie-info ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
//     </div>

//     <div className="overview">
//         <h3>Overview</h3>
//         <p>{props.overview}</p>
//         <p> {props.reviews} </p>
//         <button className="button" onClick="">
//       Reviews
//     </button>
//     </div>
//   </div>
// );

// export default Movie;
