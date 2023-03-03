import React, { useContext } from "react";
import { UserContext } from '../../assets/UserContext/UserContext';
import './LogOutButton.css'


const LogOutButton = () => {
  const state = useContext(UserContext);

  const handleLogout = () => {
    console.log("Logged out");
    state.setIsLoggedIn(false);
   state.dispatch({ type: "off" })
  };

  return (
    <div className="button_container">
      {/* <p>{warning}</p> */}
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogOutButton;
