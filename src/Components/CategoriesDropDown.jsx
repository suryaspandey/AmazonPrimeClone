import "./categoriesDropDown.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoriesDropDown = ({ activePage }) => {
  const navigate = useNavigate();
  const isVisible = activePage === "Categories";

  const handleCategoriesLangClick = (language) => {
    navigate(`/WatchInYourLanguage/${language}`);
  };
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
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Hindi"}
              >
                Hindi
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/English"}
              >
                English
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Telugu"}
              >
                Telugu
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Tamil"}
              >
                Tamil
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Kannada"}
              >
                Kannada
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Punjabi"}
              >
                Punjabi
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Bengali"}
              >
                Bengali
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Gujarati"}
              >
                Gujarati
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/WatchInYourLanguage/Marathi"}
              >
                Marathi
              </Link>
            </li>
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
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/ActionAdventure/all"}
              >
                Action and Adventure
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/Comedy/all"}
              >
                Comedy
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/Documentary/all"}
              >
                Documentary
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/Drama/all"}
              >
                Drama
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/Fantasy/all"}
              >
                Fantasy
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/Horror/all"}
              >
                Horror
              </Link>
            </li>

            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/MysteryAndThriller/all"}
              >
                Mystery and Thrillers
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/Romance/all"}
              >
                Romance
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link
                className="categories-link-text"
                to={"/Categories/SciFi/all"}
              >
                SciFi
              </Link>
            </li>
            {/* <li className="featured-collection-li"></li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesDropDown;
