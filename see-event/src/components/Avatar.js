import React from "react";

import styles from "../styles/Avatar.module.css";

const Avatar = (props) => {
  return (
    <div className={styles.Avatar}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Avatar;
