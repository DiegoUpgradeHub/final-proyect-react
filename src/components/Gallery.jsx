import React, { useState } from "react";
import { useQuery } from "react-query";
import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";

import Card from "./Card";

const Gallery = () => {
    const [page, setPage] = useState(1);

    const fetchCharacters = async ({ queryKey }) => {
        const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
        );
        return await response.json();
    };

    const { data, status } = useQuery(["characters", page], fetchCharacters, {
        keepPreviousData: true,
    });

    if (status === "loading") {
        return (
        <div className="loading-container">
            <p>Cargando...</p>
            <img src="https://w7.pngwing.com/pngs/375/440/png-transparent-rick-sanchez-morty-smith-middle-finger-miscellaneous-grass-cartoon-thumbnail.png" alt="cargando"/>
        </div>);
    }

    if (status === "error") {
        return <div className="error">Erro</div>;
    }

    return (
        <Box 
            justify="center"
            align="center"
            wrap="wrap"
        >
            <Flex className="charactersDisplay"
                justify="center"
                align="center"
                wrap="wrap"
            >
                {data.results.map((character) => (
                    <Card character={character} key={character.id} />
                ))}
            </Flex>
            <ButtonGroup className="charactersButton"
                isAttached="true"
                colorScheme='yellow'
            >
                <Button isDisabled={page === 1} onClick={() => setPage(1)}>
                    Inicio
                </Button>
                <Button isDisabled={page === 1} onClick={() => setPage((old) => old - 1)}>
                    Anterior
                </Button>
                <Button
                    isDisabled={!data.info.next}
                    onClick={() => setPage((old) => old + 1)}
                >
                    Próximo
                </Button>
                <Button
                    isDisabled={!data.info.next}
                    onClick={() => setPage(42)}
                >
                    final
                </Button>
            </ButtonGroup>
        </Box>
    );
}

export default Gallery
