import React from "react";
import styles from "./error.module.css";

const Error = ({ error }) => {
  console.log(error);
  if (!error) return null;
  return <p className={styles.error}>{error}</p>;
};

export default Error;
