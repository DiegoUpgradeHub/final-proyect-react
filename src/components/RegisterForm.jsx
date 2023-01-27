import React from "react";
import { useFormik } from "formik";

function RegisterForm() {
  const validationProcess = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length < 4) {
      errors.email = "Must be 5 characters or more";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Must not be 12345678 !!!";
    }

    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Second password doesn't match";
    }

    return errors;
  };


  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
    },
    validate: validationProcess,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="register">
      <h1>Registrarme</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          name="email"
        />
        {touched.email && errors.email ? (
          <div className="error">{errors.email}</div>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="password"
          name="password"
        />
        {touched.password && errors.password ? (
          <div className="error">{errors.password}</div>
        ) : null}
        <label htmlFor="repassword">Re-enter Password</label>
        <input
          value={values.repassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          id="repassword"
          name="repassword"
        />
        {touched.repassword && errors.repassword ? (
          <div className="error">{errors.repassword}</div>
        ) : null}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;