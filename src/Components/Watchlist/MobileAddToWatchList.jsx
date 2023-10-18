import React, { useState } from "react";
import { useEffect } from "react";
import "./mobileAddToWatchList.css";
import { Dropdown, Space } from "antd";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import WatchListModal from "./WatchListModal";

const MobileAddToWatchList = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [watchlistData, setWatchlistData] = useState([]);
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [selectedShowType, setSelectedShowType] = useState("All");
  const [showDownArrow, setShowDownArrow] = useState(true);

  const [isMOdal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isMOdal);
  };

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(watchListAPI, { method: "GET", headers: headers, redirect: "follow" })
      .then((response) => response.json())
      .then((result) => {
        setWatchlistData(result.data.shows);
        setIsInWatchList(true);
      })

      .catch((error) => console.log("error", error));
  }, []);

  const isAuthenticated = !!localStorage.getItem("bearer_token");
  const [isloggedIn, setIsLoggedIn] = useState(isAuthenticated);

  const bearerToken = localStorage.getItem("bearer_token");
  const projectId = "zxke0qiu2960";
  const watchListAPI =
    "https://academics.newtonschool.co/api/v1/ott/watchlist/like";

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(watchListAPI, { method: "GET", headers: headers, redirect: "follow" })
      .then((response) => response.json())
      .then((result) => {
        setWatchlistData(result.data.shows);
        setIsInWatchList(true);
      })

      .catch((error) => console.log("error", error));
  }, []);

  const handleRemoveFromWatchList = (removedItem) => {
    const updatedWatchList = watchlistData.filter(
      (item) => item._id !== removedItem
    );
    setWatchlistData(updatedWatchList);
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const handleShowType = (showTypes) => {
    let filteredData = [];
    if (showTypes.includes("All")) {
      filteredData = [...watchlistData];
    } else {
      filteredData = watchlistData.filter((item) =>
        showTypes.includes(item.type)
      );
    }

    setSelectedShowType(showTypes);
  };

  const handleDownArrow = () => {
    setShowDownArrow(!setShowDownArrow);
  };

  const sortedData = [...watchlistData].sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    return titleA.localeCompare(titleB);
  });

  const filteredData = watchlistData.filter((item) =>
    selectedShowType.includes(item.type)
  );

  const items = [
    {
      className: "watchlist-items",
      label: "Title: A - Z",
      key: "1",
      onClick: () => {
        setWatchlistData(sortedData);
      },
    },

    {
      className: "watchlist-items",
      label: "Title: Z - A",
      key: "2",
      onClick: () => setWatchlistData(sortedData.reverse()),
    },
  ];

  if (watchlistData.length === 0) {
    return (
      <>
        <h1 className="addTowatchlist-heading">Watchlist</h1>

        <div className="no-watchlistData">
          <h2 style={{ color: "white" }}>Your watchlist is empty!</h2>
        </div>
      </>
    );
  }

  return (
    <div style={{ height: "100vh" }}>
      <div className="watchlist-header-container">
        <div className="buttons-recent-addition-container">
          <div className="watchlist-btns-container">
            <button
              className={`addToWatchlist-btn ${
                selectedShowType.includes("All") ? "active" : ""
              }`}
              onClick={() => {
                handleShowType("All");
                setSelectedShowType("All");
              }}
            >
              All
            </button>
            <button
              className={`addToWatchlist-btn ${
                selectedShowType.includes("movie") ? "active" : ""
              }`}
              onClick={() => {
                handleShowType(["movie", "documentary"]);
                setSelectedShowType(["movie", "documentary"]);
              }}
            >
              Movies
            </button>

            <button
              className={`addToWatchlist-btn ${
                selectedShowType.includes("tv show") ? "active" : ""
              }`}
              onClick={() => {
                handleShowType(["web series", "tv show"]);
                setSelectedShowType(["web series", "tv show"]);
              }}
            >
              TV Shows
            </button>
          </div>
          <div className="recent-watchlist-additions">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space
                  style={{
                    color: "white",
                    background: "#ffffff33",
                    width: "100%",
                  }}
                  className="addToWatchlist-btn"
                  onClick={handleDownArrow}
                >
                  {showDownArrow ? (
                    <>
                      Sort
                      <MdKeyboardArrowDown />
                    </>
                  ) : (
                    <>
                      Sort
                      <MdKeyboardArrowUp />
                    </>
                  )}
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
      {isloggedIn && (
        <div>
          <>
            <>
              <div className="mob-watchdetails-main">
                <ul>
                  {selectedShowType.includes("All")
                    ? watchlistData.map((item) => {
                        return (
                          <div
                            className="mob-all-watchcards"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <div className="mob-showlist-img-container">
                              <Link
                                to={`/watchDetailsMob/${item._id}`}
                                state={{ projectId: projectId }}
                              >
                                <img
                                  src={item.thumbnail}
                                  style={{
                                    height: "100px",
                                    width: "178px",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                  }}
                                />
                              </Link>
                            </div>

                            <div className="mob-watchCardsDescriptions">
                              <h4
                                className="continue-watching-title"
                                style={{ padding: "0 10px", fontSize: "13px" }}
                              >
                                {item.title}
                              </h4>
                              <div
                                className="continue-watching-year-UA"
                                style={{
                                  fontSize: "13px",
                                  padding: "10px",
                                  gap: "15px",
                                }}
                              >
                                <h4
                                  className="continue-watching-title "
                                  style={{ color: "grey" }}
                                >
                                  {parseInt(item?.createdAt?.split("-")[0]) -
                                    Math.floor(Math.random() * 10) +
                                    1}
                                </h4>
                                <h4 className="continue-watching-title">
                                  2h 6min
                                </h4>
                                <div className="UA-num">
                                  <h3 style={{ fontSize: "14px" }}>U/A 16+</h3>
                                </div>
                                <div className="addtoWatchlist-three-dots">
                                  {
                                    <WatchListModal
                                      selectedItem={item}
                                      handleRemoveFromWatchList={
                                        handleRemoveFromWatchList
                                      }
                                      watchlistData={watchlistData}
                                      setWatchlistData={setWatchlistData}
                                    />
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : filteredData.map((item) => {
                        return (
                          <div
                            className="mob-all-watchcards"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <div className="mob-showlist-img-container">
                              <Link
                                to={`/watchDetailsMob/${item._id}`}
                                state={{ projectId: projectId }}
                              >
                                <img
                                  src={item.thumbnail}
                                  style={{
                                    height: "100px",
                                    width: "178px",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                  }}
                                />
                              </Link>
                            </div>

                            <div className="mob-watchCardsDescriptions">
                              <h4
                                className="continue-watching-title"
                                style={{ padding: "0 10px", fontSize: "13px" }}
                              >
                                {item.title}
                              </h4>
                              <div
                                className="continue-watching-year-UA"
                                style={{
                                  fontSize: "13px",
                                  padding: "10px",
                                  gap: "15px",
                                }}
                              >
                                <h4
                                  className="continue-watching-title "
                                  style={{ color: "grey" }}
                                >
                                  {parseInt(item?.createdAt?.split("-")[0]) -
                                    Math.floor(Math.random() * 10) +
                                    1}
                                </h4>
                                <h4 className="continue-watching-title">
                                  2h 6min
                                </h4>
                                <div className="UA-num">
                                  <h3 style={{ fontSize: "14px" }}>U/A 16+</h3>
                                </div>
                                <div className="addtoWatchlist-three-dots">
                                  {
                                    <WatchListModal
                                      selectedItem={item}
                                      handleRemoveFromWatchList={
                                        handleRemoveFromWatchList
                                      }
                                      watchlistData={watchlistData}
                                      setWatchlistData={setWatchlistData}
                                    />
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </ul>
              </div>
            </>
          </>
        </div>
      )}
    </div>
  );
};

export default MobileAddToWatchList;
