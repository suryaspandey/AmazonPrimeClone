import React, { useState } from "react";
import ActionAdventureMovies from "./ActionAdventureMovies";
import ActionAdventureTV from "./ActionAdventureTV";
import "./actionAdventureMain.css";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const ActionAndAdventureMain = () => {
    const [showCompAll, setShowCompAll] = useState(true);
    const [showCompMovie, setShowCompMovie] = useState(false);
    const [showCompTVShow, setShowCompTVShow] = useState(false);
    const [isActive, setIsActive] = useState(1);

    const { subheading } = useParams();
    console.log("subheading: ", subheading);
    const navigate = useNavigate();

    const handleClickAll = () => {
        setShowCompAll(true);
        setShowCompMovie(true);
        setShowCompTVShow(true);
        setIsActive(1);
        navigate(`/Categories/ActionAdventure/all`);
    };

    const handleClickMovie = () => {
        setShowCompAll(false);
        setShowCompMovie(true);
        setShowCompTVShow(false);
        setIsActive(2);
        navigate(`/Categories/ActionAdventure/movies`);
    };

    const handleClickTVShow = () => {
        setShowCompAll(false);
        setShowCompMovie(false);
        setShowCompTVShow(true);
        setIsActive(3);
        navigate(`/Categories/ActionAdventure/TVShows`);
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
                    <Link to={`/Categories/ActionAdventure/movies`}>
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
                                    : {
                                          background: "transparent",
                                          color: "#aaa",
                                      }
                            }
                        >
                            Movies
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={`/Categories/ActionAdventure/TVShows`}>
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
                                    : {
                                          background: "transparent",
                                          color: "#aaa",
                                      }
                            }
                        >
                            TV Shows
                        </button>
                    </Link>
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
