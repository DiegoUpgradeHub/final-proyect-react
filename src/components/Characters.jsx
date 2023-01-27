import React from "react";

import Gallery from "./Gallery";

const Characters = () => {

    return (
        <div className="charactersPage">
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