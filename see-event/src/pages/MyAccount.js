import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Left from "../assets/Left.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { logoutAction } from "../redux/actions";
import styles from "../styles/MyAccount.module.css";

const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logoutAction);
    navigate("/");
  };

  return (
    <div className={styles.MyAccount}>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
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
      <Footer />
    </div>
  );
};

export default MyAccount;
