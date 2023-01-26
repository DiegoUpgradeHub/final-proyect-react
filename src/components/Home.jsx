import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="homePage">
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
                <div className="homeDisplay">
                    <h1>Bienvenidos al mundo de Rick & Morty</h1>
                </div>
            </body>
        </div>
    )

}

export default Home