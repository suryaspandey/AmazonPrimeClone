import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../Pages/home.css";
import { useState } from "react";
import Home_Corousel from "./Home_Comp/Home_Corousel";
// import "./fonts/Amazon Ember Bold.ttf";
const Navigator = () => {
    const [isHover, setIsHover] = useState(false);
    const [activePage, setActivePage] = useState("Home");

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <>
            <div className="navigator-container">
                <div className="navbar-navs">
                    <div className="prime-img">
                        <img src="./primeVideo.PNG" alt="prime video" />
                    </div>
                    <div className="main-links">
                        <ol className="home-navs">
                            <li
                                onClick={() => setActivePage("Home")}
                                className={
                                    activePage === "Home" ? "active-page" : ""
                                }
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="home-list">
                                    Home
                                    {isHover ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )}
                                    {isHover && (
                                        // <ul className="sub-menu">
                                        <ul
                                            className={
                                                '`sub-menu ${isHover  ? "active" : ""}`'
                                            }
                                        >
                                            <li>All</li>
                                            <li>Movies</li>
                                            <li>TV Shows</li>
                                        </ul>
                                    )}
                                </div>
                            </li>

                            {/* <li onMouseLeave={setIsHover(false)}>
                            Home <IoIosArrowDown />
                        </li> */}

                            <li>
                                Store <IoIosArrowDown />
                            </li>
                            <li>Live TV</li>
                            <li>
                                Categories <IoIosArrowDown />
                            </li>
                            <li>
                                My Stuff <IoIosArrowDown />
                            </li>
                        </ol>
                    </div>

                    <div className="search_name">
                        <div className="search-btn">
                            <button>
                                <CiSearch />
                            </button>
                            {/* <input type="text" /> */}
                        </div>
                        {/* <div className="user-name">Soumitra</div> */}
                        <div className="user-avatar">
                            <li style={{ listStyle: "none" }}>
                                <img
                                    src="./avatar.png"
                                    alt="avatar"
                                    height={30}
                                    width={30}
                                />
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <Home_Corousel />
        </>
    );
};

export default Navigator;
