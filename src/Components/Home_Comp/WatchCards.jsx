import { PlusOutlined, MoreOutlined } from "@ant-design/icons";

const WatchCards = ({ actualData }) => {
    const { jawSummary } = actualData;
    return (
        // <Wrapper>
        <div className="continue-watching-container">
            {/* <div className="wrapper"> */}
            <ul className="continue-watching-ul">
                <li className="continue-wtching-li">
                    <div className="slider-continue-watching-pic">
                        {/* <figure className=""> */}
                        <a href="">
                            <img
                                style={{ width: "204.5px" }}
                                src={jawSummary.backgroundImage.url}
                                // alt={jawSummary.title}
                            />
                        </a>
                        {/* </figure> */}

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
                                <h5 style={{ color: "white" }}>
                                    Included with prime
                                </h5>
                            </div>
                        </div>
                        <div className="play-btn-text">
                            <a href="#" className="play-btn-link">
                                <span className="home-play-btn-container">
                                    <img
                                        className="home-play-btn home-play-btn-new"
                                        src="play-btn.PNG"
                                        alt="play button"
                                        width={265}
                                    />
                                </span>
                                <span className="play-text">Resume</span>
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
                                    title="Details"
                                >
                                    <MoreOutlined className="home-plus-watchlist-btn" />
                                </button>
                            </div>
                        </div>
                        <h3 className="continue-watching-title">
                            {jawSummary.title}
                        </h3>
                        <div className="continue-watching-description">
                            <h3 style={{ textAlign: "left" }}>
                                {jawSummary.synopsis}
                            </h3>
                        </div>
                        {/* <p style={{ color: "white" }}>{jawSummary.synopsis}</p> */}
                    </div>
                </li>
            </ul>
        </div>
        // </Wrapper>
    );
};

export default WatchCards;
