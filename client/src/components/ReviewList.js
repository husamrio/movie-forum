import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import "./Review.css";
import Review from "./Review";
import { useLocation } from "react-router-dom";
import Back from "./Back";

function ReviewList({ user }) {
  const location = useLocation();
  const [reviews, setReviews] = useState([]);

  console.log(location.state.props);
  console.log(reviews);

  useEffect(() => {
    fetch(`/movies/${location.state.props.id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log("This the fetch data", reviews);

  function handleBlur(e) {
    console.log(e.target.innerText);

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ comment: e.target.innerText }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const cards = reviews.map((review) => {
    return (
      <div key={review.id} className="reviewCard">
        <Rating value={review.rating} max={10} readOnly />
        <p onBlur={handleBlur} id={review.id}>
          {review.comment}
        </p>
        <h3>{review.user.username}</h3>
        <button className="delete" id={review.id}>
          Delete
        </button>
      </div>
    );
  });

  // function handleDelete(e) {
  //   const newreviews = reviews.filter((item) => {
  //     // console.log(e.target)
  //     // console.log(item.id)
  //     return item.id !== parseInt(e.target.id);
  //   });

  //   setreview(newreviews);
  //   console.log("This is newreview:", newreviews);

  //   fetch("/reviews", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }
  return (
    <div className="cont-2">
      <Back />
      <div className="review-movie">
        <div className="review-movie-card">
          <div className="review-movie-card-left">
            <img
              className="review-movie-image"
              src={
                "https://image.tmdb.org/t/p/w1280" +
                location.state.props.poster_path
              }
              alt=""
            />
          </div>
          <div className="review-movie-card-right">
            <h1>{location.state.props.title}</h1>
            <div className="review-movie-card-right-details">
              <Rating
                className="review-movie-rating"
                defaultValue={location.state.props.vote_average}
                readOnly={true}
                max={10}
              />
              <p>{location.state.props.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ color: "white" }}>Reviews</h1>
      <div className="fcontainer">{cards}</div>
      <Review location={location} />
    </div>
  );
}

export default ReviewList;
