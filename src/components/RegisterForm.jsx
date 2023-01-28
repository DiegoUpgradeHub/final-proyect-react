import React from "react";
import { useFormik } from "formik";
import { Button, Flex, Input, Text } from "@chakra-ui/react";

//import { users } from "../utils/auth";

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
      //debugger
      console.log(values);
      //users = users.map(values);
    },
  });

  return (
    <Flex className="register"
      color="teal"
      m="30px"
      p="25px"
      w="100%%"
      borderRadius="4px"
      direction="column"
      justify="center"
      align="center"
    >
      <Text fontSize="4xl" as="b" >Registrarme</Text>
      <form onSubmit={handleSubmit} >
        <Flex
          color="teal"
          m="30px"
          p="25px"
          w="100%%"
          borderRadius="4px"
          direction="column"
          justify="center"
          align="center"
        >
          <Text htmlFor="email">Email</Text>
          <Input
            m="5px"
            size='lg'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
          />
          {touched.email && errors.email ? (
            <div className="error">{errors.email}</div>
          ) : null}
          <Text htmlFor="password">Password</Text>
          <Input
            m="5px"
            size='lg'
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
          <Text htmlFor="repassword">Re-enter Password</Text>
          <Input
            m="5px"
            size='lg'
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
          <Button m="5px" w="100%" type="submit">Register</Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default RegisterForm;