import "./categoriesDropDown.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginUserDropdown = ({ activePage }) => {
  const navigate = useNavigate();
  const isVisible = activePage === "Categories";

  const handleCategoriesLangClick = (language) => {
    navigate(`/WatchInYourLanguage/${language}`);
  };
  return (
    <>
      <div
        className={`categories-dropdown-container login-dropdown-container ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="featuredCollection-dropdown">
          <label
            style={{ color: "white", fontSize: "20px" }}
            className="featured-collection-label"
            htmlFor="Featured Collection"
          >
            Your Account
          </label>
          <ul className="featured-collection-ul login-dropdown-ul">
            <li className="featured-collection-li">
              <Link className="categories-link-text" to={"/Subscription"}>
                Prime Benefits
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link className="categories-link-text" to={"/"}>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
        <div className="genresDropdown loginDropDown">
          <label
            style={{ color: "white", fontSize: "20px" }}
            className="featured-collection-label genre-label"
            htmlFor="Genres"
          >
            Profiles
          </label>
          <ul className="featured-collection-ul login-dropdown-ul">
            <li className="featured-collection-li">
              <Link className="categories-link-text" to={"/Home/KidsAll"}>
                Kids
              </Link>
            </li>
            <li className="featured-collection-li">
              <Link className="categories-link-text" to={"/manageprofiles"}>
                Manage Profiles
              </Link>
            </li>
            {/* <li className="featured-collection-li">
              <Link className="categories-link-text" to={"/Home/KidsAll"}>
                Change Mood
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LoginUserDropdown;
