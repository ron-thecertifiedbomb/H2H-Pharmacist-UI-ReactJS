import React from 'react'
import './Users.css'
import  users  from '../../assets/Helper/User'
import  UserCards from '../../Components/Cards/UserCards/UserCards'





const Users = () => {




  return (
    <div className='section_home'>
      
    <div className='users_container'>
    {users.map((item, index) => (
   <UserCards key={index} id={item.id} thumbnail={item.thumbnail}  name={item.name} title={item.title}/>
  
  ))}
    </div>
    </div>
  )
}

export default Users