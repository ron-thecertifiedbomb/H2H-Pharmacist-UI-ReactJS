import React from  'react'
import './UserCards.css'
import { NavLink } from "react-router-dom";
const UserCards = ({ id, thumbnail, name, title }) => {

  return (
    <>
    <div className="card_container" >
      <NavLink to= {`/users/${id}`}>
      <div className="image_container">
        <img src={thumbnail} alt="pic"></img>
      </div>
      </NavLink>
      <div className="card_content">
        <p className="title_heading">{name}</p>
        <p className="item_description">{title}</p>
        </div>
    </div>
</>
  )
}

export default UserCards




