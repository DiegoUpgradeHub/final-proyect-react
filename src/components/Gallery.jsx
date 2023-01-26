import React, { useState } from "react";
import { useQuery } from "react-query";

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
        return <div className="loading-container">Carregando...</div>;
    }

    if (status === "error") {
        return <div className="error">Erro</div>;
    }

    return (
        <div>
            <div className="charactersDisplay">
                {data.results.map((character) => (
                    <Card character={character} key={character.id} />
                ))}
                
            </div>
            <div className="charactersButton">
                <button disabled={page === 1} onClick={() => setPage(1)}>
                    Inicio
                </button>
                <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>
                    Anterior
                </button>
                <button
                    disabled={!data.info.next}
                    onClick={() => setPage((old) => old + 1)}
                >
                    Próximo
                </button>
                <button
                    disabled={!data.info.next}
                    onClick={() => setPage(42)}
                >
                    final
                </button>
            </div>
        </div>
    );
}

export default Gallery