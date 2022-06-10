import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
