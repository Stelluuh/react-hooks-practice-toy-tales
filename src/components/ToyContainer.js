import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  // console.log({ toys })
  
  return (
    <div id="toy-collection">{toys.map(toy => (
      <ToyCard 
        key={toys.id}
        toy={toy}
        />
    ))}
    </div>
  );
}

export default ToyContainer;
