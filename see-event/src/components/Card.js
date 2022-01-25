import React from "react";

import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.Card}>
      <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="" className={styles["card-images"]} />
      <div className={styles["card-description"]}>
        <a href="#" className={styles["link-label"]}>
          Design
        </a>
        <p className={styles.date}>SUN, OCT 24 @ 1:15 AM ICT</p>
        <h4 className={styles.title}>How to make your business growth 10 times within 1 year</h4>
        <p className={styles.author}>By Adit nento</p>
      </div>
    </div>
  );
};

export default Card;
