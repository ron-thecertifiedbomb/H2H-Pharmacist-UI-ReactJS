import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import { UserContext } from "./assets/UserContext/UserContext";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Faqs from "./Pages/FAQs/Faqs";
import Users from "./Pages/Users/Users";
import UsersPage from "./Pages/UserPage/UserPage";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import LogInPage from './Pages/Login/Login'

const initialState = { toggle: false, sideBarToggle: false };

// The reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { toggle: !state.toggle };

    case "off":
      return { toggle: false };

    case "SideBartoggle":
      return { sideBarToggle: !state.sideBarToggle };

    case "SideBartoggleOff":
      return { sideBarToggle: false };
  }
};

const App = () => {


  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggleArrow, setToggleArrow] = useState("");

  return (

    <div className="App">
      <UserContext.Provider
        value={{ toggleArrow, setToggleArrow, state, dispatch }}
      >


        <section className="nav-bar-section">
          <NavBar />
        </section>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/users" element={<Users />} />
          <Route path="users/:id/" element={<UsersPage />} />
          <Route path="product/:id/" element={<ProductDetail />} />
        </Routes>

        
      </UserContext.Provider>
    </div>


  );
};

export default App;
