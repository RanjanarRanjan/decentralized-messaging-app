import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import App from "./App";
import AdminHome from "./pages/AdminHome";
import MessagePage from "./pages/MessagePage";

// ✅ Wrap Routes inside BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
