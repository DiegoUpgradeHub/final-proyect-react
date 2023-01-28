import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { styles } from "../styles/styles";



const Home = () => {

    return (
        <Flex className="homePage"
            direction="column"
            justify="center"
            align="center"
        >
            <Flex className="homeDisplay"
                bgColor={styles.highlight}
                color="white"
                m="10px"
                p="40px"
                w="100%"
                maxW="620"
                h="150px"
                borderRadius="4px"
            >
                <Text>Bienvenidos al mundo de Rick & Morty</Text>
            </Flex>
            <Flex className="homeDisplay"
                direction="row"
                wrap="wrap"
                justify="center"
                align="center"
            >
                <Text
                    bgColor={styles.colorTertiary}
                    color="white"
                    m="10px"
                    p="40px"
                    w="300px"
                    h="150px"
                    borderRadius="4px"
                >
                Bienvenidos al mundo de Rick & Morty</Text>
                <Text
                    bgColor={styles.colorSeconday}
                    color="white"
                    m="10px"
                    p="40px"
                    w="300px"
                    h="150px"
                    borderRadius="4px"
                >
                Bienvenidos al mundo de Rick & Morty</Text>
            </Flex>
        </Flex>
    )

}

export default Home