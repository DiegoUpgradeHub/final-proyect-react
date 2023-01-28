import React, { useState } from "react";
import Axios from "axios";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { styles } from "../styles/styles";

const SearchEngine = () => {

    const [characterName, setCharacterName] = useState("");
    const [characterChosen, setCharacterChosen] = useState(false);
    const [character, setCharacter] = useState({
        name: "",
        number: "",
        status: "",
        species: "",
        image: "",
    });

    const searchCharacter = () => {
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`).then(
        (res) => {
            console.log(res.data);
            setCharacter({
            name: res.data.results[0].name,
            id: res.data.results[0].id,
            status: res.data.results[0].status,
            species: res.data.results[0].species,
            image: res.data.results[0].image,
            });
            setCharacterChosen(true);
        }
        );
    };

    return (
        <Flex className="searchPage">
            <Flex
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
                <Box className="searchDisplay">
                    <Text fontSize="4xl" as="b">Buscador de personajes</Text>
                    
                    <Input 
                    placeholder="Buscar personaje"
                    variant="flushed"
                    size='lg'
                    type="text"
                    onChange={(event) => {
                        setCharacterName(event.target.value);
                    }}
                    />
                    <Flex className="button" justify="center">
                    {characterName && <Button colorScheme='teal' mt="30px" onClick={searchCharacter}>Buscar personaje</Button>}
                    </Flex>
                </Box>
                <Flex className="searchResult"
                    mt="40px"
                >
                    {!characterChosen ? (
                    <Text fontSize="2xl"> Por favor elige un personaje </Text>
                    ) : (
                    <Flex className="card"
                        direction="column"
                        justify="center"
                        align="center"
                    >
                        <Image 
                            src={character.image}
                            alt={character.name}
                            borderRadius='50px'
                            boxSize='300px'
                            objectFit='cover'
                            m="15px"
                        />
                        <Flex className="text-container"
                            direction="column"
                            justify="center"
                            align="center"
                        >
                            <Text fontSize="3xl" as="b">{character.id} - {character.name}</Text>
                            <Text fontSize="1xl" as="i">{character.species} - {character.status}</Text>
                        </Flex>
                    </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SearchEngine;