import React, { useContext } from "react";
import "./SideBar.css";
import SideBarLogo from "../../assets/img/apple-touch-icon.png";
import ProfileTop from "../ProfileTop/ProfileTop";
import Overlay from "../Overlay/Overlay";
import Links from "../Links/Links";

import { UserContext } from "../../assets/UserContext/UserContext";

const SideBar = () => {
  const state = useContext(UserContext);

  return (
    <main>
      <section
        className={
          state.state.sideBarToggle
            ? "side_bar_container show_bar"
            : "side_bar_container"
        }
      >
        <header>
          <div className="profiler-container">
            <div className="side_bar_logo">
              <img style={{ width: 40 }} src={SideBarLogo} alt="logo"></img>
            </div>

            <div className="profiler-component">
              <ProfileTop />
            </div>
          </div>
        </header>

        <div className="side_container_links">
<Links />
        </div>
      </section>
      <Overlay />
    </main>
  );
};

export default SideBar;
