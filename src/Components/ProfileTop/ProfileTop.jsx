import React, { useState, useContext } from "react";
import './ProfileTop.css'
import { UserContext } from "../../assets/UserContext/UserContext";


const ProfileTop = () => {

  const state = useContext(UserContext);
  return (

 <div className='login-column'>
          <div className="log-in-wrapper">
            <p className="log-name">{state.activeUser[0]}</p>
            <p className="log-id">ID No: {state.activeUser[1]}</p>
          </div>

          <div className="profile-wrapper">
            <div className="profile-round">
              <div className="pic-round">
                
              </div>
            </div>
          </div>
       
          </div>
  )
}

export default ProfileTop