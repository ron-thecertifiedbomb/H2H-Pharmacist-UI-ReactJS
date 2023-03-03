import React, { useState, useReducer } from "react";
import { UserContext } from "./assets/UserContext/UserContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Faqs from "./Pages/FAQs/Faqs";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import LogInPage from "./Pages/LoginPage/LoginPage";
import LogInMultipleUser from "./Pages/LogInMulitipleUsers/LogInMultipleUser";

const initialState = { toggle: false, sideBarToggle: false, isLoggedIn: false };

// The reducer function

const reducer = (state, action) => {
  switch (action.type) {

    case "isLoggedIn":
      return { isLoggedIn: true };

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
  const [activeUser, setActiveUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider
        value={{ toggleArrow, setToggleArrow, isLoggedIn, setIsLoggedIn, activeUser, setActiveUser, state, dispatch }}
      >
        {isLoggedIn ? (
           <>
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
             <Route path="/multiple" element={<LogInMultipleUser />} />
             {/* <Route path="/users" element={<Users />} /> */}
             {/* <Route path="users/:id/" element={<UsersPage />} /> */}
             <Route path="product/:id/" element={<ProductDetail />} />
           </Routes>  
         </>
         
        ) : (
          <LogInMultipleUser/>
        )}
      </UserContext.Provider>
    </div>
  );
};

export default App;
