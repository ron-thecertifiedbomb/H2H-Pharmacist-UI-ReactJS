import React, { useContext } from "react";
import "./Links.css";
import { UserContext } from "../../assets/UserContext/UserContext";
import { navlinks } from "../../assets/Helper/Helprs";
import { NavLink } from "react-router-dom";
const Links = () => {
  const state = useContext(UserContext);

  return (
    <section>
      {navlinks.map((item, index) => (
        <div className="list_container" key={index}>
          <div className="list_heading">
            <div
              className={
                state.toggleArrow === item.name ? "arrow" : "arrow_toggle"
              }
              onClick={
                state.toggleArrow === item.name
                  ? () => state.setToggleArrow(null)
                  : () => state.setToggleArrow(item.name)
              }
            >
              {item.arrow}
            </div>

            <div className="title_name">
              <p>{item.name}</p>
            </div>

            <div className={item.order > 0 ? "order-count" : ""}>
              <p>{item.order}</p>
            </div>
          </div>

          <div
            className={
              state.toggleArrow === item.name ? "list_body_show" : "list_body"
            }
          >
            <div className="list_body_content">
              <NavLink to={item.linkOne}>
                <p onClick={() => state.dispatch({ type: "off" })}>
                  {item.linkOneName}
                </p>
              </NavLink>

              <NavLink to={item.linkTwo}>
                <p onClick={() => state.dispatch({ type: "off" })}>
                  {item.linkTwoName}
                </p>
              </NavLink>
              <NavLink to={item.linkThree}>
                <p onClick={() => state.dispatch({ type: "off" })}>
                  {item.linkThreeName}
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Links;
