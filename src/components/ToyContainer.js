import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onHandleLikes }) {
  // console.log({ toys })
  
  return (
    <div id="toy-collection">{toys.map(toy => (
      <ToyCard 
        key={toy.id}
        toy={toy}
        onDeleteToy={onDeleteToy}
        onHandleLikes={onHandleLikes}
        />
    ))}
    </div>
  );
}

export default ToyContainer;
