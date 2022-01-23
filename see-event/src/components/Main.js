import React from "react";

import styles from "../styles/Main.module.css";
import CardGrid from "./CardGrid";

const Main = () => {
  return (
    <main className={styles.Main}>
      <CardGrid title="Attend an event starting soon" />
      <CardGrid title="Design events" />
    </main>
  );
};

export default Main;
