import React from "react";
import { Link } from "react-router-dom";
import "./homeTabDropDown.css";
import { useState } from "react";

const HomeTabDropdown = ({ isHover }) => {
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  return (
    <>
      <ul
        className={`sub-menu ${isHover ? "active" : ""}`}
        onMouseEnter={() => {
          isDropdownHovered(true);
        }}
        onMouseLeave={() => {
          isDropdownHovered(false);
        }}
      >
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
