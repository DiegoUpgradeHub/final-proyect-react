import React from "react";

const Card = ({ character }) => {
    return (
        <div className="card">
            <img src={character.image} alt={character.name} />
            <div className="text-container">
                <h3>{character.id}</h3>
                <h3>{character.name}</h3>
                <p>{character.species}</p>
                <p>{character.status}</p>
            </div>
        </div>
    );
};

export default Card;