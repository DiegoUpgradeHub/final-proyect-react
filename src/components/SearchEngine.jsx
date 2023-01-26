import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

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
        <div className="searchPage">
            <header className="navigation">
                <Link to="/" className="link">
                    <button>Home</button>
                </Link>
                <Link to="/SearchEngine" className="link">
                    <button>Buscador</button>
                </Link>
                <Link to="/Characters" className="link">
                    <button>Todos los personajes</button>
                </Link>
            </header>
            <body>
                <div className="searchDisplay">
                    <h1>Buscador de personajes</h1>
                    
                    <input 
                    type="text"
                    onChange={(event) => {
                        setCharacterName(event.target.value);
                    }}
                    />
                    <div className="button">
                    {characterName && <button onClick={searchCharacter}>Buscar personaje</button>}

                    </div>
                </div>
                <div className="searchResult">
                    {!characterChosen ? (
                    <h1> Por favor elige un personaje </h1>
                    ) : (
                    <div className="card">
                        <img src={character.image} alt={character.name} />
                        <div className="text-container">
                            <h3>{character.id} - {character.name}</h3>
                            <p>{character.species}</p>
                            <p>{character.status}</p>
                        </div>
                    </div>
                    )}
                </div>
            </body>
        </div>
    )
}

export default SearchEngine;