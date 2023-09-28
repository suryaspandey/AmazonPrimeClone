import React from "react";
import { Link } from "react-router-dom";
import "./homeTabDropDown.css";

const HomeTabDropdown = ({ isHover }) => {
  return (
    <>
      <ul className={`sub-menu ${isHover ? "active" : ""}`}>
        <li>
          <Link to={"/Home"}>All</Link>
        </li>

        <li>
          <Link
            to={"/Home/AllMovies"}
            onClick={() => {
              console.log("All Movies clicked");
            }}
          >
            Movies
          </Link>
        </li>

        <li>
          <Link
            to={"/Home/AllTVShows"}
            onClick={() => {
              console.log("All TVS clicked");
            }}
          >
            TV Shows
          </Link>
        </li>
      </ul>
    </>
  );
};

export default HomeTabDropdown;
