import React, { useState, useEffect } from 'react'; //hooks, lifecycle methods
import queryString from 'query-string'; //get data from url
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => { //a prop, comes from reactRouter
  const [name, setName] = useState(""); // variable, funciton and Initial var
  const [chatroom, setRoom] = useState("");
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name,chatroom } = queryString.parse(location.search); //get url from prop

    socket = io(ENDPOINT);

    setName(name);
    setRoom(chatroom);
    
    /* emitting events from client side socket
     and pass a message (string or data) */
    socket.emit('join', {name, chatroom}, ({ error }) => {
      alert(error);
    });
  }, [ENDPOINT, location.search]); 
  // pass an array
  // only if these two change, effect activates (rerender useeffect)
  return (
    <div>
      <h1>Falak tak chal</h1>
    </div>
  );
}

export default Chat;
