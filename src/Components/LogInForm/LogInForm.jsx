import React, { useState, useContext } from "react";
import imageOne from "../../assets/img/apple-touch-icon.png";
import "./LoginForm.css";
import { UserContext } from "../../assets/UserContext/UserContext";

import { useNavigate } from "react-router-dom";

function Login({ warning, setWarning }) {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const state = useContext(UserContext);

  const handleLogin = () => {
   
    {
      username === "Ronan" && password === "#1234"
        ? state.setIsLoggedIn(true)
        : state.setIsLoggedIn(false);
    }
    {
      username === "Ronan" ? console.log("") : setWarning("Invalid Username");
    }
    {
      password === "#1234" ? console.log("") : setWarning("Invalid Password");
    }
    {
      username === "Ronan" || password === "#1234"
        ? console.log("")
        : setWarning("Invalid username and password");
    }
    {
      username === "Ronan" && password === "#1234"
        ? setWarning("Successfully Logged In!")
        : console.log("");
    }
    {
      username.length <= 0 && password.length <= 0
        ? setWarning("Please type in your username and password")
        : console.log("");
    }
    {
      username.length <= 0 && password.length <= 0
        ? alert("Please Type Something")
        : "";
    }

    setUsername("");
    setPassword("");
    console.log(username.length);
    console.log(password.length);
    navigate("/")
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={imageOne} alt="" style={{ width: "50px" }}></img>
      </div>

      <div className="inputs-container">
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
      </div>
      <div className="warning">
        <p>{warning}</p>
      </div>
    </div>
  );
}


function LogInForm() {
 
  const [warning, setWarning] = useState("");
  
  return (
    <div>
        <Login
          warning={warning}
          setWarning={setWarning}
        />
    
    </div>
  );
}

export default LogInForm;
