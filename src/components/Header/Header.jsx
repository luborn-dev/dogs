import React, { useContext } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../../Assets/dogs.svg?react";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data, userLogout } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link className={styles.login} to="/conta">
              {data.username}
            </Link>
            <button onClick={userLogout}>Deslogar</button>
          </>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
