import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import MysteryAndThriller from "../Home_Comp/MysteryAndThriller";
import MysteryThrillerTVShows from "../AllTVShows/MysteryThrillerTVShows";
import Documentries from "../Home_Comp/Documentries";

const DocumentaryMain = () => {
  const [isActive, setIsActive] = useState(1);

  const location = useLocation();
  console.log("useLocation", location.pathname);

  const { subheading } = useParams();
  console.log("subheading: ", subheading);
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
    navigate(`{/Categories/Documentary/${subheading}}`);
    setIsActive(isActive);
  };

  return (
    <>
      <h1 style={{ color: "white", padding: "24px" }}>Documentary</h1>
      <ul className="actionAdvMain-ul">
        <li>
          <Link to={`/Categories/Documentary/all`}>
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
          <Link to={`/Categories/Documentary/movies`}>
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
          <Link to={`/Categories/Documentary/TVShows`}>
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
            <Documentries />
          </>
        )}
        {subheading === "movies" && (
          <>
            <Documentries />
          </>
        )}
        {subheading === "TVShows" && (
          <>
            <h1
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
              }}
            >
              No Shows available
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default DocumentaryMain;
