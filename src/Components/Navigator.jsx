import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../Pages/home.css";
import { useEffect, useState } from "react";
import Home_Corousel from "./Home_Comp/Home_Corousel";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import HomeTabDropdown from "./HomeTabDropdown";
import { BsSearch } from "react-icons/bs";
import Search from "./Search/search";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import CategoriesDropDown from "./CategoriesDropDown";

const Navigator = () => {
  const [isHover, setIsHover] = useState(false);
  const [activePage, setActivePage] = useState(null);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();

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

  // let searchKey;
  // useEffect(() => {
  //   setSearchParams({ phrase: searchText });
  // }, [searchText]);

  const handleSearchValue = (e) => {
    console.log(e.target.value);
    const searchValue = e.target.value;
    setSearchText(searchValue);

    // setSearchParams({ phrase: searchValue });
    // navigate(`/search?phrase=${encodeURIComponent(searchValue)}`);
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
              <div className="home-navs-all">
                <li
                  onMouseEnter={() => handleSetActivePage("Home")}
                  onMouseLeave={() => handleSetActivePage(null)}
                  // onClick={() => setActivePage("Home")}
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
                Categories <IoIosArrowDown />
                {/* <CategoriesDropDown /> */}
                {/* {activePage === "Categories" && isHover && (
                  <CategoriesDropDown activePage={activePage} />
                )} */}
                {activePage === "Categories" && <CategoriesDropDown />}
              </li>
              <li>
                My Stuff <IoIosArrowDown />
              </li>
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
            <div className="user-name">Soumitra</div>
            <div className="user-avatar">
              <li
                style={{
                  listStyle: "none",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              >
                <img src="/avatar.png" alt="avatar" height={30} width={30} />
                <div className="options">
                  <div className="options-left">
                    <span>Your Account</span>
                    <span>Help</span>
                    {/* <span>Watch Anywhere</span> */}
                    <span>Accounts and Settings</span>
                    <span>Prime Benifits</span>
                    <Link to={"/login"}>
                      <span>Sign In</span>
                    </Link>
                  </div>
                  <div className="options-right">
                    <span>Kids</span>
                    {/* <span>Add New</span> */}
                    <span>
                      <Link to={"/manageprofiles"}>Manage Profiles</Link>
                    </span>
                    <span>Learn More</span>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* <Home_Corousel /> */}
    </>
  );
};

export default Navigator;
