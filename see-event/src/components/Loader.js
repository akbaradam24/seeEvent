import React from "react";

import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.text}>Loading...</div>
    </div>
  );
};

export default Loader;
