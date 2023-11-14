import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { Register } from "./pages/Register";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </React.StrictMode>
);
