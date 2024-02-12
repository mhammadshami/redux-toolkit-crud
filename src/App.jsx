import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Create from "./components/Create";
import { Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
