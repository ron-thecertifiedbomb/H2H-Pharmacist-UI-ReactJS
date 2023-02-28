import React, { useContext, useState, useRef } from "react";
import "./AboutUs.css";
import Header from "../../Components/Header/Header";
import { UserContext } from "../../assets/UserContext/UserContext";
import users from "../../assets/Helper/User";

const AboutUs = () => {

  const state = useContext(UserContext);

  const [myArray, setMyArray] = useState(users);
  const [newName, setNewName] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const count = useRef(0);


  const handleClick = () => {
    const newUsers = {
      id:  myArray.length - 1 + 1,
      name: newName,
      thumbnail:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: newTitle,
      price: "500",
    };

    setMyArray([...myArray, newUsers]);
    setNewName('')
    setNewTitle('')
  };

  
  console.log(myArray.length - 1);
 ;

  return (
    <section
      className="section_home"
      onClick={() => state.dispatch({ type: "off" })}
    >
      <div>
        {/* <Header title={'About Us'} /> */}

        <div>
          <input
            type="text"
            placeholder="Name"
            required
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            required
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleClick}>Add Element</button>
          <div>
            {myArray.map((element, index) => (
              <ul key={index}>
        
                <li>{element.name}</li>
                <li>{element.title}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
