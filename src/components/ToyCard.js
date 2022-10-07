import React, {useState} from "react";

function ToyCard({ toy, onDeleteToy, onHandleLikes }) {
  // console.log(toy)
  const {id, name, image, likes} = toy

  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => {onDeleteToy(toy)})
  }

  function handleLikeButton() {
    const updateToyObj = {
      likes: toy.likes + 1,
    };
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updateToyObj)
    })
      .then(response=>response.json())
      .then(onHandleLikes)
  }
  

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeButton}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
