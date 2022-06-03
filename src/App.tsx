import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import HomePage from "./Pages/Home";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path={"/home"}
          element={<HomePage path={"/home"} exact={false} />}
        />
        {/* <HomePage path={"/home"} exact={false}></HomePage> */}
      </Routes>
    </Router>
  );
}

export default App;
