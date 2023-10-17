import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import RomanceTVShows from "../AllTVShows/RomanceTVShows";
import RomanceMovies from "../Home_Comp/RomanceMovies";

const RomanceMain = () => {
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
    navigate(`{/Categories/Romance/${subheading}}`);
    setIsActive(isActive);
  };

  return (
    <>
      <div className="home">
        <h1
          className="categories-heading"
          style={{ color: "white", padding: "24px" }}
        >
          Romance
        </h1>
        <ul className="actionAdvMain-ul">
          <li>
            <Link to={`/Categories/Romance/all`}>
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
            <Link to={`/Categories/Romance/movies`}>
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
            <Link to={`/Categories/Romance/TVShows`}>
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
              <RomanceMovies />
              <div className="last-card-slider" style={{ height: "475px" }}>
                <RomanceTVShows />
              </div>
            </>
          )}
          {subheading === "movies" && (
            <>
              <div className="last-card-slider" style={{ height: "475px" }}>
                <RomanceMovies />
              </div>
            </>
          )}
          {subheading === "TVShows" && (
            <>
              <div className="last-card-slider" style={{ height: "475px" }}>
                <RomanceTVShows />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RomanceMain;
