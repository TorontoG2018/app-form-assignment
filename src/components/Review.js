import React from "react";
import "../App.css";

function Review({ getValues, pokemonName }) {
  const formData = getValues();

  return (
    <div className="review-container">
      <ul class="review-list">
        <li>Name: {formData.firstName} </li>
        <li>Last Name: {formData.lastName}</li>
        <li>Phone: {formData.phoneNumber}</li>
        <li>Address: {formData.address}</li>
        <li>Pokemon: {pokemonName}</li>
      </ul>
    </div>
  );
}

export default Review;
