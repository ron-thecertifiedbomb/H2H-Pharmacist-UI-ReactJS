import React, { useContext } from "react";
import "./Faqs.css";
import { UserContext } from "../../assets/UserContext/UserContext";
import Table from "../../Components/Table/Table";

const Faqs = () => {

  const state = useContext(UserContext);
  

  return (
    <section
      className="section_home_main"
      onClick={() => state.dispatch({ type: "off" })}
    >
      <Table />



    </section>
  );
};

export default Faqs;
