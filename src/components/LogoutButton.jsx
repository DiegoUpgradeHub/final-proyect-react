import React from "react";
import { Button } from "@chakra-ui/react";

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    window.location = '/login';
  };
  return (
  <Button onClick={handleClick} className="logoutButton"
    m="10px"
    p="25px"
    w="175px">
    Logout
  </Button>
  )
}

export default LogoutButton;