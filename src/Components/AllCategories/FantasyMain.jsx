import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import FantasyMovies from "../Home_Comp/FantasyMovies";
import FantasyTVShow from "../AllTVShows/FantasyTVShow";

const FantasyMain = () => {
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
    navigate(`{/Categories/Fantasy/${subheading}}`);
    setIsActive(isActive);
  };

  return (
    <>
      <h1
        className="categories-heading"
        style={{ color: "white", padding: "24px" }}
      >
        Fantasy
      </h1>
      <ul className="actionAdvMain-ul">
        <li>
          <Link to={`/Categories/Fantasy/all`}>
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
          <Link to={`/Categories/Fantasy/movies`}>
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
          <Link to={`/Categories/Fantasy/TVShows`}>
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
            <FantasyMovies />
            <div className="last-card-slider" style={{ height: "475px" }}>
              <FantasyTVShow />
            </div>
          </>
        )}
        {subheading === "movies" && (
          <>
            <div className="last-card-slider" style={{ height: "475px" }}>
              <FantasyMovies />
            </div>
          </>
        )}
        {subheading === "TVShows" && (
          <>
            <div className="last-card-slider" style={{ height: "475px" }}>
              <FantasyTVShow />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FantasyMain;
