import React from "react";
import "../StarWars.css";

const Card = ({ character }) => {
  return (
    <div className="card">
      <h1>{character.name}</h1>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default Card;
