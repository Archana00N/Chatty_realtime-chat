import React from "react";
import {
  BrowserRouter as Router,
  matchRoutes,
  Route,
  Routes,
} from "react-router-dom"; // to pass props as query parameters
import Login from "./components/Login";
import Chat from "./components/Chat";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Login />} /> {/* Login form at home page */}
      <Route path="/chat" element={<Chat />} /> {/* Main chat component */}
    </Routes>
  </Router>
);

export default App;
