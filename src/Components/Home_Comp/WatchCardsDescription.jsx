import React from "react";
import { Tooltip } from "antd";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { AiOutlineCheck } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const WatchCardsDescription = ({
  item,
  projectId,
  watchlistStatus,
  isloggedIn,
  addtowatchlist,
  isInWatchList,
}) => {
  const navigate = useNavigate();
  const handleTrailer = () => {
    // console.log(actualData[0].type);
    navigate("/comingSoon");
  };
  return (
    <>
      {/* <div className="continue-watching-text-description">
        <div className="included-with-prime-header blue-tick-text">
          <img className="blue-tick-img" src="/prime-blue-tick.png" alt="" />
          <h5
            style={{
              color: "white",
              margin: "8px 0 0",
            }}
          >
            Included with prime
          </h5>
        </div>
      </div> */}
      <div className="play-btn-text">
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
            <Tooltip title="Watchlist" placement="bottom" arrow={false}>
              {isloggedIn &&
              (watchlistStatus[item._id] ||
                !addtowatchlist ||
                !isInWatchList) ? (
                <span>
                  <AiOutlineCheck
                    className="home-plus-watchlist-btn "
                    onClick={() => handleWatchList(item._id)}
                  />
                </span>
              ) : (
                <PlusOutlined
                  className="home-plus-watchlist-btn"
                  onClick={() => handleWatchList(item._id)}
                />
              )}
            </Tooltip>
          </button>
          <button className="watchlist-btn continue-watching-btn">
            <Tooltip
              onClick={() => {
                handleTrailer();
              }}
              title="Trailer"
              placement="bottom"
              arrow={false}
            >
              <MoreOutlined className="home-plus-watchlist-btn" />
            </Tooltip>
          </button>
        </div>
      </div>
      <h4 className="continue-watching-title" style={{ padding: "0 10px" }}>
        {item.title}
      </h4>
      <div className="continue-watching-year-UA ">
        <h4 className="continue-watching-title " style={{ color: "grey" }}>
          {parseInt(item?.createdAt?.split("-")[0]) -
            Math.floor(Math.random() * 10) +
            1}
        </h4>
        <h4 className="continue-watching-title">2h 6min</h4>
        <div className="UA-num">
          <h3 style={{ fontSize: "14px" }}>U/A 16+</h3>
        </div>
      </div>
      <div
        className="continue-watching-description "
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <h4
          style={{
            textAlign: "left",
            fontSize: "14px",
            paddingLeft: "7px",

            margin: "3px",
          }}
        >
          {item.description}
        </h4>
      </div>
    </>
  );
};

export default WatchCardsDescription;
