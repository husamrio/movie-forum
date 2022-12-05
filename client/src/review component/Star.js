import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ setStar }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    setStar(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "gold" : "lightgray"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>I rate this movie {rating + " stars"}</p>
    </div>
  );
};

export default Stars;