import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { useState } from "react";

const WatchCards = ({ actualData }) => {
    // const [isHovered, setIsHovered] = useState(false);
    // const { jawSummary } = actualData;

    const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDM0NTc0MjhiYWJjMTExMDE5MmNmYiIsImlhdCI6MTY5NDcxMzIwNCwiZXhwIjoxNzI2MjQ5MjA0fQ.DKJz5ZvO667Ht9irDWLfynH2rhqPxGMxSrncaSPeU5w";
    const projectId = "zxke0qiu2960";
    useEffect(() => {
        const url = "https://academics.newtonschool.co/api/v1/ott/show";
        const webSeriesurl = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}`;

        const headers = {
            projectId: projectId,
            Authorization: `Bearer ${bearerToken}`,
        };
        fetch(url, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <div
            className="continue-watching-container"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            <ul className="continue-watching-ul">
                <li className="continue-wtching-li">
                    <div className="slider-continue-watching-pic">
                        <div className="banner-imgs">
                            <a href="">
                                <img
                                    className="banner-img"
                                    style={{
                                        width: "267.4px",
                                    }}
                                    src={data.keywords.thumbnail}
                                    // alt={jawSummary.title}
                                />
                                {console.log(data.keywords.thumbnail)}
                            </a>
                        </div>

                        <div className="continue-watching-text-description">
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
                            {title}
                        </h4>
                        <div className="continue-watching-year-UA">
                            <h4
                                className="continue-watching-title"
                                style={{ color: "grey" }}
                            >
                                {createdAt}
                                {/* 2023-08-06T20:13:27.503Z extract year from this */}
                            </h4>
                            <h4 className="continue-watching-title">2h 6min</h4>
                            <div className="UA-num">
                                <h3 style={{ fontSize: "14px" }}>U/A 16+</h3>
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
                                {data.description}
                            </h4>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WatchCards;
