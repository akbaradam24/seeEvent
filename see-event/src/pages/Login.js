import React from "react";

import styles from "../styles/Login.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const Login = () => {
  
    return (
        <div className={styles.LoginTest}>
          <Navbar />
          <LoginForm />
          <Footer />
        </div>
    );
};

export default Login;

