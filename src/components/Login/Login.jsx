import React, { useContext } from "react";
import styles from "./login.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import PasswordLost from "./PasswordLost";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/criar" element={<LoginCreate />}></Route>
          <Route path="/perdeu" element={<PasswordLost />}></Route>
          <Route path="/resetar" element={<PasswordReset />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
