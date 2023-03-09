import React from 'react';
import './Starrating.css'

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const starIcons = [];

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<i className="fa fa-star" key={i}></i>);
  }

  if (halfStars) {
    starIcons.push(<i className="fa fa-star-half-o" key={starIcons.length}></i>);
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(<i className="fa fa-star-o" key={starIcons.length}></i>);
  }

  return (
    <div className="star-rating">
      {starIcons}
    </div>
  );
}

export default StarRating;
