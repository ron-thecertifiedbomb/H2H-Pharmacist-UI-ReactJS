import React, { useState, useContext } from "react";
import "./LogInMultipleUsers.css";
import { UserContext } from "../../assets/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const users = [
  {
    id: 1,
    name: "Joe Satriani",
    username: "satch",
    employeeIdNo: 126574,
    password: "password123",
    activeUser: false,
  },
  {
    id: 2,
    name: "Ronan Sibunga",
    username: "ron",
    employeeIdNo: 1980,
    password: "1234",
    activeUser: false,
  },
  {
    id: 3,
    name: "Michieko Sibunga",
    username: "mich",
    employeeIdNo: 1979,
    password: "Ronchiko0814",
    activeUser: false,
  },
  {
    id: 4,
    name: "Kurt Wagner",
    username: "Nightcrawler",
    employeeIdNo: 6578,
    password: "123",
    activeUser: false,
  },
  {
    id: 5,
    name: "Allen Iverson",
    username: "The Answer",
    employeeIdNo: 1977,
    password: "1234567",
    activeUser: false,
  },
];

function LoginFormMulitple() {
  const navigate = useNavigate();

  const state = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      state.setIsLoggedIn(true);
      navigate("/");
      let loggedinUser = [user.name, user.employeeIdNo];
      state.setActiveUser(loggedinUser);
      // state.dispatch({ type: 'isLoggedIn'})
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

const LogInMultipleUser = () => {
  return (
    <div className="main-container_users">
      <LoginFormMulitple />
    </div>
  );
};

export default LogInMultipleUser;
