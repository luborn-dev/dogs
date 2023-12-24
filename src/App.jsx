import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import "./App.css";
import { UserStorage } from "./UserContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/Helper/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer></Footer>
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
