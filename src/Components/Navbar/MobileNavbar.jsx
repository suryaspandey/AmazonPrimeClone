import React, { useEffect, useState } from "react";
import "./mobileNavbar.css";
import AvatarSignINDropdown from "../AvatarSignINDropdown";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import MobileMenuDropDown from "./MobileMenuDropDown";
import { LiaHomeSolid } from "react-icons/lia";
import MobileSubNavbar from "./MobileSubNavbar";

const MobileNavbar = () => {
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handleProfileImgSTorageChange = (e) => {
      const profileImage = localStorage.getItem("profileImage");
      if (profileImage) {
        setprofileImg(profileImage);
      }
    };

    window.addEventListener("storage", handleProfileImgSTorageChange);

    return () => {
      window.removeEventListener("storage", handleProfileImgSTorageChange);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchValue = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchText)}`);
  };

  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const [isProfileUserName, setIsProfileUserName] = useState("");

  const [profileImg, setprofileImg] = useState(() => {
    const profileImage = localStorage.getItem("profileImage");
    return profileImage ? profileImage : "/avatar.png";
  });

  const handleLogout = () => {
    localStorage.removeItem("bearer_token");
    localStorage.removeItem("loginUserName");
  };

  return (
    <>
      <div className="mobile-navbar-container">
        <div
          className="mobile-navbar-header-container"
          style={{ color: "white" }}
        >
          <div className="mob-menu">
            <MobileMenuDropDown />
          </div>
          <div className="mob-prime">
            <Link to={"/"}>
              <img
                src="/primeVideo.PNG"
                alt="prime video"
                style={{ width: "102px" }}
              />
            </Link>
          </div>
          <div className="mob-avatar-header">
            <div className="search_name">
              <div className="search-btn">
                <button style={{ border: "none" }} onClick={toggleSearch}>
                  <BsSearch className="search-icon" />
                </button>

                <div
                  className={`options-search search-dropdown`}
                  style={
                    isSearchVisible ? { display: "block" } : { display: "none" }
                  }
                >
                  <div>
                    <form onSubmit={handleSearchSubmit}>
                      <span>
                        <input
                          className="input-search search-input"
                          type="search"
                          name="phrase"
                          spellCheck="false"
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          placeholder="Search"
                          onChange={handleSearchValue}
                          value={searchText}
                        />
                      </span>
                      <button
                        type="submit"
                        style={{ display: "none" }}
                      ></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="user-name">{isProfileUserName || ""}</div>
              <div className="user-avatar ">
                <li
                  style={{
                    listStyle: "none",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                >
                  {isAuthenticated ? (
                    <>
                      <img
                        src={profileImg}
                        alt="avatar"
                        height={30}
                        width={30}
                        style={{ borderRadius: "50%" }}
                      />

                      <div className="options avatar-options">
                        <div className="options-left">
                          <span
                            className="optoins-login-headings"
                            style={{ color: "white" }}
                          >
                            Your Account
                          </span>

                          <span className="categories-link-text">
                            <Link
                              to={"/createNewPassword"}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#aaa",
                              }}
                            >
                              Accounts and Settings
                            </Link>
                          </span>

                          <span className="categories-link-text">
                            <Link
                              to={"/Subscription"}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#aaa",
                              }}
                            >
                              Prime Benefits
                            </Link>
                          </span>
                          <span className="categories-link-text">
                            <Link
                              to={"/"}
                              onClick={handleLogout}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#aaa",
                              }}
                            >
                              Sign Out
                            </Link>
                          </span>
                        </div>
                        <div className="options-left">
                          <span
                            className="optoins-login-headings"
                            style={{ color: "white" }}
                          >
                            Profiles
                          </span>

                          <span className="categories-link-text">
                            <Link
                              to={"/Home/KidsAll"}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#aaa",
                              }}
                            >
                              Kids
                            </Link>
                          </span>

                          <span className="categories-link-text">
                            <Link
                              to={"/manageprofiles"}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#aaa",
                              }}
                            >
                              Manage Profiles
                            </Link>
                          </span>

                          <span className="categories-link-text">
                            <Link
                              to={"/Home/UserMoods"}
                              style={{
                                listStyleType: "none",
                                textDecoration: "none",
                                color: "#aaa",
                              }}
                            >
                              Manage Moods
                            </Link>
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <>
                        <img
                          src="/avatar.png"
                          alt="avatar"
                          height={30}
                          width={30}
                          className="avatar-navitagor"
                        />
                        <AvatarSignINDropdown isHover={isHover} />
                      </>
                    </>
                  )}
                </li>
              </div>
            </div>
          </div>
        </div>
        {isloggedIn && <MobileSubNavbar />}
      </div>
    </>
  );
};

export default MobileNavbar;
