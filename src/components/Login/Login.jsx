import React from "react";
import styles from "./login.module.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import PasswordLost from "./PasswordLost";
import PasswordReset from "./PasswordReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/criar" element={<LoginCreate />}></Route>
        <Route path="/perdeu" element={<PasswordLost />}></Route>
        <Route path="/resetar" element={<PasswordReset />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
