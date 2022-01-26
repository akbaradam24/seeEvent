import React, { useState }from "react";
import axios from "axios";
import qs from "qs";
import { useFormik } from "formik";
import * as Yup from "yup";


import styles from "../styles/LoginForm.module.css";
import { useDispatch} from "react-redux";
import { useNavigate} from "react-router";
import { saveTokenAction} from "../redux/actions";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      const data ={
        email: values.email,
        password: values.password,
      };
      
      axios({
        method: "POST",
        url: "https://see-event-app.herokuapp.com/api/v1/login",
        data: JSON.stringify(values),
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
    <div className={styles["form-container"]}>
      <h1 className={styles.title}>Welcome back!</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input name="email" type="email" placeholder="Email..." onChange={formik.handleChange} value={formik.values.email} />
        <p>{formik.errors.email}</p>
        <label className={styles["show-password"]}>
            <input
              name="password"
              type={showPassword ? "password" : "text"}
              placeholder="Password..."
              onChange={formik.handleChange}
              value={formik.values.password}/>
              <button onClick={() => {
                setShowPassword(!showPassword);}}>
              {showPassword ? <i class="far fa-eye-slash"></i>  : <i class="far fa-eye"></i> }
            </button>
        </label>
        <p>{formik.errors.password}</p>
        <button type="submit">Sign in</button>
        <a href="#">Forgot Password?</a>
      </form>
    </div>
  );
};

export default LoginForm;
