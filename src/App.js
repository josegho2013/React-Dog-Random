import React, { useState, useEffect } from "react";
import Card from "./componente/Card";
import Select from "./componente/Select";
import getDog from "./helpers/getDog";
import NavBar from "./componente/Navbar";
import Footer from "./componente/Footer";
import "./App.css";


const initialDog = {
  image: "",
  breed: {
    id: "",
    name: "",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId).then((newDog) => {
      setDog(newDog);
      setLoading(false);
    });
  };
  return (
    <div className="App">
      <NavBar />

      <Select updateDog={updateDog} />

      <Card dog={dog} updateDog={updateDog} loading={loading} />
      <Footer />
    </div>
  );
}
export default App;
