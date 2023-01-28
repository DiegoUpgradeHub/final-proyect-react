import { Flex } from "@chakra-ui/react";
import React from "react";
import { styles } from "../styles/styles";

function Profile({ user }) {
  const { email, password, name } = user || {};
  return (
    <Flex className="homeDisplay"
      bgColor={styles.highlight }
      color="white"
      m="30px"
      p="25px"
      w="80%"
      borderRadius="4px"
      direction="column"
      justify="center"
      align="center"
    >
      <h1>Profile</h1>
      <p>
        Email: {email}
      </p>
      <p>
        Password: {password}
      </p>
      <p>
        Name: {name}
      </p>
    </Flex>
  );
}

export default Profile;