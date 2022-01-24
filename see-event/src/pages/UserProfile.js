import React from "react";
import Footer from "../components/Footer";

import MyAccount from "../components/MyAccount";
import Navbar from "../components/Navbar";
import styles from "../styles/UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.UserProfile}>
      <Navbar />
      <MyAccount />
      <Footer />
    </div>
  );
};

export default UserProfile;
