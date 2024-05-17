import React, { useState } from "react";
import "./styles.css";

const StarRating = () => {
  const [Hover, setHover] = useState(null);
  const [clickedStar, setClickedStar] = useState(null);
  function handleHover(str) {
    setHover(str);
  }
  function handleClickStar(str) {
    setClickedStar(str);
  }

  return (
    <div className="star-rating-container">
      <h2>Star Rating</h2>
      <div className="star-container">
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <span
              key={star}
              style={{ fontSize: "40px" }}
              onClick={() => {
                handleClickStar(star);
              }}
              className={`material-icons ${
                Hover >= star || clickedStar >= star ? "hovered-star" : ""
              }`}
              onMouseEnter={() => {
                handleHover(star);
              }}
              onMouseLeave={() => {
                handleHover(null);
              }}
            >
              star
            </span>
          );
        })}
        {clickedStar && <p>{`You have rated ${clickedStar}/5`}</p>}
      </div>
    </div>
  );
};

export default StarRating;
