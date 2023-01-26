import React from "react";
import { Link } from "react-router-dom";

import Gallery from "./Gallery";

const Characters = () => {

    return (
        <div className="charactersPage">
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
                <div className="charactersGallery">
                    <Gallery />
                </div>
                <div className="footer">
                    <h2>Mis personajes favoritos</h2>
                    {/* <Favourites /> */}
                </div>
            </body>
        </div>
    );
};

export default Characters;