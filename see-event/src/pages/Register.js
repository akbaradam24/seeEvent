import React from 'react';

import styles from "../styles/Register.module.css";

import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

import RegisterForm from "../components/RegisterForm";





const Register = () => {

    return (
        <div className={styles.RegisterContainer}>
            <Navbar />
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default Register;