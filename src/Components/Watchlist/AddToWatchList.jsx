import React, { useState } from "react";
import { useEffect } from "react";
import WatchCards from "../Home_Comp/WatchCards";
import "./addToWatchList.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const AddToWatchList = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [selectedShowType, setSelectedShowType] = useState("All");
  const [showDownArrow, setShowDownArrow] = useState(true);
  // const [filteredData, setFilteredData] = useState([]);
  // const [sortedData, setSortedData] = useState([]);

  // const [loading, setLoading] = useState(true);

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
        // console.log("showType in AddTowatchlist ", result.data.shows);
      })

      .catch((error) => console.log("error", error));
  }, []);

  const handleRemoveFromWatchList = (removedItem) => {
    const updatedWatchList = watchlistData.filter(
      (item) => item._id !== removedItem
    );
    setWatchlistData(updatedWatchList);
    // console.log("handleRemoveFromWatchList", updatedWatchList);
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const handleShowType = (showTypes) => {
    let filteredData = [];
    if (showTypes.includes("All")) {
      filteredData = [...watchlistData];
      // console.log("all filtered data for ALL", filteredData);
    } else {
      filteredData = watchlistData.filter((item) =>
        showTypes.includes(item.type)
      );
    }
    // setFilteredData(filteredData);
    setSelectedShowType(showTypes);

    // setWatchlistData(filteredData);
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

  return (
    <div style={{ height: "100vh" }}>
      <div className="watchlist-header-container">
        <h1 className="addTowatchlist-heading">Watchlist</h1>
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
        <div className="carousel-main" style={{ display: "flex" }}>
          <>
            {console.log("all filtered data", filteredData)}

            <WatchCards
              // actualData={filteredData}
              actualData={
                selectedShowType.includes("All") ? watchlistData : filteredData
              }
              // actualData={filteredData.length > 0 ? filteredData : watchlistData}
              // actualData={
              //   sortedData.length > 0
              //     ? sortedData
              //     : filteredData.length > 0
              //     ? filteredData
              //     : watchlistData
              // }
              projectId={projectId}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              isInWatchListItem={isInWatchList}
            />
          </>
        </div>
      )}
    </div>
  );
};

export default AddToWatchList;
