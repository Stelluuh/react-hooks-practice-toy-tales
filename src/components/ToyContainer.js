import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(toyList => setToys(toyList))
  }, [])

  console.log({toys})


  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}</div>
  );
}

export default ToyContainer;
