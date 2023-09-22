import React from "react";
import { Link } from "react-router-dom";
import "./watchInLanguage.css";

const WatchInLanguage = () => {
    return (
        <>
            <div className="cards-heaading">
                <h2
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span
                        className="prime-text-heading"
                        style={{ marginRight: "8px" }}
                    >
                        Prime
                    </span>

                    <span className="card-indv-heading">
                        Watch in Your Language
                    </span>
                </h2>
            </div>
            <div className="carousel-main" style={{ display: "flex" }}>
                <div
                    className="continue-watching-container"
                    // onMouseEnter={() => setIsHovered(item)}
                    // onMouseLeave={() => setIsHovered(null)}
                >
                    <ul
                        className="continue-watching-ul"
                        style={{ display: "flex" }}
                    >
                        <li className="continue-wtching-li">
                            <div
                            // className="slider-continue-watching-pic"
                            >
                                <div
                                    style={{ height: "250px" }}
                                    // className="banner-imgs"
                                >
                                    <Link to={`/WatchInYourLanguage/English`}>
                                        <img
                                            className="banner-img"
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                            }}
                                            src="./WatchInEng.PNG"
                                            // alt={jawSummary.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className="continue-wtching-li">
                            <div
                            // className="slider-continue-watching-pic"
                            >
                                <div
                                    style={{ height: "250px" }}
                                    // className="banner-imgs"
                                >
                                    <Link to={`/WatchInYourLanguage/Hindi`}>
                                        <img
                                            className="banner-img"
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                            }}
                                            src="./WatchInHindi.PNG"
                                            // alt={jawSummary.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className="continue-wtching-li">
                            <div
                            // className="slider-continue-watching-pic"
                            >
                                <div
                                    style={{ height: "250px" }}
                                    // className="banner-imgs"
                                >
                                    <Link to={`/WatchInYourLanguage/Telugu`}>
                                        <img
                                            className="banner-img"
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                            }}
                                            src="./WatchInTelugu.PNG"
                                            // alt={jawSummary.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className="continue-wtching-li">
                            <div
                            // className="slider-continue-watching-pic"
                            >
                                <div
                                    style={{ height: "250px" }}
                                    // className="banner-imgs"
                                >
                                    <Link to={`/WatchInYourLanguage/Kannada`}>
                                        <img
                                            className="banner-img"
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                            }}
                                            src="./WatchInKannada.PNG"
                                            // alt={jawSummary.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className="continue-wtching-li">
                            <div
                            // className="slider-continue-watching-pic"
                            >
                                <div
                                    style={{ height: "250px" }}
                                    // className="banner-imgs"
                                >
                                    <Link to={`/WatchInYourLanguage/Marathi`}>
                                        <img
                                            className="banner-img"
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                            }}
                                            src="./WatchInMarathi.PNG"
                                            // alt={jawSummary.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className="continue-wtching-li">
                            <div
                            // className="slider-continue-watching-pic"
                            >
                                <div
                                    style={{ height: "250px" }}
                                    // className="banner-imgs"
                                >
                                    <Link to={`/WatchInYourLanguage/Punjabi`}>
                                        <img
                                            className="banner-img"
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                            }}
                                            src="./WatchInPunjabi.PNG"
                                            // alt={jawSummary.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="continue-wtching-li">
                            <div
                            // className="slider-continue-watching-pic"
                            >
                                <div
                                    style={{ height: "250px" }}
                                    // className="banner-imgs"
                                >
                                    <Link to={`/WatchInYourLanguage/Tamil`}>
                                        <img
                                            className="banner-img"
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                            }}
                                            src="./WatchInTamil.PNG"
                                            // alt={jawSummary.title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default WatchInLanguage;
