import React, { useState, useEffect } from "react";
import "./Table.css";
import Header from "../Header/Header";


const Table = () => {

  const [newNameProduct, setNewProductName] = useState("");
  const [newGeneric, setNewGenric] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [products, setProducts] = useState([]);

  const [_________, setSelectedItemId] = useState(null);

  // GET METHOD

  const fetchProducts = async () => {
    const response = await fetch(`http://localhost:3000/products/`);
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // POST METHOD

  const handleSubmit = (event) => {
    event.preventDefault();

    const d = new Date();
    let time = d.getTime();

    const newProduct = {
      id: time,
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
      .then((data) => {
        const updatedArray = [...products, data];
        setProducts(updatedArray);
      })
      .catch((error) => console.error(error));

    setNewProductName("");
    setNewGenric("");
    setNewPrice("");
  };

  
  // DELETE METHOD

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    deleteData(itemId);
    console.log(itemId)
  };

  const deleteData = async (itemId) => {
    const id = itemId;

    // const response = await fetch(`http://localhost:3000/products/${id}`, {
   fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
      
    })
    
      .then(() => {
        const updatedArray = products.filter((item) => item.id !== itemId);
        setProducts(updatedArray);
        setNewProductName("");
        setNewGenric("");
        setNewPrice("");
      })
      .catch((error) => console.log(error));
  };

  return (

    <div className="main-wrapper">
      <div className="table_container">
        <Header title={"Over the Counter Medicine List"} />

        <table>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Generic Name</th>
              <th scope="col">Price</th>
              <th scope="col">Delete Product</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td data-label="No.">{index + 1}</td>
                <td data-label="Product ID">{item.id}</td>
                <td data-label="Product Name">{item.name}</td>
                <td data-label="Generic Name">{item.generic}</td>
                <td data-label="Price">{item.price}</td>
                <td data-label="Delete Product" id="delete">
                  <div className="button_container"  onClick={() => handleItemClick(item.id)}>
                    <div
                      className="delete_button"
                    >
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form onSubmit={handleSubmit}>
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
        <button>Add Item</button>
      </form>

    </div>
  );
};

export default Table;
