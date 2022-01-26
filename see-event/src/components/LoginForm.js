import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import styles from "../styles/LoginForm.module.css";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Please Enter your email"),
      password: Yup.string().required("Please Enter your password").min(8, "minimal 8 karakter").max(10, "maximal 10 karakter"),
    }),

    onSubmit: (values) => {
      axios({
        method: "POST",
        url: "https://see-event-app.herokuapp.com/api/v1/login",
        data: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
  return (
    <div className={styles["form-container"]}>
      <h1 className={styles.title}>Welcome back!</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input name="email" type="email" placeholder="Email..." onChange={formik.handleChange} value={formik.values.email} />
        <p>{formik.errors.email}</p>
        <input name="password" type="password" placeholder="Password... " onChange={formik.handleChange} value={formik.values.password} />
        <p>{formik.errors.password}</p>
        <button type="submit">Sign in</button>
        <a href="#">Forgot Password?</a>
      </form>
    </div>
  );
};

export default LoginForm;
