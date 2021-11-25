import React from "react";
import Spinner from "./Spinner";

const Card = ({ dog, loading, updateDog }) => {
  if (loading) return <Spinner />;
  return (
    <div>
      <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
        <img src={dog.image} alt="dog" />
        <p>{dog.breed.name} </p>
      </div>
    </div>
  );
};

export default Card;
