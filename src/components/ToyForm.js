import React, {useState} from "react";

function ToyForm() {
  const [toyName, setToyName] = useState("")
  const [image, setImage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.toyName.value)
  }

  // console.log(toyName, image)


  return (
    <div className="container">
      <form 
        className="add-toy-form"
        onSubmit={handleSubmit}
      >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={e => setToyName(e.target.value)}
          
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
