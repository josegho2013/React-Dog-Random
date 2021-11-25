import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
];
const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };

  return (
    <div>
      <div className="line_dog"></div>
      
      <h1> Selecciona tu Raza</h1>
      <select className="Select" onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
