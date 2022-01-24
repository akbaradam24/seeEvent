import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "../styles/RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { saveTokenAction } from "../redux/actions";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().max(6, "Must be 6characters or less").required("nama harus diisi"),
      lastName: Yup.string().min(10, "Must be 10 characters or less").required("nama lengkap harus diisi"),
      email: Yup.string().email("Invalid email address").required("email harus diisi"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      confirmPassword: Yup.string().min(8, "Minimum 8 characters").max(15, "Maximal 15 Characters"),
    }),

    onSubmit: (values) => {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      console.log(data);

      axios({
        method: "POST",
        url: "https://see-event-app.herokuapp.com/api/v1/register",
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          dispatch(saveTokenAction(res.data.result.token));
          navigate("/my-account");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div className={styles.Register}>
      <div className={styles["form-container"]}>
        <h1 className={styles.title}>Join us!</h1>
        <form className={styles.form} onSubmit={formik.handleSubmit} className={styles.form}>
          <input name="firstName" type="firstName" placeholder="First Name..." onChange={formik.handleChange} value={formik.values.firstName} />
          <p>{formik.errors.firstName}</p>

          <input name="lastName" type="lastName" placeholder="Last Name..." onChange={formik.handleChange} value={formik.values.lastName} />
          <p>{formik.errors.lastName}</p>

          <input name="email" type="email" placeholder="Email..." onChange={formik.handleChange} value={formik.values.email} />
          <p>{formik.errors.email}</p>

          <label className={styles["show-password"]}>
            <input
              name="password"
              type={showPassword ? "password" : "text"}
              placeholder="Password..."
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "show" : "hide"}
            </button>
          </label>
          <p>{formik.errors.password}</p>

          <label className={styles["show-password"]}>
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "password" : "text"}
              placeholder="Confirm Password..."
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <button
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? "show" : "hide"}
            </button>
          </label>
          <p>{formik.errors.confirmPassword}</p>

          <button type="submit">Sign Up</button>
          <a href="#">Having issue when signup?</a>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
