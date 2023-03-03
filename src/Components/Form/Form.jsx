import React, { useState } from "react";
import './Form.css'

const Form = () => {
  const [newNameProduct, setNewProductName] = useState("");

  const [newGeneric, setNewGenric] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: data.length - 1 + 1,
      name: newNameProduct,
      generic: newGeneric,
      price: newPrice,
    };

    fetch("http://localhost:3000/products/ ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((newProduct) => console.log(newProduct))
      .catch((error) => console.error(error));
  };

  return (
    <div>
    
      <form className="modal">
        <input
          type="text"
          placeholder="Product Name"
          required
          value={newNameProduct}
          onChange={(e) => setNewProductName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Generic Name"
          required
          value={newGeneric}
          onChange={(e) => setNewGenric(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          required
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />

        <button onClick={handleSubmit}>Add Element</button>
      </form>
    </div>
  );
};

export default Form;
