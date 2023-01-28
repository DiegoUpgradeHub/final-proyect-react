import { Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginForm({ authenticated, login, location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  const [show, setShow] = React.useState(false)
  const showPassword = () => setShow(!show)

  const { from } = window.location.state || { from: { pathname: "/" } };
  if (authenticated) return <Navigate to={from} state={{ prevRoute: window.location.pathname }} />;

  return (
    <Flex className="loginPage"
      color="teal"
      m="30px"
      p="25px"
      w="100%%"
      borderRadius="4px"
      direction="column"
      justify="center"
      align="center"
    >
      <Text fontSize="4xl" as="b">Inicia sesión</Text>
      <Input
        m="5px"
        size='lg'
        type="text"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="email"
      />
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={showPassword}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button m="5px" w="100%" onClick={handleClick}>Entrar</Button>
    </Flex>
  );
}

export default LoginForm;