import { Dropdown } from "antd";
import "./categoriesDropDown.css";
import React from "react";

const CategoriesDropDown = ({ activePage }) => {
  const isVisible = activePage === "Categories";

  return (
    <>
      <div
        className={`categories-dropdown-container ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="featuredCollection-dropdown">
          <label
            className="featured-collection-label"
            htmlFor="Featured Collection"
          >
            Featured Collection
          </label>
          <ul className="featured-collection-ul">
            <li className="featured-collection-li">Hindi</li>
            <li className="featured-collection-li">English</li>
            <li className="featured-collection-li">Telugu</li>
            <li className="featured-collection-li">Tamil</li>
            <li className="featured-collection-li">Kannada</li>
            <li className="featured-collection-li">Punjabi</li>
            <li className="featured-collection-li">Bengali</li>
            <li className="featured-collection-li">Gujarati</li>
            <li className="featured-collection-li">Marathi</li>
          </ul>
        </div>
        <div className="genresDropdown">
          <label
            className="featured-collection-label genre-label"
            htmlFor="Genres"
          >
            Genres
          </label>
          <ul className="featured-collection-ul">
            <li className="featured-collection-li">Action and Adventure</li>
            <li className="featured-collection-li">Comedy</li>
            <li className="featured-collection-li">Documentary</li>
            <li className="featured-collection-li">Drama</li>
            <li className="featured-collection-li">Fantasy</li>
            <li className="featured-collection-li">Horror</li>
            <li className="featured-collection-li">Mystery and Thrillers</li>
            <li className="featured-collection-li">Romance</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesDropDown;
