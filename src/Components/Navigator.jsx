import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../Pages/home.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import HomeTabDropdown from "./HomeTabDropdown";
import { BsSearch } from "react-icons/bs";
import CategoriesDropDown from "./CategoriesDropDown";
import MyStuffTabDropdown from "./MyStuffTabDropDown";
import AvatarSignINDropdown from "./AvatarSignINDropdown";
import LoginUserDropdown from "./LoginUserDropdown";

const Navigator = () => {
  const [isHover, setIsHover] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  let profileUserName = "";
  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const [isProfileUserName, setIsProfileUserName] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);

      profileUserName = localStorage.getItem("loginUserName");
      console.log("users name after login", profileUserName);
      setIsProfileUserName(profileUserName);
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    console.log("signout clicked");
    localStorage.removeItem("bearer_token");
    localStorage.removeItem("loginUserName");
    console.log("bearer_token after log out", bearer_token);
    console.log("loginUserName after log out", loginUserName);
  };

  // const profileuserName =
  //   localStorage.getItem("profileUserName") ||
  //   localStorage.getItem("loginUserName");

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchValue = (e) => {
    console.log(e.target.value);
    const searchValue = e.target.value;
    setSearchText(searchValue);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchText)}`);
  };
  console.log("isloggedIn :", isloggedIn);
  return (
    <>
      <div className="navigator-container">
        <div className="navbar-navs">
          <div className="prime-img">
            <Link to={"/Home"}>
              <img src="/primeVideo.PNG" alt="prime video" />
            </Link>
          </div>
          <div className="main-links">
            <ol className="home-navs">
              <div className="home-navs-all">
                <li
                  onMouseEnter={() => handleSetActivePage("Home")}
                  onMouseLeave={() => handleSetActivePage(null)}
                  className={`home-list ${
                    activePage === "Home" && isHover ? "active-page" : ""
                  }`}
                >
                  <HomeTabDropdown isHover={isHover} />
                </li>
              </div>

              <li>
                Store <IoIosArrowDown />
              </li>
              <li>Live TV</li>
              <li
                onMouseEnter={() => handleSetActivePage("Categories")}
                onMouseLeave={() => handleSetActivePage(null)}
                onClick={() => setActivePage("Categories")}
                className={`home-list ${
                  activePage === "Categories" && isHover ? "active-page" : ""
                }`}
              >
                <Link to={"/Categories"} className="categories">
                  Categories <IoIosArrowDown />
                </Link>

                {/* <CategoriesDropDown /> */}
                {/* {activePage === "Categories" && isHover && (
                  <CategoriesDropDown activePage={activePage} />
                )} */}
                {activePage === "Categories" && <CategoriesDropDown />}
              </li>
              {isloggedIn && (
                <li
                  onMouseEnter={() => handleSetActivePage("My Stuff")}
                  onMouseLeave={() => handleSetActivePage(null)}
                  className={`home-list ${
                    activePage === "My Stuff" && isHover ? "active-page" : ""
                  }`}
                >
                  <MyStuffTabDropdown isHover={isHover} />
                </li>
              )}
            </ol>
          </div>

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
                        // onKeyDown={handleSearchValue}
                        value={searchText}
                      />
                    </span>
                    <button type="submit" style={{ display: "none" }}></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="user-name">
              {isProfileUserName || "Try for free"}
            </div>
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
                      src="/avatar.png"
                      alt="avatar"
                      height={30}
                      width={30}
                      // className="avatar-navitagor"
                      onMouseEnter={() => handleSetActivePage("Home")}
                      onMouseLeave={() => handleSetActivePage(null)}
                      className={`home-list ${
                        activePage === "abcd" && isHover ? "active-page" : ""
                      }`}
                    />
                    {/* <LoginUserDropdown isHover={isHover} /> */}
                    <div className="options avatar-options">
                      <div className="options-left ">
                        <span className="optoins-login-headings">
                          Your Account
                        </span>

                        <span className="categories-link-text">
                          <Link className="categories-link-text">Help</Link>
                        </span>

                        <span className="categories-link-text">
                          Accounts and Settings
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
                      <div className="options-right">
                        <span className="optoins-login-headings">Kids</span>
                        <span className="categories-link-text">
                          <Link
                            to={"/manageprofiles"}
                            style={{
                              // paddingLeft: "10px",
                              listStyleType: "none",
                              textDecoration: "none",
                              color: "#aaa",
                            }}
                          >
                            Manage Profiles
                          </Link>
                        </span>
                        <span className="categories-link-text">Learn More</span>
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
    </>
  );
};

export default Navigator;
