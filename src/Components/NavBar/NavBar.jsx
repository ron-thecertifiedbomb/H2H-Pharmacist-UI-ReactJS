import React, { useContext } from "react";
import "./NavBar.css";
import Logo from "../../assets/img/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Links from "../Links/Links";
import ProfileTop from "../../Components/ProfileTop/ProfileTop";
import { UserContext } from "../../assets/UserContext/UserContext";

const NavBar = () => {
  const state = useContext(UserContext);

  return (
    <>
      {/* NavBar */}

      <nav>
        <div className="nav-logo">
          <div
            className="hamburger_left_container"
           onClick={() => state.dispatch({ type: 'SideBartoggle'})}
          >
            <RxHamburgerMenu size={30} />
          </div>
          <img
            className="logo"
            src={Logo}
            alt="logo"
            style={{ width: 180 }}
          ></img>
          <h1 className="logo-title">Pharma</h1>
        </div>

        <div className="profile-column">
          <ProfileTop />
          <div
            className="hamburger"
            onClick={() => state.dispatch({ type: 'toggle'})}
          >
            { state.state.toggle ? (
              <AiOutlineClose size={30} />
            ) : (
              <RxHamburgerMenu size={30} />
            )}
          </div>
        </div>

        {/* NavBar Panel */}

        <div
          className={
            state.state.toggle ? "nav-links-container show" : "nav-links-container"
          }
        >
  
    
          <Links />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
