import React, { useState } from "react";
import Rating from "@mui/material/Rating";

function Review({location}) {
  // console.log(location.state.props);
  // const [review, setReview] = useState({})
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const formData = {
    rating: rating,
    comment: comment,
    movie_id: location.state.props.id,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    console.log(location.state)
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(data =>{
        console.log(data)
      });

      window.location.reload()

    // let form = document.querySelector("form");
    // let p = document.createElement("p");
    // document.getElementById("feedback").append(p);
    // p.style.fontFamily = "'Poppins', sans-serif";
    // p.style.fontSize = "40px";
    // p.innerText = "Thank you for your review. Hope to see you back!!!.";
    // document.querySelector("#feedback").querySelector("h2").remove();
    // form.remove();
    // document.getElementById("feedback").style.height = "400px";
  }
  function handleChange(e) {
    setComment(e.target.value);
  }
  function handleRatingChange(e) {
    setRating(e.target.value);
  }
  return (
    <div id="feedback">
      <h2>You can fill the form below to tell us about your experience</h2>
      <div className="cont-3">
        <form onSubmit={handleSubmit}>
          <label className="rating" htmlFor="rating">
            Rating:
          </label>
          <Rating
            id="rating"
            onChange={handleRatingChange}
            defaultValue={5}
            max={10}
            precision={0.5}
          />
          <br />
          <label id="comm" htmlFor="comment">
            Comment:
          </label>
          <br />
          <input
            required
            name="Comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="write your comments here .."
            onChange={handleChange}
            // value={comment}
          ></input>
          <br />
          <input type="submit" id="submit-1" />
        </form>
      </div>
    </div>
  );
}

export default Review;
