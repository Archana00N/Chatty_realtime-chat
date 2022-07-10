import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import react hooks (class based components to function based compo)

import "./Login.css";

const Login = () => {
  const [name, setName] = useState(""); // variable, funciton and Initial var
  const [chatroom, setRoom] = useState("");
  return (
    <div className="LoginOuterContainer">
      <div className="LoginInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="LoginInput"
            placeholder="Your Name"
            type="text"
            onChange={(event) => setName(event.target.value)} 
            /* event: user types smth 
               event.target.value: holds the data
              pass data into function setName  */
          />
        </div>
        <div>
          <input
            className="LoginInput mt-20"
            placeholder="Room Name"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !chatroom ? event.preventDefault() : null)} 
          /*  prevent button click if name/room isn't mentioned */
          to={`/chat?name=${name}&room=${chatroom}`}
        >
          {/* passing data as a string in the URL */}
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
