import React from "react";

import Left from "../assets/Left.svg";
import styles from "../styles/MyAccount.module.css";

const MyAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <form>
        <div className={styles.Avatar}>
          <img src="https://assets.pikiran-rakyat.com/crop/116x6:1153x719/x/photo/2021/08/01/2921427916.jpg" alt="lee ji eun" />
        </div>
        <p className={styles.name}>Pratur Anahata Pratama</p>
        <p className={styles.email}>praturanhata45@gmail.com</p>
        <button type="submit" className={styles["log-out"]}>
          <span className={styles["signout-icon"]}>
            <img src={Left} alt="sign out" />
          </span>
          Log Out
        </button>
      </form>
    </div>
  );
};

export default MyAccount;
