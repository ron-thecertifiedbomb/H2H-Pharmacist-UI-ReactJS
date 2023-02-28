import React from "react";
import './Cards.css'
import { NavLink } from "react-router-dom";
function Cards({ id, thumbnail, title, price}) {
  

  return (

    <>
        <div className="card_container" key={id}>
        <NavLink to= {`/product/${id}`}>
          <div className="image_container">
            <img src={thumbnail} alt="pic"></img>
          </div>
          </NavLink>
          <div className="card_content">
            <p className="title_heading">{title}</p>
            <p className="item_description">Price: ${price}</p>
            </div>
        </div>

    </>


  );
}

export default Cards;
