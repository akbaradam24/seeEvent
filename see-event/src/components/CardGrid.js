import React from "react";

import styles from "../styles/CardGrid.module.css";
import Cards from "./Cards";

const CardGrid = (props) => {
  return (
    <div className={styles.CardGrid}>
      <header className={styles["card-grid-header"]}>
        <h1>{props.title}</h1>
        <a href="#">More events</a>
      </header>
      <Cards />
    </div>
  );
};

export default CardGrid;
