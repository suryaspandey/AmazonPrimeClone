import React, { useState } from "react";
import "./listItem.css";
import { FaPlay } from "react-icons/fa";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
// import "../../Pages/home.css";

export const ListItem = ({ index }) => {
    // const { jawSummary } = actualData;
    // console.log(jawSummary);
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/43c2/951b/7f5d/4eb4-94f1-fefd891c2801/cca79408-987a-4781-a636-e9d5fb527763_video_720p_2500kbps_audio_aaclc_128kbps.mp4";
    return (
        <div
            className="listItem continue-watching-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        >
            <img
                className="banner-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1MgMBBMZkUK5JboFHvUmoF5tUbj9aHUcrA&usqp=CAU"
            />

            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="item-info">
                        <div className="continue-watching-text-description">
                            {/* <div className="continue-watching-slider">
                        <div className="progress-bar"> </div>
                    </div> */}

                            <div className="included-with-prime-header blue-tick-text">
                                <img
                                    className="blue-tick-img"
                                    src="./prime-blue-tick.png"
                                    alt=""
                                />
                                <h5 style={{ color: "white", margin: "8px" }}>
                                    Included with prime
                                </h5>
                            </div>
                        </div>
                        <div className="play-btn-text">
                            <a href="#" className="play-btn-link">
                                <span className="home-play-btn-container-new ">
                                    <img
                                        className="home-play-btn home-play-btn-new"
                                        src="play-btn.PNG"
                                        alt="play button"
                                        width={265}
                                    />
                                </span>
                                <span
                                    className="play-text"
                                    style={{ color: "white" }}
                                >
                                    Resume
                                </span>
                            </a>
                            <div className="watchlist-details-container">
                                <button
                                    className="watchlist-btn continue-watching-btn"
                                    title="Watchlist"
                                >
                                    <PlusOutlined className="home-plus-watchlist-btn" />
                                </button>
                                {/* <PlusOutlined className="home-plus-watchlist-btn" /> */}
                                {/* <MoreOutlined /> */}
                                <button
                                    className="watchlist-btn continue-watching-btn"
                                    title="More"
                                >
                                    <MoreOutlined className="home-plus-watchlist-btn" />
                                </button>
                            </div>
                        </div>
                        <div className="continue-watching-title">
                            <h4>Jalsa</h4>
                        </div>

                        <div className="continue-watching-year-UA">
                            <h4
                                className="continue-watching-title"
                                style={{ color: "grey" }}
                            >
                                2023
                            </h4>
                            <h4 className="continue-watching-title">2h 6min</h4>
                            <div className="UA-num continue-watching-title">
                                <h3
                                    style={{ fontSize: "14px", color: "white" }}
                                >
                                    U/A 16+
                                </h3>
                            </div>
                        </div>
                        <div
                            className="continue-watching-description"
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            <h4
                                style={{
                                    textAlign: "left",
                                    fontSize: "14px",
                                    paddingLeft: "2px",
                                    // background: "yellow",
                                    margin: "3px",
                                }}
                            >
                                {/* {jawSummary.synopsis} */}
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis, velit? Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Quis,
                                velit?
                            </h4>
                        </div>

                        {/* <div className="itemInfoTop">
                    <span>1997</span>
                    <span>1hr 30 min</span>
                    <span>U/A</span>
                    <span>16+</span>
                </div> */}
                        {/* <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, amet.
                </div> */}
                        {/* <div className="included-with-prime-header blue-tick-text">
                    <img
                        className="blue-tick-img"
                        src="./prime-blue-tick.png"
                        alt=""
                    />
                    <h5 style={{ color: "white", margin: "8px" }}>
                        Included with prime
                    </h5>
                </div> */}

                        {/* <div className="continue-watching-text-description">
                    <div className="continue-watching-slider">
                        <div className="progress-bar"> </div>
                    </div>

                    <div className="included-with-prime-header blue-tick-text">
                        <img
                            className="blue-tick-img"
                            src="./prime-blue-tick.png"
                            alt=""
                        />
                        <h5 style={{ color: "white", margin: "8px" }}>
                            Included with prime
                        </h5>
                    </div>
                    <div className="play-btn-text">
                        <a href="#" className="play-btn-link">
                            <span className="home-play-btn-container-new ">
                                <img
                                    className="home-play-btn home-play-btn-new"
                                    src="play-btn.PNG"
                                    alt="play button"
                                    width={265}
                                />
                            </span>
                            <span
                                className="play-text"
                                style={{ color: "white" }}
                            >
                                Resume
                            </span>
                        </a>
                        <div className="watchlist-details-container">
                            <button
                                className="watchlist-btn continue-watching-btn"
                                title="Watchlist"
                            >
                                <PlusOutlined className="home-plus-watchlist-btn" />
                            </button>
                            <button
                                className="watchlist-btn continue-watching-btn"
                                title="More"
                            >
                                <MoreOutlined className="home-plus-watchlist-btn" />
                            </button>
                        </div>
                    </div>
                    <h4 className="continue-watching-title">
                        {/* {jawSummary.title} */}
                        {/* Jalsa
                    </h4>
                    <div className="continue-watching-year-UA">
                        <h4
                            className="continue-watching-title"
                            style={{ color: "grey" }}
                        >
                            2023
                        </h4>
                        <h4 className="continue-watching-title">2h 6min</h4>
                        <div className="UA-num">
                            <h3 style={{ fontSize: "14px" }}>U/A 16+</h3>
                        </div>
                    </div>
                    <div
                        className="continue-watching-description"
                        style={{ textOverflow: "ellipsis" }}
                    >
                        <h4
                            style={{
                                textAlign: "left",
                                fontSize: "14px",
                                paddingLeft: "2px",
                                // background: "yellow",
                                margin: "3px",
                            }}
                        > */}
                        {/* {jawSummary.synopsis} */}
                        {/* Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Cum, maxime?
                        </h4>
                    </div> 
                </div> */}
                    </div>
                </>
            )}
        </div>
    );
};
