import React, {useState} from "react";

function ToyForm({addNewToy}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(e.target.name.value)
    const formData = {
      name,
      image
    };
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(newToy => {
        addNewToy(newToy)
        setName("")
        setImage("")
      })
  }

  // console.log(name, image)


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
          value={name}
          onChange={e => setName(e.target.value)}
          
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
