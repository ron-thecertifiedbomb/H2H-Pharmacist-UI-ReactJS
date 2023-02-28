import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProducts] = useState([]);

  // Async function for fetching data

  const fetchProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    setProducts(product);
    setIsLoading(false);
  };

  // UseEffect Hook to execute the fetchProducts function

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(product);
  return (
    <>
      {isLoading ? (
        <div className="product_detail_container">
          <h1> Loading... </h1>
        </div>
      ) : (
        <div className="product_detail_container">
          <div className="product_card_container">
            <div className="image_container">
              <img src={product.thumbnail} alt="pic"></img>
            </div>
            <div className="card_content">
              <p className="title_heading">{product.title}</p>
              <p className="title_heading">{product.description}</p>
              <p className="item_description">Price: ${product.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
