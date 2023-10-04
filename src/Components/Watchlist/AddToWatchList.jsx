import React, { useState } from "react";
import { useEffect } from "react";
import WatchCards from "../Home_Comp/WatchCards";
import "./addToWatchList.css";

const AddToWatchList = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [selectedShowType, setSelectedShowType] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
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
        // console.log("watchlistData: result.data.shows", result.data.shows);
        console.log("showType in AddTowatchlist ", result.data.shows);
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
  // console.log("watchlistData from AddtoWatchList:", watchlistData);
  // console.log("isInWatchList in AddToWatchList:", isInWatchList);

  const handleShowType = (showTypes) => {
    const filteredData = watchlistData.filter((item) =>
      showTypes.includes(item.type)
    );
    setFilteredData(filteredData);
  };

  const tvShowsArray = ["web series", "tv show"];
  // console.log(tvShowsArray);

  return (
    <div style={{ height: "100vh" }}>
      <div className="watchlist-header-container">
        <h1 style={{ color: "white" }}>Watchlist</h1>
        <div className="buttons-recent-addition-container">
          <div className="watchlist-btns-container">
            <button
              className="addToWatchlist-btn"
              onClick={() => {
                handleShowType("All");
              }}
            >
              All
            </button>
            <button
              className="addToWatchlist-btn"
              onClick={() => {
                handleShowType(["movie"]);
              }}
            >
              Movies
            </button>

            <button
              className="addToWatchlist-btn"
              onClick={() => {
                // handleShowType("web series");
                handleShowType(["web series", "tv show"]);
              }}
            >
              TV Shows
            </button>
          </div>
          <div className="recent-watchlist-additions">
            <button>Most Recent additions</button>
          </div>
        </div>
      </div>
      {isloggedIn && (
        <div className="carousel-main" style={{ display: "flex" }}>
          <WatchCards
            actualData={filteredData.length > 0 ? filteredData : watchlistData}
            projectId={projectId}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            isInWatchListItem={isInWatchList}
          />
        </div>
      )}
    </div>
  );
};

export default AddToWatchList;
