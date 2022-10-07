import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy }) {
  // console.log({ toys })
  
  return (
    <div id="toy-collection">{toys.map(toy => (
      <ToyCard 
        key={toy.id}
        toy={toy}
        onDeleteToy={onDeleteToy}
        />
    ))}
    </div>
  );
}

export default ToyContainer;
