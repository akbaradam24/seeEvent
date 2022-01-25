import React from 'react';

import styles from '../styles/RegisterForm.module.css';

import {useFormik} from 'formik';

import *as Yup from 'yup';

const Register = () => {
    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        },  

        validationSchema: Yup.object({
            firstName:Yup.string()
                .max(6,"Must be 6characters or less")
                .required("nama harus diisi"),
            lastName:Yup.string()
                .min(10,"Must be 10 characters or less")
                .required("nama lengkap harus diisi"),
            email:Yup.string()
                .email("Invalid email address")
                .required("email harus diisi"),
            password:Yup.string()
                .required('Please Enter your password')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
          
            confirmPassword:Yup.string()
                .min(8,"Minimum 8 characters")
                .required("Password must match"),

        }),

        onSubmit:values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    })
    return (
        <div className={styles.Register}>
            <div className={styles['form-container']}>
                <h1 className={styles.title}>Join us!</h1>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <input 
                        name="firstName" 
                        type="firstName" 
                        placeholder='First Name...'
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    <p>{formik.errors.firstName}</p>

                    <input 
                        name="lastName" 
                        type="lastName" 
                        placeholder='Last Name...'
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    <p>{formik.errors.lastName}</p>

                    <input 
                        name="email" 
                        type="email" 
                        placeholder='Email...'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <p>{formik.errors.email}</p>

                    <input 
                        name="password" 
                        type="password" 
                        placeholder='Password...'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <p>{formik.errors.password}</p>

                    <input 
                        name="confirmPassword" 
                        type="confirmPassword" 
                        placeholder='Confirm Password...'
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    <p>{formik.errors.confirmPassword}</p>

                    <button type="submit">Sign Up</button>
                    <a href='#'>Having issue when signup?</a>
                </form>
                
            </div>
            
        </div>
    );
};

export default Register;