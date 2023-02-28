import React from 'react'
import { useParams } from 'react-router'
import  users  from '../../assets/Helper/User'
import './UserPage.css'

const UsersPage = () => {


  const { id } = useParams();

  const userID = users[id];


console.log(id)

  return (
 <div className='section_home'>
    <div className="user_card_container" >
   <img src={userID.thumbnail} alt= 'image'></img>
   <div className="title_heading">{userID.name}</div>
   <p className="item_description">{userID.title}</p>
    </div>
    </div>
  )
}

export default UsersPage