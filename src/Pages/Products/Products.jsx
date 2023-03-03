import React, { useContext, useState, useEffect } from "react";
import './Products.css'
import Cards from '../../Components/Cards/ProductCards/Cards'
import { UserContext } from "../../assets/UserContext/UserContext";

function Products() {

  const state = useContext(UserContext);

    // useState for rendering the products

    const [product, setProducts] = useState([]);

// Async function for fetching data

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=8`);
    const product = await response.json();
    setProducts(product.products);
  };

// UseEffect Hook to execute the fetchProducts function


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    
    <section className="products_section" onClick={() => state.dispatch({ type: 'off'})}>
    <div className="products_container">
    {product.map((item, index) => (
   <Cards key={index} id={item.id} thumbnail={item.thumbnail} title={item.title} price={item.price}/>
  
  ))}
   </div>
   
    </section>
  );
}

export default Products;
 