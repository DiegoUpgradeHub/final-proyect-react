import React, { useState } from "react";
import { styles } from "../styles/styles";
import {
    Flex,
    Image,
    Switch,
    Text,
    useToast,
} from "@chakra-ui/react";



const Card = ({ character }) => {

    let alive = character.status === "Alive" ? true : false;

    let [aliveState, setAlive] = useState(alive);

    const toast = useToast();

    const changeState = () => {
        if (aliveState) {
            toast({
                title: `Has matado a ${character.name}`,
                status: "error",
                duration: 4000,
                isClosable: true,
                position: "top",
            });
            } else {
            toast({
                title: `Has revivido a ${character.name}`,
                status: "success",
                duration: 4000,
                isClosable: true,
                position: "top",
            });
        }
        setAlive(!aliveState);
    };

    return (
        <Flex className="card"
            bgColor={aliveState ? styles.highlight : "orange.100" }
            color="white"
            m="10px"
            w="250px"
            borderRadius="4px"
            direction="row"
            justify="left"
            align="center"
        >
            <Flex
                m="10px"
                direction="column"
                align="center"
            >
                <Image
                    src={aliveState ? character.image : "https://cdn-icons-png.flaticon.com/512/135/135936.png"} 
                    alt={character.name}
                    borderRadius='50px'
                    boxSize='70px'
                    objectFit='cover'
                    m="15px"
                />
                <Switch m="10px" colorScheme="yellow" size="lg" onChange={changeState} defaultChecked={alive} />
            </Flex>
            <Flex className="text-container"
                m="10px"
                direction="column"
                align="left"
            >
                <h3>{character.id}</h3>
                <Text
                    fontSize="3xl"
                >
                {character.name}
                </Text>
                <p>{character.species}</p>
            </Flex>
        </Flex>
    );
};

export default Card;