import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { useState } from "react";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const WatchCards = ({
  actualData,
  projectId,
  handleRemoveFromWatchList,
  isInWatchListItem,
  className,
}) => {
  console.log("watchlistData", actualData);
  console.log("isInWatchListItem", isInWatchListItem);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);

  const [watchlistStatus, setWatchlistStatus] = useState(() => {
    const initialStatus = {};
    actualData.forEach((item) => {
      initialStatus[item._id] = false;
    });
    return initialStatus;
  });

  const watchlistUpdateAPI =
    "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const bearerToken = localStorage.getItem("bearer_token");

  const handleWatchList = (id) => {
    if (!isloggedIn) {
      window.location.href = "/login";
      return;
    }
    console.log("Removing item with id:", id);
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    };

    const body = {
      showId: id,
    };

    fetch(watchlistUpdateAPI, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((watchData) => {
        console.log("data data", watchData.data);
        console.log("data shows", watchData.data.shows);
        console.log("data complete watchdata", watchData);

        setWatchlistStatus(
          (prevStatus) => ({
            ...prevStatus,
            [id]: !prevStatus[id],
          }),
          () => {
            console.log("Updated watchlistStatus:", watchlistStatus);
          }
        );
        console.log("Updated watchlistStatus:", watchlistStatus);
        handleRemoveFromWatchList(id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // console.log("Updated watchlistStatus:", watchlistStatus);
  };

  return (
    <>
      {/* <div className="cards-container "> */}
      <div className={`cards-container ${className}`}>
        {actualData.map((item, index) => (
          <div
            className="continue-watching-container"
            onMouseEnter={() => setIsHovered(item)}
            onMouseLeave={() => setIsHovered(null)}
            key={item._id}
          >
            <ul className="continue-watching-ul">
              <li className="continue-wtching-li">
                <div className="slider-continue-watching-pic">
                  <div className="banner-imgs">
                    <Link
                      to={`/watchDetails/${item._id}`}
                      state={{ projectId: projectId }}
                    >
                      <img
                        className="banner-img"
                        src={item.thumbnail}
                        // alt={jawSummary.title}
                      />
                    </Link>
                  </div>
                  {isHovered === item && (
                    <>
                      <div className="video-btns-container">
                        <Link
                          to={`/watchDetails/${item._id}`}
                          state={{ projectId: projectId }} // Pass projectId as state
                        >
                          <video
                            className="watch-details-video"
                            src={item.video_url}
                            autoPlay={true}
                            loop
                            muted={isMuted}
                          />
                        </Link>
                        {isMuted ? (
                          <BiVolumeMute
                            className="volume-btn mute"
                            onClick={() => {
                              setIsMuted(false);
                            }}
                          />
                        ) : (
                          <GoUnmute
                            className="volume-btn unmute"
                            onClick={() => {
                              setIsMuted(true);
                              // <BiVolumeMute />;
                            }}
                          />
                        )}
                      </div>
                      <div className="continue-watching-text-description">
                        <div className="included-with-prime-header blue-tick-text">
                          <img
                            className="blue-tick-img"
                            src="/prime-blue-tick.png"
                            alt=""
                          />
                          <h5
                            style={{
                              color: "white",
                              margin: "8px",
                            }}
                          >
                            Included with prime
                          </h5>
                        </div>
                      </div>
                      <div className="play-btn-text video-hover-content">
                        <p href="#" className="play-btn-link">
                          <span className="home-play-btn-container-new ">
                            <Link
                              to={`/watchDetails/${item._id}`}
                              state={{
                                projectId: projectId,
                              }}
                            >
                              <img
                                className="home-play-btn home-play-btn-new"
                                src="/play-btn.PNG"
                                alt="play button"
                                width={265}
                              />
                            </Link>
                          </span>
                          <span
                            className="play-text"
                            style={{
                              color: "white",
                            }}
                          >
                            Resume
                          </span>
                        </p>
                        <div className="watchlist-details-container">
                          <button className="watchlist-btn continue-watching-btn">
                            {/* onClick takes function and not function call */}

                            {isloggedIn && isInWatchListItem ? (
                              <AiOutlineCheck
                                className="home-plus-watchlist-btn"
                                onClick={() => handleWatchList(item._id)}
                              />
                            ) : (
                              <PlusOutlined
                                className="home-plus-watchlist-btn"
                                onClick={() => handleWatchList(item._id)}
                              />
                            )}
                          </button>
                          <button className="watchlist-btn continue-watching-btn">
                            <MoreOutlined className="home-plus-watchlist-btn" />
                          </button>
                        </div>
                      </div>
                      <h4
                        className="continue-watching-title video-hover-content"
                        style={{ padding: "0 10px" }}
                      >
                        {/* {jawSummary.title} */}
                        {item.title}
                      </h4>
                      <div className="continue-watching-year-UA video-hover-content">
                        <h4
                          className="continue-watching-title "
                          style={{ color: "grey" }}
                        >
                          {parseInt(item.createdAt.split("-")[0]) -
                            Math.floor(Math.random() * 10) +
                            1}

                          {/* 2023-08-06T20:13:27.503Z */}
                        </h4>
                        <h4 className="continue-watching-title">2h 6min</h4>
                        <div className="UA-num">
                          <h3 style={{ fontSize: "14px" }}>U/A 16+</h3>
                        </div>
                      </div>
                      <div
                        className="continue-watching-description video-hover-content"
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
                          {item.description}
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchCards;
