import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../Pages/home.css";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import HomeTabDropdown from "./HomeTabDropdown";
import { BsSearch } from "react-icons/bs";
import CategoriesDropDown from "./CategoriesDropDown";
import MyStuffTabDropdown from "./MyStuffTabDropDown";
import AvatarSignINDropdown from "./AvatarSignINDropdown";

const Navigator = () => {
  const [isHover, setIsHover] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  let profileUserName = "";
  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const [isProfileUserName, setIsProfileUserName] = useState("");

  const [profileImg, setprofileImg] = useState(() => {
    const profileImage = localStorage.getItem("profileImage");
    return profileImage ? profileImage : "/avatar.png";
  });

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
      const userName = localStorage.getItem("loginUserName");
      // profileUserName = userName[0].toUpperCase() + userName.slice(1);
      setIsProfileUserName(userName);
    }
  }, [isAuthenticated]);

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

  const handleLogout = () => {
    localStorage.removeItem("bearer_token");
    localStorage.removeItem("loginUserName");
  };

  // const profileuserName =
  //   localStorage.getItem("profileUserName") ||
  //   localStorage.getItem("loginUserName");

  const navigate = useNavigate();

  const handleSetActivePage = (page) => {
    setActivePage(page);
    setIsHover(!isHover);
  };

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
              <div className="home-navs-all" style={{ display: "flex" }}>
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

              <li
                onMouseEnter={() => handleSetActivePage("Live TV")}
                onMouseLeave={() => handleSetActivePage(null)}
                className={`home-list ${
                  activePage === "Live TV" && isHover ? "active-page" : ""
                }`}
              >
                <Link to={"/Live TV"} className="categories">
                  Live TV
                </Link>
              </li>

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
                      src={profileImg}
                      alt="avatar"
                      height={30}
                      width={30}
                      style={{ borderRadius: "50%" }}
                      onMouseEnter={() => handleSetActivePage("Home")}
                      onMouseLeave={() => handleSetActivePage(null)}
                      className={`home-list nav-avatar ${
                        activePage === "abcd" && isHover ? "active-page" : ""
                      }`}
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
    </>
  );
};

export default Navigator;
