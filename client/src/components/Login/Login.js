import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Import react hooks (class based components to function based compo)

import './Join.css'

const Login = () => {
  const [name,setName] = useState('');  // variable, funciton and Initial var
  const [chatroom,setRoom] = useState('');
  return (
    <div className='joinOuterContainer'>
      <div className="joinInnerContainer">
        <h1 className='heading'>Join</h1>
        <div><input className="joinInput" placeholder='' type="text" onChange={(event) => setName(event.target.value)} /></div>
        <div><input className="joinInput mt-20" placeholder='' type="text" onChange={(event) => setRoom(event.target.value)} /></div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={'/chat?name=${name}&room=${room}'}> {/* passing data as a string in the URL */}
          <button className='button mt-20' type='submit'>Sign In</button>
        </Link>
      </div>
    </div>
  )
};

export default Login;
