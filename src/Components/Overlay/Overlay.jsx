import React, { useContext } from "react";
import './Overlay.css'
import { UserContext } from "../../assets/UserContext/UserContext";

const Overlay = () => {
 
  const state = useContext(UserContext);
 
  return (
    <main>
<section
      
      className="outside-click"
      onClick={() => state.dispatch({ type: 'SideBartoggleOff'})}
    ></section>
     <section
        className={
          state.state.sideBarToggle ? "overlay_container " : "overlay_container off"
        }
      ></section>
    </main>
  )
}

export default Overlay