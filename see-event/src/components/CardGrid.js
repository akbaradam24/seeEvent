import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/CardGrid.module.css";
import Cards from "./Cards";

const CardGrid = (props) => {
  return (
    <div className={styles.CardGrid}>
      <header className={styles["card-grid-header"]}>
        <h1>{props.title}</h1>
        <Link to="/search-events">More events</Link>
      </header>
      <Cards />
    </div>
  );
};

export default CardGrid;
