import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import { Link } from "react-router-dom";

const WatchCards1 = ({ actualData, projectId }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      {actualData.map((item, index) => (
        <div
          key={index}
          className="continue-watching-container"
          onMouseEnter={() => setIsHovered(item)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <ul className="continue-watching-ul">
            <li className="continue-wtching-li">
              <div className="slider-continue-watching-pic">
                <div className="banner-imgs">
                  <Link
                    to={`/watchDetails/${item._id}`}
                    state={{ projectId: projectId }} // Pass projectId as state
                  >
                    <img
                      className="banner-img"
                      style={{
                        width: "267.4px",
                        height: "250px",
                      }}
                      src={item.thumbnail}
                    />
                  </Link>
                </div>
                {isHovered === item && (
                  <>
                    <div className="video-btns-container">
                      <Link
                        to={`/watchDetails/${item._id}`}
                        state={{ projectId: projectId }}
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
                          }}
                        />
                      )}
                    </div>
                    <div className="continue-watching-text-description">
                      <div className="continue-watching-slider">
                        <div className="progress-bar"> </div>
                      </div>

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
                        <span className="play-text" style={{ color: "white" }}>
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
                    <h4 className="continue-watching-title">{item.title}</h4>
                    <div className="continue-watching-year-UA">
                      <h4
                        className="continue-watching-title"
                        style={{ color: "grey" }}
                      >
                        2011
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
    </>
  );
};

export default WatchCards1;
