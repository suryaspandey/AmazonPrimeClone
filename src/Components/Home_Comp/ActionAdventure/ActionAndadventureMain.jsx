import React, { useEffect, useState } from "react";
import ActionAdventureMovies from "./ActionAdventureMovies";
import ActionAdventureTV from "./ActionAdventureTV";
import "./actionAdventureMain.css";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const ActionAndAdventureMain = () => {
  const [isActive, setIsActive] = useState(1);

  const { subheading } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (subheading === "all" || !subheading) {
      setIsActive(1);
    } else if (subheading === "movies") {
      setIsActive(2);
    } else if (subheading === "TVShows") {
      setIsActive(3);
    }
  });

  const handleClick = ({ subheading, isActive }) => {
    navigate(`{/Categories/ActionAdventure/${subheading}}`);
    setIsActive(isActive);
  };

  const handleClickAll = () => {
    setShowCompAll(true);
    setShowCompMovie(true);
    setShowCompTVShow(true);
    setIsActive(1);
    if (
      subheading === "all" ||
      location.pathname === `{/Categories/ActionAdventure/all}`
    )
      navigate(`/Categories/ActionAdventure/all`);
  };

  const handleClickMovie = () => {
    setShowCompAll(false);
    setShowCompMovie(true);
    setShowCompTVShow(false);
    setIsActive(2);
    if (
      subheading === "movies" ||
      location.pathname === `{/Categories/ActionAdventure/movies}`
    )
      navigate(`/Categories/ActionAdventure/movies`);
  };

  const handleClickTVShow = () => {
    setShowCompAll(false);
    setShowCompMovie(false);
    setShowCompTVShow(true);
    setIsActive(3);
    if (subheading === "TVShows")
      navigate(`/Categories/ActionAdventure/TVShows`);
  };
  return (
    <>
      <div className="home">
        <h1
          className="categories-heading"
          style={{ color: "white", padding: "24px" }}
        >
          Action and Adventure
        </h1>
        <ul className="actionAdvMain-ul">
          <li>
            <Link to={`/Categories/ActionAdventure/all`}>
              <button
                className="categories-btn"
                onClick={() => handleClick("all", 1)}
                style={
                  (subheading === "all" || !subheading) && isActive === 1
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
                All
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/Categories/ActionAdventure/movies`}>
              <button
                className="categories-btn"
                onClick={() => handleClick("movies", 2)}
                style={
                  isActive === 2 && subheading === "movies"
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
                onClick={() => handleClick("TVShows", 3)}
                style={
                  subheading === "TVShows" && isActive === 3
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
          {(subheading === "all" || !subheading) && (
            <>
              <ActionAdventureMovies />
              <div className="last-card-slider" style={{ height: "475px" }}>
                <ActionAdventureTV />
              </div>
            </>
          )}
          {subheading === "movies" && (
            <>
              <div className="last-card-slider" style={{ height: "475px" }}>
                <ActionAdventureMovies />
              </div>
            </>
          )}
          {subheading === "TVShows" && (
            <>
              <div className="last-card-slider" style={{ height: "475px" }}>
                <ActionAdventureTV />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ActionAndAdventureMain;
