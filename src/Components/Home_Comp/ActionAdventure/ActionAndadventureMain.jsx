import React, { useState } from "react";
import ActionAdventureMovies from "./ActionAdventureMovies";
import ActionAdventureTV from "./ActionAdventureTV";

const ActionAndAdventureMain = () => {
    const [showCompAll, setShowCompAll] = useState(true);
    const [showCompMovie, setShowCompMovie] = useState(false);
    const [showCompTVShow, setShowCompTVShow] = useState(false);

    const handleClickAll = () => {
        setShowCompAll(true);
        setShowCompMovie(true);
        setShowCompTVShow(true);
    };

    const handleClickMovie = () => {
        setShowCompAll(false);
        setShowCompMovie(true);
        setShowCompTVShow(false);
    };

    const handleClickTVShow = () => {
        setShowCompAll(false);
        setShowCompMovie(false);
        setShowCompTVShow(true);
    };
    return (
        <>
            <h1>Action and adventure</h1>
            <ul className="actionAdvMain-ul">
                <li>
                    <button onClick={handleClickAll}>All</button>
                </li>
                <li>
                    <button onClick={handleClickMovie}>Movies</button>
                </li>
                <li>
                    <button onClick={handleClickTVShow}>TV Shows</button>
                </li>
            </ul>
            <div className="shows-contaainer">
                {showCompAll && (
                    <>
                        <ActionAdventureMovies />
                        <ActionAdventureTV />
                    </>
                )}
                {showCompMovie && (
                    <>
                        <ActionAdventureMovies />
                        {/* <ActionAdventureTV /> */}
                    </>
                )}
                {showCompTVShow && (
                    <>
                        {/* <ActionAdventureMovies /> */}
                        <ActionAdventureTV />
                    </>
                )}
            </div>
        </>
    );
};

export default ActionAndAdventureMain;
