import React, { useCallback, useState } from "react";
import "./styles.css";

const StarRating = () => {
  const [rating, setrating] = useState({ hover: null, clicked: null });
  const handleHover = useCallback((str) => {
    setrating((prev)=>({...prev,hover:str}));
  });
  const handleClick = useCallback((str) => {
    setrating((prev)=>({...prev,clicked:str}));
  });

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
                handleClick(star);
              }}
              className={`material-icons-round ${
                rating.hover >= star || rating.clicked >= star
                  ? "hovered-star"
                  : ""
              }`}
              onMouseEnter={() => {
                handleHover(star);
              }}
              onMouseLeave={() => {
                setrating((prev)=>({...prev,hover:null}));
              }}
            >
              star
            </span>
          );
        })}
        {rating.clicked && <p>{`You have rated ${rating.clicked}/5`}</p>}
      </div>
    </div>
  );
};

export default StarRating;
