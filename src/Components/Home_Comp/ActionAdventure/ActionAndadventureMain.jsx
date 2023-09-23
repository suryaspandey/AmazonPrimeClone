import React, { useState } from "react";
import ActionAdventureMovies from "./ActionAdventureMovies";
import ActionAdventureTV from "./ActionAdventureTV";
import "./actionAdventureMain.css";

const ActionAndAdventureMain = () => {
    const [showCompAll, setShowCompAll] = useState(true);
    const [showCompMovie, setShowCompMovie] = useState(false);
    const [showCompTVShow, setShowCompTVShow] = useState(false);
    const [isActive, setIsActive] = useState(1);

    const handleClickAll = () => {
        setShowCompAll(true);
        setShowCompMovie(true);
        setShowCompTVShow(true);
        setIsActive(1);
    };

    const handleClickMovie = () => {
        setShowCompAll(false);
        setShowCompMovie(true);
        setShowCompTVShow(false);
        setIsActive(2);
    };

    const handleClickTVShow = () => {
        setShowCompAll(false);
        setShowCompMovie(false);
        setShowCompTVShow(true);
        setIsActive(3);
    };
    return (
        <>
            <h1>Action and adventure</h1>
            <ul className="actionAdvMain-ul">
                <li>
                    <button
                        className="categories-btn"
                        onClick={handleClickAll}
                        style={
                            showCompAll && isActive === 1
                                ? {
                                      background: "white",
                                      padding: "20px",
                                      borderRadius: "20px",
                                      color: "black",
                                  }
                                : { background: "transparent", color: "#aaa" }
                        }
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        className="categories-btn"
                        onClick={handleClickMovie}
                        style={
                            showCompMovie && isActive === 2
                                ? {
                                      background: "white",
                                      padding: "20px",
                                      borderRadius: "20px",
                                      color: "black",
                                  }
                                : { background: "transparent", color: "#aaa" }
                        }
                    >
                        Movies
                    </button>
                </li>
                <li>
                    <button
                        className="categories-btn"
                        onClick={handleClickTVShow}
                        style={
                            showCompTVShow && isActive === 3
                                ? {
                                      background: "white",
                                      padding: "20px",
                                      borderRadius: "20px",
                                      color: "black",
                                  }
                                : { background: "transparent", color: "#aaa" }
                        }
                    >
                        TV Shows
                    </button>
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
