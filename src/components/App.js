import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(toyList => setToys(toyList))
  }, [])

  function handleAddToy(newToy) {
    const newToyArray = [...toys, newToy]
    setToys(newToyArray)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  console.log(toys)
  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
